import React, { useState } from "react";
import AccordionHeader from "../shared/accordion/AccordionHeader";
import SortFilter from "./SortFilter";

const Sort: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <AccordionHeader
        heading="Sort By"
        iconArrowDown={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`size-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <SortFilter />
      </div>
    </>
  );
};

export default Sort;
