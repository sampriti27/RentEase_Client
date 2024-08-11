import React from "react";
import PillButton from "../buttons/PillButton";
import { PlusIcon } from "../../icons";

interface Props {
  optionItems: string[]; // Corrected the type assignment
}

const AccordionBody: React.FC<Props> = ({ optionItems }) => {
  return (
    <div className="flex flex-wrap items-center justify-start px-4">
      {optionItems?.map((item, index) => (
        <PillButton key={index} item={item} icon={PlusIcon} />
      ))}
    </div>
  );
};

export default AccordionBody;
