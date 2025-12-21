import Image from "next/image";
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

  const { foodImg, title, price, category, area } = food || {};
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Image */}
        <div className="relative h-75 md:h-125 rounded-3xl overflow-hidden shadow-xl">
          <Image src={foodImg} alt={title} fill className="object-cover" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              {category}
            </span>
            <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-bold">
              {area}
            </span>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {title}
          </h1>
          <p className="text-3xl font-bold text-orange-600 mb-6">${price}</p>

          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold border-b pb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              This delicious {title} is a signature {category} dish from the
              {area} region. Made with premium ingredients and prepared with
              traditional techniques to ensure the best taste and quality.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-lg">
              Add to Cart
            </button>
            <button className="p-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition-all">
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
