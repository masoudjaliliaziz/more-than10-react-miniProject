import { useEffect, useState } from "react";
import React from "react";
import Navbar from "./childComponents/Navbar";
import Main from "./childComponents/Main";
import NumResult from "./childComponents/NumResult";
import MovieList from "./childComponents/MovieList";
import Box from "./childComponents/Box";
import WatchedSummary from "./childComponents/WatchedSummary";
import WatchedMovieList from "./childComponents/WatchedMovieList";
import Loader from "./childComponents/Loader";
import ErrorMessage from "./childComponents/ErrorMessage";
import Search from "./childComponents/Search";
import MovieDetails from "./childComponents/MovieDetails";
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
const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const KEY = "9a669649";
function UsePopcorn() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState([]);
  const [isLoding, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("Sopranos");
  const [selctedMovie, setSelectedMovie] = useState(null);
  const [userRating, setUserRating] = useState(0);
  useEffect(
    function () {
      setIsLoading(true);
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Somthing went rong with fetching movies");
          const data = await res.json();

          if (data.Response === "False") throw new Error("movie not found");
          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      } else {
        fetchMovies();
      }
    },
    [query]
  );
  console.log(movies);
  function handleSelectedMovie(id) {
    setSelectedMovie((selctedId) => (selctedId === id ? null : id));
  }
  function handleBack() {
    setSelectedMovie(null);
  }
  function handleAdd(value) {
    setWatched((cur) => [...cur, { ...value, userRating: userRating }]);
    console.log(watched);
  }
  return (
    <>
      <Navbar>
        <Search setQuery={setQuery} query={query} />
        <NumResult movies={movies} />
      </Navbar>
      {/* for solve the problem of prop drilling */}
      <Main>
        <Box>
          {!isLoding && !error && (
            <MovieList
              movies={movies}
              handleSelectedMovie={handleSelectedMovie}
            />
          )}
          {isLoding && <Loader />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selctedMovie ? (
            <MovieDetails
              onHandleBack={handleBack}
              selctedMovie={selctedMovie}
              KEY={KEY}
              onAdd={handleAdd}
              addUserRating={setUserRating}
            />
          ) : (
            <>
              {" "}
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default UsePopcorn;
