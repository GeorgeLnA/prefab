import React from 'react';
import { Link } from 'react-router-dom';

const SmartChoice: React.FC = () => {
  return (
    <section id="smart-choice" className="py-16 md:py-20 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <div>
              <div className="text-primary text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4 text-center lg:text-left">SMART CHOICE</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 md:mb-6 leading-tight drop-shadow-lg text-center lg:text-left">
                The Smart Choice for Modern Living
              </h2>
              <p className="text-lg md:text-2xl text-white/90 mb-4 md:mb-6 leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                Experience the future of home living with advanced automation, energy efficiency, and integrated security. Every home is designed to be intelligent, sustainable, and effortless to control.
              </p>
            </div>

            {/* Key Smart Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-gray-800/50 p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-primary/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white">Home Automation</h3>
                </div>
                <p className="text-sm md:text-base text-white/80">Control lighting, climate, and more from your phone or voice assistant.</p>
              </div>

              <div className="bg-gray-800/50 p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-primary/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white">Energy Efficiency</h3>
                </div>
                <p className="text-sm md:text-base text-white/80">A+++ energy rating, smart thermostats, and solar-ready design.</p>
              </div>

              <div className="bg-gray-800/50 p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-primary/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white">Security & Safety</h3>
                </div>
                <p className="text-sm md:text-base text-white/80">Smart locks, cameras, and sensors for peace of mind.</p>
              </div>

              <div className="bg-gray-800/50 p-4 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-primary/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white">Voice & App Control</h3>
                </div>
                <p className="text-sm md:text-base text-white/80">Seamless integration with Alexa, Google Home, and mobile apps.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 md:mt-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-black font-bold px-6 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get a Smart Home Demo
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <video
                src="/Make_a_video_202507222207.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover bg-black"
                poster="/Skandy 120 front-1 2.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            {/* Decorative Elements - Hidden on mobile */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary rounded-sm opacity-20 hidden md:block"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary rounded-sm opacity-30 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartChoice;