import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from "react";

const PropertyCardLoader: React.FC = () => {
  return (
    <div className="w-full md:h-[328px] bg-white rounded-lg border shadow-md p-4 flex flex-col sm:flex-row items-center gap-2 my-6">
      {/* Skeleton for Property Image */}
      <div className="w-full sm:w-2/5 h-[200px] md:h-full border rounded-lg">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Skeleton for Property Details */}
      <div className="w-full sm:w-3/5 h-full p-4 flex flex-col justify-between">
        {/* Skeleton for Text */}
        <div>
          <Skeleton width="60%" height={30} />
          <Skeleton width="80%" height={20} />
          <Skeleton width="40%" height={20} />
          <Skeleton width="100%" height={40} />
          <Skeleton width="100%" height={20} count={2} />
        </div>

        {/* Skeleton for Owner Info and Buttons */}
        <div className="flex gap-2 mt-4">
          <Skeleton width="100px" height={40} />
          <Skeleton width="100px" height={40} />
        </div>
      </div>
    </div>
  );
};

export default PropertyCardLoader;
