import React from "react";
import Container from "../Container";

const FoodCardSkeleton = () => {
  return (
    <Container>
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="w-full h-64 bg-gray-200 animate-pulse" />
        <div className="p-4 space-y-3">
          <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded" />
          <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded" />
          <div className="h-8 w-1/3 bg-gray-200 animate-pulse rounded" />
        </div>
        <div className="p-4 pt-0 flex gap-2">
          <div className="h-10 flex-1 bg-gray-200 animate-pulse rounded-lg" />
          <div className="h-10 flex-1 bg-gray-200 animate-pulse rounded-lg" />
        </div>
      </div>
    </Container>
  );
};

export default FoodCardSkeleton;
