import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import logo from "../../../assets/images/download.svg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "../../../store/slices/userSlice";

interface SideBarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SideBarProps) => {
  const { userData} = useSelector((state:any) => state.auth)
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // api call to server
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    dispatch(clearAuth());
  }

  return (
    <div className="flex">
      {/* Hamburger Menu for Small Screens */}
      <div className="fixed top-4 left-4 md:hidden z-50">
        <button
          onClick={toggleSidebar}
          className="rounded-lg text-blue-700 p-1 focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.0"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar for Large Screens */}
      <div className="hidden md:flex fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col justify-start items-center gap-2">
          <Link to="/profile/landlord">
            <div
              className="bg-blue-500 hover:bg-blue-400 rounded-lg text-white p-1 flex justify-center items-center"
              data-tooltip-id="rentease"
              data-tooltip-content="RentEase"
              data-tooltip-place="right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <Tooltip id="rentease" />
          </Link>

          <div className="flex flex-col gap-5 mt-10 justify-start items-center">
            <Link to="/profile/landlord">
              <div
                className="bg-blue-100 hover:bg-blue-200  text-blue-600 hover:text-blue-700 rounded-lg  p-1 flex justify-center items-center"
                data-tooltip-id="dashboard"
                data-tooltip-content="Dashboard"
                data-tooltip-place="right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                  />
                </svg>
              </div>
              <Tooltip id="dashboard" />
            </Link>
            <Link to="/profile/landlord/properties">
              <div
                className="bg-blue-100 hover:bg-blue-200  text-blue-600 hover:text-blue-700 rounded-lg  p-1 flex justify-center items-center"
                data-tooltip-id="properties"
                data-tooltip-content="Properties"
                data-tooltip-place="right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
              </div>
              <Tooltip id="properties" />
            </Link>
            <Link to="/profile/landlord/tenants">
              <div
                className="bg-blue-100 hover:bg-blue-200  text-blue-600 hover:text-blue-700 rounded-lg  p-1 flex justify-center items-center"
                data-tooltip-id="tenants"
                data-tooltip-content="Tenants"
                data-tooltip-place="right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <Tooltip id="tenants" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-2">
          <Link to={`/profile/landlord/${userData ? userData.userId : "123"}`}>
            <div
              className="bg-blue-100 hover:bg-blue-200  text-blue-600 hover:text-blue-700 rounded-lg  p-1 flex justify-center items-center"
              data-tooltip-id="profile"
              data-tooltip-content="Profile"
              data-tooltip-place="right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <Tooltip id="profile" />
          </Link>
          <Link onClick={handleLogout} to="">
            <div
              className="bg-blue-100 hover:bg-blue-200  text-blue-600 hover:text-blue-700 rounded-lg  p-1 flex justify-center items-center mb-5 "
              data-tooltip-id="logout"
              data-tooltip-content="Logout"
              data-tooltip-place="right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </div>
            <Tooltip id="logout" />
          </Link>
        </div>
      </div>

      {/* Sidebar Popup for Small Screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex md:hidden">
          <motion.div className="w-64 bg-white p-4"
          initial={{ x: "-100%" }} // Start position (off-screen left)
          animate={{ x: 0 }} // End position (on-screen)
          exit={{ x: "-100%" }} // Exit position (back off-screen left)
          transition={{ type: "tween", duration: 0.5 }} // Control the smoothness
          >
            <div className="flex justify-between items-center mb-4">
              <img onClick={() => navigate("/profile/landlord")} src={logo} alt="main-icon" className="w-36 mt-1" />
              <button
                onClick={toggleSidebar}
                className="text-blue-700 focus:outline-none"
              >
                {/* Close Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.0"
                  stroke="currentColor"
                  className="w-6 h-6 font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Sidebar content remains the same as in your original code */}
            <div className="flex flex-col gap-5 mt-10">
              <Link to="/profile/landlord" onClick={toggleSidebar} className="w-full">
                <div
                  className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-700 rounded-lg p-2 flex items-center gap-2"
                  data-tooltip-id="dashboard"
                  data-tooltip-content="Dashboard"
                  data-tooltip-place="right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                    />
                  </svg>
                  <span>Dashboard</span>
                </div>
              </Link>

              <Link to="/profile/landlord/properties" onClick={toggleSidebar} className="w-full">
                <div
                  className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-700 rounded-lg p-2 flex items-center gap-2"
                  data-tooltip-id="properties"
                  data-tooltip-content="Properties"
                  data-tooltip-place="right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                    />
                  </svg>
                  <span>Properties</span>
                </div>
              </Link>

              <Link to="/profile/landlord/tenants" onClick={toggleSidebar} className="w-full">
                <div
                  className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-700 rounded-lg p-2 flex items-center gap-2"
                  data-tooltip-id="tenants"
                  data-tooltip-content="Tenants"
                  data-tooltip-place="right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                  <span>Tenants</span>
                </div>
              </Link>
              <Link to={`/profile/landlord/${userData ? userData.userId : "123"}`} onClick={toggleSidebar} >
                <div
                  className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-700 rounded-lg p-2 flex justify-start items-center w-full"
                  data-tooltip-id="profile"
                  data-tooltip-content="Profile"
                  data-tooltip-place="right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span>Profile</span>
                </div>
                <Tooltip id="profile" />
              </Link>
              <Link onClick={handleLogout} to="">
                <div
                  className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-700 rounded-lg p-2 flex justify-start items-center w-full mb-5"
                  data-tooltip-id="logout"
                  data-tooltip-content="Logout"
                  data-tooltip-place="right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                    />
                  </svg>
                  <span>Logout</span>
                </div>
                <Tooltip id="logout" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      <main className="ml-0 md:ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
