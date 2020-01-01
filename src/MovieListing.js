import React, { useState } from "react";
import MovieReview from "./MovieReview";

/**
 * @param {number} decimal - a decimal value
 * @returns {string} percentage representation
 */
const decToPercent = decimal => decimal * 100 + "%";

const stopPropagation = e => e.stopPropagation();

/** @type {React.FC<{movie: import("./Movies").MovieInfo}>} */
const MovieListing = ({ movie: { id, title, url, year, score, coverUrl } }) => {
  const [displayReview, updateDisplayReview] = useState(false);

  return (
    <li
      className={`${displayReview ? "reviewVisible" : ""}`}
      key={id}
      onClick={() => updateDisplayReview(!displayReview)}
    >
      <span>{decToPercent(score)}</span>
      &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        onClick={stopPropagation}
      >
        {title}
      </a>
      &nbsp;
      <span>({year})</span>
      {displayReview ? (
        <MovieReview {...{ title, id, coverUrl }} />
      ) : (
        <span></span>
      )}
    </li>
  );
};

export default MovieListing;
