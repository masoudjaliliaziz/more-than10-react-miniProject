import React, { useState } from "react";

function Rating({ maxRating = 5 }) {
  const [rate, setRate] = useState(0);
  function handleRate(value) {
    setRate(value);
  }
  return (
    <div className="flex flex-row gap-3 bg-red items-center">
      <div className="flex flex-row gap-1 bg-red">
        {Array.from({ length: maxRating }, (_, i) => {
          return <Star key={i} full={rate} onRate={() => handleRate(i + 1)} />;
        })}
      </div>
      <p className="text-2xl text-white font-bold">{rate}</p>
    </div>
  );
}

export function Star({ onRate, full }) {
  return (
    <span role="button" onClick={onRate}>
      <svg
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#FFF"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </span>
  );
}

export default Rating;
