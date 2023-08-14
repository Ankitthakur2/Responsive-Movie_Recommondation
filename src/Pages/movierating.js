import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieRating({ rating }) {
  return (
    <div className="rating">
      <FontAwesomeIcon icon={faStar} className="star-icon" />
      {rating}
    </div>
  );
}

export default MovieRating;
