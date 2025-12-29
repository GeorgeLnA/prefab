import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { houseData, getCategories, getHousesByCategory } from '../data/houses';
import SEO from '../components/SEO';

const DesignsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // Filter to only show Nordy and Skandy designs
  const relevantHouses = houseData.filter(house => 
    house.category === 'NORDY' || house.category === 'MOBILE'
  );

  // Category mapping for filtering (display name -> data category)
  const categoryFilterMap: { [key: string]: string } = {
    'ALL': 'ALL',
    'Nordy': 'NORDY',
    'Skandy': 'MOBILE'
  };

  // Only show relevant categories with display names
  const categories = ['ALL', 'Nordy', 'Skandy'];
  
  const filteredHouses = selectedCategory === 'ALL' 
    ? relevantHouses 
    : relevantHouses.filter(house => house.category === categoryFilterMap[selectedCategory]);

  return (
    <>
      <SEO
        title="House Designs & Models"
        description="Browse our complete collection of prefab home designs. From compact modular homes to spacious smart homes. View specifications, pricing, and availability."
        url="/designs"
      />
      <div className="bg-white">
      <div className="pt-20">
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-thin text-gray-800 mb-4 sm:mb-6">House Designs</h1>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900 max-w-3xl mx-auto">
              Explore our collection of high-performance prefab homes. Each design combines 
              modern aesthetics with energy efficiency and sustainable construction.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-thin transition-all duration-300 rounded-lg ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-900 md:hover:bg-gray-900 md:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Designs Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-6 xl:gap-8 auto-rows-fr">
            {filteredHouses.map((house, index) => {
              const houseMatch = houseData.find(h => h.name === house.name);
              return (
                <Link 
                  key={index} 
                  to={`/house/${houseMatch?.slug || ''}`}
                  className="group flex flex-col bg-white rounded-lg shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Image Section - Fixed Height */}
                  <div className="relative overflow-hidden h-32 sm:h-36 md:h-40 lg:h-64 bg-white flex-shrink-0">
                    {/* IN STOCK Badge */}
                    {house.inStock && (
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-primary text-black py-1 px-2 sm:py-1.5 sm:px-3 text-[9px] sm:text-[10px] md:text-xs font-thin rounded uppercase tracking-wide">
                        In Stock
                      </div>
                    )}
                    
                    <img 
                      src={house.imageUrl} 
                      alt={`${house.name} - ${house.category} prefab home`}
                      className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>

                  {/* Content Section - Flex Grow for Equal Heights */}
                  <div className="flex flex-col flex-grow px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-6 pb-4 sm:pb-5 md:pb-6 min-h-0">
                    <div className="flex-grow">
                      {/* Title */}
                      <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-xl font-heading font-thin text-gray-900 mb-0.5 sm:mb-1 md:mb-2 line-clamp-1">
                        {house.name}
                      </h3>
                      
                      
                      {/* Details Grid - Consistent Spacing */}
                      <div className="space-y-1 sm:space-y-1.5 md:space-y-2.5 mb-3 sm:mb-4 md:mb-5">
                        <div className="flex items-center justify-between text-[9px] sm:text-[10px] md:text-xs lg:text-sm">
                          <span className="text-gray-900">Area</span>
                          <span className="font-thin text-gray-900">{house.squareFeet} ft²</span>
                        </div>
                        <div className="flex items-center justify-between text-[9px] sm:text-[10px] md:text-xs lg:text-sm">
                          <span className="text-gray-900">Type</span>
                          <span className="font-thin text-gray-900">{house.type}</span>
                        </div>
                        <div className="flex items-center justify-between pt-1 sm:pt-2">
                          <span className="text-gray-900 font-thin text-[9px] sm:text-[10px] md:text-xs lg:text-sm">Price</span>
                          <span className="font-thin text-primary text-[10px] sm:text-xs md:text-sm lg:text-lg">£{house.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button - Always at Bottom */}
                    <div className="mt-auto">
                      <a 
                        href="/contact" 
                        className="group/btn relative inline-block w-full bg-gray-900 text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-thin rounded-lg text-center overflow-hidden cursor-pointer"
                      >
                        <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
                          Schedule Consultation
                        </span>
                        <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-primary text-black w-full">
                          <span>Schedule Consultation</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-white py-16 px-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-thin text-primary mb-2">{relevantHouses.length}+</div>
                <div className="text-gray-900">House Designs</div>
              </div>
              <div>
                <div className="text-4xl font-thin text-primary mb-2">10</div>
                <div className="text-gray-900">Year Warranty</div>
              </div>
              <div>
                <div className="text-4xl font-thin text-primary mb-2">2</div>
                <div className="text-gray-900">House Categories</div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
    </div>
    </>
  );
};

export default DesignsPage;
