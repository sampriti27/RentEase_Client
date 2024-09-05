import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Alerts: React.FC = () => {
  const { userData } = useSelector((state: any) => state.auth);
  return (
    <div
      className="bg-blue-100 border-t-4 mb-3 border-blue-500 rounded-b text-blue-900 mt-6 px-4 py-3 shadow-md"
      role="alert"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
        <div className="flex items-center gap-3">
          <svg
            className="fill-current h-4 md:h-6 w-4 md:w-6 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
          <div>
            <p className="font-bold text-sm text-left sm:text-left">
              Your profile is not complete
            </p>
            <p className="text-[11px] text-left sm:text-left">
              Please complete your profile to access all features.{" "}
              <Link
                to={userData ? `/profile/landlord/${userData.userId}` : "123"}
                className="text-blue-500 underline hover:text-blue-700"
              >
                Click here
              </Link>
              &nbsp; to complete your profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
