import React, { Children } from "react";
import { useState } from "react";
import Movie from "./Movie";
import Logo from "./Logo";
import Search from "./Search";
function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}

export default Navbar;
