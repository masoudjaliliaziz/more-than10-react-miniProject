import { useState } from "react";
import React from "react";
import Navbar from "./childComponents/Navbar";
import Main from "./childComponents/Main";
import NumResult from "./childComponents/NumResult";
import ListBox from "./childComponents/ListBox";
import WathedBox from "./childComponents/WathedBox";
import MovieList from "./childComponents/MovieList";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];
function UsePopcorn() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <Navbar>
        <NumResult movies={movies} />
      </Navbar>
      {/* for solve the problem of prop drilling */}
      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <WathedBox />
      </Main>
    </>
  );
}

export default UsePopcorn;
