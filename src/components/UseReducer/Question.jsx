import React, { useEffect, useReducer } from "react";
import Header from "./childComponents/Header";
import Main from "./childComponents/Main";
import { data } from "autoprefixer";

import Error from "./childComponents/Error";
import StartScreen from "./childComponents/StartScreen";

import Quiz from "./childComponents/Quiz";
import NextBtn from "./childComponents/NextBtn";
import Progress from "./childComponents/Progress";
import FinishedScreen from "./childComponents/FinishedScreen";
import Loaderr from "./childComponents/Loaderr";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
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
    default:
      return state;
  }
}

function Question() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions, index, answer, points, highscore } = state;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  const questionNum = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loadiong" && <Loaderr />}

        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen questionNum={questionNum} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              questionNum={questionNum}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Quiz
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextBtn
              dispatch={dispatch}
              answer={answer}
              questionNum={questionNum}
              index={index}
            />
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default Question;
