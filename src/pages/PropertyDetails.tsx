import React from "react";
import { useLocation } from "react-router-dom";
import { PropertyDetails as PropertyDetailsType } from "../types";
import ImageCarousel from "../components/property/ImageCarousel";
import ConfigurationCard from "../components/property/ConfigurationCard";
import Highlights from "../components/property/Highlights";
import AmenitiesItem from "../components/property/AmenitiesItem";

const PropertyDetails: React.FC = () => {
  const location = useLocation();
  const property = location.state?.property as PropertyDetailsType;

  if (!property) {
    return <div>No property details available.</div>;
  }

  return (
    <>
      <div className="w-full px-4 sm:px-8  xl:px-36 ">
        <div className="text-xs text-gray-400 flex items-center justify-between py-2">
          <p>Home</p>
          <p>Posted on Aug 22, 2024 | Ready to move</p>
        </div>
        <div className="mt-4 flex justify-start sm:justify-normal">
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
        <div className="hidden sm:block  border-b border-gray-300 my-4"></div>
        {/* Images and configuration section  */}
        <div className="mt-2   sm:mt-0 flex flex-col lg:flex-row gap-8 lg:gap-4 items-center">
          <div className="w-full lg:w-1/2">
            <ImageCarousel />
          </div>

          <div className="w-full lg:w-1/2">
            <ConfigurationCard />
          </div>
        </div>
        {/* Highlight Section  */}
        <div className="mt-8 lg:mt-16">
          <h3 className="font-medium text-lg text-center lg:text-left">
            Why you should consider this property?
          </h3>
          <Highlights />
        </div>
        {/* Amenities Section  */}
        <div className="mt-8 lg:mt-16 mb-16 border-t-2 border-t-gray-300 border-b-2 border-b-gray-300  py-4 lg:py-8">
          <div className="grid gap-2  grid-cols-2 grid-flow-row lg:gap-4 lg:grid-flow-col lg:grid-rows-2 auto-cols-fr">
            <AmenitiesItem title="Transaction Type" content="Resale" />
            <AmenitiesItem title="Pet Friendly" content="Yes" />
            <AmenitiesItem title="Property Ownership" content="Freehold" />
            <AmenitiesItem title="Water Source" content="24*7 Water" />
            <AmenitiesItem title="Furnishing" content="Unfurnished" />
            <AmenitiesItem title="Power Backup" content="None" />
            <AmenitiesItem title="Corner Property" content="Yes" />
            <AmenitiesItem title="Property Code" content="D75936497" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
