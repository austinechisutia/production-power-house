// PhotoGrid.jsx
import React from "react";
import { ArrowRight } from "lucide-react";


const PhotoGrid = ({ images }) => {
  return (
    <>
   <div className="w-full overflow-x-auto px-6 py-6">
        <div
          className="
            grid grid-flow-col 
            auto-cols-[280px] 
            gap-4 
            items-start 
            snap-x snap-mandatory 
            scroll-pt-6 px-4
            cursor-grab active:cursor-grabbing
          "
        >
          {images.map((src, i) => (
            <figure
              className={`snap-start ${i % 2 === 0 ? "row-span-2" : "row-span-1"} aspect-square`}
              key={i}
            >
              <img
                src={src}
                alt={`grid-img-${i}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg shadow-md filter transform hover:scale-105 transition-transform duration-700 ease-in-out grayscale hover:grayscale-0 focus:grayscale-0 transition duration-100"
              />
            </figure>
          ))}
        </div>
    </div>


<div className="flex flex-row items-center mt-4 justify-center">
                 <div className='w-10 h-10 bg-gray-300 flex justify-center hover:bg-black hover:text-white  transition-colors items-center rounded-full text-slate-900'><ArrowRight size={20} /></div>


  <div className="h-10 px-4 bg-gray-300 hover:bg-black hover:text-white  transition-colors rounded-full flex items-center justify-center">
    <p className="text-sm text-black  hover:text-white">Discover More...</p>
  </div>
</div>
    </>





  );
};

export default PhotoGrid;
