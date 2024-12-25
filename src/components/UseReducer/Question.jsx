import React, { useEffect, useReducer } from "react";
import Header from "./childComponents/Header";
import Main from "./childComponents/Main";
import { data } from "autoprefixer";

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
  console.log(status);
  4;
  console.log(questions);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>question 1/15</p>
      </Main>
    </div>
  );
}

export default Question;
