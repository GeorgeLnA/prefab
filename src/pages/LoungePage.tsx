import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHouseTotalAreaSqm, houseData } from '../data/houses';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { formatAreaSqm, formatUsdFromUah } from '../lib/utils';
import { AnimatedButton } from '../components/ui/animated-button';
import { ExpandingButton } from '../components/ui/expanding-button';

const LoungePage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Filter only Lounge category houses
  const loungeHouses = houseData.filter(house => house.category === 'LOUNGE');

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
        title="Lounge — просторі модульні будинки з відкритим плануванням"
        description="Колекція Lounge: відкриті плани, преміальний комфорт. Доставка по Україні. Сучасні модульні рішення."
        url="/lounge"
        keywords={buildKeywords('Lounge модульні будинки, open plan prefab Україна, просторі модульні Київ')}
      />
      <div className="bg-white">
      <div className="pt-20">
        {/* Hero Section */}
      <section 
        className="relative h-96 bg-gradient-to-r from-primary to-primary-dark"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative w-full px-4 sm:px-5 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-heading font-thin mb-4">Колекція Lounge</h1>
            <p className="text-xl font-body font-normal mb-6 max-w-2xl">
              Просторе відкрите планування та преміальний комфорт. Серія Lounge поєднує відпочинок і сучасний дизайн для повноцінного життя.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-primary px-4 py-2 font-thin rounded-lg">
                {loungeHouses.length} моделей у наявності
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-thin text-gray-900 mb-4 sm:mb-6">Моделі Lounge</h2>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900">
              Оберіть модель Lounge з оптимальним балансом комфорту, стилю та практичності.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {loungeHouses.map((house, index) => {
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
            <h2 className="text-4xl font-heading font-thin text-gray-800 mb-6">Lounge-життя</h2>
            <p className="text-xl font-body font-normal text-gray-900">
              Колекція Lounge поєднує відкриті плани, якісні фініші та енергоефективність для максимального комфорту.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Відкрите планування</h3>
              <p className="text-gray-900 font-body font-normal">Максимум світла та плавні переходи між зонами</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Преміальні фініші</h3>
              <p className="text-gray-900 font-body font-normal">Якісні матеріали та обробка для довговічної краси</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Енергоефективність</h3>
              <p className="text-gray-900 font-body font-normal">Рішення з низьким енергоспоживанням та витратами на утримання</p>
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
          <h2 className="text-4xl font-heading font-thin text-white mb-6">Спробуйте Lounge</h2>
          <p className="text-xl text-white/90 font-body font-normal mb-8">
            Зв’яжіться з нашою командою, щоб адаптувати модель Lounge під вас або записатися на консультацію та переглянути варіанти.
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
              alt="Проєкт будинку Lounge"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default LoungePage;