import React from "react";

interface Props {
  imgsrc: string | undefined;
  title: string;
}
const AmenitiesItem: React.FC<Props> = ({ imgsrc, title }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={imgsrc}
        alt={title + "Icon"}
        className="w-4 h-4 md:w-7 md:h-7"
      />
      <p className="text-sm md:text-base">{title} </p>
    </div>
  );
};

export default AmenitiesItem;
