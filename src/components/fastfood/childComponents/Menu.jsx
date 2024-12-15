import React from "react";
import MenuCard from "./MenuCard";

function Menu({ menuItem }) {
  return (
    <div className="w-full p-5">
      <MenuCard menuItem={menuItem} />
    </div>
  );
}

export default Menu;
