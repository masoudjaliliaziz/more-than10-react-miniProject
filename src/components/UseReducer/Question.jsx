import { useEffect } from "react";
import Header from "./childComponents/Header";
import Main from "./childComponents/Main";
import { useQuiz } from "./contexts/QuizContext";

function Question() {
  //use reducer function--------------
  const { dispatch } = useQuiz();

  //for loading data------------------

  //JSX-----------------------------
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default Question;
