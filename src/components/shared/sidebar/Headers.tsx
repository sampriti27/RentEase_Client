import React from "react";
import logo from "../../../assets/images/download.svg";
import mobileLogo from "../../../assets/download_phone.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Headers: React.FC = () => {
  const { userData } = useSelector((state:any) => state.auth) 
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between px-4 mt-6 ">
        {/* Logo for screens md and above */}
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="hidden md:block h-4 cursor-pointer"
          alt="RentEase Logo"
        />

        {/* Mobile logo for screens below md */}
        <img
          onClick={() => navigate("/")}
          src={mobileLogo}
          alt="Mobile Icon"
          className="block md:hidden w-10 ml-12 -mt-2 cursor-pointer"
        />

        <div className="flex justify-center items-center mr-2">
          <span className="text-gray-800 font-medium">Hi,</span>
          <span className=" ml-1 font-bold text-blue-500">{userData ? userData.fullName : "Jhon Doe"}</span>
        </div>
      </div>
    </>
  );
};

export default Headers;
