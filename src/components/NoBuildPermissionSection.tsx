import React from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';
import { AnimatedButton } from './ui/animated-button';

const houses = [
  {
    name: 'Nordy',
    image: '/nordy-42-3d-1.jpg',
    subtext: 'Modular, compact, and flexible',
    explanation: 'Exempt from standard building permits due to size and modular design.'
  },
  {
    name: 'Mobile',
    image: '/wive3.jpg',
    subtext: 'Movable and quick to install',
    explanation: 'Classified as movable property, so no traditional building permit needed.'
  }
];

const NoBuildPermissionSection: React.FC = () => (
  <section className="h-screen sm:h-screen md:min-h-screen w-full bg-white flex flex-col items-center justify-center relative overflow-hidden py-1 sm:py-2 md:py-4 lg:py-8 xl:py-12">
    <div className="w-full max-w-[1920px] mx-auto flex flex-col items-center justify-center px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-12 flex-1 overflow-y-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-black mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 leading-tight text-center px-1 sm:px-2 md:px-0">
        HOUSES WITH <span className="text-primary font-light">NO BUILD PERMISSION</span>
      </h2>
      <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-black/80 mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-4 max-w-3xl mx-auto leading-relaxed text-center px-1 sm:px-2 md:px-0">
        Some homes can be placed without the hassle of a building permit. Choose a Nordy or Mobile home and enjoy a faster, simpler path to your dream space.
      </p>
      <div className="text-primary text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base uppercase tracking-wider mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 font-body font-bold text-center w-full px-1 sm:px-0">
        {houses.length} MODELS AVAILABLE
      </div>
      {/* Row of Houses - Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-6 mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-4 w-full">
        {houses.map((house, idx) => {
          // Find matching house in houseData by name
          const houseMatch = houseData.find(h => h.name.toUpperCase().includes(house.name.toUpperCase()));
          const houseIndex = houseMatch ? houseData.findIndex(h => h.name === houseMatch.name) : null;
          
          // If no match found, link to category page instead
          const linkTo = houseIndex !== null ? `/house/${houseIndex}` : (house.name === 'Nordy' ? '/skandy-nordy' : '/mobile');
          
          return (
          <Link 
            key={idx} 
            to={linkTo}
            className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 h-full cursor-pointer"
          >
            <img src={house.image} alt={house.name} className="w-full h-24 sm:h-28 md:h-32 lg:h-40 xl:h-48 2xl:h-56 object-cover" />
            <div className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 2xl:p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-primary font-bold mb-0.5 sm:mb-0.5 md:mb-1 font-heading uppercase">{house.name}</div>
                <div className="text-black/70 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base mb-0.5 sm:mb-0.5 md:mb-1 font-body font-medium">{house.subtext}</div>
                <div className="text-black/60 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base mb-0.5 sm:mb-1 line-clamp-2 font-body font-normal leading-relaxed">{house.explanation}</div>
              </div>
            </div>
          </Link>
        );
        })}
      </div>
      <AnimatedButton
        variant="yellowOnWhite"
        className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-4 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-full max-w-[180px] sm:max-w-[200px] md:max-w-xs lg:w-auto"
      >
        Explore More
      </AnimatedButton>
    </div>
  </section>
);

export default NoBuildPermissionSection; 