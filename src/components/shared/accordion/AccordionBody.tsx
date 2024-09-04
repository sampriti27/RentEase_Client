import React from "react";
import PillButton from "../buttons/PillButton";
import { PlusIcon } from "../../icons";
import { FilterParams } from "../../../store/slices/filterSlice";
import CheckedIcon from "../../icons/CheckedIcon";

interface Props {
  optionItems: string[];
  filterType: keyof FilterParams; // Add a prop for filter type
}

const AccordionBody: React.FC<Props> = ({ optionItems, filterType }) => {
  return (
    <div className="flex flex-wrap items-center justify-start px-4">
      {optionItems?.map((item, index) => (
        <PillButton
          key={index}
          item={item}
          filterType={filterType}
          icon={PlusIcon}
          activeIcon={CheckedIcon}
        />
      ))}
    </div>
  );
};

export default AccordionBody;
