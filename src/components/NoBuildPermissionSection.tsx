import React from 'react';
import { Link } from 'react-router-dom';

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
  <section className="w-full bg-white flex flex-col items-center justify-center relative overflow-hidden py-16 md:py-20">
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4 md:mb-6 leading-tight text-center">
          HOUSES WITH <span className="text-primary font-light">NO BUILD PERMISSION</span>
        </h2>
        <p className="text-lg md:text-xl text-black/80 mb-6 max-w-3xl mx-auto leading-relaxed text-center">
        Some homes can be placed without the hassle of a building permit. Choose a Nordy or Mobile home and enjoy a faster, simpler path to your dream space.
      </p>
                        <div className="text-primary text-xs md:text-sm uppercase tracking-wider mb-6 md:mb-8 font-body font-bold text-center md:text-left w-full md:flex md:justify-start">
        {houses.length} MODELS AVAILABLE
      </div>
      {/* Row of Houses - Mobile Optimized */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16 w-full">
        {houses.map((house, idx) => (
                                <div key={idx} className="bg-gray-100 border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
            <img src={house.image} alt={house.name} className="w-full h-40 md:h-48 object-cover" />
            <div className="p-3 md:p-4 flex-1 flex flex-col justify-between">
              <div>
                                            <div className="text-base md:text-lg text-primary font-bold mb-1 font-heading uppercase">{house.name}</div>
                            <div className="text-black/70 text-xs md:text-sm mb-2 font-body font-medium">{house.subtext}</div>
                            <div className="text-black/60 text-xs mb-2 line-clamp-2 font-body font-normal">{house.explanation}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 md:mt-8 bg-primary hover:bg-primary-hover text-white px-6 md:px-8 py-3 font-medium rounded transition-colors duration-200 text-base md:text-lg w-full max-w-xs md:w-auto">
        Explore More
      </button>
    </div>
  </section>
);

export default NoBuildPermissionSection; 