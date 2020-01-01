import React, { useEffect, useState } from "react";

/**
 * @param {import("./Movies").MovieInfo[]} movies
 * @returns {number[]} list of decades from the given movie list */
const getUniqueDecades = (movies = []) =>
  Object.keys(
    movies.reduce(
      (decadesObj, { year }) => ({
        ...decadesObj,
        [Math.floor(year / 10) * 10]: true
      }),
      {}
    )
  );

/**
 * @param {number} decade first year of the decade, e.g. 2010 or 1990
 * @param {import("./Movies").MovieInfo[]} movies list of movies to filter
 * @returns {import("./Movies").MovieInfo[]} list of movies that were released during the given decade
 */
const filterMoviesByDecade = (decade, movies) =>
  movies.filter(({ year }) => Math.floor(year / 10) === decade / 10);

/**
 * @param {import("./Movies").MovieInfo[]} movies list of all movies
 * @param {(import("./Movies").MovieInfo[]) => void} update callback function to send filter updates to
 * @param {number} decade decade number to use for filtering
 */
const updateMoviesByDecadeFilter = (movies, update, decade)  => {
  console.log("updated decade", decade);
  if (decade !== "") {
    update(filterMoviesByDecade(decade, movies));
  } else {
    update(movies);
  }
};

/** @type {React.FC<{movies: import("./Movies").MovieInfo[], updateMovies: (import("./Movies").MovieInfo[]) => void}>} */
const DecadeFilter = ({ movies, updateMovies }) => {
  const [selectedDecade, updateDecade] = useState("");

  useEffect(() => {
    updateMoviesByDecadeFilter(movies, updateMovies, selectedDecade);
  }, [movies, selectedDecade]);

  return (
    <div>
      <h2>Decade:</h2>
      <select onChange={e => updateDecade(e.currentTarget.value)}>
        <option key="blank"></option>
        {getUniqueDecades(movies).map(decade => (
          <option key={decade}>{decade}</option>
        ))}
      </select>
    </div>
  );
};
export default DecadeFilter;
