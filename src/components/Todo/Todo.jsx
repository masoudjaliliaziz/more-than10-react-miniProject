import React from "react";
import Form from "./childComponents/Form";

function Todo() {
  return (
    <div className="w-7/12 shadow-2xl shadow-slate-400 rounded-lg mx-auto my-10 flex flex-col justify-center items-center">
      <h1 className="w-9/12 p-3 text-3xl font-bold">TO-DO List</h1>
      <Form />
    </div>
  );
}

export default Todo;
