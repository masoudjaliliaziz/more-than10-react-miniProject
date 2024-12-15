import React from "react";
import MenuCard from "./MenuCard";

function Menu({ menuItem, onAddToCart }) {
  return (
    <div className="w-full p-5 flex flex-row">
      <MenuCard menuItem={menuItem} onAddToCart={onAddToCart} />
    </div>
  );
}

export default Menu;
