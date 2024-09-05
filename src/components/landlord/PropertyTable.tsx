import React from "react";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "../icons";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AxiosResponse } from "axios";
import { APIResponse, PropertyDetails } from "../../types";
import { deleteProperty, getAllPropertyOfLandlord } from "../../http";
import { enqueueSnackbar } from "notistack";
import { formatDateAsISO } from "../../utils";
import TableLoader from "../loader/TableLoader";
import { useSelector } from "react-redux";

const PropertyTable: React.FC = () => {
  const { userData } = useSelector((state:any) => state.auth);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Fetch all properties for the landlord
  const { data: properties, isLoading } = useQuery({
    queryKey: ["properties/landlord", userData ? userData.userId : "932c3a21-257c-4452-ae0d-db90e4589df6"],
    retry: 3,
    queryFn: async (): Promise<AxiosResponse<APIResponse<PropertyDetails>>> => {
      return await getAllPropertyOfLandlord(userData ? userData.userId : "932c3a21-257c-4452-ae0d-db90e4589df6");
    },
  });

  // Setup mutation for deleting a property
  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteProperty(id), // Accept the property ID to delete
    onSuccess: () => {
      // Refetch properties after a successful deletion
      queryClient.invalidateQueries(["properties/landlord", userData.userId]);
      enqueueSnackbar("Property Deleted successfully!", {
        variant: "success",
      });
    },
    onError: (error: any) => {
      enqueueSnackbar(error?.response.data.message, {
        variant: "error",
      });
    },
  });

  // Handle delete with the property ID
  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // Prevent the default link behavior
    e.stopPropagation(); // Prevent triggering the row click
    deleteMutation.mutate(id); // Pass the property ID to the mutation
  };

  // Ensure that the properties data is an array before mapping
  const propertyList = Array.isArray(properties?.data.data)
    ? properties?.data.data
    : [];

  return (
    <div className="overflow-x-auto mt-3 rounded-lg shadow">
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
          {isLoading ? (
            <TableLoader />
          ) : propertyList.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-4 text-center text-sm md:text-[14px] text-gray-500">
                No properties found.
              </td>
            </tr>
          ) : (
            propertyList.map((property, index) => (
              <tr
                key={property.propertyId}
                onClick={() =>
                  navigate(
                    `/profile/landlord/properties/${property.propertyId}`
                  )
                }
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px] font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-2 md:px-6 py-4 whitespace-normal text-xs md:text-[14px] text-gray-500 break-words">
                  {property.name}
                </td>
                <td className="px-2 md:px-6 py-4 whitespace-normal text-xs md:text-[14px] text-gray-500 break-words">
                  {property.address}
                </td>
                <td className="px-2 md:px-6 py-4 whitespace-normal text-xs md:text-[14px] text-gray-500 break-words hidden lg:table-cell">
                  {property.rent}/month
                </td>
                <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px] text-gray-500 hidden lg:table-cell">
                  {formatDateAsISO(property.dateListed)}
                </td>
                <td className="px-2 md:px-6 py-4 text-right text-sm md:text-[14px]">
                  <a
                    href="#"
                    onClick={(e) => handleDelete(e, property.propertyId)} // Pass the property ID to the delete handler
                    className="text-red-600 hover:underline flex items-center justify-end"
                  >
                    <TrashIcon />
                    <span className="sr-only">Delete</span>{" "}
                    {/* For accessibility */}
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
