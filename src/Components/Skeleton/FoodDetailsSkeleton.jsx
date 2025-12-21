const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Skeleton */}
        <div className="h-75 md:h-125 bg-gray-200 rounded-3xl"></div>

        {/* Content Skeleton */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="h-12 bg-gray-200 rounded-lg w-3/4"></div>
          <div className="h-8 bg-gray-200 rounded-lg w-1/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="h-16 bg-gray-200 rounded-2xl flex-1"></div>
            <div className="h-16 bg-gray-200 rounded-2xl w-16"></div>
          </div>
        </div>
      </div>

      {/* Video Skeleton */}
      <div className="mt-16">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className="aspect-video bg-gray-200 rounded-3xl"></div>
      </div>
    </div>
  );
};
