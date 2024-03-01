import React, { useState } from 'react';
import { FiShoppingCart, FiSearch, FiHeart } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-900 py-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold Pacifico cursive">JMD MAGNETS</h1>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
          <li><a href="#" className="text-black hover:text-gray-300"><FiShoppingCart className="inline-block mr-2" />Add to Cart</a></li>
          <li><a href="#" className="text-black hover:text-gray-300"><FiSearch className="inline-block mr-2" />Search</a></li>
          <li><a href="#" className="text-black hover:text-gray-300"><FiHeart className="inline-block mr-2" />Favorites</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
