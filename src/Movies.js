import React, { useState, useEffect } from "react";
import MoviesFilters from "./MovieFilters";
import MoviesList from "./MoviesList";

const Movies = () => {
  const [movies, updateMoviesList] = useState(() => {
    const storedList = window.localStorage.getItem("moviesList");
    return storedList ? JSON.parse(storedList) : [];
  });
  const [filteredMovies, updateFilteredMovies] = useState(movies);
  useEffect(() => {
    async function fetchMovieData() {
      console.log("loading movie data...");
      const movieData = await fetch("http://localhost:6001/movies")
        .then(response => {
          return response.json();
        })
        .catch(err => {
          console.error("error fetching movies", err);
          alert(
            "error fetching movies, please reload the page " +
              "or try again later"
          ).finally(() => console.log("finished loading movie data"));
        });
      const sortedMovies = movieData.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
      console.log("data fetched", sortedMovies);
      updateMoviesList(sortedMovies);
    }

    // only load data from server if we got an empty array from localstorage
    if (movies.length === 0) fetchMovieData();
  }, [movies, updateMoviesList]);

  useEffect(() => {
    window.localStorage.setItem("moviesList", JSON.stringify(movies));
  }, [movies]);

  return (
    <>
      <MoviesFilters movies={movies} updateMovies={updateFilteredMovies} />
      <MoviesList movies={filteredMovies || []} />
    </>
  );
};

export default Movies;

/**
 * @typedef {Object} MovieInfo
 * @property {number} id - unique integer identifier for the movie
 * @property {string} title - the title of the movie
 * @property {number} year - integer representing year that the movie was released
 * @property {number} score - decimal value representing the rotten tomatoes score (0-1)
 * @property {string} director - name of the movie's director
 * @property {string} url - url of the movie's entry on rotten tomatoes
 * @property {string} synopsis - text description of the movie's plot
 * @property {"g" | "pg" | "pg-13" | "r" | "nr" } rating
 *  - motion picture content rating of the movie
 * @property {number} runtimeInMinutes - length of movie in minutes
 * @property {number} oscarNominations - integer number of oscar nominations
 * @property {number} oscars - integer number of oscars actually won
 * @property {string} coverUrl - relative path of movie cover image
 */
