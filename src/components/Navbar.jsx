// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-poppins text-black">Alfred</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="text-gray-800 hover:text-black transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-black transition-colors">
              About Us
            </a>
            <a href="#services" className="text-gray-800 hover:text-black transition-colors">
              Services
            </a>
            <a href="#services" className="text-gray-800 hover:text-black transition-colors">
              Gallery
            </a>
            {/* Contact as a button */}
            <a
              href="#contact"
              className="px-4 py-2 bg-white text-black rounded-4xl hover:bg-gray-800 transition-colors"
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
