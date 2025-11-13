import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import podcasting from '../assets/images/podcasting.jpg';
import professionalstage from '../assets/images/professional stage.jpg';
import soundsystem from '../assets/images/sound-system.jpg';
import cameraset from '../assets/images/camera set.jpg';

const Discover = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions that keep our clients ahead of the curve.",
      image: podcasting
    },
    {
      title: "Quality Excellence",
      description: "Every project receives meticulous attention to detail, ensuring the highest standards of quality in everything we deliver.",
      image: professionalstage
    },
    {
      title: "Customer Focus",
      description: "Your success is our priority. We build lasting relationships through dedication, transparency, and exceptional service.",
      image: soundsystem
    },
    {
      title: "Sustainability",
      description: "We're committed to creating solutions that not only meet today's needs but also protect our planet for future generations.",
      image: cameraset
    }
  ];

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl lg:text-7xl sm:text-3xl leading-relaxed text-left text-gray-900 mb-8">
          Discover <br />
          our values
        </h1>

        {/* Two-part layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Text box with navigation */}
          <div className="flex gap-4">
            {/* Navigation arrows */}
            <div className="flex flex-col gap-2 justify-center">
              <button
                onClick={handlePrevious}
                className="p-2 bg-white hover:bg-gray-200 rounded-full shadow transition-colors"
                aria-label="Previous page"
              >
                <ChevronUp className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-white hover:bg-gray-200 rounded-full shadow transition-colors"
                aria-label="Next page"
              >
                <ChevronDown className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Text content box */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-8 w-full">
              <div className="mb-4 text-sm text-gray-500">
                {currentPage + 1} / {pages.length}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {pages[currentPage].title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {pages[currentPage].description}
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96 lg:h-auto">
            <img
              src={pages[currentPage].image}
              alt={pages[currentPage].title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 focus:grayscale-0 transition duration-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;