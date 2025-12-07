
import React from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';
import { AnimatedButton } from './ui/animated-button';

const HouseDesigns: React.FC = () => {
  return (
    <section id="designs" className="h-screen sm:h-screen md:min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden py-1 sm:py-2 md:py-4 lg:py-8 xl:py-12">
      <div className="w-full max-w-[1920px] mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-12 flex flex-col items-center justify-center flex-1 overflow-y-auto">
        {/* Header Section */}
        <div className="text-center mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6 w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-white mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3 leading-tight px-1 sm:px-2 md:px-0">
            READY-TO-GO <span className="text-primary font-light">7 DAY HOUSES</span>
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-white/90 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 max-w-4xl mx-auto leading-relaxed px-1 sm:px-2 md:px-0">
            These homes are <span className="text-primary font-bold">in stock</span> and can be delivered, assembled, and finished on your site fast.
          </p>
        </div>
        
        <div className="text-primary text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base uppercase tracking-wider mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 font-body font-bold text-center w-full px-1 sm:px-0">
          {houseData.slice(0, 4).length} DAY HOUSES IN STOCK
        </div>
        
        {/* Grid layout - fully responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-6 mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-4 w-full">
          {houseData.slice(0, 4).map((house, idx) => {
            const originalIndex = houseData.findIndex(h => h.name === house.name);
            return (
            <Link 
              key={idx} 
              to={`/house/${originalIndex}`}
              className="bg-gray-800 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl overflow-hidden flex flex-col hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl transition-all duration-300 h-full cursor-pointer"
            >
              <img src={house.imageUrl} alt={house.name} className="w-full h-24 sm:h-28 md:h-32 lg:h-40 xl:h-48 2xl:h-56 object-cover" />
              <div className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 2xl:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-primary font-bold mb-0.5 sm:mb-0.5 md:mb-1 font-heading uppercase">{house.name}</div>
                  <div className="text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base mb-0.5 sm:mb-1 md:mb-1.5 font-body font-medium">{house.squareMeters} m² • {house.type}</div>
                  <div className="text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base mb-0.5 sm:mb-1 line-clamp-2 font-body font-normal leading-relaxed">{house.description}</div>
                </div>
                <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold font-body">£{house.price.toLocaleString()}</div>
              </div>
            </Link>
          );
          })}
        </div>
        
        <AnimatedButton
          variant="yellow"
          className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-4 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-full max-w-[180px] sm:max-w-[200px] md:max-w-xs lg:w-auto mt-4 sm:mt-6 md:mt-8"
        >
          Reserve Your 7 Day House Now
        </AnimatedButton>
      </div>
    </section>
  );
};

export default HouseDesigns;