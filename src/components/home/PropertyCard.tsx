import React from "react";
import Button from "../shared/buttons/Button";
import Rating from "../shared/badges/Rating";
import TenantTypeBadge from "../shared/badges/TenantTypeBadge";
import { PropertyDetails } from "../../types";
import ContactIcon from "../icons/ContactIcon";
import { Link } from "react-router-dom";
import { formatCurrency, formatDateADistance } from "../../utils";
import { ImageCarousel } from "../property";

interface Props {
  item: PropertyDetails;
}
const PropertyCard: React.FC<Props> = ({ item }) => {
  // display only partial description
  const truncatedDescription =
    item.description.split(" ").length > 30
      ? item.description.split(" ").slice(0, 30).join(" ") + "..."
      : item.description;
  return (
    <div className="w-full md:h-[328px] bg-white rounded-lg border shadow-md p-4 flex flex-col sm:flex-row items-center gap-2 my-6 z-0">
      {/* Prroperty Image  */}
      <div className="w-full md:w-2/5 h-full border rounded-lg">
        <ImageCarousel />
      </div>
      {/* Property Details Container  */}
      <div className="w-full md:w-3/5 h-full  rounded-lg p-2">
        <div className="h-3/4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {/* Property Name  */}
              <p className="text-sm md:text-lg text-gray-800 font-medium">
                {item.name}
              </p>
              {/* Property Rating  */}
              <Rating />
            </div>
            <div>
              {/* Tenant Type Family, Bachelor  */}
              <TenantTypeBadge type={item.tenantType} />
            </div>
          </div>
          {/* Property Type 2 / 3/ 4 bhk  */}
          <h3 className="text-xs md:text-sm font-medium text-gray-800 mt-2">
            {" "}
            {item.size} Flat {/* Property Address  */}
            <span className="text-gray-600 font-normal">in {item.address}</span>
          </h3>
          <div className="mt-4 flex justify-start sm:justify-normal">
            {/* Property Price  */}
            <div className="w-1/3 h-full">
              <p className="text-sm md:text-lg text-gray-800 font-semibold">
                {formatCurrency(item.rent)}
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="border-l border-gray-300 mx-4"></div>

            {/* Property Type and move in status  */}
            <div className="text-sm md:text-base">
              <p className="font-semibold text-gray-800">{item.size}</p>
              <p className="text-gray-500">{item.availabilityStatus}</p>
            </div>
          </div>

          {/* Property details  */}
          <div>
            <p className="text-xs md:text-sm text-gray-500  tracking-tight my-2">
              {truncatedDescription}
            </p>
          </div>
        </div>
        <div className="h-1/4  flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/3  pt-4  text-gray-500">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <p>Owner</p>
              <p>. {formatDateADistance(item.dateListed)} </p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              {item.landlord.fullName}
            </p>
          </div>
          <div className="w-full sm:w-2/3  flex items-center  sm:justify-center gap-2 mt-2 sm:mt-0">
            <Link
              to={`/properties/${item.propertyId}`}
              className="w-full"
              target="_blank"
            >
              <Button text="View Details" />
            </Link>
            <Button
              text="Contact"
              icon={<ContactIcon />}
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
