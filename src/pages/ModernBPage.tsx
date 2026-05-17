import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHouseTotalAreaSqm, houseData } from '../data/houses';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { formatAreaSqm, formatUsdFromUah } from '../lib/utils';
import { AnimatedButton } from '../components/ui/animated-button';
import { ExpandingButton } from '../components/ui/expanding-button';

const ModernBPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Filter only Modern-B category houses
  const modernBHouses = houseData.filter(house => house.category === 'MODERN-B');

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
        title="Modern-B — смілива сучасна архітектура"
        description="Колекція Modern-B: виразні форми, преміальні рішення. Модульні будинки з характерною архітектурою. Доставка по Україні."
        url="/modern-b"
        keywords={buildKeywords('Modern-B модульні Україна, сучасна архітектура prefab, дизайнерські модульні')}
      />
      <div>
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-screen"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/prefab_homes_modern_b_80_front_perspective.jpg')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-start z-20">
          <div className="w-full px-4 sm:px-5">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-heading font-thin text-white mb-6 leading-tight">
                Смілива архітектура
              </h1>
              <p className="text-white text-xl font-body font-normal mb-8 leading-relaxed">
                Сучасна архітектура з виразними акцентами, характерними фасадами та інноваційними рішеннями для активного способу життя.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton
                  asLink={true}
                  href="/contact"
                  variant="yellow"
                  className="px-8 py-3 w-full sm:w-auto text-center"
                >
                  Записатися на консультацію
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-thin text-gray-900 mb-4 sm:mb-6">Сучасні інновації</h2>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900">
              Сміла архітектура та інноваційні планувальні рішення.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {modernBHouses.map((house, index) => {
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
                          {formatAreaSqm(getHouseTotalAreaSqm(house))} • {house.type}
                        </span>
                        <span className="text-primary font-thin">
                          {formatUsdFromUah(house.price)}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <ExpandingButton
                          to={`/house/${houseMatch?.slug || ''}`}
                          className="w-full bg-primary text-white py-3 px-4"
                        >
                          Детальніше
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
            {/* Removed colored heading */}
            <h2 className="text-4xl font-heading font-thin text-gray-800 mb-6">Архітектурні інновації</h2>
            <p className="text-xl text-gray-900 font-body font-normal">
              Колекція Modern-B розширює межі сучасного дизайну завдяки виразним формам та продуманим деталям.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-thin mb-3">Сміла архітектура</h3>
              <p className="text-gray-900">Виразні сучасні форми, що привертають увагу</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-thin mb-3">Сучасний стиль</h3>
              <p className="text-gray-900">Актуальна естетика та передові принципи планування</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-thin mb-3">Унікальні акценти</h3>
              <p className="text-gray-900">Характерні архітектурні елементи та преміальні матеріали</p>
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
          <h2 className="text-4xl font-heading font-thin text-white mb-6">Сміле сучасне житло</h2>
          <p className="text-xl text-white/90 font-body font-normal mb-8">
            Колекція Modern-B — виразна архітектура та інновації для тих, хто цінує характер і сучасність.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <AnimatedButton
              asLink={true}
              href="/contact"
              variant={isScrolled ? "greyToWhite" : "greyToYellow"}
              className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg text-center"
            >
              Запланувати перегляд
            </AnimatedButton>
            <AnimatedButton
              asLink={true}
              href="/gallery"
              variant={isScrolled ? "whiteToGrey" : "whiteOnYellow"}
              className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg text-center"
            >
              Усі моделі
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
          <div className="relative w-full max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl md:hover:text-white transition-colors z-10"
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Проєкт будинку Modern-B"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ModernBPage;