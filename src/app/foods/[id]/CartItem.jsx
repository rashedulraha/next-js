"use client";

import { CardContext } from "@/Context/CardProvider";
import React, { use } from "react";

const CartItem = () => {
  const { card } = use(CardContext);
  return <div>{card.length} Item added </div>;
};

export default CartItem;
