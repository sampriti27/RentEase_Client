import React, { useState } from "react";
import AccordionHeader from "../shared/accordion/AccordionHeader";
import AccordionBody from "../shared/accordion/AccordionBody";
import { FilterOption } from "../../types";
import { FilterParams } from "../../store/slices/filterSlice";

interface Props {
  option: FilterOption;
}

const Accordion: React.FC<Props> = ({ option }) => {
  const [isOpen, setIsOpen] = useState<boolean>(option.isOpen);

  return (
    <div className=" transition-all duration-300">
      <AccordionHeader
        heading={option.filterName}
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
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
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
        <AccordionBody
          optionItems={option.filterItems}
          filterType={option.title as keyof FilterParams}
        />
      </div>
    </div>
  );
};

export default Accordion;
