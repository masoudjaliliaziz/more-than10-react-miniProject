import { list } from "postcss";
import { useState } from "react";
import Question from "./components/UseReducer/Question";
import { QuizProvider } from "./components/UseReducer/contexts/QuizContext";

function App() {
  return (
    <QuizProvider>
      <Question />
    </QuizProvider>
  );
}

export default App;
