import React from "react";
import Header from "./childComponents/Header";
import Main from "./childComponents/Main";
function Question() {
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
