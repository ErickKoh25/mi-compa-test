import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="card-address">
      <div className="cont-card-items">
        <Skeleton count={5} />
      </div>
    </div>
  );
};

export default CardSkeleton;
