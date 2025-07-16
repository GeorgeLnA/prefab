'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseTypes from '../HouseTypes';
import HouseDesigns from '../HouseDesigns';
import SmartHouse from '../SmartHouse';
import ProcessSimple from '../ProcessSimple';
import TurnKey from '../TurnKey';
import ReadyToStartSection from '../ReadyToStartSection';
import StatsSection from '../StatsSection';
import NoBuildPermissionSection from '../NoBuildPermissionSection';

const HomeSmoothScroll = forwardRef<HTMLElement>((props, ref) => {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [isFirstSlideSticky, setIsFirstSlideSticky] = useState(true);
  const [showOverlayVideo, setShowOverlayVideo] = useState(false);
  const videos = [
    "/Family_Enters_New_House_Video.mp4",
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
        setShowOverlayVideo(isPastStrengths);
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
          <section className={`relative text-white h-screen w-full bg-slate-950 ${isFirstSlideSticky ? 'sticky top-0' : ''} overflow-hidden`}>
            <video
              key={currentVideo}
              src={videos[currentVideo]}
              autoPlay
              playsInline
              muted
              loop={currentVideo === 1}
              onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover z-0"
              poster="/Skandy%20120%20front-1%202.png"
            />
            
            {/* Text and Button Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
              <div className="text-center">
                <div className="mb-6">
                  <button 
                    onClick={navigateToDesigns}
                    className={`bg-primary hover:bg-primary-hover text-white px-12 py-6 text-2xl font-semibold transition-all duration-300 rounded-lg shadow-lg uppercase ${
                      showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    Explore Our Homes
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Strengths + HouseTypes - normal scroll */}
          <section className='text-black'>
            <div className="relative z-10 w-full">
              {/* Strengths Section */}
              <section className="bg-gray-900 py-8 strengths-section">
                <div className="w-full flex flex-col items-center">
                  <div className="flex flex-col md:flex-row gap-8 max-w-screen-2xl w-full mx-auto justify-center mt-24">
                    <div className="flex-1 text-center">
                      <h3 className="text-2xl font-heading font-light text-primary mb-1 uppercase">Energy Efficiency</h3>
                      <p className="text-white text-lg font-body font-light max-w-sm mx-auto">A+++ rated, sustainable, and cost-saving performance.</p>
                    </div>
                    <div className="flex-1 text-center">
                      <h3 className="text-2xl font-heading font-light text-primary mb-1 uppercase">Speed</h3>
                      <p className="text-white text-lg font-body font-light max-w-sm mx-auto">Move-in ready in record time.</p>
                    </div>
                    <div className="flex-1 text-center">
                      <h3 className="text-2xl font-heading font-light text-primary mb-1 uppercase">Speed in Building</h3>
                      <p className="text-white text-lg font-body font-light max-w-sm mx-auto">Move in within days thanks to precision engineering and rapid assembly.</p>
                    </div>
                    <div className="flex-1 text-center">
                      <h3 className="text-2xl font-heading font-light text-primary mb-1 uppercase">Eco-Friendly</h3>
                      <p className="text-white text-lg font-body font-light max-w-sm mx-auto">Built with the environment in mind, using green materials and methods.</p>
                    </div>
                  </div>
                </div>
              </section>
              {/* 7 Day Houses section goes here */}
              <HouseDesigns />
              <HouseTypes />
            </div>
          </section>

          {/* First slide: TurnKey slideshow */}
          <section className='text-black sticky top-0 overflow-hidden'>
            <div className="relative z-10 w-full">
              <TurnKey />
            </div>
          </section>

          {/* Second slide: NoBuildPermissionSection slideshow */}
          <section className='text-black sticky top-0 overflow-hidden'>
            <div className="relative z-10 w-full">
              <NoBuildPermissionSection />
            </div>
          </section>

          {/* Remaining content - normal scroll */}
          <section className='text-black'>
            <div className="relative z-10 w-full">
              <StatsSection />
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
