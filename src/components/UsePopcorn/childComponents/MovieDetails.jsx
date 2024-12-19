import React from "react";

function MovieDetails({ selctedMovie, onHandleBack }) {
  return (
    <div>
      <button className="btn-back" onClick={onHandleBack}>
        x
      </button>
      <span>{selctedMovie}</span>
    </div>
  );
}

export default MovieDetails;
