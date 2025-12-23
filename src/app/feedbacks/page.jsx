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
    <div>
      <h1 className="text-2xl fond-bold">feedback {feedbacks.length} Found</h1>
    </div>
  );
};

export default FeedbacksPage;
