import React from "react";
import { useLocation } from "react-router-dom";
import { PropertyDetails as PropertyDetailsType } from "../types";
import ImageCarousel from "../components/property/ImageCarousel";
import ConfigurationCard from "../components/property/ConfigurationCard";

const PropertyDetails: React.FC = () => {
  const location = useLocation();
  const property = location.state?.property as PropertyDetailsType;

  if (!property) {
    return <div>No property details available.</div>;
  }

  return (
    <>
      <div className="w-full px-1 md:px-3 xl:px-36 ">
        <div className="text-xs text-gray-400 flex items-center justify-between py-2 px-4">
          <p>Home</p>
          <p>Posted on Aug 22, 2024 | Ready to move</p>
        </div>
        <div className="px-4 sm:px-0 mt-4 flex justify-start sm:justify-normal">
          {/* Property Price  */}
          <div className="w-1/4 h-full">
            <p className="text-base  sm:text-2xl lg:text-3xl text-gray-500 font-semibold">
              {" "}
              <span className="text-sm  sm:text-xl lg:text-2xl font-normal mr-1">
                &#8377;
              </span>
              60 Thousand
            </p>
            <p className="text-xs sm:text-sm tracking-tighter text-sky-500">
              {" "}
              Deposit Amt &#8377;60 Thousand
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="border-l border-gray-300 mx-4"></div>

          {/* Property Type and move in status  */}
          <div className="text-sm md:text-base">
            <p className="text-base sm:text-xl lg:text-3xl  text-gray-500">
              4 BHK
            </p>
            <p className="text-gray-400 my-1">Flat/ Apartment for rent</p>
            <p className="text-sm text-gray-400">in 101 Pine Road</p>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="hidden sm:block px-4 sm:px-0 border-b border-gray-300 my-4"></div>
        <div className="mt-2 sm:mt-0 flex flex-col lg:flex-row gap-8 lg:gap-4 items-center">
          <div className="w-full lg:w-1/2">
            <ImageCarousel />
          </div>

          <div className="w-full lg:w-1/2">
            <ConfigurationCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
