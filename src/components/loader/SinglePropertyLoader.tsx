import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

const SinglePropertyLoader: React.FC = () => {
  return (
    <>
      <div className="w-full md:px-4 animate-pulse">
        <div className="text-xs text-gray-400 flex items-center justify-between py-2">
          <div className="h-4 bg-gray-200 rounded w-2/5"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>

        <div className="mt-4 flex justify-start sm:justify-normal">
          {/* Property Price */}
          <div className="w-[45%] sm:w-1/4 h-full">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
          </div>

          {/* Vertical Divider */}
          <div className="border-l border-gray-300 mx-4"></div>

          {/* Property Type and move-in status */}
          <div className="text-sm md:text-base">
            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mt-2"></div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="hidden sm:block border-b border-gray-300 my-4"></div>

        {/* Images and configuration section */}
        <div className="mt-2 sm:mt-0 flex flex-col lg:flex-row gap-8 lg:gap-4 items-center">
          <div className="w-full lg:w-1/2 h-48 bg-gray-200 rounded"></div>
          <div className="w-full lg:w-1/2">
            <div className="h-24 bg-gray-200 rounded mb-2"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="mt-8 lg:mt-16">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-16 bg-gray-200 rounded"></div>
        </div>

        {/* Furniture Section */}
        <div className="mt-8 lg:mt-16 text-gray-500 border-t-2 border-t-gray-300 py-4 lg:py-8">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="grid gap-2 grid-cols-2 lg:gap-4 lg:grid-cols-3 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            {/* Repeat for other items */}
          </div>
        </div>

        {/* Features Section */}
        <div className="text-gray-500 border-t-2 border-t-gray-300 border-b-2 border-b-gray-300 py-4 lg:py-8">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid gap-2 grid-cols-2 lg:gap-4 lg:grid-cols-3 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            {/* Repeat for other items */}
          </div>
        </div>

        {/* Property-Description Section */}
        <div className="py-4 lg:py-8 text-gray-500">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-full mt-2"></div>
        </div>
      </div>
    </>
  );
};

export default SinglePropertyLoader;
