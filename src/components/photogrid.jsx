// PhotoGrid.jsx
import React from "react";

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
                className="w-full h-full object-cover rounded-lg shadow-md filter grayscale hover:grayscale-0 transition duration-300"
              />
            </figure>
          ))}
        </div>
    </div>


<div className="flex flex-row items-center mt-4 justify-center">
  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

  <div className="h-10 px-4 bg-gray-300 rounded-full flex items-center justify-center">
    <p className="text-sm text-black">Discover More...</p>
  </div>
</div>
    </>





  );
};

export default PhotoGrid;
