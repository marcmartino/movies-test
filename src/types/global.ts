export interface MovieInfo {
  id: number;
  title: string;
  year: number;
  score: number;
  director: string;
  url: string;
  synopsis: string;
  rating: "g" | "pg" | "pg-13" | "r" | "nr";
  "runtime-in-minutes": number;
  "oscar-nominations": number;
  oscars: number;
  "cover-url": string;
}

export interface MovieReview {
    "movie-id": number;
    review: string;
}

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
