import React from "react";
import crowd from '../assets/images/crowd.jpg';
import Alluminium from '../assets/images/alluminium.jpg';
import { Users, ArrowRight, DollarSign } from "lucide-react";

export default function Solutions() {
  return (
    <div className="w-full p-6 mt-10 flex flex-col items-center gap-20">

      {/* 1. Title + Description */}
      <div className="max-w-2xl text-center flex flex-col gap-10">
        <h2 className="text-4xl lg:text-6xl sm:text-3xl font-semibold text-gray-900">
          Standard Offers
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          We craft simple and powerful tools that make your projects smoother,
          faster, and more reliable. Every solution is built with clarity and purpose.
        </p>
      </div>

      {/* 2. Option Bar */}
      <div className="w-full flex justify-between bg-white rounded-full p-2 text-black">
        <button className="px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-sm text-sm sm:text-base">
          Largescale Solutions
        </button>

        <button className="px-4 py-2  hover:bg-gray-200 transition-colors duration-300 rounded-full shadow-sm text-sm sm:text-base">
          Largescale Solutions
        </button>

        <button className="px-4 py-2 bg-white hover:bg-gray-200 transition-colors duration-300 rounded-full shadow-sm text-sm sm:text-base">
          Largescale Solutions
        </button>
      </div>

      {/* 3. Image + Description */}
      <div className="w-full flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg shadow-sm">
        

        {/* Right Description */}
        <div className="md:w-1/2 flex flex-col gap-3 p-5">
        <p className="text-lg">
          08/24
        </p>
          <h3 className="text-black text-4xl lg:text-6xl sm:text-3xl">
            Alluminium stage with roof construction
          </h3>
          <p className="text-gray-700 text-xl sm:text-lg md:text-2xl lg:text-3xl">
            Decorative dimensions
          </p>

          <div className="flex gap-2">
            <div className="w-auto space-x-4 gap-1 hover:bg-black hover:text-white  transition-colors duration-300 max-w-40 h-10 bg-gray-300 rounded-full text-slate-900 flex items-center justify-center p-5">
              Height:    <span>3m</span>
            </div>

            <div className="w-auto max-w-40 h-10 bg-gray-300 hover:bg-black hover:text-white  transition-colors duration-300 rounded-full text-slate-900 flex items-center justify-center p-5">
             <span className="flex items-center gap-2"> Width: 14m</span>
            </div>

             <div className="w-auto max-w-40 h-10 bg-gray-300 hover:bg-black hover:text-white  transition-colors duration-300 rounded-full text-slate-900 flex items-center justify-center p-5">
             <span className="flex items-center gap-2"> Length: 16m</span>
            </div>
          </div>
           <p className="text-gray-700 text-xl sm:text-lg md:text-2xl lg:text-3xl">
           In addition we offer video and audio solutions
          </p>
         <div className="flex flex-row items-center mt-4 ">
                          <div className='w-10 h-10 bg-gray-300 flex justify-center hover:bg-black hover:text-white  transition-colors items-center rounded-full text-slate-900'><ArrowRight size={20} /></div>
         
         
           <div className="h-10 px-4 bg-gray-300 hover:bg-black hover:text-white  transition-colors rounded-full flex items-center justify-center">
             <p className="text-sm text-black  hover:text-white">Book your slot</p>
           </div>
         </div>

        </div>

          {/* Left Image */}
        <img
          src={Alluminium}
          alt="solution"
          className="w-full md:w-1/2 rounded shadow-md object-cover filter grayscale hover:grayscale-0 transition hover:scale-105 transition-transform duration-700"
        />

      </div>
     
    </div>
  );
}
