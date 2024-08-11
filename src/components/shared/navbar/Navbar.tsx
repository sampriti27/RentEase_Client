import React, { useState, useEffect, useRef } from "react";
import logo from "../../../assets/rentease_white.png";
import logo_icon from "../../../assets/RentEase_Icon.png";
import Search from "../Search";
import Button from "../buttons/Button";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const userMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node) &&
        userMenuButtonRef.current &&
        !userMenuButtonRef.current.contains(event.target as Node)
      ) {
        setOpenUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky z-10 top-0 bg-sky-700 border-gray-200 w-full flex items-center justify-between py-4  px-2 sm:px-8 h-[72px]">
      {/* LOGO */}
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
      {/* SEARCH BAR */}
      <div
        className="items-center justify-between flex w-60 sm:w-1/2 px-4 sm:px-0"
        id="navbar-user"
      >
        <Search />
      </div>
      {/* POST PROPERTY + USER ICON */}
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <Button
            text="Post Property"
            badge={
              <span className="bg-green-800 text-green-100 text-[9px] font-medium me-2 px-1 rounded ">
                FREE
              </span>
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
          ref={userMenuButtonRef}
          onClick={(e) => {
            e.stopPropagation();
            setOpenUserMenu(!openUserMenu);
          }}
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
          <motion.div
            initial={{ scale: 0.9, y: "-20%", opacity: 0 }}
            animate={{
              scale: openUserMenu ? 1 : 0.9,
              y: openUserMenu ? "0%" : "-20%",
              opacity: openUserMenu ? 1 : 0,
            }}
            exit={{ scale: 0.9, y: "-20%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                  <button className="flex item-center w-full px-4 py-2 text-xs text-sky-900 bg-sky-100  font-medium rounded-lg hover:text-white hover:bg-sky-600 transition ease-in ">
                    Post Property{" "}
                    <span className="bg-green-800 text-green-100 text-[9px] font-medium ms-2 px-1 rounded ">
                      FREE
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
