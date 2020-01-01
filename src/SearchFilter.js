import React, { useState } from "react";

/** 
 * @param {import("./Movies").MovieInfo[]} movies list of all movies
 * @param {(import("./Movies").MovieInfo[]) => void} update callback function to send filter updates to
 * @param {React.ChangeEvent<HTMLInputElement>} e input change event object
 */
const updateSearchTerm = (movies, update) => (e) => {
    const searchTerm = e.currentTarget.value.toLowerCase();
    
    const filteredList = searchTerm.length >= 2
    ? movies.filter(({title}) => title.toLowerCase().indexOf(searchTerm) >= 0)
    : movies;
    console.log('search term updated', searchTerm, filteredList)
    update(filteredList);
}

/** @type {React.FC<{movies: import("./Movies").MovieInfo[], updateMovies: (import("./Movies").MovieInfo[]) => void}>} */
const SearchFilter = ({movies, updateMovies}) => {
  return (
    <div>
      <h2>Title Contains:</h2>
      <input type="text" onChange={updateSearchTerm(movies, updateMovies)} />
    </div>
  );
};
export default SearchFilter;
