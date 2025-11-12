import React from 'react';
import Camera from './assets/images/cam.png';



export default function HeroSection() {
  return (
    <>
      {/* Load Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" 
        rel="stylesheet" 
      />

      <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
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
              <h1 className="text-xl lg:text-6xl font-poppins leading-tight text-slate-900">
               Production <br/> and support <br/> for your event
              </h1>


                <div className="flex flex-row">
                {/* Description */}
               <div className='w-10 h-10 bg-gray-300 rounded-full text-slate-900'></div>
               <div className='w-50 h-10 bg-gray-300 rounded-full text-slate-900 flex items-center justify-center'>
                <p className="text-sm text-black">
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