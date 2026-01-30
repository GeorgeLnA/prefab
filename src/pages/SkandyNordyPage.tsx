import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { AnimatedButton } from '../components/ui/animated-button';
import { ExpandingButton } from '../components/ui/expanding-button';

const SkandyNordyPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Filter only Nordy category houses
  const nordyHouses = houseData.filter(house => house.category === 'NORDY');

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
        title="Nordy Collection - Scandinavian Prefab Homes"
        description="Nordy Scandinavian prefab homes UK: minimalist design, natural materials. Oxford, London, Oxfordshire. Prefabricated houses with Nordic style."
        url="/skandy-nordy"
        keywords={buildKeywords('Nordy prefab homes UK, Scandinavian prefabricated houses Oxford London, Nordic prefab, minimalist prefab homes, Nordy collection')}
      />
      <div>
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-screen"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="absolute inset-0 bg-black/35 z-10"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/NORDY/NORDY 35_1.2F 4K.jpg')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-start z-20">
          <div className="w-full px-4 sm:px-5">
            <div className="w-full">
              <h1 className="text-5xl md:text-6xl font-heading font-thin text-white mb-6 leading-tight">
                Nordic Harmony
              </h1>
              <p className="text-white text-xl font-body font-normal mb-8 leading-relaxed">
                Nordic inspired minimalist design. Natural materials, clean lines, 
                and sustainable living principles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton
                  asLink={true}
                  href="/contact"
                  variant="yellow"
                  className="px-8 py-3 w-full sm:w-auto text-center"
                >
                  Schedule Consultation
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-thin text-gray-900 mb-4 sm:mb-6">Nordic Craftsmanship</h2>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900">
              Each model embodies the essence of Scandinavian design philosophy and Nordic craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {nordyHouses.map((house, index) => {
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

      {/* Features Section */}
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-thin text-gray-800 mb-6">Our Core Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-gray-900 font-body font-normal">Natural materials for a warm and authentic living atmosphere</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-gray-900 font-body font-normal">High thermal comfort with advanced SIP insulation</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-900 font-body font-normal">Faster move-in through precision off-site manufacturing</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-900 font-body font-normal">Clean, predictable assembly for effortless installation</p>
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
          <h2 className="text-4xl font-heading font-thin text-white mb-6">Embrace Nordic Living</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the tranquility and sustainability of Scandinavian design with our carefully crafted Nordy collection.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <AnimatedButton
              asLink={true}
              href="/contact"
              variant={isScrolled ? "greyToWhite" : "greyToYellow"}
              className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg text-center"
            >
              Schedule Viewing
            </AnimatedButton>
            <AnimatedButton
              asLink={true}
              href="/gallery"
              variant={isScrolled ? "whiteToGrey" : "whiteOnYellow"}
              className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg text-center"
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
              alt="Nordy house design"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SkandyNordyPage;