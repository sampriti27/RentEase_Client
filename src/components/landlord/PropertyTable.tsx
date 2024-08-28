import React from "react";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "../icons";

const PropertyTable: React.FC = () => {
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      name: "Modern Apartment",
      address: "123 Main St, Cityville",
      details: "Spacious 2-bedroom apartment with city view",
      dateListed: "August 15, 2024",
    },
    {
      id: 2,
      name: "Cozy Studio",
      address: "456 Oak Dr, Townsville",
      details: "Studio with modern amenities and a central location",
      dateListed: "July 20, 2024",
    },
    {
      id: 3,
      name: "Luxury Condo",
      address: "789 Pine St, Uptown, Jehanabd, bihar 804408",
      details: "3-bedroom condo with a private pool and rooftop access",
      dateListed: "August 1, 2024",
    },
    {
      id: 4,
      name: "Luxury Condo",
      address: "789 Pine St, Uptown, Jehanabd, bihar 804408",
      details: "3-bedroom condo with a private pool and rooftop access",
      dateListed: "August 1, 2024",
    },
    {
      id: 5,
      name: "Luxury Condo",
      address: "789 Pine St, Uptown, Jehanabd, bihar 804408",
      details: "3-bedroom condo with a private pool and rooftop access",
      dateListed: "August 1, 2024",
    },
  ];

  return (
    <div className="overflow-x-auto mt-6 rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <caption className="p-5 text-md md:text-lg font-semibold text-left text-gray-900 bg-white">
          My Properties
          <p className="mt-1 text-xs md:text-[14px] font-normal text-gray-500">
            View a list of all properties managed by your account. Check
            details, such as location, features, and pricing, for each property
            you own.
          </p>
        </caption>
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-2 md:px-6 py-3 text-left text-[10px] md:text-[13px] font-medium text-gray-700 bg-gray-300 uppercase tracking-wider"
            >
              Sl. No.
            </th>
            <th
              scope="col"
              className="px-2 md:px-6 py-3 text-left text-[10px] md:text-[13px] font-medium text-gray-700 bg-gray-300 uppercase tracking-wider"
            >
              Property Name
            </th>
            <th
              scope="col"
              className="px-2 md:px-6 py-3 text-left text-[10px] md:text-[13px] font-medium text-gray-700 bg-gray-300 uppercase tracking-wider"
            >
              Address
            </th>
            <th
              scope="col"
              className="px-2 md:px-6 py-3 text-left text-[10px] md:text-[13px] font-medium text-gray-700 bg-gray-300 uppercase tracking-wider hidden lg:table-cell"
            >
              Rent
            </th>
            <th
              scope="col"
              className="px-2 md:px-6 py-3 text-left text-[10px] md:text-[13px] font-medium text-gray-700 bg-gray-300 uppercase tracking-wider hidden lg:table-cell"
            >
              Date Listed
            </th>
            <th
              scope="col"
              className="px-2 md:px-6 py-3 text-left text-[10px] md:text-[13px] font-medium text-gray-700 bg-gray-300 uppercase tracking-wider"
            >
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {properties.map((property) => (
            <tr
              key={property.id}
              onClick={() =>
                navigate(`/profile/landlord/properties/${property.id}`)
              }
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px] font-medium text-gray-900">
                {property.id}
              </td>
              <td className="px-2 md:px-6 py-4 whitespace-normal text-xs md:text-[14px] text-gray-500 break-words">
                {property.name}
              </td>
              <td className="px-2 md:px-6 py-4 whitespace-normal text-xs md:text-[14px] text-gray-500 break-words">
                {property.address}
              </td>

              <td className="px-2 md:px-6 py-4 whitespace-normal text-xs md:text-[14px] text-gray-500 break-words hidden lg:table-cell">
                150000/month
              </td>
              <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px] text-gray-500 hidden lg:table-cell">
                {property.dateListed}
              </td>
              <td className="px-2 md:px-6 py-4 text-right text-sm md:text-[14px]">
                <a
                  href="#"
                  onClick={(e) => e.stopPropagation()} // Prevents triggering the row click
                  className="text-red-600 hover:underline flex items-center justify-end"
                >
                  <TrashIcon />
                  {/* Adjust the size of the icon if needed */}
                  <span className="sr-only">Delete</span>{" "}
                  {/* For accessibility */}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
