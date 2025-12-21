import { FoodCard } from "@/Components/Card/FoodCard";
import Container from "@/Components/Container";
import CartItem from "./[id]/CartItem";
import InputSearch from "@/Components/InputSearch/InputSearch";

const getFoods = async (search) => {
  const response = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
  );
  const data = await response.json();

  return data.foods;
};

const Foods = async ({ searchParams }) => {
  const { search = "" } = await searchParams;

  const foods = await getFoods(search);
  return (
    <div>
      <Container>
        <h1>Foods {foods.length} found</h1>

        {/* input search bar */}
        <div>
          <InputSearch />
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-9">
            {" "}
            <div className="my-5 grid grid-cols-3 gap-5">
              {foods?.map((food) => (
                <FoodCard data={food} key={food.id} />
              ))}
            </div>
          </div>
          <div className="col-span-3 bg-white/10 rounded my-5 h-fit p-3">
            <h3 className="text-lg font-semibold text-white">
              Total adding item
            </h3>
            <hr className="mt-2 text-gray-600" />

            <div className="mt-10">
              <CartItem />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Foods;
