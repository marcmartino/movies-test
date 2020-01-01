import React, { useState, useEffect, useReducer } from "react";
import SearchFilter from "./SearchFilter";
import DecadeFilter from "./DecadeFilter";

/** @type {React.FC<{movies: import("./Movies").MovieInfo[], updateMovies: (import("./Movies").MovieInfo[]) => void}} */
const MovieFilters = ({ movies, updateMovies }) => {
  const [searchFilteredMovies, updateSearchFilteredMovies] = useState(movies);
  console.log("search list", searchFilteredMovies);
  const [decadeFilteredMovies, updateDecadeFilteredMovies] = useState(
    searchFilteredMovies
  );
  console.log("decade list", decadeFilteredMovies);

  useEffect(() => updateDecadeFilteredMovies(searchFilteredMovies), [
    searchFilteredMovies
  ]);
  useEffect(() => updateMovies(decadeFilteredMovies), [decadeFilteredMovies]);

  return (
    <>
      <SearchFilter {...{ movies, updateMovies: updateSearchFilteredMovies }} />
      <DecadeFilter
        {...{
          movies: searchFilteredMovies,
          updateMovies: updateDecadeFilteredMovies
        }}
      />
    </>
  );
};

export default MovieFilters;
