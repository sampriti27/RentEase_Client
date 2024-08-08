import React from "react";

const Breadcrumb: React.FC = () => {
  return (
    <div className="p-4 text-xs text-gray-400 flex items-center gap-1">
      <span>Home</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-3 text-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
      <span>Property in Kolkata</span>
    </div>
  );
};

export default Breadcrumb;
