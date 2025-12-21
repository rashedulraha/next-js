import FoodCardSkeleton from "@/Components/Skeleton/FoodCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="my-5 grid grid-cols-3 gap-5">
      {[...Array(12)].map((_, index) => (
        <FoodCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default loading;
