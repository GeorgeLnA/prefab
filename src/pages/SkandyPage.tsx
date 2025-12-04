import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const SkandyPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter only Skandy-Nordy category houses
  const skandyHouses = houseData.filter(house => house.category === 'SKANDY-NORDY');

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
            backgroundImage: "url('/Skandy 120 front-1 2.png')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-start z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="text-primary text-sm uppercase tracking-wider mb-4">SKANDY-NORDY COLLECTION</div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Scandinavian Elegance
                <span className="relative">
                  <div className="absolute -bottom-2 left-0 w-8 h-8 border-2 border-primary rounded-sm"></div>
                </span>
              </h1>
              <p className="text-white text-xl font-body font-normal mb-8 leading-relaxed">
                Scandinavian-inspired minimalist design with natural materials and clean lines. 
                Sustainable living with Nordic comfort, starting from £295,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#models" 
                  className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 font-medium transition-colors duration-200 rounded-sm"
                >
                  Explore Skandy Designs &rarr;
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

      {/* Models Section */}
      <section id="models" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary text-sm uppercase tracking-wider mb-4">SKANDY MODELS</div>
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Scandinavian Designs</h2>
            <p className="text-xl text-gray-600 font-body font-normal max-w-3xl mx-auto">
              Nordic-inspired designs with minimalist aesthetics and natural materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skandyHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden bg-gray-100 transition-all duration-500 hover:bg-gray-200 rounded-lg">
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-80">
                      <img 
                        src={house.imageUrl} 
                        alt={house.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onClick={() => openLightbox(house.imageUrl)}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-primary text-white py-2 px-4 text-sm font-medium rounded-sm">
                          SKANDY-NORDY
                        </div>
                      </div>
                      {/* Hover Content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-center">
                          <div className="text-primary text-sm uppercase tracking-wider mb-2">{'< EXPLORE >'}</div>
                          <div className="text-gray-900 font-light text-lg">{house.category}</div>
                          <div className="text-gray-700 text-sm mt-2">
                            {house.squareFeet} ft² • £{house.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-gray-900 text-2xl font-light mb-3 group-hover:text-primary transition-colors duration-300">
                        {house.name}
                      </h3>
                      {house.description && (
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">Nordic Comfort</h2>
            <p className="text-xl text-gray-600 font-body font-normal max-w-3xl mx-auto">
              Our Skandy collection brings the best of Scandinavian design and comfort to your home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Minimalist Design</h3>
              <p className="text-gray-600 font-body font-normal">Clean lines and uncluttered spaces for peaceful living</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Natural Materials</h3>
              <p className="text-gray-600 font-body font-normal">Sustainably sourced wood and eco-friendly finishes</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Energy Efficient</h3>
              <p className="text-gray-600 font-body font-normal">High-performance insulation and sustainable energy solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-heading font-bold text-black mb-6">Ready to Experience Scandinavian Living?</h2>
            <p className="text-xl text-black/80 font-body font-normal mb-8 max-w-2xl mx-auto">
              Discover the perfect balance of minimalist design and natural comfort with our Skandy-Nordy collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-black text-primary px-8 py-3 font-medium hover:bg-white transition-colors duration-200 rounded-sm"
              >
                Schedule Consultation
              </a>
              <a 
                href="/designs" 
                className="inline-block border-2 border-black text-black px-8 py-3 font-medium hover:bg-black hover:text-primary transition-colors duration-200 rounded-sm"
              >
                View All Designs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-primary transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkandyPage; 