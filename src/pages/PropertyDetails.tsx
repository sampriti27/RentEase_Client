import React, { useState } from "react";
import ImageCarousel from "../components/property/ImageCarousel";
import ConfigurationCard from "../components/property/ConfigurationCard";
import Highlights from "../components/property/Highlights";
import { desc } from "../constants/propertyDescription";
import alarm from "../assets/images/bell_8967963.png";
import staff from "../assets/images/technician_17474326.png";
import van from "../assets/images/van_963684.png";
import { amenitiesIcon } from "../constants";
import OwnerDetails from "../components/landlord/OwnerDetails";
import EnquiryForm from "../components/property/EnquiryForm";
import CrystalButton from "../components/shared/buttons/CrystalButton";

const PropertyDetails: React.FC = () => {
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);

  const words = desc.split(" ");
  const description =
    words.length > 100 ? words.slice(0, 100).join(" ") + "..." : desc;
  return (
    <>
      <div className="w-full px-4 sm:px-8  xl:px-36 ">
        <div className="text-xs text-gray-400 flex items-center justify-between py-2">
          <p>Home</p>
          <p>Posted on Aug 22, 2024 | Ready to move</p>
        </div>
        <div className="mt-4 flex justify-start sm:justify-normal">
          {/* Property Price  */}
          <div className="w-1/2 sm:w-1/4 h-full">
            <p className="text-base  sm:text-2xl lg:text-3xl text-gray-600 font-semibold">
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
          <div className="text-sm md:text-base  w-full flex items-center justify-between">
            <div>
              <p className="font-medium text-base sm:text-xl lg:text-3xl  text-gray-600">
                4 BHK
              </p>
              <p className="text-gray-400 my-1">Flat/ Apartment for rent</p>
              <p className="text-sm text-gray-400">in 101 Pine Road</p>
            </div>
            <div className="hidden sm:block">
              <CrystalButton text="Book Now" isDark={true} />
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="hidden sm:block  border-b border-gray-300 my-4"></div>

        <div className="block sm:hidden my-4">
          <CrystalButton text="Book Now" isDark={true} />
        </div>
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
        {/* Furniture Section  */}
        <div className="mt-8 lg:mt-16 text-gray-500 border-t-2 border-t-gray-300  py-4 lg:py-8">
          <p className=" font-medium text-lg ">Semi-Furnished</p>
          <p className="tracking-tight mt-1">Furnishing Details</p>
          <div className="grid gap-2  grid-cols-2 grid-flow-row lg:gap-4 lg:grid-flow-col lg:grid-rows-1 auto-cols-fr mt-4">
            <div className="flex items-center gap-2">
              <img
                src={amenitiesIcon["Television"]}
                alt="tv"
                className="w-4 h-4 md:w-7 md:h-7"
              />
              <p className="text-sm md:text-base">Television</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={amenitiesIcon["Air conditioning"]}
                alt="tv"
                className="w-4 h-4 md:w-7 md:h-7"
              />
              <p className="text-sm md:text-base">Air conditioning</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={amenitiesIcon["Bed"]}
                alt="tv"
                className="w-4 h-4 md:w-7 md:h-7"
              />
              <p className="text-sm md:text-base">Bed</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={amenitiesIcon["Refrigerator"]}
                alt="tv"
                className="w-4 h-4 md:w-7 md:h-7"
              />
              <p className="text-sm md:text-base">Refrigerator</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={amenitiesIcon["Television"]}
                alt="tv"
                className="w-4 h-4 md:w-7 md:h-7"
              />
              <p className="text-sm md:text-base">Television</p>
            </div>
          </div>
        </div>

        {/* Features Section  */}
        <div className="text-gray-500 border-t-2 border-t-gray-300 border-b-2 border-b-gray-300  py-4 lg:py-8">
          <p className=" font-medium text-lg ">Features</p>
          <div className="grid gap-2  grid-cols-2 grid-flow-row lg:gap-4 lg:grid-flow-col lg:grid-rows-1 auto-cols-fr mt-4">
            <div className="flex items-center gap-2">
              <img src={alarm} alt="tick" className="w-4 h-4 md:w-7 md:h-7" />
              <p className="text-sm md:text-base">Security / Fire Alarm</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={staff} alt="tick" className="w-4 h-4 md:w-7 md:h-7" />
              <p className="text-sm md:text-base">Maintenance Staff</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={van} alt="tick" className="w-4 h-4 md:w-7 md:h-7" />
              <p className="text-sm md:text-base ">Waste Disposal</p>
            </div>
          </div>
        </div>

        {/* Property-Description Section  */}
        <div className="py-4 lg:py-8 text-gray-500">
          <p className=" font-medium text-lg">About Property</p>
          <p className="mt-2 tracking-tight text-sm">
            <span className="text-base font-medium">Address:</span> Chiria
            bagan, Kolkata North, Kolkata
          </p>

          {words.length >= 100 && !showFullDescription && (
            <>
              <p className="text-sm tracking-tighter mt-2 text-justify text-gray-500">
                {description}
              </p>
              <span
                className="text-sm cursor-pointer hover:underline underline-offset-2"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                More &#8811;
              </span>
            </>
          )}
          {showFullDescription && (
            <p className="text-sm tracking-tighter mt-2 text-justify text-gray-500">
              {desc}
            </p>
          )}
        </div>
        {/* Owner Details and Enquiry Form Section  */}
        <div className=" w-full bg-white shadow-sm flex flex-col md:flex-row items-center mb-10">
          <div className="w-full md:w-1/2 p-4 sm:p-8">
            <OwnerDetails />
          </div>
          <div className="w-full md:w-1/2 p-4 sm:p-8">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
