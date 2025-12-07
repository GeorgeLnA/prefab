import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { houseData, getCategories, getHousesByCategory } from '../data/houses';
import SEO from '../components/SEO';
import { ExpandingButton } from '../components/ui/expanding-button';

const DesignsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = getCategories();
  const filteredHouses = getHousesByCategory(selectedCategory);

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-800 mb-4 sm:mb-6">House Designs</h1>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900 max-w-3xl mx-auto">
              Explore our collection of high-performance prefab homes. Each design combines 
              modern aesthetics with energy efficiency and sustainable construction.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-medium transition-all duration-300 rounded-lg ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Designs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              return (
                <Link 
                  key={index} 
                  to={`/house/${originalIndex}`}
                  className="group flex flex-col bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Image Section - Fixed Height */}
                  <div className="relative overflow-hidden h-64 bg-white">
                    {/* IN STOCK Badge */}
                    {house.inStock && (
                      <div className="absolute top-3 left-3 z-10 bg-primary text-black py-1.5 px-3 text-xs font-bold rounded uppercase tracking-wide">
                        In Stock
                      </div>
                    )}
                    
                    <img 
                      src={house.imageUrl} 
                      alt={`${house.name} - ${house.category} prefab home`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>

                  {/* Content Section - Flex Grow for Equal Heights */}
                  <div className="flex flex-col flex-grow p-6">
                    {/* Title */}
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 line-clamp-1">
                      {house.name}
                    </h3>
                    
                    {/* Description */}
                    {house.description && (
                      <p className="text-sm text-gray-900 mb-4 line-clamp-2 flex-grow">
                        {house.description}
                      </p>
                    )}
                    
                    {/* Details Grid - Consistent Spacing */}
                    <div className="space-y-2.5 mb-5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-900">Area</span>
                        <span className="font-medium text-gray-900">{house.squareFeet} ft²</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-900">Type</span>
                        <span className="font-medium text-gray-900">{house.type}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-gray-900 font-medium">Price</span>
                        <span className="font-bold text-primary text-lg">£{house.price.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* CTA Button - Always at Bottom */}
                    <div className="mt-auto flex justify-center">
                      <ExpandingButton
                        to={`/house/${originalIndex}`}
                        className="w-full bg-gray-900 text-white py-3 px-4"
                      >
                        View Details
                      </ExpandingButton>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-white py-16 px-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{houseData.length}+</div>
                <div className="text-gray-900">House Designs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3-5</div>
                <div className="text-gray-900">Days Assembly</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-gray-900">Year Warranty</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6</div>
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
