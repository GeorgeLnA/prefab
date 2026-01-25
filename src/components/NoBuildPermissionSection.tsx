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
    name: 'Skandy',
    image: '/wive3.jpg',
    subtext: 'Movable and quick to install',
    explanation: 'Classified as movable property, so no traditional building permit needed.'
  }
];

const NoBuildPermissionSection: React.FC = () => (
  <section 
    className="min-h-[60vh] md:h-screen md:min-h-screen w-full bg-white flex flex-col items-center justify-center relative overflow-hidden py-8 sm:py-10 md:py-4 lg:py-8 xl:py-12"
    style={{ 
      width: '100vw',
      marginLeft: '50%',
      transform: 'translateX(-50%)',
      maxWidth: 'none'
    }}
  >
    <div className="w-full px-4 sm:px-5 flex flex-col items-center justify-center flex-1 overflow-y-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-black mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 leading-tight text-center px-1 sm:px-2 md:px-0">
        HOUSES WITH <span className="text-primary font-light">NO BUILD PERMISSION</span>
      </h2>
      <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-black/80 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 leading-relaxed text-center px-1 sm:px-2 md:px-0">
        Some homes can be placed without the hassle of a building permit. Choose a Nordy or Skandy home and enjoy a faster, simpler path to your dream space.
      </p>
      {/* Row of Houses - Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-4 w-full">
        {houses.map((house, idx) => {
          // Find matching house in houseData by name
          const houseMatch = houseData.find(h => h.name.toUpperCase().includes(house.name.toUpperCase()));
          
          // If no match found, link to category page instead
          const linkTo = houseMatch ? `/house/${houseMatch.slug}` : (house.name === 'Nordy' ? '/skandy-nordy' : '/skandy');
          
          return (
          <Link 
            key={idx} 
            to={linkTo}
            className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden flex flex-col md:hover:scale-[1.02] md:hover:scale-105 transition-transform duration-300 h-full cursor-pointer"
          >
            <img src={house.image} alt={house.name} className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52 object-cover" />
            <div className="p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-primary font-thin mb-0.5 sm:mb-0.5 md:mb-1 font-heading uppercase">{house.name}</div>
                <div className="text-black/70 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base mb-0.5 sm:mb-0.5 md:mb-1 font-body font-thin">{house.subtext}</div>
                <div className="text-black/60 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base mb-0.5 sm:mb-1 line-clamp-2 font-body font-normal leading-relaxed">{house.explanation}</div>
              </div>
            </div>
          </Link>
        );
        })}
      </div>
      <AnimatedButton
        variant="yellowOnWhite"
        className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-4 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-thin w-full lg:w-auto mt-4 sm:mt-6 md:mt-8"
      >
        Explore More
      </AnimatedButton>
    </div>
  </section>
);

export default NoBuildPermissionSection; 