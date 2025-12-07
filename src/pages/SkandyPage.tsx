import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';
import SEO from '../components/SEO';
import { AnimatedButton } from '../components/ui/animated-button';
import { ExpandingButton } from '../components/ui/expanding-button';

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
    <>
      <SEO
        title="Skandy Collection - Scandinavian Prefab Homes"
        description="Scandinavian-inspired minimalist prefab homes. Natural materials, clean lines, and sustainable living. Starting from £295,000."
        url="/skandy"
      />
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
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-primary text-sm uppercase tracking-wider mb-4">SKANDY-NORDY COLLECTION</div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Scandinavian Elegance
                <span className="relative">
                  <div className="absolute -bottom-2 left-0 w-8 h-8 border-2 border-primary rounded-lg"></div>
                </span>
              </h1>
              <p className="text-white text-xl font-body font-normal mb-8 leading-relaxed">
                Scandinavian-inspired minimalist design with natural materials and clean lines. 
                Sustainable living with Nordic comfort, starting from £295,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#consultation" 
                  className="inline-block border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200 rounded-lg"
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
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">SKANDY MODELS</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">Scandinavian Designs</h2>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900 max-w-3xl mx-auto">
              Nordic-inspired designs with minimalist aesthetics and natural materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skandyHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              return (
                <Link 
                  key={index} 
                  to={`/house/${originalIndex}`}
                  className="group flex flex-col bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-white">
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={house.imageUrl} 
                        alt={house.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-primary text-white py-2 px-4 text-sm font-medium rounded-lg">
                          SKANDY-NORDY
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col flex-grow p-6">
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 line-clamp-1">
                        {house.name}
                      </h3>
                      {house.description && (
                        <p className="text-sm text-gray-900 mb-4 line-clamp-2 flex-grow">
                          {house.description}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="text-gray-900">
                          {house.squareMeters} m² • {house.type}
                        </span>
                        <span className="text-primary font-medium">
                          £{house.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <ExpandingButton
                          to={`/house/${originalIndex}`}
                          className="bg-primary text-white py-3 px-4"
                        >
                          View Details
                        </ExpandingButton>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">Nordic Comfort</h2>
            <p className="text-xl text-gray-900 font-body font-normal max-w-3xl mx-auto">
              Our Skandy collection brings the best of Scandinavian design and comfort to your home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Minimalist Design</h3>
              <p className="text-gray-900 font-body font-normal">Clean lines and uncluttered spaces for peaceful living</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Natural Materials</h3>
              <p className="text-gray-900 font-body font-normal">Sustainably sourced wood and eco-friendly finishes</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Energy Efficient</h3>
              <p className="text-gray-900 font-body font-normal">High-performance insulation and sustainable energy solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Experience Scandinavian Living</h2>
          <p className="text-xl text-white/90 font-body font-normal mb-8 max-w-2xl mx-auto">
            Discover the perfect balance of minimalist design and natural comfort with our Skandy collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton
              variant="whiteOnYellow"
              className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base md:text-lg"
            >
              Schedule Viewing
            </AnimatedButton>
            <AnimatedButton
              asLink={true}
              href="/gallery"
              variant="whiteOnYellow"
              className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base md:text-lg"
            >
              View All Models
            </AnimatedButton>
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
              className="absolute top-4 right-4 text-white text-4xl hover:text-white transition-colors z-10"
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Skandy house design"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SkandyPage; 