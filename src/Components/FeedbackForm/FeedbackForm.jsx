"use client";
import React from "react";

const FeedbackForm = () => {
  //  send feedback to data base
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = await e.target.feedback.value;

    const res = await fetch("http://localhost:3000/api/feedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const result = await res.json();
    console.log(result);

    if (result.result.insertedId) {
      alert("Your feedback done  .thank you!");
    }
  };

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="space-y-3">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <textarea
            name="feedback"
            role="5"
            className="border border-dashed w-full p-4 rounded text-lg"
            placeholder="Enter your feedback"></textarea>
          <hr />
          <button className="px-4 py-2 bg-white text-black rounded mt-5">
            Add FeedBack
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
