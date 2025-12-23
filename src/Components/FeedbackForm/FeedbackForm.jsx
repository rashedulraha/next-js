"use client";
import React, { useState } from "react";

const FeedbackForm = () => {
  const [loading, setLoading] = useState(false);

  // send feedback to database
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const message = e.target.feedback.value;

    const res = await fetch("http://localhost:3000/api/feedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const result = await res.json();
    setLoading(false);

    if (result?.result?.insertedId) {
      e.target.reset();
      alert("Your feedback submitted. Thank you!");
    }
  };

  return (
    <div className="container mx-auto px-4 mt-16">
      <div className="max-w-xl mx-auto">
        {/* Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Share Your Feedback
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            We value your thoughts and suggestions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              name="feedback"
              rows={5}
              required
              className="w-full resize-none rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent p-4 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Write your feedback here..."
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition">
              {loading ? "Submitting..." : "Add Feedback"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
