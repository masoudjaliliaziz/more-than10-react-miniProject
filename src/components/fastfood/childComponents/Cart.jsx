import React from "react";

function Cart({ orderedItem }) {
  return (
    <div className="w-8/12 rounded-lg shadow-2xl shadow-black mt-10 bg-green-600 flex flex-col p-10 gap-3 text-white">
      {orderedItem.map((order) => {
        return (
          <div
            key={crypto.randomUUID()}
          >{`${order.name} and the quantity of this is ${order.quantity}`}</div>
        );
      })}
    </div>
  );
}

export default Cart;
