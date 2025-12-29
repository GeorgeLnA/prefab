'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseTypes from '../HouseTypes';
import HouseDesigns from '../HouseDesigns';
import TurnKey from '../TurnKey';
import ReadyToStartSection from '../ReadyToStartSection';
import NoBuildPermissionSection from '../NoBuildPermissionSection';
import { AnimatedButton } from './animated-button';

const HomeSmoothScroll = forwardRef<HTMLElement>((props, ref) => {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [isFirstSlideSticky, setIsFirstSlideSticky] = useState(true);
  const videos = [
    "/Now_make_a_202507222209.mp4",
    "/Begin_with_an_202507080107.mp4"
  ];

  const handleVideoEnd = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo(currentVideo + 1);
    }
  };

  const navigateToDesigns = () => {
    navigate('/designs');
  };

  // Handle scroll to show/hide button and first slide stickiness
  useEffect(() => {
    const handleScroll = () => {
      const housesSection = document.getElementById('designs');
      const strengthsSection = document.querySelector('.strengths-section');
      
      if (housesSection) {
        const rect = housesSection.getBoundingClientRect();
        const isPastHouses = rect.top < 0;
        setShowButton(!isPastHouses);
      }
      
      if (strengthsSection) {
        const rect = strengthsSection.getBoundingClientRect();
        const isPastStrengths = rect.bottom < 0;
        setIsFirstSlideSticky(!isPastStrengths);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ReactLenis root>
      <main ref={ref}>
        <article>
          {/* First slide: both videos in sequence */}
          <section className={`relative text-white h-[60vh] md:h-screen w-full bg-slate-950 ${isFirstSlideSticky ? 'sticky top-0' : ''} overflow-hidden`}>
            <video
              key={currentVideo}
              src={videos[currentVideo]}
              autoPlay
              playsInline
              muted
              loop={currentVideo === 1}
              onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover object-[40%] md:object-center z-0"
            />
            
            {/* Text and Button Overlay */}
            <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 z-20">
              <div className="text-center">
                <div className={`mb-4 sm:mb-6 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'} transition-all duration-300`}>
                  <AnimatedButton
                    onClick={navigateToDesigns}
                    variant="yellow"
                    className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl !font-thin uppercase"
                  >
                    Explore Our Homes
                  </AnimatedButton>
                </div>
              </div>
            </div>

            {/* Logo - Bottom Right Corner */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-[11px] sm:right-[15px] md:right-[19px] z-20">
              <img 
                src="/sharp_logo_high_res.png" 
                alt="Sharp Logo" 
                className="h-[27px] sm:h-[31px] md:h-[35px] lg:h-[43px] w-auto object-contain opacity-100"
              />
            </div>
          </section>

          {/* Strengths + HouseTypes - normal scroll */}
          <section className='text-black'>
            <div className="relative z-10 w-full">
              {/* Strengths Section */}
              <section className="bg-white pt-8 sm:pt-10 md:pt-12 pb-2 sm:pb-3 md:pb-4 strengths-section">
                <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                    {/* Energy Efficiency */}
                    <div className="group relative bg-white/30 md:hover:bg-white rounded-lg p-3 sm:p-4 md:p-5 transition-all duration-500 ease-out shadow-md md:hover:shadow-lg md:hover:-translate-y-2 backdrop-blur-sm">
                      <div className="flex flex-col items-center text-center h-full">
                        <div className="mb-2 sm:mb-3 flex items-center justify-center">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary transition-transform duration-500 md:group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold text-gray-900 mb-0.5 sm:mb-1 md:mb-1.5 tracking-tight leading-tight">Energy Efficiency</h3>
                        <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-gray-900/80 leading-snug max-w-xs mx-auto font-normal">Highly energy efficient, sustainable, and cost-saving performance.</p>
                      </div>
                    </div>

                    {/* Speed */}
                    <div className="group relative bg-white/30 md:hover:bg-white rounded-lg p-3 sm:p-4 md:p-5 transition-all duration-500 ease-out shadow-md md:hover:shadow-lg md:hover:-translate-y-2 backdrop-blur-sm">
                      <div className="flex flex-col items-center text-center h-full">
                        <div className="mb-2 sm:mb-3 flex items-center justify-center">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary transition-transform duration-500 md:group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold text-gray-900 mb-0.5 sm:mb-1 md:mb-1.5 tracking-tight leading-tight">Speed</h3>
                        <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-gray-900/80 leading-snug max-w-xs mx-auto font-normal">Move-in ready in record time.</p>
                      </div>
                    </div>

                    {/* Speed in Building */}
                    <div className="group relative bg-white/30 md:hover:bg-white rounded-lg p-3 sm:p-4 md:p-5 transition-all duration-500 ease-out shadow-md md:hover:shadow-lg md:hover:-translate-y-2 backdrop-blur-sm">
                      <div className="flex flex-col items-center text-center h-full">
                        <div className="mb-2 sm:mb-3 flex items-center justify-center">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary transition-transform duration-500 md:group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                          </svg>
                        </div>
                        <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold text-gray-900 mb-0.5 sm:mb-1 md:mb-1.5 tracking-tight leading-tight">Speed in Building</h3>
                        <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-gray-900/80 leading-snug max-w-xs mx-auto font-normal">Move in within days thanks to precision engineering and rapid assembly.</p>
                      </div>
                    </div>

                    {/* Eco-Friendly */}
                    <div className="group relative bg-white/30 md:hover:bg-white rounded-lg p-3 sm:p-4 md:p-5 transition-all duration-500 ease-out shadow-md md:hover:shadow-lg md:hover:-translate-y-2 backdrop-blur-sm">
                      <div className="flex flex-col items-center text-center h-full">
                        <div className="mb-2 sm:mb-3 flex items-center justify-center">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary transition-transform duration-500 md:group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                          </svg>
                        </div>
                        <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold text-gray-900 mb-0.5 sm:mb-1 md:mb-1.5 tracking-tight leading-tight">Eco-Friendly</h3>
                        <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-gray-900/80 leading-snug max-w-xs mx-auto font-normal">Built with the environment in mind, using green materials and methods.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <HouseTypes />
              {/* Mobile 7 Day Houses - only show mobile version in normal scroll */}
              <div className="block md:hidden" style={{ marginBottom: '-1px' }}>
                <HouseDesigns />
              </div>
            </div>
          </section>

          {/* First slide: 7 Day Houses slideshow (Desktop only) */}
          <section className='text-black sticky top-0 overflow-hidden hidden md:block'>
            <div className="relative z-10 w-full">
              <HouseDesigns />
            </div>
          </section>

          {/* Second slide: TurnKey slideshow */}
          <section className='text-black sticky top-0 overflow-hidden hidden md:block'>
            <div className="relative z-10 w-full">
              <TurnKey />
            </div>
          </section>

          {/* Mobile TurnKey - normal scroll */}
          <div className="block md:hidden" style={{ marginTop: '-1px' }}>
            <TurnKey />
          </div>

          {/* Third slide: NoBuildPermissionSection slideshow (Desktop only) */}
          <section className='text-black sticky top-0 overflow-hidden hidden md:block'>
            <div className="relative z-10 w-full">
              <NoBuildPermissionSection />
            </div>
          </section>

          {/* Mobile NoBuildPermissionSection - normal scroll */}
          <div className="block md:hidden">
            <NoBuildPermissionSection />
          </div>

          {/* Remaining content - normal scroll */}
          <section className='text-black'>
            <div className="relative z-10 w-full">
              <ReadyToStartSection />
            </div>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
});

HomeSmoothScroll.displayName = 'HomeSmoothScroll';

export default HomeSmoothScroll; 
