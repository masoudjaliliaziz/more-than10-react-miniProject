import React from "react";

function ShowList({ listItems, setListItems }) {
  function handleDoneItems(id) {
    const updatedList = listItems.map((listItem) =>
      id === listItem.id ? { ...listItem, isDone: !listItem.isDone } : listItem
    );
    setListItems(updatedList);
  }
  function handleDelete(id) {
    setListItems((cur) => cur.filter((listItem) => id !== listItem.id));
  }
  return (
    <div className="bg-slate-100 w-9/12  rounded-3xl mb-7 p-3 flex flex-col justify-center gap-2">
      {listItems.map((listItem) => {
        return (
          <div
            key={listItem.id}
            className="p-3 flex justify-between items-center "
          >
            <div className="flex gap-4 justify-start items-center">
              <input
                type="checkbox"
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleDoneItems(listItem.id)}
              />
              <h3
                className={
                  listItem.isDone
                    ? "text-2xl font-bold line-through"
                    : "text-2xl font-bold"
                }
              >
                {listItem.task}
              </h3>
            </div>
            <button
              onClick={() => handleDelete(listItem.id)}
              className="bg-red-600 w-8 h-8 rounded-md text-xl font-bold text-white"
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ShowList;
