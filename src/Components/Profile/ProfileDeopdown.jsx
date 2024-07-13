import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { LuUserSquare2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useCurrentUser from "../Hooks/useCurrentUser";
import useAuth from "../Hooks/useAuth";
import DropdownItem from "./DropdownItem";

const ProfileDropdown = () => {
  const dropdownRef = useRef(null);
  const { currentUser, isLoading } = useCurrentUser();
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState(false);

  // Handle logout
  const handleLogOut = () => {
    logOut();
    setIsOpen(false); // Close the dropdown
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Active status change
  useEffect(() => {
    if (currentUser) {
      const interval = setInterval(() => {
        setActiveStatus((prevStatus) => !prevStatus);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [currentUser]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

 

  return (
    <div ref={dropdownRef} className="relative inline-block text-left z-50">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
          className="relative"
        >
          <div className="relative">
            {/* User profile image or text data */}
            {currentUser && user ? (
              currentUser.profilePhoto ? (
                <img
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                  src={currentUser.profilePhoto}
                  alt="User Profile"
                />
              ) : (
                <img
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                  src="https://img.freepik.com/premium-photo/blue-circle-with-man-s-head-circle-with-white-background_745528-3499.jpg"
                  alt="User Profile"
                />
              )
            ) : (
              <Link to={'/login'}>
                <Button
                  size="sm"
                  className="capitalize bg-blue-500 flex justify-center items-center text-md gap-2 w-full"
                >
                  Login
                </Button>
              </Link>
            )}
            {/* Active status indicator */}
            {user && (
              <div
                className={`absolute bottom-0 right-0 ${activeStatus ? "bg-green-500" : "bg-gray-500"
                  } w-3 h-3 border-2 border-white rounded-full animate-ping`}
              />
            )}
          </div>
        </button>
      </div>

      {/* Dropdown menu */}
      {currentUser && user && isOpen && (
        <div
          className="origin-top-right absolute left-0 lg:left-auto lg:right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="p-6 text-gray-600" role="none">
            <ul className="space-y-4">
              <li className="text-center text-xl font-bold text-red-500 -mb-3">
                {currentUser?.fullName}
              </li>
              <li className="text-center font-semibold">
                {currentUser?.email}
              </li>
              <li>
                <hr className="border border-gray-300 w-3/4 mx-auto mb-4" />
              </li>
              {/* Menu items */}
              <DropdownItem icon={<AiOutlineAppstore />} to="/dashboard">
                Dashboard
              </DropdownItem>
             
              <DropdownItem
                icon={<LuUserSquare2 />}
                to="/dashboard/profile"
              >
                Profile
              </DropdownItem>
              <DropdownItem
                icon={<IoSettingsOutline />}
                to="/dashboard/settings"
              >
                Settings
              </DropdownItem>
              {/* Logout button */}
              <li>
                <Button
                  onClick={handleLogOut}
                  color="red"
                  size="sm"
                  className="capitalize flex justify-center items-center text-md gap-2 w-full"
                >
                  Logout <FaArrowRight />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
