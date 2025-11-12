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
          text-sm 
          sm:text-base 
          md:text-lg
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
