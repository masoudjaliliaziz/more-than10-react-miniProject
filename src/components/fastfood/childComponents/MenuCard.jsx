import React from "react";

function MenuCard({ menuItem }) {
  return (
    <div>
      {menuItem.map((item) => {
        return (
          <div
            key={item.id}
            className=" bg-green-600 w-1/5 shadow-2xl shadow-black h-80 flex flex-col justify-between items-center rounded-lg p-4"
          >
            <img className="w-full h-1/2" src={item.img} alt="" />
            <h1 className="text-3xl font-bold text-white">{item.name}</h1>
            <p className="text-xs text-white">{item.description}</p>
            <h3 className="font-bold text-white">{item.price}$</h3>
            <button className="bg-white p-2 w-1/4 rounded-lg font-bold">
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default MenuCard;
