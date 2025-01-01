import React, { createContext, useContext } from "react";
import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { usePost } from "../customHooks/PostContext";

function Header() {
  const { onClearPosts } = usePost();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
