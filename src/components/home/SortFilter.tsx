import React from "react";
import { sortOptions } from "../../constants/sortOptions";

const SortFilter: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start px-4 space-y-2 text-gray-500 text-sm ">
      {sortOptions.map((option) => (
        <label key={option.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            value={option.value}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default SortFilter;
