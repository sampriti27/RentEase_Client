import React from "react";
import tick from "../../assets/images/checked_9709605.png";

interface Props {
  item: string;
}
const HighlightItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={tick} alt="tick" className="w-4 h-4 md:w-7 md:h-7" />
      <p className="text-sm md:text-base text-gray-900">{item}</p>
    </div>
  );
};

export default HighlightItem;
