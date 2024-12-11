import React from "react";
import target from "../../assets/images/targetIcon.png";
import HighlightItem from "./HighlightItem";

const Highlights: React.FC = () => {
  return (
    <div className="bg-white rounded-sm flex flex-col sm:flex-row items-center  mt-4">
      <div className="flex flex-row items-center justify-center sm:justify-normal sm:items-start gap-4 sm:gap-0 sm:flex-col  w-full sm:w-1/4 p-4 md:p-8">
        <img src={target} alt="target-icon" className="w-7 h-7" />
        <div>
          <h3 className="text-base md:text-lg font-medium mt-2">
            Key Highlights
          </h3>
          <p className="text-xs md:text-sm">of the property</p>
        </div>
      </div>
      <div className="w-full sm:w-3/4 p-4">
        <div className="bg-[#f0f9ff] p-4 rounded-lg  grid grid-rows-2 grid-flow-col gap-4">
          <HighlightItem item="Spacious" />
          <HighlightItem item="Well Ventilated" />
          <HighlightItem item="24/7 Security" />
          <HighlightItem item="Pet Friendly" />
          <HighlightItem
            item="
24/7 Water "
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
