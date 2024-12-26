import React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  return (
    <nav>
      <ul className="flex gap-3 bg-blue-600 items-center justify-around text-2xl font-bold text-white w-6/12 mx-auto p-3 my-10 rounded-lg">
        <li>
          <NavLink to={"/"}>home</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>product</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
