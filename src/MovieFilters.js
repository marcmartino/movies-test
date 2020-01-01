import React, { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";
import DecadeFilter from "./DecadeFilter";

/** @type {React.FC<{movies: import("./Movies").MovieInfo[], updateMovies: (import("./Movies").MovieInfo[]) => void}} */
const MovieFilters = ({ movies, updateMovies }) => {
  const [searchFilteredMovies, updateSearchFilteredMovies] = useState(movies);

  const [decadeFilteredMovies, updateDecadeFilteredMovies] = useState(
    searchFilteredMovies
  );

  useEffect(() => updateMovies(decadeFilteredMovies), [
    decadeFilteredMovies,
    updateMovies
  ]);

  return (
    <>
      <SearchFilter movies={movies} 
        updateMovies={updateSearchFilteredMovies} />
      <DecadeFilter
        movies={searchFilteredMovies}
        updateMovies={updateDecadeFilteredMovies}
      />
    </>
  );
};

export default MovieFilters;
