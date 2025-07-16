import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const ModernPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter only Modern category houses
  const modernHouses = houseData.filter(house => house.category === 'MODERN');

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
            backgroundImage: "url('/2p.jpg')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-start z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="text-primary text-sm uppercase tracking-wider mb-4">MODERN COLLECTION</div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Contemporary Excellence
                <span className="relative">
                  <div className="absolute -bottom-2 left-0 w-8 h-8 border-2 border-primary rounded-sm"></div>
                </span>
              </h1>
              <p className="text-white text-xl font-body font-normal mb-8 leading-relaxed">
                Sleek modern design with cutting-edge features. Premium materials and sophisticated 
                aesthetics for contemporary living, starting from £315,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#models" 
                  className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 font-medium transition-colors duration-200 rounded-sm"
                >
                  Explore Modern Designs &rarr;
                </a>
                <a 
                  href="#consultation" 
                  className="inline-block border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200 rounded-sm"
                >
                  Schedule Viewing
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
            <div className="text-primary text-sm uppercase tracking-wider mb-4">MODERN EXCELLENCE</div>
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">Sophisticated Living</h2>
            <p className="text-xl text-gray-600 font-body font-normal max-w-3xl mx-auto">
              Our Modern collection represents the pinnacle of contemporary architecture, 
              combining sleek aesthetics with premium functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Sleek Design</h3>
              <p className="text-gray-600 font-body font-normal">Clean lines and sophisticated aesthetics for contemporary living</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Premium Amenities</h3>
              <p className="text-gray-600">State-of-the-art features and luxury finishes throughout</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Premium Materials</h3>
              <p className="text-gray-600">High-quality materials and finishes for lasting elegance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary text-sm uppercase tracking-wider mb-4">MODERN MODELS</div>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">Contemporary Designs</h2>
            <p className="text-xl text-gray-400 font-body font-normal max-w-3xl mx-auto">
              Sleek contemporary designs with sophisticated architectural solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modernHouses.map((house, index) => {
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
                          MODERN
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
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Experience Modern Luxury</h2>
          <p className="text-xl text-white/90 font-body font-normal mb-8 max-w-2xl mx-auto">
            Discover the perfect blend of contemporary design and sophisticated living with our Modern collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200 rounded-sm">
              Schedule Viewing
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
              alt="Modern house design"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernPage;