// src/components/WhyChooseUs.jsx
import React from "react";
import { TrendingUp, Cpu, Sigma } from "lucide-react";


const choose = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl lg:text-7xl sm:text-3xl leading-relaxed text-left text-gray-900 mb-8">
          Why <br></br>Choose Us
        </h1>

        {/* Example content */}
       <div className="flex flex-col md:flex-row gap-6">
  <div className="bg-white p-6 rounded-lg shadow-md flex-1 transform hover:scale-105 transition-transform duration-700 ease-in-out">
    <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full mb-3">
      <TrendingUp size={20} />
    </div>
    <h2 className="text-lg md:text-xl font-semibold mb-2">10+ years in market</h2>
    <p className="text-sm md:text-base">Our ten years of experience</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md flex-1 transform hover:scale-105 transition-transform duration-700 ease-in-out">
    <div className="w-10 h-10 bg-gray-200 rounded-full mb-3 flex justify-center items-center">
      <Cpu size={20} />
    </div>
    <h2 className="text-lg md:text-xl font-semibold mb-2">Updated Technology</h2>
    <p className="text-sm md:text-base">
      The average age of our equipment does not exceed 2 years
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md flex-1 transform hover:scale-105 transition-transform duration-700 ease-in-out">
    <div className="w-10 h-10 bg-gray-200 rounded-full mb-3 flex justify-center items-center">
      <Sigma size={20} />
    </div>
    <h2 className="text-lg md:text-xl font-semibold mb-2">150+ Projects</h2>
    <p className="text-sm md:text-base">
      More than 150 projects being implemented every year
    </p>
  </div>
</div>

      </div>

      
    </section>
  );
};

export default choose;
