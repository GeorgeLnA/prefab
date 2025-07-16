import React from 'react';
import { houseData } from '../data/houses';

const HouseDesigns: React.FC = () => {
  return (
    <section id="designs" className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight text-center">
          READY-TO-GO <span className="text-primary font-light">7 DAY HOUSES</span>
        </h2>
        <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed text-center">
          These homes are <span className="text-primary font-bold">in stock</span> and can be delivered, assembled, and finished on your site fast.
        </p>
        <div className="text-yellow-400 text-sm uppercase tracking-wider mb-4 font-body font-bold text-left w-full flex justify-start">
          {houseData.slice(0, 4).length} DAY HOUSES IN STOCK
        </div>
        {/* Row of Houses in Stock */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {houseData.slice(0, 4).map((house, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
              <img src={house.imageUrl} alt={house.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-lg text-primary font-bold mb-1 font-heading uppercase">{house.name}</div>
                  <div className="text-gray-300 text-sm mb-2 font-body font-medium">{house.squareMeters} m² • {house.type}</div>
                  <div className="text-gray-400 text-xs mb-2 line-clamp-2 font-body font-normal">{house.description}</div>
                </div>
                <div className="text-white text-lg font-semibold mt-2 font-body">£{house.price.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 bg-primary hover:bg-primary-hover text-white px-8 py-3 font-medium rounded transition-colors duration-200 text-lg">
          Reserve Your 7 Day House Now
        </button>
      </div>
    </section>
  );
};

export default HouseDesigns;