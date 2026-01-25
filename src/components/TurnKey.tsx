import React from 'react';
import { AnimatedButton } from './ui/animated-button';

const SmartChoice: React.FC = () => {
  return (
    <section id="smart-choice" className="min-h-[60vh] md:h-screen md:min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center py-8 sm:py-10 md:py-4 lg:py-8 xl:py-12 md:border-0 border-0">
      <div className="w-full px-4 sm:px-5 flex flex-col items-center justify-center flex-1 overflow-y-auto">
        {/* Text Section - Full width, centered */}
        <div className="w-full mb-4 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-10 2xl:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 leading-tight drop-shadow-lg text-center px-1 sm:px-2 md:px-0">
            The Smart Choice for Modern Living
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-white/90 mb-0 leading-relaxed text-center px-1 sm:px-2 md:px-0">
            Experience the future of home living with advanced automation, energy efficiency, and integrated security. Every home is designed to be intelligent, sustainable, and effortless to control.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 items-start lg:items-stretch w-full">
          {/* Left Content - Features and Button */}
          <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-6 2xl:space-y-8 w-full order-1 lg:order-1 flex flex-col">
          </div>

          {/* Right Content - Video */}
          <div className="relative mt-2 sm:mt-2.5 md:mt-3 lg:mt-0 w-full order-2 lg:order-2 lg:h-full">
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl h-full">
              <video
                src="/Make_a_video_202507222207.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[140px] sm:h-[160px] md:h-[220px] lg:h-full object-cover bg-black"
                poster="/Nordy-65-3D-2.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            {/* Decorative Elements - Hidden on mobile */}
            <div className="absolute -top-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 border-2 border-primary rounded-lg opacity-20 hidden md:block"></div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 border-2 border-primary rounded-lg opacity-30 hidden md:block"></div>
          </div>

          {/* Left Content - Features and Button (continues left column on desktop) */}
          <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-6 2xl:space-y-8 w-full order-3 lg:order-1 lg:col-start-1">

            {/* Key Smart Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-6">
              <div className="bg-gray-800/50 p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 2xl:p-6 rounded-lg sm:rounded-xl shadow-sm md:hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3">
                  <div className="bg-primary/20 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 rounded-lg mr-1 sm:mr-1.5 md:mr-2 lg:mr-2.5 xl:mr-3 flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-thin text-white">Home Automation</h3>
                </div>
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-white/80 leading-snug">Control lighting, climate, and more from your phone or voice assistant.</p>
              </div>

              <div className="bg-gray-800/50 p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 2xl:p-6 rounded-lg sm:rounded-xl shadow-sm md:hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3">
                  <div className="bg-primary/20 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 rounded-lg mr-1 sm:mr-1.5 md:mr-2 lg:mr-2.5 xl:mr-3 flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-thin text-white">Energy Efficiency</h3>
                </div>
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-white/80 leading-snug">Highly energy efficient design, smart thermostats, and solar-ready design.</p>
              </div>

              <div className="bg-gray-800/50 p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 2xl:p-6 rounded-lg sm:rounded-xl shadow-sm md:hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3">
                  <div className="bg-primary/20 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 rounded-lg mr-1 sm:mr-1.5 md:mr-2 lg:mr-2.5 xl:mr-3 flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-thin text-white">Security & Safety</h3>
                </div>
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-white/80 leading-snug">Smart locks, cameras, and sensors for peace of mind.</p>
              </div>

              <div className="bg-gray-800/50 p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 2xl:p-6 rounded-lg sm:rounded-xl shadow-sm md:hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3">
                  <div className="bg-primary/20 p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 rounded-lg mr-1 sm:mr-1.5 md:mr-2 lg:mr-2.5 xl:mr-3 flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-thin text-white">Voice & App Control</h3>
                </div>
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-white/80 leading-snug">Seamless integration with Alexa, Google Home, and mobile apps.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4 mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-3 xl:mt-4">
              <AnimatedButton
                asLink={true}
                href="/contact"
                variant="yellow"
                className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-4 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-thin w-full sm:w-auto"
              >
                Get a Smart Home Demo
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartChoice;