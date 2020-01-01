import React, { useEffect, useState } from "react";

/**
 * @param {import("./Movies").MovieInfo[]} movies list of all movies
 * @param {(import("./Movies").MovieInfo[]) => void} update callback function to send filter updates to
 * @param {string} searchTerm text to use for filtering titles
 */
const updateSearchTerm = (movies, update, searchTerm) => {
  const filteredList =
    searchTerm.length >= 2
      ? movies.filter(
          ({ title }) => title.toLowerCase().indexOf(searchTerm) >= 0
        )
      : movies;

  update(filteredList);
};

/** @type {React.FC<{movies: import("./Movies").MovieInfo[], updateMovies: (import("./Movies").MovieInfo[]) => void}>} */
const SearchFilter = ({ movies, updateMovies }) => {
  const [searchString, updateSearchString] = useState("");

  useEffect(() => updateSearchTerm(movies, updateMovies, searchString), [
    movies,
    searchString,
    updateMovies
  ]);
  return (
    <div>
      <h2>Title Contains:</h2>
      <input
        type="text"
        onChange={e => updateSearchString(e.currentTarget.value)}
      />
    </div>
  );
};
export default SearchFilter;
