import React from "react";

interface Props {
  item: string;
  icon: React.FC
}
const PillButton: React.FC<Props> = ({ item, icon: Icon }) => {
  return (
    <button
      type="button"
      className="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full text-sm flex items-center py-1 px-2 me-2 mb-2 gap-1"
    >
      <Icon />

      {item}
    </button>
  );
};

export default PillButton;
