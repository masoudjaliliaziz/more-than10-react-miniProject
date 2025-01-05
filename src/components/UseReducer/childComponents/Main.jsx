import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import Loaderr from "./Loaderr";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Progress from "./Progress";
import Quiz from "./Quiz";
import Timer from "./Timer";
import NextBtn from "./NextBtn";
import FinishedScreen from "./FinishedScreen";

function Main() {
  const { status } = useQuiz();
  return (
    <main>
      {status === "loadiong" && <Loaderr />}

      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <Progress />
          <Quiz />
          <Timer />
          <NextBtn />
        </>
      )}
      {status === "finished" && <FinishedScreen />}
    </main>
  );
}

export default Main;
