import { list } from "postcss";
import { useState } from "react";

import Rating from "./components/UsePopcorn/Rating";

function App() {
  const [msg, setMsg] = useState("");
  return (
    <>
      <Rating setMessage={setMsg} />
      {msg && (
        <h1 className="text-white text-2xl">
          you voted this movie {msg} stars
        </h1>
      )}
      <Rating color="blue" maxRating={10} />
      <Rating color="yellow" maxRating={10} />
    </>
  );
}

export default App;
