import React, { useState, useEffect } from "react";

/** 
 * @typedef {Object} MovieReviewData
 * @property {number} movieId - integer id of the movie that the review is of
 * @property {string} review - review of a movie
*/

/** @type {React.FC<Pick<import("./Movies").MovieInfo, 'id' | 'title' | 'coverUrl'>} */
const MovieReview = ({ id, title, coverUrl }) => {
  const [reviewText, setReview] = useState("");
  useEffect(() => {
    async function fetchReviewData() {
      /** @type {MovieReviewData[] | undefined} */
      const reviewData = await fetch(
        `http://localhost:6001/reviews?movieId=${id}`
      )
        .then(response => {
          return response.json();
        })
        .catch(err => {
          console.error("error fetching review", err);
          alert(
            "error fetching review #" +
              id +
              ", please reload the page " +
              "or try again later"
          );
          return undefined;
        });
        console.log(reviewData)
    if (typeof reviewData === "object") setReview(reviewData[0].review);
    }
    fetchReviewData();
  }, [id]);
  return (
    <div>
      <img alt={`cover art for ${title}`} src={`http://localhost:6001/${coverUrl}`} />
      <div>{reviewText}</div>
    </div>
  );
};

export default MovieReview;
