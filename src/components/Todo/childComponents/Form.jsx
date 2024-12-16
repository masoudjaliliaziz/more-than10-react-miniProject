import React, { useState } from "react";

function Form({ setListItems }) {
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setListItems((cur) => [
      ...cur,
      { id: crypto.randomUUID(), task, isDone: false },
    ]);
    setTask("");
  }
  return (
    <form
      action=""
      className=" w-full flex justify-center items-center my-7"
      onSubmit={handleSubmit}
    >
      <div className="w-9/12 h-14 bg-slate-200  rounded-3xl flex justify-between ">
        <input
          value={task}
          className=" w-10/12 p-3 bg-slate-200 rounded-3xl outline-none text-xl font-bold pl-5"
          type="text"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit "
          className="p-3 text-center bg-orange-500 rounded-3xl w-2/12 font-bold text-white hover:bg-orange-700"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default Form;
