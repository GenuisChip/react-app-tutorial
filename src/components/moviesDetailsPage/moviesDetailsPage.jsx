import { useParams, useSearchParams } from "react-router-dom";
import React, { useState, useMemo, useContext } from "react";
import { Theme } from "../../App";
const MoviesDetailsPage = () => {
  // get params
  let { movieId, showNextMovie } = useParams();
  const [counter, setCounter] = useState(0);
  const theme = useContext(Theme);

  //get query params
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("sort"));

  //use memo button
  const button = useMemo(() => {
    return (
      <>
        <button
          className="btn btn-success"
          onClick={() => setCounter(counter + 1)}
        >
          Inc
        </button>
        Theme {theme}
      </>
    );
  }, [counter]);

  return (
    <div>
      <h1>{movieId}</h1>
      <h1>{showNextMovie}</h1>
      <h1>QueryParam : {searchParams.get("sort")}</h1>
      <h1>Counter : {counter}</h1>
      {button}
    </div>
  );
};

export default MoviesDetailsPage;
