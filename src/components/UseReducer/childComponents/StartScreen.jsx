import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { questionNum, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{questionNum} questions to test your React mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;
