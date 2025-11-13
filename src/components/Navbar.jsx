// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-poppins text-black">Alfred</h1>
          </div>

          {/* Desktop Navigation Links */}
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
            <a href="#gallery" className="text-gray-800 hover:text-black transition-colors">
              Gallery
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-white text-black rounded-3xl hover:bg-gray-800 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black p-2 rounded-full focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-4 pt-2 pb-4 space-y-2">
          <a
            href="#home"
            className="block text-gray-800 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-800 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#services"
            className="block text-gray-800 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#gallery"
            className="block text-gray-800 hover:text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 bg-white text-black rounded-3xl hover:bg-gray-800 hover:text-white transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
