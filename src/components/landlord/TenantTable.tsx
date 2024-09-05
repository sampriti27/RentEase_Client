import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDateAsISO } from "../../utils";
import { Link } from "react-router-dom";

// Dummy data for tenants
const dummyTenants = [
  {
    propertyId: "1",
    tenantName: "John Doe",
    propertyAddress: "123 Main St, Springfield",
    dateOfJoining: "2023-01-15",
  },
  {
    propertyId: "2",
    tenantName: "Jane Smith",
    propertyAddress: "456 Elm St, Springfield",
    dateOfJoining: "2023-02-10",
  },
  {
    propertyId: "3",
    tenantName: "Alice Johnson",
    propertyAddress: "789 Oak St, Springfield",
    dateOfJoining: "2023-03-05",
  },
];

const TenantTable: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <caption className="p-5 text-md md:text-lg font-semibold text-left text-gray-900 bg-white">
          My Tenants
          <p className="mt-1 text-xs md:text-[14px] font-normal text-gray-500">
            View a list of all tenants managed by your account. Check details, such as name, property address, and date of joining for each tenant.
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
              Tenant Name
            </th>
            <th
              scope="col"
              className="px-2 md:px-6 py-3 text-left text-[10px] md:text-[13px] font-medium text-gray-700 bg-gray-300 uppercase tracking-wider"
            >
              Property Address
            </th>
            <th
              scope="col"
              className="px-2 md:px-6 py-3 text-left text-[10px] md:text-[13px] font-medium text-gray-700 bg-gray-300 uppercase tracking-wider hidden lg:table-cell"
            >
              Date of Joining
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
          {dummyTenants.map((tenant, index) => (
            <tr
              key={tenant.propertyId}
              onClick={() =>
                navigate(`/profile/landlord/tenants/${index}`)
              }
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px] font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="px-2 md:px-6 py-4 whitespace-normal text-xs md:text-[14px] text-gray-500 break-words">
                {tenant.tenantName}
              </td>
              <td className="px-2 md:px-6 py-4 whitespace-normal text-xs md:text-[14px] text-gray-500 break-words">
                {tenant.propertyAddress}
              </td>
              <td className="px-2 md:px-6 py-4 whitespace-nowrap text-xs md:text-[14px] text-gray-500 hidden lg:table-cell">
                {formatDateAsISO(tenant.dateOfJoining, true)}
              </td>
              <td className="px-2 md:px-6 py-4 text-right text-sm md:text-[14px]">
                <Link
                  to={`/profile/landlord/tenants/${index}`}
                  className="text-blue-600 text-xs md:text-sm font-medium hover:underline flex items-center justify-end"
                >
                  <span className="">View Details</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenantTable;
