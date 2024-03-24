import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const clientRating = Array.from({ length: 5 }, (elm, index) => {
    const number = index + 0.5;

    return (
      <div className="gap-1">
        {rating >= index + 1 ? (
          <FaStar className=" text-yellow-500" />
        ) : rating > number ? (
          <FaStarHalfAlt className=" text-yellow-500" />
        ) : (
          <FaRegStar className=" text-yellow-500" />
        )}
      </div>
    );
  });

  return clientRating;
};

export default StarRating;
