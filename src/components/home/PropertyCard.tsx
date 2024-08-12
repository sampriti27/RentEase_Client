import React from "react";
import propertyImg from "../../assets/images/modern-apartment-architecture_1268-14696.avif";
import Button from "../shared/buttons/Button";
import Rating from "../shared/badges/Rating";
import TenantTypeBadge from "../shared/badges/TenantTypeBadge";

const PropertyCard: React.FC = () => {
  return (
    <div className="w-full md:h-[328px] bg-white rounded-lg border shadow-md p-4 flex flex-col sm:flex-row items-center gap-2 my-6">
      {/* Prroperty Image  */}
      <div className="w-full md:w-2/5 h-full border rounded-lg">
        <img
          src={propertyImg}
          alt="property image"
          className="rounded-lg w-full h-full"
        />
      </div>
      {/* Property Details Container  */}
      <div className="w-full md:w-3/5 h-full  rounded-lg p-2">
        <div className="h-3/4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {/* Property Name  */}
              <p className="text-sm md:text-lg text-gray-800 font-medium">
                Happy Homes
              </p>
              {/* Property Rating  */}
              <Rating />
            </div>
            <div>
              {/* Tenant Type Family, Bachelor  */}
              <TenantTypeBadge type="Bachelor" />
            </div>
          </div>
          {/* Property Type 2 / 3/ 4 bhk  */}
          <h3 className="text-xs md:text-sm font-medium text-gray-800 mt-2">
            {" "}
            2BHK Flat {/* Property Address  */}
            <span className="text-gray-600 font-normal">
              in Southern Bypass, Kolkata South
            </span>
          </h3>
          <div className="mt-4 flex justify-start sm:justify-normal">
            {/* Property Price  */}
            <div className="w-1/3 h-full">
              <p className="text-sm md:text-lg text-gray-800 font-semibold">
                {" "}
                &#8377; 30K - 35K
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="border-l border-gray-300 mx-4"></div>

            {/* Property Type and move in status  */}
            <div className="text-sm md:text-base">
              <p className="font-semibold text-gray-800">2 BHK</p>
              <p className="text-gray-500">Ready to Move</p>
            </div>
          </div>

          {/* Property Setails  */}
          <div>
            <p className="text-xs md:text-sm text-gray-500  tracking-tight my-2">
              {" "}
              Happy Homes V offers 2 BHK apartments in EM Bypass Extension,
              Kolkata South, at an affordable price range of Rs. 29.07 Lac to
              Rs. 31.39..{" "}
            </p>
          </div>
        </div>
        <div className="h-1/4  flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/3  pt-4  text-gray-500">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <p>Owner</p>
              <p>. 4 mo ago</p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">Vishnu Shankar</p>
          </div>
          <div className="w-full sm:w-2/3  flex items-center  sm:justify-center gap-2 mt-2 sm:mt-0">
            <Button text="View Number" />
            <Button
              text="Contact"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              }
              iconPosition="left"
              isDark={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
