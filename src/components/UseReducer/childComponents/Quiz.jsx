import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Quiz() {
  const { index, questions } = useQuiz();
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Quiz;
