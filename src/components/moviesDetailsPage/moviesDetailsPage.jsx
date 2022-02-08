import { useParams, useSearchParams } from "react-router-dom";
import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../actions/counterActions";
const MoviesDetailsPage = () => {
  // get params
  let { movieId, showNextMovie } = useParams();

  //get query params
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("sort"));

  //use memo button

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{movieId}</h1>
      <h1>{showNextMovie}</h1>
      <h1>QueryParam : {searchParams.get("sort")}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default MoviesDetailsPage;
