import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavList.module.css";
function NavList() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <NavLink to={"/"}>home</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>product</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/app"}>app</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
