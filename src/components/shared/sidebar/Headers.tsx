import React from "react";
import logo from "../../../assets/images/download.svg";
import mobileLogo from "../../../assets/download_phone.svg";

const Headers: React.FC = () => {
  return (
    <>
      <div className="flex justify-between px-4 mt-6 ">
        {/* Logo for screens md and above */}
        <img src={logo} className="hidden md:block h-4" alt="RentEase Logo" />

        {/* Mobile logo for screens below md */}
        <img
          src={mobileLogo}
          alt="Mobile Icon"
          className="block md:hidden w-10 ml-12 -mt-2"
        />

        <div className="flex justify-center items-center mr-2">
          <span className="text-gray-800 font-medium">Hi,</span>
          <span className=" ml-1 font-bold text-blue-500">Amrit Raj</span>
        </div>
      </div>
    </>
  );
};

export default Headers;
