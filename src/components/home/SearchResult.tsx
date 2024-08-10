import React from "react";
import mapIcon from "../../assets/images/map-image.png";

const SearchResult: React.FC = () => {
  return (
    <div className="text-sky-950 font-medium">
      <p className="tracking-wide text-xl">18465 results | Property in Kolkata for Sale</p>
      <div className="bg-[#f7f5dc] flex items-center gap-3 px-4 py-2 rounded-sm mt-5">
        <img alt="Map" src={mapIcon} className="h-6 md:h-8 w-6 md:w-8" />
        <p className="font-medium text-[10px] md:text-sm text-gray-900 flex items-center">
          Get to know more about <span className="font-semibold ps-1 text-xs md:text-sm">Kolkata</span>{" "}
          <span className="ps-1 md:ps-2 font-semibold text-blue-800 text-xs md:text-sm flex items-center">
            <a href="https://en.wikipedia.org/wiki/Kolkata" target="_blank">View Insights</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-3 font-bold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SearchResult;
