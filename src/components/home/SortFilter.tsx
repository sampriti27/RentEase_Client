import React, { useState } from "react";
import { sortOptions } from "../../constants/sortOptions";
import { useDispatch } from "react-redux";
import { updateFilter, removeFilter } from "../../store/slices/filterSlice";

const SortFilter: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleCheck: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedValue(value);
      dispatch(updateFilter({ paramKey: "sortBy", valueToAdd: value }));
    } else {
      setSelectedValue(null);
      dispatch(removeFilter({ paramKey: "sortBy", valueToRemove: value }));
    }
  };

  return (
    <div className="flex flex-col items-start justify-start px-4 space-y-2 text-gray-500 text-sm">
      {sortOptions.map((option) => (
        <label key={option.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleCheck}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <span className="text-gray-600">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default SortFilter;
