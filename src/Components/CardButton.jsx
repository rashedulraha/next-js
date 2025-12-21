"use client";

import { CardContext } from "@/Context/CardProvider";
import React, { use, useState } from "react";

const CardButton = ({ data }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCard } = use(CardContext);

  const handleAddToCart = () => {
    addToCard(data);
    setInCart(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm disabled:bg-gray-300 disabled:text-orange-500 disabled:cursor-not-allowed">
      {inCart ? "Added" : "Add to card"}
    </button>
  );
};

export default CardButton;
