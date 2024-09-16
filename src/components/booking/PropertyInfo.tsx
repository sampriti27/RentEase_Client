import React from "react";
import { formatCurrency, formatDateAsISO } from "../../utils";
import { PropertyDetails } from "../../types";
import { ConfigurationCard, ImageCarousel } from "../property";

interface Props {
  property: PropertyDetails;
}
const PropertyInfo: React.FC<Props> = ({ property }) => {
  return (
    <>
      <div className="w-full px-4 sm:px-8  xl:px-24 ">
        <div className="text-xs text-gray-400 flex items-center justify-between py-4">
          <p>Home &gt; {property?.name} &gt; Booking </p>
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
              <p className="text-gray-400">{property?.propertyType} for rent</p>
              <p className="text-sm text-gray-400">in {property?.address}</p>
            </div>
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
            <ConfigurationCard
              pConfiguration={property?.configuration as string}
              pfloor={property?.floor as string}
              pRent={property?.rent as number}
              pAddress={property?.address as string}
              pRentAge={property?.propertyAge as string}
              pDeposit={property?.deposit as number}
              pName={property?.name as string}
              pFurnishingStatus={property?.furnishedStatus as string}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyInfo;
