import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { index, questions, dispatch, answer } = useQuiz();
  const question = questions[index];
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          onClick={() => {
            dispatch({ type: "newAnswer", payload: index });
          }}
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
