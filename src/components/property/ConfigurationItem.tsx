import React from "react";
import { formatCurrency } from "../../utils";

interface Props {
  imgsrc: string;
  title: string;
  content: string | number;
  subcontent?: string | number;
}
const ConfigurationItem: React.FC<Props> = ({
  imgsrc,
  title,
  content,
  subcontent,
}) => {
  return (
    <div className="p-2">
      <div className="flex items-start gap-2">
        <img src={imgsrc} alt="configurationIcon" className="w-6" />
        <p className="text-gray-400 text-[15px] md:text-[17px] ">{title}</p>
      </div>
      <p className="text-gray-700 font-medium text-[13px] md:text-[15px] mt-1">
        {title === "Rent" ? formatCurrency(content as number) : content}
      </p>
      <span className="text-[13px]">
        {title === "Rent"
          ? "Deposit " + formatCurrency(subcontent as number)
          : subcontent}
      </span>
    </div>
  );
};

export default ConfigurationItem;
