import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function AppNav() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to={"/"}>home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
