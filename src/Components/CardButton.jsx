"use client";

import React, { useState } from "react";

const CardButton = () => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
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
