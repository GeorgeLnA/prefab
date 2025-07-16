import React, { useEffect, useRef, useState } from 'react';

const SLIDES = [
  {
    imageUrl: '/Skandy%20120%20front-1%202.png',
    name: 'Engineered for Efficiency Built in Days',
    description: 'High-performance prefab homes with precision craftsmanship.'
  },
  {
    imageUrl: '/fasad-1.jpg',
    name: 'Modern Prefab Living',
    description: 'Contemporary design, comfort, and sustainability.'
  },
  {
    imageUrl: '/IMG_0015.jpg',
    name: 'Nature Meets Innovation',
    description: 'Experience the harmony of modern living and natural beauty.'
  }
];

const SLIDE_INTERVAL = 7000;

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [videoDone, setVideoDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoDone) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [videoDone]);

  const handleVideoEnd = () => {
    setTimeout(() => setVideoDone(true), 3000); // 3 second delay after video ends
  };

  return (
    <section className="relative h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 z-10 bg-black/30"></div>
      {/* Video Intro */}
      {!videoDone && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black">
          <video
            ref={videoRef}
            src="/Begin_with_an_202507080107.mp4"
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
            style={{ maxHeight: '100vh', maxWidth: '100vw' }}
          />
        </div>
      )}
      {/* Slides */}
      {videoDone && SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url('${slide.imageUrl}')` }}
        >
          {idx === current && (
            <div className="absolute bottom-0 left-0 w-full flex items-end z-30" style={{ pointerEvents: 'none' }}>
              {/* Detached vertical tint bar on the far left, now wider */}
              <div className="absolute bottom-0 left-0 h-full" style={{ width: '400px', zIndex: 1 }}>
                <div className="w-full h-full bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
              </div>
              <div className="relative" style={{ left: '3%', width: 'min(98vw, 900px)', zIndex: 2 }}>
                <div className="relative px-6 py-8 md:py-14 text-left" style={{ pointerEvents: 'auto' }}>
                  <p className="text-white text-sm uppercase tracking-wider mb-2">FROM PREFAB HOMES</p>
                  <h1 className="text-4xl md:text-5xl text-white font-light mb-4 drop-shadow-lg">
                    {slide.name}
                  </h1>
                  <p className="text-white text-xl mb-6 drop-shadow">
                    {slide.description}
                  </p>
                  <a
                    href="#designs"
                    className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 font-medium transition-colors duration-200"
                  >
                    Explore Designs &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Hero;