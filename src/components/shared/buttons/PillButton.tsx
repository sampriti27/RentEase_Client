import React from "react";

interface Props {
  item: string;
}
const PillButton: React.FC<Props> = ({ item }) => {
  return (
    <button
      type="button"
      className="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full text-sm px-5 py-2.5 me-2 mb-2 flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path
          fill-rule="evenodd"
          d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
          clip-rule="evenodd"
        />
      </svg>

      {item}
    </button>
  );
};

export default PillButton;
