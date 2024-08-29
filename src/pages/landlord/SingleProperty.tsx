import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackArrow, UpdateIcon } from "../../components/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { desc } from "../../constants/propertyDescription";
import ImageCarousel from "../../components/property/ImageCarousel";
import ConfigurationCard from "../../components/property/ConfigurationCard";
import Highlights from "../../components/property/Highlights";
import CrystalButton from "../../components/shared/buttons/CrystalButton";
import { motion } from "framer-motion";
import { amenitiesIcon } from "../../constants";
import UpdateProperty from "../../components/landlord/UpdateProperty";

const SingleProperty: React.FC = () => {
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const words = desc.split(" ");
  const description =
    words.length > 100 ? words.slice(0, 100).join(" ") + "..." : desc;

  // Modal component with Framer Motion animation
  const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Update Property</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        {/* Update Property form or content goes here */}
        <UpdateProperty />
      </motion.div>
    </div>
  );

  return (
    <>
      <div className="px-4 py-14">
        <div className="flex gap-4">
          <div
            onClick={() => navigate(-1)}
            className="bg-blue-100 p-1 w-10 mb-4 cursor-pointer rounded-full text-blue-500 hover:bg-blue-200"
          >
            <BackArrow />
          </div>
          <div onClick={() => setIsModalOpen(!isModalOpen)}>
            <CrystalButton
              text="Update Property"
              iconPosition="right"
              icon={<UpdateIcon />}
              isDark={true}
            />
          </div>
        </div>

        <div className="w-full px-4">
          <div className="text-xs text-gray-400 flex items-center justify-between py-2">
            <p>Landlord &gt; Properties &gt; Luxury Apartment </p>
            <p>Posted on Aug 22, 2024 | Ready to move</p>
          </div>
          <div className="mt-4 flex justify-start sm:justify-normal">
            {/* Property Price  */}
            <div className="w-1/4 h-full">
              <p className="text-base  sm:text-2xl lg:text-3xl text-gray-800 font-semibold">
                {" "}
                <span className="text-sm  sm:text-xl lg:text-2xl font-normal mr-1">
                  &#8377;
                </span>
                60 Thousand
              </p>
              <p className="text-xs sm:text-sm tracking-tighter text-blue-500">
                {" "}
                Deposit Amt &#8377;60 Thousand
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="border-l border-gray-300 mx-4"></div>

            {/* Property Type and move in status  */}
            <div className="text-sm md:text-base">
              <p className="text-base sm:text-xl lg:text-3xl  text-gray-800 font-semibold">
                4 BHK
              </p>
              <p className="text-gray-800">Flat/ Apartment for rent</p>
              <p className="text-sm text-gray-800 -mt-1">in 101 Pine Road</p>
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
            <div className="grid gap-2  grid-cols-2 grid-flow-row lg:gap-4 lg:grid-flow-col lg:grid-rows-1 auto-cols-fr mt-4"></div>
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
        </div>
      </div>
      {/* Render the Modal conditionally */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default SingleProperty;
