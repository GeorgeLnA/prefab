import React from 'react';

const SmartChoice: React.FC = () => {
  return (
    <section id="smart-choice" className="py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <div className="text-black text-sm uppercase tracking-wider mb-4">SMART CHOICE</div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-8 leading-tight drop-shadow-lg">
                The Smart Choice for Modern Living
              </h2>
              <p className="text-2xl text-black/90 mb-10 leading-relaxed max-w-2xl">
                Experience the future of home living with advanced automation, energy efficiency, and integrated security. Every home is designed to be intelligent, sustainable, and effortless to control.
              </p>
            </div>

            {/* Key Smart Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/20 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-black/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black">Home Automation</h3>
                </div>
                <p className="text-black/80">Control lighting, climate, and more from your phone or voice assistant.</p>
              </div>

              <div className="bg-white/20 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-black/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black">Energy Efficiency</h3>
                </div>
                <p className="text-black/80">A+++ energy rating, smart thermostats, and solar-ready design.</p>
              </div>

              <div className="bg-white/20 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-black/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black">Security & Safety</h3>
                </div>
                <p className="text-black/80">Smart locks, cameras, and sensors for peace of mind.</p>
              </div>

              <div className="bg-white/20 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-black/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black">Voice & App Control</h3>
                </div>
                <p className="text-black/80">Seamless integration with Alexa, Google Home, and mobile apps.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-black text-primary font-bold px-10 py-4 text-lg rounded-lg shadow-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                Get a Smart Home Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <video
                src="/Create_a_timelapse_202506241353.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[500px] md:h-[700px] object-cover bg-black"
                poster="/Skandy 120 front-1 2.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-black rounded-sm opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-black rounded-sm opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartChoice;