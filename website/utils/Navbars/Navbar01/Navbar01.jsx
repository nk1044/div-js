import React, { useState } from "react";

function Navbar01() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold">Brand</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-gray-400 transition duration-300">Home</li>
          <li className="hover:text-gray-400 transition duration-300">About</li>
          <li className="hover:text-gray-400 transition duration-300">Services</li>
          <li className="hover:text-gray-400 transition duration-300">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg) translateY(6px)' : 'rotate(0)' }}></div>
          <div className={`w-6 h-1 bg-white mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className="w-6 h-1 bg-white transition-transform duration-300" style={{ transform: isOpen ? 'rotate(-45deg) translateY(-6px)' : 'rotate(0)' }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 mt-4">
          <li className="hover:text-gray-400 transition duration-300">Home</li>
          <li className="hover:text-gray-400 transition duration-300">About</li>
          <li className="hover:text-gray-400 transition duration-300">Services</li>
          <li className="hover:text-gray-400 transition duration-300">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar01;