import React, { useState } from "react";
import Form from "./childComponents/Form";
import ShowList from "./childComponents/ShowList";

function Todo() {
  const [listItems, setListItems] = useState([]);
  console.log(listItems);
  return (
    <div className="w-7/12 shadow-2xl shadow-slate-400 rounded-lg mx-auto my-10 flex flex-col justify-center items-center gap-3">
      <h1 className="w-9/12 p-3 text-3xl font-bold">TO-DO List</h1>
      <Form setListItems={setListItems} />
      {listItems.length > 0 && (
        <ShowList listItems={listItems} setListItems={setListItems} />
      )}
    </div>
  );
}

export default Todo;
