import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyTable: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left text-gray-500">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
            My Properties
            <p className="mt-1 text-sm font-normal text-gray-500">
              View a list of all properties managed by your account. Check details, such as location, features, and pricing, for each property you own.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Sl. No.</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Address</th>
              <th scope="col" className="px-6 py-3">Rent</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Date Listed</th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => navigate("/profile/landlord/properties/1234566")} className="bg-white border-b border-gray-200 cursor-pointer">
              <td className="px-6 py-4">1</td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Modern Apartment
              </th>
              <td className="px-6 py-4">123 Main St, Cityville</td>
              <td className="px-6 py-4">$1,500/month</td>
              <td className="px-6 py-4">Spacious 2-bedroom apartment with city view</td>
              <td className="px-6 py-4">August 1, 2024</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 hover:underline ml-2">
                  Delete
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-200">
              <td className="px-6 py-4">2</td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Cozy Studio
              </th>
              <td className="px-6 py-4">456 Oak Dr, Townsville</td>
              <td className="px-6 py-4">$900/month</td>
              <td className="px-6 py-4">Studio with modern amenities and a central location</td>
              <td className="px-6 py-4">July 20, 2024</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 hover:underline ml-2">
                  Delete
                </a>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4">3</td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Luxury Condo
              </th>
              <td className="px-6 py-4">789 Pine St, Uptown</td>
              <td className="px-6 py-4">$2,200/month</td>
              <td className="px-6 py-4">3-bedroom condo with a private pool and rooftop access</td>
              <td className="px-6 py-4">August 15, 2024</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 hover:underline ml-2">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyTable;
