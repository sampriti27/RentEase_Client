import React, { useState } from "react";
import mapIcon from "../../assets/images/map-image.png";
import { DownArrow, FilterIcon, SortIcon } from "../icons";
import SortFilter from "./SortFilter";
import { motion } from "framer-motion";

const SearchResult: React.FC = () => {
  const [sortOptionOpen, setSortOptionOpen] = useState<boolean>(false);

  return (
    <div className="text-sky-950 font-medium">
      <p className="tracking-wide text-xl">
        18465 results | Property in Kolkata for Sale
      </p>
      {/* FOR DESKTOP */}
      <div className="hidden sm:flex bg-[#f7f5dc] items-center gap-3 px-4 py-2 rounded-sm mt-5">
        <img alt="Map" src={mapIcon} className="h-6 md:h-8 w-6 md:w-8" />
        <p className="font-medium text-[10px] md:text-sm text-gray-900 flex items-center">
          Get to know more about{" "}
          <span className="font-semibold ps-1 text-xs md:text-sm">Kolkata</span>{" "}
          <span className="ps-1 md:ps-2 font-semibold text-blue-800 text-xs md:text-sm flex items-center">
            <a href="https://en.wikipedia.org/wiki/Kolkata" target="_blank">
              View Insights
            </a>
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
      {/* FOR MOBILE */}
      <div className="flex sm:hidden bg-[#f7f5dc] items-center justify-between px-5 py-2 rounded-sm mt-5">
        <div className="flex items-center">
          <img alt="Map" src={mapIcon} className="h-6 md:h-8 w-6 md:w-8" />
          <p className="text-[13px] ms-2">
            Know
            <span className="ms-1 me-1 font-semibold">Kolkata</span>
            with
          </p>
        </div>
        <span className="text-blue-800 flex items-center text-[13px]">
          <a href="https://en.wikipedia.org/wiki/Kolkata" target="_blank">
            Locality Insights
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 font-bold"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
      {/* FILTER */}
      <div className="block lg:hidden mt-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="text-gray-600 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 cursor-pointer rounded-full text-sm flex items-center py-1 px-3 me-2"
          >
            <FilterIcon />
            Filters
          </button>
          <button
            type="button"
            onClick={() => setSortOptionOpen(!sortOptionOpen)}
            className="text-gray-600 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 cursor-pointer rounded-full text-sm flex items-center py-2 px-3 me-2"
          >
            <SortIcon />
            Sort
            <DownArrow />
          </button>
          {sortOptionOpen && (
            <motion.div
              initial={{ scale: 0.9, y: "-20%", opacity: 0 }}
              animate={{
                scale: sortOptionOpen ? 1 : 0.9,
                y: sortOptionOpen ? "0%" : "-20%",
                opacity: sortOptionOpen ? 1 : 0,
              }}
              exit={{ scale: 0.9, y: '-20%', opacity: 0 }}  
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-3 mt-[170px] z-1 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg py-4"
              id="user-dropdown"
            >
              <SortFilter />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
