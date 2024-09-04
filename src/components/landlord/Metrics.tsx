import React from "react";
import { useSelector } from "react-redux";

const Metrics: React.FC = () => {
  const { isUserActivated } = useSelector((state: any) => state.auth);
  return (
    <>
      {/* Overall Performance */}
      <section
        className={`container mx-auto ${
          !isUserActivated ? "py-4" : "py-14"
        } px-6 md:px-4`}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-xl">Overall Performance</h2>
            <p className="text-sm font-normal text-gray-600 md:w-full w-4/5">
              Upward arrow indicating an increase in revenue compared to the
              previous period.
            </p>
          </div>
          <div className="shrink-0 relative inline-block text-left">
            <button className="flex items-center gap-1 border border-gray-300 px-4 py-2 rounded-md text-gray-700 bg-white focus:outline-none">
              last 24h
              <svg
                className="w-3 h-3 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-blue-100 shadow-sm border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <p className="font-medium text-xs text-blue-600">Revenue</p>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                <p className="font-medium text-xs text-red-500">12%</p>
              </div>
            </div>
            <p className="mt-1 font-semibold text-2xl text-blue-gray-900">
              $50,846.90
            </p>
          </div>

          <div className="bg-teal-100 shadow-sm border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <p className="font-medium text-xs text-teal-600">
                Outbound Clicks
              </p>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 15l7-7 7 7" />
                </svg>
                <p className="font-medium text-xs text-green-500">16%</p>
              </div>
            </div>
            <p className="mt-1 font-semibold text-2xl text-blue-gray-900">
              10,342
            </p>
          </div>

          <div className="bg-purple-100 shadow-sm border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <p className="font-medium text-xs text-purple-600">
                Total Audience
              </p>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 15l7-7 7 7" />
                </svg>
                <p className="font-medium text-xs text-green-500">10%</p>
              </div>
            </div>
            <p className="mt-1 font-semibold text-2xl text-blue-gray-900">
              19,720
            </p>
          </div>

          <div className="bg-pink-100 shadow-sm border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <p className="font-medium text-xs text-pink-600">Event Count</p>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                <p className="font-medium text-xs text-red-500">10%</p>
              </div>
            </div>
            <p className="mt-1 font-semibold text-2xl text-blue-gray-900">
              20,000
            </p>
          </div>
        </div>
      </section>
      {/* Property Information */}
      <section className={`container mx-auto py-4 px-6 md:px-4`}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-xl">Property Details</h2>
            <p className="text-sm font-normal text-gray-600 md:w-full w-4/5">
              Overview of Your Properties and Tenants with Key Metrics Like
              Occupancy, Turnover, and Rent.
            </p>
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-fuchsia-100 shadow-sm border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <p className="font-medium text-xs text-fuchsia-600">
                Total Properties
              </p>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                <p className="font-medium text-xs text-red-500">12%</p>
              </div>
            </div>
            <p className="mt-1 font-semibold text-2xl text-blue-gray-900">12</p>
          </div>
          <div className="bg-rose-100 shadow-sm border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <p className="font-medium text-xs text-rose-600">Total Tenants</p>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 15l7-7 7 7" />
                </svg>
                <p className="font-medium text-xs text-green-500">12%</p>
              </div>
            </div>
            <p className="mt-1 font-semibold text-2xl text-blue-gray-900">22</p>
          </div>
          <div className="bg-cyan-100 shadow-sm border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <p className="font-medium text-xs text-cyan-600">
                Active Tenants
              </p>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 15l7-7 7 7" />
                </svg>
                <p className="font-medium text-xs text-green-500">12%</p>
              </div>
            </div>
            <p className="mt-1 font-semibold text-2xl text-blue-gray-900">12</p>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Metrics;
