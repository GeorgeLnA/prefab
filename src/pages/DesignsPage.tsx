import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { houseData, getCategories, getHousesByCategory } from '../data/houses';

const DesignsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = getCategories();
  const filteredHouses = getHousesByCategory(selectedCategory);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-gray-800 mb-6">House Designs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of high-performance prefab homes. Each design combines 
              modern aesthetics with energy efficiency and sustainable construction.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Designs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              return (
                <div key={index} className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* IN STOCK label (if applicable) */}
                  {house.inStock && (
                    <div className="absolute top-4 left-4 z-10 bg-primary text-white py-2 px-4 text-sm font-bold rounded-r-full shadow-lg">
                      IN STOCK
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-primary text-white py-1 px-3 text-xs font-medium">
                    {house.category}
                  </div>
                  
                  {/* Image */}
                  <div className="relative overflow-hidden h-80">
                    <img 
                      src={house.imageUrl} 
                      alt={house.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                      onClick={() => openLightbox(house.imageUrl)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2">{house.name}</h3>
                      <p className="text-sm opacity-90">Click to view full size</p>
                    </div>
                  </div>

                  {/* House Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-medium text-gray-800 mb-3">{house.name}</h3>
                    
                    {house.description && (
                      <p className="text-gray-600 mb-3">{house.description}</p>
                    )}
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Area:</span>
                        <span className="font-medium">{house.squareFeet} ft² ({house.squareMeters} m²)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{house.type}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium text-primary">{house.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-bold text-primary text-lg">£{house.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Passive House Certified
                      </div>
                      
                      <Link 
                        to={`/house/${originalIndex}`}
                        className="block w-full bg-gray-900 text-white py-3 px-4 font-medium hover:bg-gray-800 transition-colors duration-200 text-center"
                      >
                        View Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gray-50 py-16 px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{houseData.length}+</div>
                <div className="text-gray-600">House Designs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3-5</div>
                <div className="text-gray-600">Days Assembly</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-gray-600">Year Warranty</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-gray-600">House Categories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              >
                &times;
              </button>
              <img 
                src={selectedImage} 
                alt="House design"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default DesignsPage;