"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";

export function FoodCard({ data, loading = false }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  if (loading) {
    return (
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <div className="w-full h-64 bg-gray-200 animate-pulse" />
        <div className="p-4 space-y-3">
          <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded" />
          <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded" />
          <div className="h-8 w-1/3 bg-gray-200 animate-pulse rounded" />
        </div>
        <div className="p-4 pt-0 flex gap-2">
          <div className="h-10 flex-1 bg-gray-200 animate-pulse rounded-lg" />
          <div className="h-10 flex-1 bg-gray-200 animate-pulse rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative w-full h-64 bg-gray-100">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <Image
          src={data.foodImg}
          alt={data.title}
          fill
          className="object-cover transition-opacity duration-300"
          onLoadingComplete={() => setIsImageLoaded(true)}
          priority
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1 text-black">{data.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{data.category}</p>
        <p className="text-2xl font-bold text-blue-600">${data.price}</p>
      </div>

      <div className="p-4 pt-0 flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 font-medium py-3 rounded-lg hover:bg-gray-50 transition text-black">
          <Eye size={18} />
          View More
        </button>
      </div>
    </div>
  );
}
