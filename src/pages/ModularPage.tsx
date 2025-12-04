import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const ModularPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter only Modular category houses
  const modularHouses = houseData.filter(house => house.category === 'MODULAR');

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/modular-home-1.jpg')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-start z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="text-primary text-sm uppercase tracking-wider mb-4">MODULAR COLLECTION</div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Flexible Living
                <span className="relative">
                  <div className="absolute -bottom-2 left-0 w-8 h-8 border-2 border-primary rounded-sm"></div>
                </span>
              </h1>
              <p className="text-white text-xl font-body font-normal mb-8 leading-relaxed">
                Modular construction for customizable living. Expandable designs that grow with your needs, 
                starting from £275,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#models" 
                  className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 font-medium transition-colors duration-200 rounded-sm"
                >
                  Explore Models &rarr;
                </a>
                <a 
                  href="#consultation" 
                  className="inline-block border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200 rounded-sm"
                >
                  Plan Your Modules
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary text-sm uppercase tracking-wider mb-4">MODULAR ADVANTAGES</div>
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">Modular Flexibility</h2>
            <p className="text-xl text-gray-600 font-body font-normal max-w-3xl mx-auto">
              Our Modular collection offers flexible, customizable living spaces that adapt to your lifestyle and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Expandable Design</h3>
              <p className="text-gray-600 font-body font-normal">Easily add modules as your needs change</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
              <p className="text-gray-600">Start smaller and expand when budget allows, maximizing value</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Adaptable Design</h3>
              <p className="text-gray-600">Reconfigure spaces for changing lifestyle requirements</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Assembly</h3>
              <p className="text-gray-600">Faster construction with precision-engineered components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary text-sm uppercase tracking-wider mb-4">MODULAR MODELS</div>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">Available Configurations</h2>
            <p className="text-xl text-gray-400 font-body font-normal max-w-3xl mx-auto">
              Each model can be customized and expanded to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modularHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden bg-gray-800 transition-all duration-500 hover:bg-gray-750 rounded-lg">
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-80">
                      <img 
                        src={house.imageUrl} 
                        alt={house.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onClick={() => openLightbox(house.imageUrl)}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-primary text-white py-2 px-4 text-sm font-medium rounded-sm">
                          MODULAR
                        </div>
                      </div>
                      
                      {/* Hover Content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-center">
                          <div className="text-white text-sm uppercase tracking-wider mb-2">{'< EXPLORE >'}</div>
                          <div className="text-white font-light text-lg">{house.category}</div>
                          <div className="text-gray-300 text-sm mt-2">
                            {house.squareFeet} ft² • £{house.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-light mb-3 group-hover:text-primary transition-colors duration-300">
                        {house.name}
                      </h3>
                      
                      {house.description && (
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {house.description}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="text-gray-500">
                          {house.squareMeters} m² • {house.type}
                        </span>
                        <span className="text-primary font-medium">
                          £{house.price.toLocaleString()}
                        </span>
                      </div>

                      <Link 
                        to={`/house/${originalIndex}`}
                        className="block w-full bg-primary hover:bg-primary-hover text-white py-3 px-4 font-medium transition-colors duration-200 text-center rounded-sm"
                      >
                        View Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Build Your Future, One Module at a Time</h2>
          <p className="text-xl text-white/90 font-body font-normal mb-8 max-w-2xl mx-auto">
            Start with what you need today and expand tomorrow with our flexible modular construction system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200 rounded-sm">
              Plan Your Modules
            </button>
            <Link 
              to="/gallery"
              className="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-primary transition-colors duration-200 rounded-sm"
            >
              View All Models
            </Link>
          </div>
        </div>
      </section>

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
              alt="Modular house design"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModularPage;