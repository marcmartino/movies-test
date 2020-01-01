import React from "react";
import MovieListing from "./MovieListing";

/** @type {React.FC<{movies?: import("./Movies").MovieInfo[]}>} */
const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <MovieListing key={movie.id} movie={movie} />
    ))}
  </ul>
);

export default MoviesList;
