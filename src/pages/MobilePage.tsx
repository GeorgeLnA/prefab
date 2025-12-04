import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const MobilePage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter only Mobile category houses
  const mobileHouses = houseData.filter(house => house.category === 'MOBILE');

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
            backgroundImage: "url('/prefab_homes_lounge_30_front_view.jpg')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-start z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="text-primary text-sm uppercase tracking-wider mb-4">MOBILE COLLECTION</div>
              <h1 className="text-5xl md:text-6xl text-white font-light mb-6 leading-tight">
                Freedom to Move
                <span className="relative">
                  <div className="absolute -bottom-2 left-0 w-8 h-8 border-2 border-primary rounded-sm"></div>
                </span>
              </h1>
              <p className="text-white text-xl mb-8 leading-relaxed">
                Flexible mobile homes for life on the move. Compact living with modern amenities 
                and easy relocation, starting from £120,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#models" 
                  className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 font-medium transition-colors duration-200 rounded-sm"
                >
                  Explore Mobile Designs &rarr;
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
            <div className="text-primary text-sm uppercase tracking-wider mb-4">MOBILE MODELS</div>
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Flexible Designs</h2>
            <p className="text-xl text-gray-600 font-body font-normal max-w-3xl mx-auto">
              Mobile homes designed for modern living with the freedom to relocate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileHouses.map((house, index) => {
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
                          MOBILE
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
            {/* Removed colored heading */}
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">Flexible Living</h2>
            <p className="text-xl text-gray-600 font-body font-normal max-w-3xl mx-auto">
              Our Mobile collection offers the perfect solution for those who value flexibility and freedom, without compromising on comfort and modern amenities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Relocation</h3>
              <p className="text-gray-600">Move your home wherever life takes you with ease</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compact Design</h3>
              <p className="text-gray-600">Efficient use of space with smart storage solutions</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Amenities</h3>
              <p className="text-gray-600">All the comforts of home in a mobile package</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-light text-black mb-6">Ready for Mobile Living?</h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Experience the freedom of mobile living with our flexible and comfortable mobile home designs.
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

export default MobilePage; 