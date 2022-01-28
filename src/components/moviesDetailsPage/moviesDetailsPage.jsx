import { useParams, useSearchParams } from "react-router-dom";
import React from "react";
const MoviesDetailsPage = () => {
  // get params
  let { movieId, showNextMovie } = useParams();

  //get query params
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("sort"));

  return (
    <div>
      <h1>{movieId}</h1>
      <h1>{showNextMovie}</h1>
      <h1>QueryParam : {searchParams.get("sort")}</h1>
    </div>
  );
};

export default MoviesDetailsPage;
