import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';
import SEO from '../components/SEO';
import { AnimatedButton } from '../components/ui/animated-button';
import { ExpandingButton } from '../components/ui/expanding-button';

const ModularPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Filter only Modular category houses
  const modularHouses = houseData.filter(house => house.category === 'MODULAR');

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        title="Modular Homes - Flexible Prefab Living"
        description="Modular construction for customizable living. Expandable designs that grow with your needs."
        url="/modular"
      />
      <div>
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-screen"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/modular-home-1.jpg')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-start z-20">
          <div className="w-full px-4 sm:px-5">
            <div className="w-full">
              <h1 className="text-5xl md:text-6xl font-heading font-thin text-white mb-6 leading-tight">
                Flexible Living
              </h1>
              <p className="text-white text-xl font-body font-normal mb-8 leading-relaxed">
                Modular construction for customizable living. Expandable designs that grow with your needs, 
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="inline-block border border-white text-white px-8 py-3 font-thin md:hover:bg-white md:hover:text-gray-900 transition-colors duration-200 rounded-lg w-full sm:w-auto text-center"
                >
                  Plan Your Modules
                </a>
                <AnimatedButton
                  asLink={true}
                  href="/design-form"
                  variant="yellow"
                  className="px-8 py-3 font-thin text-sm sm:text-base md:text-lg w-full sm:w-auto"
                >
                  Instant Quote
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-thin text-gray-900 mb-4 sm:mb-6">Flexible Designs</h2>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900">
              Each model can be customized and expanded to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {modularHouses.map((house, index) => {
              const houseMatch = houseData.find(h => h.name === house.name);
              return (
                <Link 
                  key={index} 
                  to={`/house/${houseMatch?.slug || ''}`}
                  className="group flex flex-col bg-white rounded-lg shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden h-full cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-white">
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img 
                        src={house.imageUrl} 
                        alt={house.name} 
                        className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 md:group-hover:bg-opacity-10 transition-all duration-500"></div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col flex-grow p-6">
                      <h3 className="text-xl font-heading font-thin text-gray-900 mb-2 line-clamp-1">
                        {house.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="text-gray-900">
                          {house.squareFeet} ft² • {house.type}
                        </span>
                        <span className="text-primary font-thin">
                          £{house.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <ExpandingButton
                          to={`/house/${houseMatch?.slug || ''}`}
                          className="w-full bg-primary text-white py-3 px-4"
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

      {/* Design Yourself Section */}
      <section 
        className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-gray-900"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5">
          <div className="text-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-thin text-white mb-4 sm:mb-6 leading-tight">
              Design Yourself
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-body font-normal mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Want something truly unique? Use our modular system to design your own home, 
              tailored to your lifestyle and vision. Expandable, customizable, and built to grow with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                asLink={true}
                href="/design-form"
                variant="white"
                className="px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg w-full sm:w-auto text-center"
              >
                Start Designing
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-thin text-gray-800 mb-6">Modular Home Flexibility</h2>
            <p className="text-xl text-gray-900 font-body font-normal">
              Our Modular Home collection offers flexible, customizable living spaces that adapt to your lifestyle and needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Expandable Design</h3>
              <p className="text-gray-900 font-body font-normal">Easily add modules as your needs change</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Cost Effective</h3>
              <p className="text-gray-900 font-body font-normal">Start smaller and expand when budget allows, maximizing value</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Quick Assembly</h3>
              <p className="text-gray-900 font-body font-normal">Faster construction with precision-engineered components</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="pt-8 md:pt-20 pb-20 bg-gradient-to-br from-primary to-primary-dark"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5 text-center">
          <h2 className="text-4xl font-heading font-thin text-white mb-6">Build Your Future, One Module at a Time</h2>
          <p className="text-xl text-white/90 font-body font-normal mb-8">
            Start with what you need today and expand tomorrow with our flexible modular construction system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton
              asLink={true}
              href="/contact"
              variant={isScrolled ? "greyToWhite" : "greyToYellow"}
              className="px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg w-full sm:w-auto text-center"
            >
              Schedule Viewing
            </AnimatedButton>
            <AnimatedButton
              asLink={true}
              href="/gallery"
              variant={isScrolled ? "whiteToGrey" : "whiteOnYellow"}
              className="px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg w-full sm:w-auto text-center"
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
              className="absolute top-4 right-4 text-white text-4xl md:hover:text-white transition-colors z-10"
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
    </>
  );
};

export default ModularPage;