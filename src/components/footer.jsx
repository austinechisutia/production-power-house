import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=600&fit=crop"
        alt="Footer background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Together We Can Illuminate Your Show<br />
            and Leave a Lasting Impression
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;