import { FoodCard } from "@/Components/Card/FoodCard";
import Container from "@/Components/Container";
import React from "react";

const getFoods = async () => {
  const response = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await response.json();
  return data.foods;
};

const Foods = async () => {
  const foods = await getFoods();
  return (
    <div>
      <Container>
        <h1>Foods {foods.length} found</h1>

        <div className="my-5 grid grid-cols-3 gap-5">
          {foods?.map((food) => (
            <FoodCard data={food} key={food.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Foods;
