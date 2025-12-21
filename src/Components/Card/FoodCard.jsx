"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CardButton from "../CardButton";

export function FoodCard({ data }) {
  const { title, foodImg, price, category, id } = data || {};

  const [addCart, setAddCart] = useState(false);
  const handleAddToCart = () => {
    setAddCart(true);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-48 w-full">
        <Image src={foodImg} alt={title} fill className="object-cover" />
        <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 truncate">{title}</h3>
        <p className="text-2xl font-semibold text-orange-600 my-2">${price}</p>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <CardButton />
          <Link
            href={`/foods/${id}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm border border-gray-300 text-center">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
