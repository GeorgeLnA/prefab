import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHouseTotalAreaSqm, houseData } from '../data/houses';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { formatAreaSqm, formatUsdFromUah } from '../lib/utils';
import { AnimatedButton } from '../components/ui/animated-button';
import { ExpandingButton } from '../components/ui/expanding-button';

const SmartPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Filter only Smart category houses
  const smartHouses = houseData.filter(house => house.category === 'SMART');

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
        title="Smart — розумні модульні будинки"
        description="Розумні модульні будинки: автоматизація, енергоефективність. Prefab Homes Україна. Технології для комфортного житла."
        url="/smart"
        keywords={buildKeywords('розумний модульний будинок Україна, home automation prefab, енергоефективні smart homes')}
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
            backgroundImage: "url('/S-18-1.jpg')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-start z-20">
          <div className="w-full px-4 sm:px-5">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-heading font-thin text-white mb-6 leading-tight">
                Розумне житло
              </h1>
              <p className="text-white text-xl font-body font-normal mb-8 leading-relaxed">
                Просунута автоматизація та енергоефективність — житло майбутнього з інтелектуальними системами.
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-thin text-gray-900 mb-4 sm:mb-6">Розумні проєкти</h2>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900">
              У кожній моделі — інтегровані smart-технології та енергоефективні системи.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {smartHouses.map((house, index) => {
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
            <h2 className="text-4xl font-heading font-thin text-gray-800 mb-6">Переваги smart-дому</h2>
            <p className="text-xl text-gray-900 font-body font-normal">
              Будинки Smart поєднують сучасні технології та стійкий дизайн для комфорту, економії та зручності керування.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Розумне освітлення</h3>
              <p className="text-gray-900 font-body font-normal">Автоматичне світло з режимами настрою та економією енергії</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Клімат-контроль</h3>
              <p className="text-gray-900 font-body font-normal">Розумні системи ОВК для комфорту та ефективності</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Безпека</h3>
              <p className="text-gray-900 font-body font-normal">Сучасні замки, камери та інтегровані системи охорони</p>
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
          <h2 className="text-4xl font-heading font-thin text-white mb-6">Готові до житла майбутнього?</h2>
          <p className="text-xl text-white/90 font-body font-normal mb-8">
            Спробуйте зручність та ефективність smart-технологій у наших розумних модульних проєктах.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <AnimatedButton
              asLink={true}
              href="/contact"
              variant="whiteOnYellow"
              className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg text-center"
            >
              Замовити демо
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
              alt="Проєкт smart-будинку"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SmartPage;