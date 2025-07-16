import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const SkandyNordyPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter only Skandy-Nordy category houses
  const skandyNordyHouses = houseData.filter(house => house.category === 'SKANDY-NORDY');

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
            backgroundImage: "url('/Skandy%20120%20front-1%202.png')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-start z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="text-primary text-sm uppercase tracking-wider mb-4">SKANDY-NORDY COLLECTION</div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Nordic Harmony
                <span className="relative">
                  <div className="absolute -bottom-2 left-0 w-8 h-8 border-2 border-primary rounded-sm"></div>
                </span>
              </h1>
              <p className="text-white text-xl font-body font-normal mb-8 leading-relaxed">
                Scandinavian-Nordic inspired minimalist design. Natural materials, clean lines, 
                and sustainable living principles, starting from £295,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#models" 
                  className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 font-medium transition-colors duration-200 rounded-sm"
                >
                  Explore Nordic Designs &rarr;
                </a>
                <a 
                  href="#consultation" 
                  className="inline-block border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200 rounded-sm"
                >
                  Schedule Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-primary text-sm uppercase tracking-wider mb-4">NORDIC PHILOSOPHY</div>
              <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">
                Embracing Simplicity
                <span className="relative">
                  <div className="absolute -bottom-2 left-0 w-8 h-8 border-2 border-primary rounded-sm"></div>
                </span>
              </h2>
              <p className="text-xl text-gray-600 font-body font-normal mb-8 leading-relaxed">
                Our Skandy-Nordy collection embodies the timeless principles of Scandinavian design: 
                functionality, simplicity, and deep connection with nature.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold mb-2">Hygge Living</h4>
                    <p className="text-gray-600 font-body font-normal">Creating cozy, comfortable spaces that promote well-being and contentment in everyday life</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold mb-2">Lagom Balance</h4>
                    <p className="text-gray-600 font-body font-normal">Finding the perfect balance - not too little, not too much, just right for sustainable living</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold mb-2">Natural Harmony</h4>
                    <p className="text-gray-600 font-body font-normal">Seamless integration with the natural environment and seasonal changes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Nordy-65-3D-2.jpg" 
                alt="Nordic design interior"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary rounded-sm opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary rounded-sm opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary text-sm uppercase tracking-wider mb-4">NORDIC FEATURES</div>
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">Sustainable by Design</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Materials</h3>
              <p className="text-gray-600">Sustainably sourced wood, stone, and eco-friendly materials throughout</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Minimalist Design</h3>
              <p className="text-gray-600">Clean lines and uncluttered spaces that promote tranquility</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Living</h3>
              <p className="text-gray-600">Environmentally conscious design with minimal ecological footprint</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-primary text-sm uppercase tracking-wider mb-4">SKANDY-NORDY MODELS</div>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">Nordic Craftsmanship</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each model embodies the essence of Scandinavian design philosophy and Nordic craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skandyNordyHouses.map((house, index) => {
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
                          SKANDY-NORDY
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
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Embrace Nordic Living</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the tranquility and sustainability of Scandinavian design with our carefully crafted Skandy-Nordy collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-200 rounded-sm">
              Schedule Visit
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
              alt="Skandy-Nordy house design"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SkandyNordyPage;