import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHouseTotalAreaSqm, houseData } from '../data/houses';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { getHousePrice, isModularOneStorey, isModularTwoStorey } from '../lib/skandy-nordy-pricing';
import { formatAreaSqm, formatUsdFromUah } from '../lib/utils';
import { AnimatedButton } from '../components/ui/animated-button';
import { ExpandingButton } from '../components/ui/expanding-button';

type SortOption = 'name' | 'size' | 'price';
type StoreyFilter = 'all' | '1' | '2';

const ModularPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [storeyFilter, setStoreyFilter] = useState<StoreyFilter>('all');

  // Filter only Modular category houses, apply storey filter, then sort (ascending)
  const modularHouses = React.useMemo(() => {
    let filtered = houseData.filter(house => house.category === 'MODULAR');
    if (storeyFilter === '1') filtered = filtered.filter(isModularOneStorey);
    if (storeyFilter === '2') filtered = filtered.filter(isModularTwoStorey);
    const sorted = [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortBy === 'name') cmp = (a.name || '').localeCompare(b.name || '');
      if (sortBy === 'size') cmp = getHouseTotalAreaSqm(a) - getHouseTotalAreaSqm(b);
      if (sortBy === 'price') cmp = getHousePrice(a) - getHousePrice(b);
      return cmp;
    });
    return sorted;
  }, [sortBy, storeyFilter]);

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
        title="Модульні будинки — гнучкі рішення | Prefab Homes"
        description="Модульні будинки Prefab Homes в Україні: адаптивні проєкти, розширення, орієнтовні ціни в доларах США. Підбір моделей X10, X23, X40 та інші."
        url="/modular"
        keywords={buildKeywords('модульний будинок Україна, збірний дім, розширюваний проєкт, Prefab Homes modular, каталог модулів')}
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
            backgroundImage: "url('/MODULAR/x23/snapedit_1697572431807 Large.jpeg')" 
          }}
        ></div>
        
        <div className="absolute inset-0 flex items-center justify-start z-20">
          <div className="w-full px-4 sm:px-5">
            <div className="w-full">
              <h1 className="text-5xl md:text-6xl font-heading font-thin text-white mb-6 leading-tight">
                Гнучке планування
              </h1>
              <p className="text-white text-xl font-body font-normal mb-8 leading-relaxed">
                Модульна система дозволяє підлаштувати дім під ваш спосіб життя та масштабувати проєкт у майбутньому.
              </p>
              <div className="flex flex-row items-center gap-3 flex-nowrap">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center border border-white text-white px-8 py-3 font-thin text-sm sm:text-base md:text-lg md:hover:bg-white md:hover:text-gray-900 transition-colors duration-200 rounded-lg leading-none whitespace-nowrap shrink-0"
                >
                  Обговорити модулі
                </a>
                <AnimatedButton
                  asLink={true}
                  href="/design-form"
                  variant="yellow"
                  className="inline-flex items-center justify-center px-8 py-3 font-thin text-sm sm:text-base md:text-lg leading-none whitespace-nowrap shrink-0"
                >
                  Спроєктувати самостійно
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-thin text-gray-900 mb-4 sm:mb-6">Гнучкі проєкти</h2>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900">
              Кожну модель можна адаптувати та доповнювати модулями відповідно до ваших потреб.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700 font-body font-normal">Фільтр</span>
              {(['all', '1', '2'] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setStoreyFilter(value)}
                  className={`inline-flex items-center justify-center rounded-lg px-4 py-2 h-[42px] text-gray-900 font-body transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                    storeyFilter === value
                      ? 'bg-primary text-black'
                      : 'border border-gray-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  {value === 'all' ? 'Усі' : value === '1' ? '1 поверх' : '2 поверхи'}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-gray-700 font-body font-normal">Сортування</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="border border-gray-300 rounded-lg pl-4 pr-8 py-2 h-[42px] text-gray-900 font-body bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none bg-no-repeat bg-[length:12px] bg-[right_0.5rem_center]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`
                }}
              >
                <option value="name">Назва</option>
                <option value="size">Площа (м²)</option>
                <option value="price">Ціна</option>
              </select>
            </div>
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
                          {formatAreaSqm(getHouseTotalAreaSqm(house))} • {house.type}
                        </span>
                        <span className="text-primary font-thin">
                          {formatUsdFromUah(getHousePrice(house))}
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

      {/* Design Yourself Section */}
      <section 
        className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-gray-900"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5">
          <div className="text-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-thin text-white mb-4 sm:mb-6 leading-tight">
              Створіть проєкт під себе
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-body font-normal mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Скористайтеся модульною системою: планування під ваш стиль життя, можливість розширення та чіткі терміни виробництва.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                asLink={true}
                href="/design-form"
                variant="white"
                className="px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg w-full sm:w-auto text-center"
              >
                Розпочати проєктування
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-thin text-gray-800 mb-6">Переваги модульного дому</h2>
            <p className="text-xl text-gray-900 font-body font-normal">
              Колекція модульних проєктів — це свобода планування та зрозуміла логіка нарощування площі.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group flex flex-col items-center">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300 shrink-0">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Можливість розширення</h3>
              <p className="text-gray-900 font-body font-normal">Додавайте модулі, коли змінюються потреби родини</p>
            </div>
            <div className="text-center group flex flex-col items-center">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300 shrink-0">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Економічність</h3>
              <p className="text-gray-900 font-body font-normal">Почніть з потрібного обсягу та інвестуйте в розширення поступово</p>
            </div>
            <div className="text-center group flex flex-col items-center">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mb-6 md:group-hover:bg-primary md:group-hover:text-white transition-all duration-300 shrink-0">
                <svg className="w-10 h-10 text-primary md:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-thin mb-3">Швидкий монтаж</h3>
              <p className="text-gray-900 font-body font-normal">Заводська точність прискорює збірку на ділянці</p>
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
          <h2 className="text-4xl font-heading font-thin text-white mb-6">Будуйте поетапно — модуль за модулем</h2>
          <p className="text-xl text-white/90 font-body font-normal mb-8">
            Почніть із потрібної площі сьогодні й розширюйтесь завтра завдяки гнучкій модульній технології.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <AnimatedButton
              asLink={true}
              href="/contact"
              variant={isScrolled ? "greyToWhite" : "greyToYellow"}
              className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg text-center"
            >
              Замовити перегляд
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
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl md:hover:text-white transition-colors z-10"
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Модульний будинок — візуалізація"
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