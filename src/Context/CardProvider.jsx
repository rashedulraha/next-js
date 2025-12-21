"use client";
import { createContext, useState } from "react";

export const CardContext = createContext();

import React from "react";

const CardProvider = ({ children }) => {
  const [card, setCard] = useState([]);

  const addToCard = (item) => {
    setCard([item, ...card]);
  };

  const cardInfo = {
    card,
    addToCard,
  };
  return <CardContext value={cardInfo}>{children}</CardContext>;
};

export default CardProvider;
