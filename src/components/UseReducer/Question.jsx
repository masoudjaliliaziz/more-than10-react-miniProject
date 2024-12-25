import React, { useEffect, useReducer } from "react";
import Header from "./childComponents/Header";
import Main from "./childComponents/Main";
import { data } from "autoprefixer";
import loader from "./childComponents/Loader";
import Error from "./childComponents/Error";
import StartScreen from "./childComponents/StartScreen";
import Loader from "./childComponents/Loader";
import Quiz from "./childComponents/Quiz";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
  }
}

function Question() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions, index } = state;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  const questionNum = questions.length;
  console.log(status);
  console.log(questions);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loadiong" && <Loader />}

        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen questionNum={questionNum} dispatch={dispatch} />
        )}
        {status === "active" && <Quiz question={questions[index]} />}
      </Main>
    </div>
  );
}

export default Question;
