import React, { useState } from "react";
import { FiShoppingCart, FiSearch, FiHeart } from "react-icons/fi";
import logo from "./IMAGE/JMD-removebg-preview.png";
import { Link } from "react-router-dom";

function Navbar({ onWishlistClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" py-2  sticky top-0 z-[99999] bg-gray-200 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="image not found" className="w-[120px] h-[70px]" />
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex space-x-8 ${isOpen ? "block" : "hidden"}`}>
          <li>
            <Link
              to={"/checkout/cart"}
              className="text-black hover:text-black hover:font-bold"
            >
              <FiShoppingCart className="inline-block mr-2" />
              Add to Cart
            </Link>
          </li>
          <li>
            <Link className="text-black hover:text-black hover:font-bold">
              <FiSearch className="inline-block mr-2" />
              Search
            </Link>
          </li>
          <li>
            <Link className="text-black hover:text-black hover:font-bold">
              <FiHeart className="inline-block mr-2" />
              Favorites
            </Link>
          </li>
          <li>
            <Link to={"/signin"} className="text-white hover:text-black bg-orange-500 px-3 rounded-md font-semibold  py-2 hover:font-bold">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
