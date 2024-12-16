import React from "react";

function Form() {
  return (
    <form action="" className=" w-full flex justify-center items-center">
      <div className="w-9/12 h-14 bg-slate-200  rounded-3xl flex justify-between ">
        <input
          className=" w-10/12 p-3 bg-slate-200 rounded-3xl outline-none"
          type="text"
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
