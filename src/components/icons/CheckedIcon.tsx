import React from "react";

interface CheckedIconProps {
  isFilter?: boolean;
}

const CheckedIcon: React.FC<CheckedIconProps> = ({ isFilter }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth={`${isFilter ? `1.5` : `2.5`}`}
    fill="currentColor"
    className="size-5 text-green-500 mr-2"
  >
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CheckedIcon;
