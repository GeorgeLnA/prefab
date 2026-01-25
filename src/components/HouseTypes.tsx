import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';
import { AnimatedButton } from './ui/animated-button';

const HouseTypes: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;

    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleTimeUpdate = () => {
    // Don't update from video timeupdate while dragging to keep visual in sync
    if (!isDragging && videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const updateProgress = (clientX: number) => {
    if (progressBarRef.current && videoRef.current && duration > 0) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, clickX / rect.width));
      const newTime = percentage * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    updateProgress(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    updateProgress(e.clientX);
  };

  React.useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (progressBarRef.current && videoRef.current && duration > 0) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, clickX / rect.width));
        const newTime = percentage * duration;
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, duration]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  const houseTypes = [
    {
      name: 'Nordy',
      description: 'Nordic elegance and comfort for modern living.',
      imageUrl: '/NORDY/NORDY 35_1.2F 4K.jpg',
      features: ['Nordic style', 'Warm interiors', 'Sustainable build'],
      price: 'From £39,960',
      path: '/skandy-nordy'
    },
    {
      name: 'Skandy',
      description: 'Scandinavian-inspired SIP homes with exceptional energy efficiency.',
      imageUrl: '/SKANDY/SKANDY 70 1.jpeg',
      features: ['High-performance SIP', 'Scandinavian design', 'Energy efficient'],
      price: 'From £68,560',
      path: '/skandy'
    },
    {
      name: 'Modern',
      description: 'Sleek modern design with cutting-edge features.',
      imageUrl: '/MODERN/1_2k Final Large.jpeg',
      features: ['Sleek design', 'Modern amenities', 'Premium materials'],
      price: 'From £315,000',
      path: '/modern'
    },
    {
      name: 'Smart',
      description: 'Intelligent home automation and energy efficiency.',
      imageUrl: '/S-18-1.jpg',
      features: ['Smart home tech', 'Energy efficient', 'Automated systems'],
      price: 'From £320,000',
      path: '/smart'
    },
    {
      name: 'Bungalow',
      description: 'Single-storey living with spacious comfort.',
      imageUrl: '/fasad-1.jpg',
      features: ['Single-storey', 'Open plan', 'Accessible design'],
      price: 'From £250,000',
      path: '/bungalow'
    }
  ];

  // Get modular houses from data
  const modularHouses = houseData.filter(house => house.category === 'MODULAR');

  // ViewModelsButton component with sliding hover effect (div-based, not a link since it's inside a Link)
  const ViewModelsButton: React.FC = () => {
    return (
      <div className="group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-black py-2 sm:py-2.5 px-3 sm:px-4 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base">
        <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
          View Models
        </span>
        <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white w-full">
          <span>View Models</span>
        </div>
      </div>
    );
  };

  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 bg-white">
      <div className="w-full px-4 sm:px-5">
        {/* Header */}
        <div className="text-center mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-black mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 leading-tight px-1 sm:px-2 md:px-0">
            HOUSE CATEGORIES
          </h2>
        </div>

        {/* House Types Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 auto-rows-fr">
          {houseTypes.map((type, index) => {
            const comingSoonTypes = ['Smart', 'Bungalow'];
            const isComingSoon = comingSoonTypes.includes(type.name);
            
            const content = (
              <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 group flex flex-col ${
                isComingSoon ? 'opacity-75 cursor-not-allowed' : 'md:hover:shadow-2xl cursor-pointer'
              }`}>
                {/* Image */}
                <div className="relative overflow-hidden h-32 sm:h-36 md:h-40 lg:h-44 flex-shrink-0">
                  <img 
                    src={type.imageUrl} 
                    alt={`${type.name} prefab home exterior view`}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isComingSoon ? '' : 'md:group-hover:scale-110'
                    }`}
                    loading="lazy"
                  />
                  {/* Tint overlay for coming soon */}
                  {isComingSoon && (
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                  )}
                  <div className={`absolute inset-0 bg-black transition-all duration-300 ${
                    isComingSoon ? 'bg-opacity-0' : 'bg-opacity-0 md:group-hover:bg-opacity-20'
                  }`}></div>
                  {/* Coming Soon Badge */}
                  {isComingSoon && (
                    <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 md:top-3 md:left-3 z-20">
                      <div className="bg-primary text-white py-1 px-2 sm:py-1.5 sm:px-2.5 md:px-3 text-[8px] sm:text-[9px] md:text-[10px] font-thin rounded-lg whitespace-nowrap">
                        COMING SOON
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-4 sm:px-5 md:px-6 pt-6 sm:pt-7 md:pt-8 lg:pt-10 pb-6 sm:pb-7 md:pb-8 lg:pb-10 flex flex-col flex-grow min-h-0">
                  <div className="flex-grow">
                    <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-thin text-gray-900 mb-0.5 sm:mb-1 md:mb-1.5">
                      {type.name}
                      {isComingSoon && <span className="ml-1.5 text-[8px] sm:text-[9px] md:text-[10px] text-primary">(Coming Soon)</span>}
                    </h3>
                  </div>

                  {/* Price and CTA - Fixed at bottom with consistent padding */}
                  <div className="flex flex-col gap-2 sm:gap-3 mt-auto">
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-thin text-primary">{type.price}</span>
                    {isComingSoon ? (
                      <div className="group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-gray-300 text-gray-600 py-2 sm:py-2.5 px-3 sm:px-4 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base cursor-not-allowed">
                        <span>Coming Soon</span>
                      </div>
                    ) : (
                      <ViewModelsButton />
                    )}
                  </div>
                </div>
              </div>
            );

            if (isComingSoon) {
              return (
                <div key={index} onClick={(e) => e.preventDefault()}>
                  {content}
                </div>
              );
            }

            return (
              <Link key={index} to={type.path}>
                {content}
              </Link>
            );
          })}
        </div>

        {/* Modular Homes Section */}
        <div className="w-full my-12 sm:my-16 md:my-20">
          <div className="bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 md:py-16 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-white mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3 leading-tight px-1 sm:px-2 md:px-0">MODULAR HOMES</h2>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-white/90 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 leading-relaxed px-1 sm:px-2 md:px-0">
                Want something truly unique? Use our modular system to design your own home, 
                tailored to your lifestyle and vision. Expandable, customizable, and built to grow with you.
              </p>
            </div>

            {/* Video */}
            <div 
              ref={videoContainerRef}
              className={`mb-8 sm:mb-10 md:mb-12 overflow-hidden shadow-2xl relative group ${
                isFullscreen ? 'rounded-none' : 'rounded-xl sm:rounded-2xl'
              }`}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <video
                ref={videoRef}
                src="/Prefab Homes Exhibit Video.webm"
                playsInline
                loop
                muted={isMuted}
                className="w-full h-auto object-cover cursor-pointer"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={(e) => {
                  // Only toggle if clicking directly on video, not on controls
                  if (e.target === e.currentTarget || !showControls) {
                    togglePlay();
                  }
                }}
              />
              {/* Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                  onClick={togglePlay}
                >
                  <div className="group/play relative inline-flex items-center justify-center">
                    <div className="bg-primary text-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center md:group-hover/play:scale-110 transition-transform duration-300 shadow-xl">
                      <svg 
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.1))' }}
                      >
                        <path d="M8.5 5.5 L8.5 18.5 L18.5 12 Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" strokeLinecap="round" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              {/* Control Bar at Bottom */}
              {(isPlaying || showControls) && (
                <div 
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 sm:p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 ${
                    isFullscreen ? 'rounded-none' : ''
                  }`}
                  style={isFullscreen ? { 
                    left: 0, 
                    right: 0, 
                    bottom: 0,
                    marginLeft: 0,
                    marginRight: 0
                  } : {}}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    {/* Play/Pause button */}
                    <div 
                      className="bg-black/60 rounded-lg p-1.5 sm:p-2 md:p-2.5 cursor-pointer hover:bg-black/80 transition-colors duration-300 flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                    >
                      {isPlaying ? (
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                      ) : (
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.5 5.5 L8.5 18.5 L18.5 12 Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" strokeLinecap="round" fill="currentColor"/>
                        </svg>
                      )}
                    </div>
                    {/* Progress Bar */}
                    <div 
                      ref={progressBarRef}
                      className="flex-1 h-1.5 sm:h-2 bg-white/20 rounded-full cursor-pointer relative group/progress z-10 select-none"
                      onClick={handleProgressClick}
                      onMouseDown={handleMouseDown}
                    >
                      <div 
                        className={`h-full bg-primary rounded-full ${
                          isDragging ? '' : 'transition-all duration-100'
                        }`}
                        style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                      />
                      <div 
                        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full shadow-lg ${
                          isDragging || showControls ? 'opacity-100' : 'opacity-0 group-hover/progress:opacity-100 transition-opacity duration-200'
                        }`}
                        style={{ 
                          left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`, 
                          transform: 'translate(-50%, -50%)',
                          transition: isDragging ? 'none' : 'left 0.1s ease-out'
                        }}
                      />
                    </div>
                    {/* Time Display */}
                    <div className="text-white text-[10px] sm:text-xs md:text-sm font-thin flex-shrink-0 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] text-right">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                    {/* Mute button */}
                    <div 
                      className="bg-black/60 rounded-lg p-1.5 sm:p-2 md:p-2.5 cursor-pointer hover:bg-black/80 transition-colors duration-300 flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                    >
                      {isMuted ? (
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                        </svg>
                      ) : (
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                      )}
                    </div>
                    {/* Fullscreen button */}
                    <div 
                      className="bg-black/60 rounded-lg p-1.5 sm:p-2 md:p-2.5 cursor-pointer hover:bg-black/80 transition-colors duration-300 flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFullscreen();
                      }}
                    >
                      {isFullscreen ? (
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                        </svg>
                      ) : (
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modular Houses Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
              {modularHouses.map((house, index) => {
                const isMod70 = house.name.includes('MOD-70');
                return (
                <Link 
                  key={index} 
                  to={`/house/${house.slug}`}
                  className={`bg-gray-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden md:hover:scale-[1.02] md:hover:scale-105 transition-transform duration-300 cursor-pointer ${isMod70 ? 'hidden lg:block' : ''}`}
                >
                  <img src={house.imageUrl} alt={house.name} className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover" />
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8">
                    <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-thin text-primary mb-0.5 sm:mb-1 md:mb-1.5">{house.name}</div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-medium text-white mb-0.5 sm:mb-1 md:mb-1.5">{house.squareFeet} ft² • {house.type}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-thin text-white">From £{house.price.toLocaleString()}</div>
                  </div>
                </Link>
              );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                asLink={true}
                href="/modular"
                variant="white"
                className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-thin text-base sm:text-lg md:text-xl"
              >
                See More
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href="/design-form"
                variant="yellow"
                className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-thin text-base sm:text-lg md:text-xl"
              >
                Instant Quote
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="py-24 sm:py-28 md:py-32 lg:py-36 bg-gradient-to-br from-primary to-primary-dark mt-12 sm:mt-16 md:mt-20 lg:mt-24 rounded-2xl sm:rounded-3xl">
          <div className="w-full px-4 sm:px-5 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-tight px-1 sm:px-2 md:px-0">
              Can't decide which type suits you best?
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-black/90 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 leading-relaxed px-1 sm:px-2 md:px-0">
              Our design consultants can help you choose the perfect house type based on your 
              lifestyle, budget, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <AnimatedButton
                asLink={true}
                href="/contact"
                variant="whiteToGrey"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg"
              >
                Schedule Consultation
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href="/designs"
                variant="greyToWhite"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg"
              >
                Browse All Designs
              </AnimatedButton>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HouseTypes;