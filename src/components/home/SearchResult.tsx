import React, { useState } from "react";
import mapIcon from "../../assets/images/map-image.png";
import {
  ApplyIcon,
  CloseIcon,
  DownArrow,
  FilterIcon,
  SortIcon,
} from "../icons";
import SortFilter from "./SortFilter";
import { motion } from "framer-motion";
import { filterOptions } from "../../constants/filterOptions";
import Accordion from "./Accordion";
import Budget from "./Budget";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, selectPlace } from "../../store/slices/filterSlice";
import { PropertyDetails } from "../../types";

interface Props {
  result: PropertyDetails[];
}

const SearchResult: React.FC<Props> = ({ result }) => {
  const [sortOptionOpen, setSortOptionOpen] = useState<boolean>(false);
  const [filterOptionOpen, setFilterOptionOpen] = useState<boolean>(false);
  const place = useSelector(selectPlace);
  const dispatch = useDispatch();
  const handleClose = () => {
    setFilterOptionOpen(false);
    dispatch(clearFilters());
  };

  return (
    <div className="text-sky-950 font-medium">
      <p className="tracking-wide text-xl">
        {result?.length} Results | Property <span>in {place}</span> for Rent
      </p>
      {/* FOR DESKTOP */}
      <div className="hidden sm:flex bg-[#f7f5dc] items-center gap-3 px-4 py-2 rounded-sm mt-5">
        <img alt="Map" src={mapIcon} className="h-6 md:h-8 w-6 md:w-8" />
        <p className="font-medium text-[10px] md:text-sm text-gray-900 flex items-center">
          Get to know more about{" "}
          <span className="font-semibold ps-1 text-xs md:text-sm">{place}</span>{" "}
          <span className="ps-1 md:ps-2 font-semibold text-blue-800 text-xs md:text-sm flex items-center">
            <a href={`https://en.wikipedia.org/wiki/${place}`} target="_blank">
              View Insights
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-3 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </p>
      </div>
      {/* BELOW CODE MOBILE SCREEN*/}
      <div className="flex sm:hidden bg-[#f7f5dc] items-center justify-between px-2 py-2 rounded-sm mt-5">
        <div className="flex items-center">
          <img alt="Map" src={mapIcon} className="h-6 md:h-8 w-6 md:w-8" />
          <p className="text-[13px] ms-2">
            Know
            <span className="ms-1 me-1 font-semibold">{place}</span>
            with
          </p>
        </div>
        <span className="text-blue-800 flex items-center text-[13px]">
          <a href={`https://en.wikipedia.org/wiki/${place}`} target="_blank">
            Locality Insights
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
      {/* FILTER + SORT*/}
      <div className="block lg:hidden mt-4">
        <div className="flex items-center justify-between">
          {/* FILTER */}
          <button
            onClick={() => setFilterOptionOpen(!filterOptionOpen)}
            type="button"
            className="text-gray-600 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 cursor-pointer rounded-full text-sm flex items-center py-1 px-3 me-2"
          >
            <FilterIcon />
            Filters
          </button>

          {/* SORT */}
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
              exit={{ scale: 0.9, y: "-20%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-3 mt-[170px] z-10 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg py-4"
              id="user-dropdown"
            >
              <SortFilter />
            </motion.div>
          )}
          {filterOptionOpen && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }} // Starts from below the viewport
              animate={{ y: "0%", opacity: 1 }} // Moves to the top
              exit={{ y: "100%", opacity: 0 }} // Moves back down
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 w-full h-full z-50 bg-white divide-y divide-gray-100  shadow-lg overflow-y-scroll scrollbar-hide"
              id="filter-dropdown"
            >
              <div className="flex items-center justify-between py-3 px-4 bg-gray-100">
                <p className="sm:text-xl flex items-center gap-2">
                  <CloseIcon onClick={handleClose} size={4} />
                  Filters
                </p>
                <p className="text-xs cursor-pointer" onClick={handleClose}>
                  Clear All
                </p>
              </div>
              <Budget />
              {filterOptions?.map((option) => (
                <Accordion key={option.id} option={option} />
              ))}

              <button
                type="button"
                className="fixed bottom-4 right-4 bg-sky-500 text-white p-3 rounded-md shadow-lg hover:bg-sky-600 transition-colors duration-300"
                onClick={() => setFilterOptionOpen(false)}
              >
                <ApplyIcon />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
