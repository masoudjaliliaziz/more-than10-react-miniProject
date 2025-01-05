import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function NextBtn() {
  const { dispatch, answer, index, questionNum } = useQuiz();
  if (answer === null) return null;
  if (index < questionNum - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  }
  if (index === questionNum - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
  }
}

export default NextBtn;
