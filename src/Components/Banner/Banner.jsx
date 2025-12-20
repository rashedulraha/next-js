"use client";

import React from "react";
import Container from "../Header/Container";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const handleGoDashboard = () => {
    const password = prompt("Enter your password");
    if (password == 1234) {
      router.push("/dashboard");
    }
  };
  return (
    <Container>
      <div className="py-20 text-center">
        <h1 className="text-5xl font-bold">Simple banner </h1>
        <p className="max-w-3xl text-center mx-auto pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          voluptatibus, consequuntur doloremque, quibusdam dicta facilis modi
          inventore adipisci quasi
        </p>
        <button
          onClick={handleGoDashboard}
          className="btn px-4 py-2 border rounded mt-5">
          Go Dashboard
        </button>
      </div>
    </Container>
  );
};

export default Banner;
