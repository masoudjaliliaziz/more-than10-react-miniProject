import React, { Children, useState } from "react";

function ShowMore({ children }) {
  const [isMore, setIsMore] = useState(true);
  const [string, setString] = useState(children);
  function handleReduse() {
    setIsMore((cur) => !cur);
    if (isMore) {
      setString(children);
    } else {
      setString(children.split(" ").slice(0, 20).join(" ") + "...");
    }
  }
  return (
    <div className="flex w-8/12 gap-2">
      <div>
        {string}
        <span
          onClick={handleReduse}
          role="button"
          className="text-blue-600 cu "
          style={{ cursor: "pointer" }}
        >
          {isMore ? `show more` : `show less`}
        </span>
      </div>
    </div>
  );
}

export default ShowMore;
