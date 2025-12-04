
import React from 'react';
import { houseData } from '../data/houses';

const HouseDesigns: React.FC = () => {
  return (
    <section id="designs" className="min-h-[150vh] md:min-h-[140vh] lg:min-h-[130vh] w-full bg-gray-900 flex flex-col items-start justify-start relative overflow-hidden pb-20 md:pb-96 py-20 md:py-0">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
        {/* Move content higher */}
        <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-24 text-center">
                              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 md:mb-8 leading-tight">
                      READY-TO-GO <span className="text-primary font-light">7 DAY HOUSES</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-4 md:px-0">
                      These homes are <span className="text-primary font-bold">in stock</span> and can be delivered, assembled, and finished on your site fast.
                    </p>
        </div>
        
                          <div className="text-primary text-xs md:text-sm uppercase tracking-wider mb-8 md:mb-10 font-body font-bold text-center md:text-left w-full md:flex md:justify-start">
          {houseData.slice(0, 4).length} DAY HOUSES IN STOCK
        </div>
        
        {/* Improved grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12 w-full max-w-7xl">
          {houseData.slice(0, 4).map((house, idx) => (
                                  <div key={idx} className="bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <img src={house.imageUrl} alt={house.name} className="w-full h-48 md:h-52 object-cover" />
              <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
                <div>
                                              <div className="text-base md:text-lg text-primary font-bold mb-2 font-heading uppercase">{house.name}</div>
                            <div className="text-gray-300 text-sm md:text-sm mb-3 font-body font-medium">{house.squareMeters} m² • {house.type}</div>
                            <div className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-3 font-body font-normal leading-relaxed">{house.description}</div>
                          </div>
                          <div className="text-white text-lg md:text-xl font-semibold font-body">£{house.price.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
        
                          <button className="mt-6 md:mt-8 bg-primary hover:bg-primary-hover text-black px-8 md:px-12 py-4 md:py-5 font-bold rounded-lg transition-all duration-200 text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-full max-w-sm md:w-auto">
          Reserve Your 7 Day House Now
        </button>
      </div>
    </section>
  );
};

export default HouseDesigns;