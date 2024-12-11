import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from "react";

const TableLoader: React.FC = () => {
  // Create an array of a fixed number of skeleton rows
  return (
    <>
      {Array(5) // You can change this number based on the number of skeleton rows you want
        .fill("")
        .map((_, index) => (
          <tr key={index} className="animate-pulse">
            {/* Serial Number Skeleton */}
            <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px]">
              <Skeleton width={20} />
            </td>
            {/* Property Name Skeleton */}
            <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px]">
              <Skeleton width="80%" />
            </td>
            {/* Address Skeleton */}
            <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px]">
              <Skeleton width="70%" />
            </td>
            {/* Rent Skeleton */}
            <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px] hidden lg:table-cell">
              <Skeleton width="50%" />
            </td>
            {/* Date Listed Skeleton */}
            <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px] hidden lg:table-cell">
              <Skeleton width="60%" />
            </td>
            {/* Action Buttons Skeleton */}
            <td className="px-2 md:px-6 py-4 text-right">
              <Skeleton width={24} height={24} />
            </td>
          </tr>
        ))}
    </>
  );
};

export default TableLoader;
