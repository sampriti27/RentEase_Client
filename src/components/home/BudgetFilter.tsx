import React, { useState } from "react";

const BudgetFilter: React.FC = () => {
  const [minBudget, setMinBudget] = useState<number>(0);
  const [maxBudget, setMaxBudget] = useState<number>(100);

  const handleMinBudgetChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setMinBudget(parseInt(event.target.value));
  };

  const handleMaxBudgetChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setMaxBudget(parseInt(event.target.value));
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg ">
      <div className="flex items-center justify-between mt-4">
        <div className="bg-sky-700 text-white rounded-lg py-1 px-3 text-sm">
          {minBudget}
        </div>
        <div className="bg-sky-700 text-white rounded-lg py-1 px-3 text-sm">
          {maxBudget === 100 ? "100+ Crores" : maxBudget}
        </div>
      </div>

      <div className="mt-4">
        <input
          type="range"
          min="0"
          max="100"
          value={minBudget}
          onChange={(e) => setMinBudget(Number(e.target.value))}
          className="w-full h-2 bg-sky-700 rounded-full"
        />
      </div>

      <div className="flex justify-between mt-4">
        <select
          value={minBudget}
          onChange={handleMinBudgetChange}
          className="w-1/2 p-2 border border-gray-300 rounded-lg outline-none text-sm text-gray-800"
        >
          {/* You can add more options as needed */}
          <option value="0">Min Budget</option>
          <option value="5">5 Lakhs</option>
          <option value="10">10 Lakhs</option>
          <option value="15">15 Lakhs</option>
        </select>
        <select
          value={maxBudget}
          onChange={handleMaxBudgetChange}
          className="w-1/2 p-2 border border-gray-300 rounded-lg ml-2 outline-none text-sm text-gray-800"
        >
          {/* You can add more options as needed */}
          <option value="100">Max Budget</option>
          <option value="90">90 Crores</option>
          <option value="80">80 Crores</option>
          <option value="70">70 Crores</option>
        </select>
      </div>
    </div>
  );
};

export default BudgetFilter;
