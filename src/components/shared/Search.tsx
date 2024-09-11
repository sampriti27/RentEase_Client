import React, { useState } from "react";
import { validateState } from "../../utils";
import { useDispatch } from "react-redux";
import { removeFilter, updateFilter } from "../../store/slices/filterSlice";

const Search: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    const checkStateValidity = validateState(input);
    if (checkStateValidity) {
      dispatch(updateFilter({ paramKey: "state", valueToAdd: input }));
      dispatch(removeFilter({ paramKey: "city", valueToRemove: "" }));
    } else {
      dispatch(updateFilter({ paramKey: "city", valueToAdd: input }));
      dispatch(removeFilter({ paramKey: "state", valueToRemove: "" }));
    }
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="flex items-center w-full mx-auto bg-bg-primary rounded-lg">
      <div className="w-full">
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none text-sm md:text-base placeholder:text-sm placeholder:tracking-wide placeholder:font-normal"
          placeholder="Enter Locality/ Project/ Society/ City"
        />
      </div>
      <div>
        <button
          type="button"
          onClick={handleSearchClick}
          className="flex items-center bg-bg-primary justify-center w-8 h-8 md:w-12 md:h-12 text-gray-800 rounded-r-lg "
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5 hover:scale-110 transition-transform duration-150"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
