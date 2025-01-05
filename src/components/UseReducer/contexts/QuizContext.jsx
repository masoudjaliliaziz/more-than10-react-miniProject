import React, { createContext, useContext, useEffect, useReducer } from "react";
const QuizContext = createContext();

function QuizProvider({ children }) {
  //every question time required--------
  const SEC_PER_QUESTION = 30;

  //initial state of useReducer stateManagement hook
  const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null,
  };

  //for fetching data -------------------
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  //use reducer hook ------------------
  const [state, dispatch] = useReducer(reducer, initialState);

  //reducer function for handling the states value ---------
  function reducer(state, action) {
    switch (action.type) {
      case "dataRecived":
        return { ...state, questions: action.payload, status: "ready" };
      case "dataFailed":
        return { ...state, status: "error" };
      case "start":
        return {
          ...state,
          status: "active",
          secondsRemaining: state.questions.length * SEC_PER_QUESTION,
        };
      case "newAnswer":
        const curQuestion = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === curQuestion.correctOption
              ? state.points + curQuestion.points
              : state.points,
        };
      case "nextQuestion":
        return { ...state, index: state.index + 1, answer: null };
      case "finish":
        return {
          ...state,
          status: "finished",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
      case "reset":
        return {
          ...initialState,
          questions: state.questions,
          highscore: state.highscore,
          status: "ready",
        };
      case "tick":
        return {
          ...state,
          secondsRemaining: state.secondsRemaining - 1,
          status: state.secondsRemaining === 0 ? "finished" : state.status,
        };
      default:
        return state;
    }
  }

  //detructure the states from useReducer state-------------
  const {
    status,
    questions,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
  } = state;

  //two drive state -----------------------------
  const questionNum = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  //  JSX for our context provider--------------------
  return (
    <QuizContext.Provider
      value={{
        status,
        questions,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        dispatch,
        questionNum,
        maxPossiblePoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

//our custom hook ------------------------------------
function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz باید در محدوده QuizProvider استفاده شود.");
  }
  return context;
}

export { QuizProvider, useQuiz };
