import React from "react";

const getFoodDetails = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  const data = await res.json();
  return data.details;
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;

  const food = await getFoodDetails(id);
  return (
    <div>
      <h1>Food details : {food.title} </h1>
    </div>
  );
};

export default FoodDetails;
