import React from "react";

interface Props {
  heading: string;
  iconArrowDown: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccordionHeader: React.FC<Props> = ({
  heading,
  iconArrowDown,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      className="flex justify-between items-center p-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h4 className="text-gray-800">{heading}</h4>
      <div>{iconArrowDown}</div>
    </div>
  );
};

export default AccordionHeader;
