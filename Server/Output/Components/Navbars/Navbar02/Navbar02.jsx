import React, { useState, useEffect } from "react";

function Navbar02() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-10 transition-all duration-300 bg-white shadow-md ${
        isScrolled ? "bg-opacity-90 backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto px-2 sm:px-12">
        <div className="flex items-center justify-around h-16 gap-3">
          {/* Logo */}
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            MyBrand
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg font-medium text-gray-700">
            {["Home", "Features", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-3 py-2 transition-all duration-300 hover:text-blue-600 group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:block relative w-64">
            <input
              type="text"
              placeholder="Search..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className={`w-full px-4 py-2 text-sm text-gray-700 bg-gray-50 border rounded-full
                transition-all duration-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-100
                ${searchFocused ? "border-blue-500 bg-white" : "border-gray-300 hover:border-gray-400"}`}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center py-6 space-y-6">
          <button className="absolute top-5 right-5 p-2" onClick={() => setIsMenuOpen(false)}>❌</button>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            MyBrand
          </div>
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-100"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
          </div>
          <ul className="space-y-4 text-lg font-medium text-gray-700 text-center">
            {["Home", "Features", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 rounded-lg hover:bg-blue-100 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar02;
