import React, { useEffect, useState } from "react";
import Rating from "./../Rating";
import Loader from "./Loader";
function MovieDetails({
  selctedMovie,
  onHandleBack,
  KEY,
  onAdd,
  addUserRating,
}) {
  const [movie, setMovie] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAddWatchedMovie() {
    const newWatchedMovie = {
      imdID: selctedMovie,
      title,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
    };
    onAdd(newWatchedMovie);
  }
  useEffect(
    function () {
      setIsLoaded(true);
      async function getMoviesDetail() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selctedMovie}`
        );
        const data = await res.json();
        setMovie(data);

        setIsLoaded(false);
      }
      getMoviesDetail();
    },
    [selctedMovie]
  );
  return (
    <div className="details">
      {isLoaded ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onHandleBack}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>{" "}
          <section>
            <div className="rating">
              <Rating
                setMessage={addUserRating}
                color="yellow"
                maxRating={10}
              />
              <button
                className="btn-add"
                onClick={() => handleAddWatchedMovie()}
              >
                + Add To List
              </button>
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
