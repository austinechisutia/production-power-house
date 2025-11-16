import React from 'react';
import Camera from './assets/images/cam.png';
import { ArrowRight } from "lucide-react";



export default function HeroSection() {

const words = [
    'event',
    'brand',
    'story',
    'business',
    'content',
    'campaign',
    'project',
    'visuals',
    'live show',
    'message',
    'audience'
  ];



  return (
    <>
      {/* Load Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" 
        rel="stylesheet" 
      />

      <div className="" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></span>
                New Features Available
              </div>

              {/* Heading */}
               <h1 className="text-5xl lg:text-6xl font-sans leading-tight text-slate-900">
        Production <br /> 
        and support <br /> 
        for your{' '}
        <span className="inline-block overflow-hidden align-bottom" style={{ width: '280px', height: '1.2em' }}>
          <span className="block animate-scroll font-bold">
            {words.map((word, index) => (
              <span key={index} className="block" style={{ height: '1.2em' }}>
                {word}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {words.map((word, index) => (
              <span key={`duplicate-${index}`} className="block" style={{ height: '1.2em' }}>
                {word}
              </span>
            ))}
          </span>
        </span>
      </h1>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          7.69% {
            transform: translateY(0);
          }
          15.38% {
            transform: translateY(-7.69%);
          }
          23.07% {
            transform: translateY(-7.69%);
          }
          30.76% {
            transform: translateY(-15.38%);
          }
          38.45% {
            transform: translateY(-15.38%);
          }
          46.14% {
            transform: translateY(-23.07%);
          }
          53.83% {
            transform: translateY(-23.07%);
          }
          61.52% {
            transform: translateY(-30.76%);
          }
          69.21% {
            transform: translateY(-30.76%);
          }
          76.90% {
            transform: translateY(-38.45%);
          }
          84.59% {
            transform: translateY(-38.45%);
          }
          92.28% {
            transform: translateY(-46.14%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 26s ease-in-out infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>


                <div className="flex flex-row">
                {/* Description */}
               <div className='w-10 h-10 bg-gray-300 flex justify-center items-center hover:bg-black hover:text-white  transition-colors duration-300 rounded-full text-slate-900'><ArrowRight size={20} /></div>
               <div className='w-50 h-10 bg-gray-300 hover:bg-black hover:text-white  transition-colors rounded-full text-slate-900 flex items-center justify-center'>
                <p className="text-sm text-black hover:text-white  transition-colors">
                  Make your event happen
                </p>
               </div>
                </div>
             
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              
              {/* Main Image Container */}
            <div className="relative overflow-hidden border-slate-400">
  <img 
    src={Camera} 
    alt="Team collaboration" 
    className="w-full h-auto object-cover shadow-2xl scale-105 transition-transform duration-300 hover:scale-110"
  />
</div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}