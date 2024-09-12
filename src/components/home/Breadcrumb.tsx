import React from "react";
import { useSelector } from "react-redux";
import { selectPlace } from "../../store/slices/filterSlice";

const Breadcrumb: React.FC = () => {
  const place = useSelector(selectPlace);
  return (
    <div className="p-4 text-xs text-gray-400 flex items-center gap-1">
      <span>Home</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-3 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
      <span>Property in {place}</span>
    </div>
  );
};

export default Breadcrumb;
