import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, questionNum, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={questionNum} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {questionNum}
      </p>
      <p>
        <strong>
          {points}/{maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
