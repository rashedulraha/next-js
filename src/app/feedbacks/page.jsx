import FeedbackCard from "@/Components/Card/Feedback";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "feedback",
};

const getFeedback = async () => {
  const result = await fetch("http://localhost:3000/api/feedback", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return result.json();
};

const FeedbacksPage = async () => {
  const feedbacks = await getFeedback();

  return (
    <div className="container px-4 mx-auto">
      <div className="flex items-center justify-between , mt-10 ">
        <div>
          <h1 className="text-2xl fond-bold">
            feedback {feedbacks.length} Found
          </h1>
        </div>
        <div>
          <Link
            href={"/feedbacks/addfeedback"}
            className="px-4 py-2 bg-white text-black rounded">
            Add Feedback
          </Link>
        </div>
      </div>

      <div className="my-5  grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default FeedbacksPage;
