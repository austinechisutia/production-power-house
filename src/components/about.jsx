import React from "react";

export default function About() {
  return (
    <div className="w-full bg-white py-3 flex items-center justify-center">
      <div
        className="
          w-full max-w-4xl 
          flex 
          items-center 
          justify-between 
          text-black 
          text-xs 
          sm:text-sm 
          md:text-base 
          lg:text-lg
          px-2 sm:px-4 md:px-6
          whitespace-nowrap
        "
      >
        <span>Fast Service</span>
        <span>•</span>

        <span>Affordable</span>
        <span>•</span>

        <span>Reliable</span>
        <span>•</span>

        <span>Trusted</span>
      </div>
    </div>
  );
}
