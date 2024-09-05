import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateFilter } from "../../store/slices/filterSlice";

const BudgetFilter: React.FC = () => {
  const [minBudget, setMinBudget] = useState<number>(0);
  const [maxBudget, setMaxBudget] = useState<number>(1000000);

  const dispatch = useDispatch();

  const handleMinBudgetChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = parseInt(event.target.value);
    setMinBudget(value);
    dispatch(updateFilter({ paramKey: "minBudget", valueToAdd: value }));
  };

  const handleMaxBudgetChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = parseInt(event.target.value);
    setMaxBudget(value);
    dispatch(updateFilter({ paramKey: "maxBudget", valueToAdd: value }));
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg ">
      <div className="flex items-center justify-between mt-4">
        <div className="bg-[#091e42] text-white rounded-md px-2 py-1 text-xs">
          {minBudget}
        </div>
        <div className="bg-[#091e42] text-white rounded-md px-2 py-1 text-xs">
          {maxBudget === 1000000 ? "10 Lakh" : maxBudget}
        </div>
      </div>

      <div className="mt-4">
        <input
          type="range"
          min="0"
          max="1000000"
          value={minBudget}
          onChange={(e) => setMinBudget(Number(e.target.value))}
          className="w-full h-2 bg-sky-500 rounded-full appearance-none cursor-pointer"
        />
      </div>

      <div className="flex justify-between mt-4">
        <select
          value={minBudget}
          onChange={handleMinBudgetChange}
          className="w-1/2 p-2 border border-gray-300 outline-none text-xs text-gray-400"
        >
          {/* You can add more options as needed */}
          <option value="0">Min Budget</option>
          <option value="5000">5 Thousand</option>
          <option value="10000">10 Thousand</option>
          <option value="15000">15 Thousand</option>
        </select>
        <select
          value={maxBudget}
          onChange={handleMaxBudgetChange}
          className="w-1/2 p-2 border border-gray-300 ml-2 outline-none text-xs text-gray-400"
        >
          {/* You can add more options as needed */}
          <option value="1000000">Max Budget</option>
          <option value="50000">50 Thousand</option>
          <option value="60000">60 Thousand</option>
          <option value="70000">70 Thousand</option>
          <option value="100000">1 Lakh</option>
          <option value="1000000">10 Lakhs</option>
        </select>
      </div>
    </div>
  );
};

export default BudgetFilter;
