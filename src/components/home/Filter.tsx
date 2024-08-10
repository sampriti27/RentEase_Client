import React from "react";
import Accordion from "./Accordion";
import { filterOptions } from "../../constants/filterOptions";
import Budget from "./Budget";
import Sort from "./Sort";

const Filter: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-lg  h-full border text-lg text-center pt-2 flex flex-col justify-evenly">
      <Budget />
      <Sort />
      {filterOptions?.map((option) => (
        <Accordion key={option.id} option={option} />
      ))}
    </div>
  );
};

export default Filter;
