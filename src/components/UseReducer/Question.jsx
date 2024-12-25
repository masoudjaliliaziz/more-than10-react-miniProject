import React, { useEffect, useReducer } from "react";
import Header from "./childComponents/Header";
import Main from "./childComponents/Main";
import { data } from "autoprefixer";
import loader from "./childComponents/Loader";
import Error from "./childComponents/Error";
import StartScreen from "./childComponents/StartScreen";
import Loader from "./childComponents/Loader";

const initialState = {
  questions: [],
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
  }
}

function Question() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions } = state;
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
        {status === "ready" && <StartScreen questionNum={questionNum} />}
      </Main>
    </div>
  );
}

export default Question;
