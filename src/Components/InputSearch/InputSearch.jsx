"use client";

import { useRouter, useSearchParams } from "next/navigation";

import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    // console.log(value);

    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          className="px-2 py-2 border rounded mr-1 w-2xl"
          type="search"
          placeholder="Enter your food name"
        />
        <input
          className="border  rounded px-3 py-2"
          type="submit"
          value={"Search"}
        />
      </form>
    </div>
  );
};

export default InputSearch;
