import React from "react";
import backgroundImage from '../assets/images/crowd.jpg';
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <img
        src= {backgroundImage}
        alt="Footer background"
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Together We Can Illuminate Your Show
            and Leave a Lasting Impression
          </h2>
            <div className="flex flex-row items-center justify-center mt-4 ">
                          <div className='w-10 h-10 bg-white flex justify-center hover:bg-black hover:text-white  transition-colors items-center rounded-full text-slate-900'><ArrowRight size={20} /></div>
         
         
           <div className="h-10 px-4 bg-white hover:bg-black hover:text-white  transition-colors rounded-full flex items-center justify-center">
             <p className="text-sm text-black  hover:text-white">Book your slot</p>
           </div>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;