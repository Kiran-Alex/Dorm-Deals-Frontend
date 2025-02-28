import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { SearchContext } from "../Contexts/SearchContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { searchDispatch } = useContext(SearchContext);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchSubmitHandler = () => {
    setSearchInput("");
    searchDispatch({
      type: "SEARCHSTARTED",
      payload: { value: searchInput },
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 p-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="text-white text-2xl font-bold ml-8 flex items-center">
          DormDeals<span className="text-red-500 text-3xl">.</span>
        </div>

        {/* Middle Section */}
        <div className="w-1/4 flex">
          <input
            onChange={searchInputHandler}
            type="text"
            className="w-full px-2 py-1 border rounded-s-2xl"
            placeholder="Search..."
          />
          <button
            onClick={searchSubmitHandler}
            className="px-4 bg-red-600 rounded-e-3xl"
          >
            <FaSearch className="text-white" />
          </button>
        </div>

        {/* Tab Section */}
        <div className="flex justify-center space-x-4 relative">
          {/* Categories Dropdown Button */}
          {/* <button
            onClick={toggleDropdown}
            className="text-white hover:text-red-500 px-4 transition duration-300 ease-in-out flex items-center"
          >
            Categories
            <FaCaretDown className="ml-2" />
          </button> */}
          {/* {isDropdownOpen && (
            <div className="absolute left-0 mt-8 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
              <ul className="py-2">
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Electronics
                  </Link>
                </li>
              </ul>
            </div>
          )} */}
          <Link
            to="/dashboard"
            className="text-white hover:text-red-500 px-4 transition duration-300 ease-in-out"
          >
            All Items
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-red-500 px-4 transition duration-300 ease-in-out"
          >
            About us
          </Link>
          <Link
            to="/dashboard/sell-item"
            className="text-white bg-red-500 rounded-3xl hover:text-red-500 px-4 transition duration-300 ease-in-out"
          >
            Sell
          </Link>
        </div>

        {/* Right Section */}
        <div className="text-white flex items-center">
          <div className="rounded-full flex justify-center items-center h-8 w-8 ">
            <IoPersonOutline />
          </div>
          <Link to="/dashboard/profile" className="hover:underline">
            My Account
          </Link>
        </div>
      </nav>
      <div className="bg-red-500 h-0.5"></div>
    </>
  );
};

export default Navbar;
