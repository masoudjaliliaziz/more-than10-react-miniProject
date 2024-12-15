import React, { useState } from "react";

function Cart({ orderedItem, onClick, totalPrice }) {
  return (
    <div className="w-8/12 rounded-lg shadow-2xl shadow-black mt-10 bg-green-600 flex flex-col p-10 gap-3 text-white">
      {orderedItem.map((order) => {
        return (
          <div
            className="bg-green-900 p-3 w-8/12 rounded-md"
            key={crypto.randomUUID()}
          >
            {`${order.name} and the quantity of this is`}
            <h3>{`price:${order.price}`}</h3>
            <div className="flex bg-white w-20 justify-around items-center p-2 text-black rounded-md ">
              <h1>{order.quantity}</h1>
              <button
                onClick={() => {
                  onClick(order);
                }}
                className="bg-green-600 p-1 w-[45%] rounded-lg shadow-xl shadow-slate-600 font-bold text-lg text-white"
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      <h1>total price is : {totalPrice}</h1>
    </div>
  );
}

export default Cart;
