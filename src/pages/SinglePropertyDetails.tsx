import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import {
  AmenitiesItem,
  ConfigurationCard,
  EnquiryForm,
  Highlights,
  ImageCarousel,
} from "../components/property";
import { amenitiesIcon, featureIcon } from "../constants";
import OwnerDetails from "../components/landlord/OwnerDetails";

import CrystalButton from "../components/shared/buttons/CrystalButton";

import { APIResponse, Landlord, PropertyDetails } from "../types";

import { getPropertyById } from "../http";
import {
  editedDescription,
  findIcon,
  formatCurrency,
  formatDateAsISO,
} from "../utils";
import SinglePropertyLoader from "../components/loader/SinglePropertyLoader";

const SinglePropertyDetails: React.FC = () => {
  const { propertyId } = useParams();

  const [showFullDescription, setShowFullDescription] = useState<boolean>(true);
  const [property, setProperty] = useState<PropertyDetails>();

  const { data, isLoading } = useQuery({
    queryKey: ["properties", propertyId],
    retry: 3,
    queryFn: async (): Promise<AxiosResponse<APIResponse<PropertyDetails>>> => {
      return await getPropertyById(propertyId);
    },
  });

  useEffect(() => {
    setProperty(data?.data.data as PropertyDetails);
  }, [data?.data.data]);

  // console.log(property);
  // console.log(propertyId);

  const fullDescription = property?.description || "";
  const truncatedDescription = editedDescription(fullDescription);

  useEffect(() => {
    document.title = "RentEase | Property Details";
  }, []);

  return (
    <>
      {isLoading ? (
        <SinglePropertyLoader />
      ) : (
        <div className="w-full px-4 sm:px-8  xl:px-36 ">
          <div className="text-xs text-gray-400 flex items-center justify-between py-4">
            <p>Home &gt; {property?.name}</p>
            <p>
              {formatDateAsISO(property?.dateListed)} |{" "}
              {property?.availabilityStatus === "Available"
                ? "Ready to move"
                : "Booked"}
            </p>
          </div>
          <div className="mt-4 flex justify-start sm:justify-normal">
            {/* Property Price  */}
            <div className="w-1/2 sm:w-1/4 h-full">
              <p className="text-base  sm:text-2xl lg:text-3xl text-gray-700 font-semibold">
                {" "}
                {formatCurrency(property?.rent as number)}
              </p>
              <p className="text-xs sm:text-sm tracking-tighter text-sky-500">
                Deposit Amt &nbsp;
                {formatCurrency(property?.deposit as number)}
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="border-l border-gray-300 mx-4"></div>

            {/* Property Type and move in status  */}
            <div className="text-sm md:text-base  w-full flex items-center justify-between">
              <div>
                <p className="font-medium text-base sm:text-xl lg:text-3xl  text-gray-700">
                  {property?.size}
                </p>
                <p className="text-gray-400">
                  {property?.propertyType} for rent
                </p>
                <p className="text-sm text-gray-400">in {property?.address}</p>
              </div>
              <div className="hidden sm:block">
                <CrystalButton text="Book Now" color="sky" />
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
              <ConfigurationCard
                pConfiguration={property?.configuration as string}
                pfloor={property?.floor as string}
                pRent={property?.rent as number}
                pAddress={property?.address as string}
                pRentAge={property?.propertyAge as string}
                pDeposit={property?.deposit as number}
                pName={property?.name as string}
              />
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
          {(property?.furnishedAmenities?.length as number) > 0 && (
            <div className="mt-8 lg:mt-16 text-gray-500 border-t-2 border-t-gray-300  py-4 lg:py-8">
              <p className=" font-medium text-lg ">
                {property?.furnishedStatus}
              </p>
              <p className="tracking-tight mt-1">Furnishing Details</p>
              <div className="grid gap-2  grid-cols-2 grid-flow-row lg:gap-4 lg:grid-flow-col lg:grid-rows-1 auto-cols-fr mt-4">
                {property?.furnishedAmenities.map((item, ind) => (
                  <AmenitiesItem
                    imgsrc={findIcon(item, amenitiesIcon)}
                    title={item}
                    key={ind}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Features Section  */}
          <div className="text-gray-500 border-t-2 border-t-gray-300 border-b-2 border-b-gray-300  py-4 lg:py-8">
            <p className=" font-medium text-lg ">Features</p>
            <div className="grid gap-2  grid-cols-2 grid-flow-row lg:gap-4 lg:grid-flow-col lg:grid-rows-1 auto-cols-fr mt-4">
              {property?.otherAmenities.map((item, ind) => (
                <AmenitiesItem
                  imgsrc={featureIcon[item]}
                  title={item}
                  key={ind}
                />
              ))}
            </div>
          </div>

          {/* Property-Description Section  */}
          <div className="py-4 lg:py-8 text-gray-500">
            <p className=" font-medium text-lg">About Property</p>
            <p className="mt-2 tracking-tight text-sm">
              <span className="text-base font-medium">Address:</span>
              {property?.address}
            </p>
            {fullDescription.length > 100 && !showFullDescription && (
              <>
                <p className="text-sm tracking-tighter mt-2 text-justify text-gray-500">
                  {truncatedDescription}
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
                {fullDescription}
              </p>
            )}
          </div>
          {/* Owner Details and Enquiry Form Section  */}
          <div className=" w-full bg-white shadow-sm flex flex-col md:flex-row items-center mb-10">
            <div className="w-full md:w-1/2 p-4 sm:p-8">
              <OwnerDetails landlord={property?.landlord as Landlord} />
            </div>
            <div className="w-full md:w-1/2 p-4 sm:p-8">
              <EnquiryForm propertyId={property?.propertyId} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePropertyDetails;
