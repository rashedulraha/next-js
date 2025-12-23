"use client";

export default function FeedbackCard({ feedback, onUpdate, onDelete }) {
  const { _id, message, date } = feedback;

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm bg-white dark:bg-gray-900">
      <p className="text-gray-700 dark:text-gray-300 mb-3">{message}</p>

      <p className="text-sm text-gray-500 mb-4">
        {new Date(date).toLocaleString()}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => onUpdate(_id)}
          className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
          Update
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition">
          Delete
        </button>
      </div>
    </div>
  );
}
