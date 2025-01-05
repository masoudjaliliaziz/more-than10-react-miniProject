import { useEffect } from "react";
import Header from "./childComponents/Header";
import Main from "./childComponents/Main";
import { useQuiz } from "./contexts/QuizContext";

function Question() {
  //use reducer function--------------
  const { dispatch } = useQuiz();

  //for loading data------------------
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  //JSX-----------------------------
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default Question;
