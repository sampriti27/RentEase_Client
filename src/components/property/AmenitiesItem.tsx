import React from "react";

interface Props {
  title: string;
  content: string;
}
const AmenitiesItem: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-sm md:text-base text-gray-400 tracking-tight">
        {title} :
      </p>
      <p className="text-sm md:text-base text-gray-800 font-medium">
        {content}
      </p>
    </div>
  );
};

export default AmenitiesItem;
