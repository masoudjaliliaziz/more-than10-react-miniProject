import React from "react";

function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  return (
    <>
      <p className="result">
        Ypu scored {points} out of {maxPossiblePoints} ({percentage}%)
      </p>
      <p className="highscore">(highscore: {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
}

export default FinishedScreen;
