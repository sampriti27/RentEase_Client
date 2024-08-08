import React, { useState, useEffect, useRef } from "react";
import logo from "../../../assets/rentease_white.png";
import logo_icon from "../../../assets/RentEase_Icon.png";
import Search from "../Search";
import Button from "../buttons/Button";

const Navbar: React.FC = () => {
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      userMenuRef.current &&
      !userMenuRef.current.contains(event.target as Node)
    ) {
      setOpenUserMenu(false);
    }
  };

  useEffect(() => {
    if (openUserMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openUserMenu]);

  return (
    <div className="bg-sky-700 border-gray-200 w-full flex items-center justify-between mx-auto py-4  px-2 sm:px-8 h-[72px] fixed">
      <div className="w-1/8 h-full flex items-center">
        <a
          href="https://rent-ease-client-two.vercel.app/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="hidden sm:block h-4" alt="RentEase Logo" />
          <img
            src={logo_icon}
            className="block sm:hidden h-8"
            alt="RentEase Logo"
          />
        </a>
      </div>

      <div
        className="items-center justify-between flex w-60 sm:w-1/2 px-4 sm:px-0"
        id="navbar-user"
      >
        <Search />
      </div>
      <div className="flex md:w-1/4 items-center px:2 lg:px-4 relative  justify-between">
        <div className="w-2/3 lg:w-1/2  hidden sm:block">
          <Button
            text="Post Property"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 text-sky-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            }
            iconPosition="right"
          />
        </div>
        <button
          type="button"
          className="flex text-sm items-center justify-end lg:gap-1 w-auto"
          id="user-menu-button"
          aria-expanded={openUserMenu}
          aria-controls="user-dropdown"
          onClick={() => setOpenUserMenu(!openUserMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {openUserMenu && (
          <div
            ref={userMenuRef}
            className="absolute right-0 mt-[272px] z-50 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
            id="user-dropdown"
          >
            <div className="px-4 py-3 hover:bg-gray-50 rounded-lg">
              <span className="block font-medium text-sm text-sky-700 truncate cursor-pointer">
                LOGIN/REGISTER
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-text-color hover:bg-gray-50"
                >
                  For LandLords
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-text-color hover:bg-gray-50"
                >
                  For Tenants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-text-color hover:bg-gray-50"
                >
                  Recently Viewed
                </a>
              </li>
              <li>
                <div className="border-t border-gray-100 pt-4 px-4">
                  <button className="block w-full px-4 py-2 text-sm text-sky-900 bg-sky-100  font-medium rounded-lg hover:text-white hover:bg-sky-600 transition ease-in ">
                    Post Property
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
