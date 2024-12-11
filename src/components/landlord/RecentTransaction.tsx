import React from "react";

const RecentTransaction: React.FC = () => {
  return (
    <section className="container mx-auto py-4 px-4">
      <h2 className="font-bold text-xl mb-4">Recent Transactions by Tenants</h2>
      <p className="text-sm text-gray-600 mb-6">
        Track recent transactions including Tenant ID, Tenant Email, Property Name, Rent, and Date.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-left text-gray-600">Tenant ID</th>
              <th className="py-3 px-4 text-left text-gray-600">Tenant Email</th>
              <th className="py-3 px-4 text-left text-gray-600">Property Name</th>
              <th className="py-3 px-4 text-left text-gray-600">Rent</th>
              <th className="py-3 px-4 text-left text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row with Java UUID format for Tenant ID */}
            <tr className="border-b">
              <td className="py-3 px-4">550e8400</td>
              <td className="py-3 px-4">john.doe@example.com</td>
              <td className="py-3 px-4">Sunset Apartments</td>
              <td className="py-3 px-4">$1200</td>
              <td className="py-3 px-4">2024-09-01</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentTransaction;
