import FeedbackCard from "@/Components/Card/Feedback";
import React from "react";

export const metadata = {
  title: "feedback",
};

const getFeedback = async () => {
  const result = await fetch("http://localhost:3000/api/feedback");
  return result.json();
};

const FeedbacksPage = async () => {
  const feedbacks = await getFeedback();
  console.log(feedbacks);

  return (
    <div className="container px-4 mx-auto">
      <h1 className="text-2xl fond-bold">feedback {feedbacks.length} Found</h1>
      <div className="my-5  grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default FeedbacksPage;
