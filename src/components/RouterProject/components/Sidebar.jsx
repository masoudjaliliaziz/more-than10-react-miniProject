import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyRight}>
          &copy; Copyright {new Date().getFullYear()}
          WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
