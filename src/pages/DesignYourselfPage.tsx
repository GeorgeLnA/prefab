import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const DesignYourselfPage: React.FC = () => {
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/Глеваха_1.jpg')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-primary text-sm uppercase tracking-wider mb-4">OUR FLAGSHIP PRODUCT</div>
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                MODULAR <span className="text-primary font-bold">HOUSES</span>
              </h1>
              <p className="text-white text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
                Want something truly unique? Use our modular system to design your own home, 
                tailored to your lifestyle and vision. Expandable, customizable, and built to grow with you.
              </p>
              <Link 
                to="/design-form" 
                className="inline-block bg-primary hover:bg-primary-hover text-white px-12 py-4 text-xl font-semibold transition-all duration-300 rounded-lg shadow-lg uppercase"
              >
                Start Designing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Houses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Our Modular Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start with these base designs and customize them to your exact specifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modularHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden bg-white transition-all duration-500 hover:shadow-xl rounded-lg">
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
                          <div className="text-white text-sm uppercase tracking-wider mb-2">{'< CUSTOMIZE >'}</div>
                          <div className="text-white font-light text-lg">{house.category}</div>
                          <div className="text-gray-300 text-sm mt-2">
                            {house.squareMeters} m² • £{house.price.toLocaleString()}
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
                          From £{house.price.toLocaleString()}
                        </span>
                      </div>

                      <Link 
                        to={`/house/${originalIndex}`}
                        className="block w-full bg-primary hover:bg-primary-hover text-white py-3 px-4 font-medium transition-colors duration-200 text-center rounded-sm mb-2"
                      >
                        View Details →
                      </Link>
                      
                      <Link 
                        to="/design-form"
                        className="block w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 px-4 font-medium transition-colors duration-200 text-center rounded-sm"
                      >
                        Customize This Design
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
              </div>
              </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our simple 4-step process to create your perfect modular home
            </p>
              </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-white mb-3">Choose Base</h3>
              <p className="text-gray-400">Select from our modular base designs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-white mb-3">Customize</h3>
              <p className="text-gray-400">Add modules and features to suit your needs</p>
              </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-white mb-3">Plan</h3>
              <p className="text-gray-400">Work with our team to finalize your design</p>
              </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-white mb-3">Build</h3>
              <p className="text-gray-400">Watch your custom modular home come to life</p>
            </div>
              </div>
              </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready to Design Your Dream Home?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our modular system gives you the freedom to create exactly what you envision. 
            Start your journey today.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-primary px-12 py-4 text-xl font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-lg"
          >
            Get Started Now
          </Link>
              </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-4xl p-4">
            <img src={selectedImage} alt="House detail" className="max-w-full max-h-full object-contain" />
              <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              >
              ×
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default DesignYourselfPage; 