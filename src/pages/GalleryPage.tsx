import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';

const GalleryPage: React.FC = () => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 21,
      title: 'Сучасний скандинавський фасад',
      category: 'ФАСАДИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 21 Large.jpeg',
      fullSrc: '/gallery/SK_ND 21 Large.jpeg',
      description: 'Фасад модульного будинку в сучасному скандинавському стилі',
      details: {
        size: '1,500 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 20,
      title: 'Фасад скандинавського будинку',
      category: 'ФАСАДИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 20 Large.jpeg',
      fullSrc: '/gallery/SK_ND 20 Large.jpeg',
      description: 'Зовнішній вигляд модульного будинку в скандинавському стилі',
      details: {
        size: '1,600 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 19,
      title: 'Північний дизайн фасаду',
      category: 'ФАСАДИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 19 Large.jpeg',
      fullSrc: '/gallery/SK_ND 19 Large.jpeg',
      description: 'Фасад модульного будинку в північному стилі',
      details: {
        size: '1,400 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 18,
      title: 'Сучасний скандинавський фасад',
      category: 'ФАСАДИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 18 Large.jpeg',
      fullSrc: '/gallery/SK_ND 18 Large.jpeg',
      description: 'Сучасний фасад скандинавського модульного будинку',
      details: {
        size: '1,500 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 14,
      title: 'Скандинавська житлова зона',
      category: 'ІНТЕР’ЄРИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 14 Large.jpeg',
      fullSrc: '/gallery/SK_ND 14 Large.jpeg',
      description: 'Інтер’єр у скандинавському стилі',
      details: {
        size: '1,500 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 13,
      title: 'Сучасний північний будинок',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 13 Large.jpeg',
      fullSrc: '/gallery/SK_ND 13 Large.jpeg',
      description: 'Сучасний модульний будинок у північному стилі',
      details: {
        size: '1,700 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 12,
      title: 'Скандинавський модульний дизайн',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 12 Large.jpeg',
      fullSrc: '/gallery/SK_ND 12 Large.jpeg',
      description: 'Модульний будинок у скандинавському стилі',
      details: {
        size: '1,400 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 11,
      title: 'Досконалість північного дизайну',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 11 Large.jpeg',
      fullSrc: '/gallery/SK_ND 11 Large.jpeg',
      description: 'Дизайн модульного будинку в північному стилі',
      details: {
        size: '1,500 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 10,
      title: 'Сучасний скандинавський будинок',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 10 Large.jpeg',
      fullSrc: '/gallery/SK_ND 10 Large.jpeg',
      description: 'Сучасний скандинавський модульний будинок',
      details: {
        size: '1,600 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 9,
      title: 'Північний модульний будинок',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 9 Large.jpeg',
      fullSrc: '/gallery/SK_ND 9 Large.jpeg',
      description: 'Модульний будинок у північному стилі',
      details: {
        size: '1,400 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 7,
      title: 'Скандинавська архітектура',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 7 Large.jpeg',
      fullSrc: '/gallery/SK_ND 7 Large.jpeg',
      description: 'Архітектура та дизайн скандинавського модульного будинку',
      details: {
        size: '1,300 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 6,
      title: 'Сучасний скандинавський будинок — варіант',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 6 Large.jpeg',
      fullSrc: '/gallery/SK_ND 6 Large.jpeg',
      description: 'Сучасний скандинавський модульний будинок',
      details: {
        size: '1,500 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 5,
      title: 'Будинок у північному стилі',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 5 Large.jpeg',
      fullSrc: '/gallery/SK_ND 5 Large.jpeg',
      description: 'Модульний будинок у північному стилі',
      details: {
        size: '1,400 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 4,
      title: 'Скандинавське житло',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 4 Large.jpeg',
      fullSrc: '/gallery/SK_ND 4 Large.jpeg',
      description: 'Модульний будинок у скандинавському стилі',
      details: {
        size: '1,600 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 3,
      title: 'Сучасний модульний будинок',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 3 Large.jpeg',
      fullSrc: '/gallery/SK_ND 3 Large.jpeg',
      description: 'Сучасний модульний будинок',
      details: {
        size: '1,300 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 2,
      title: 'Північна архітектура',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 2 Large.jpeg',
      fullSrc: '/gallery/SK_ND 2 Large.jpeg',
      description: 'Дизайн модульного будинку в дусі північної архітектури',
      details: {
        size: '1,500 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    },
    {
      id: 1,
      title: 'Дизайн скандинавського будинку',
      category: 'ЗАВЕРШЕНІ ПРОЄКТИ',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 1 Large.jpeg',
      fullSrc: '/gallery/SK_ND 1 Large.jpeg',
      description: 'Сучасний скандинавський модульний будинок',
      details: {
        size: '1,400 фт²',
        completion: '2024',
        type: 'Skandy',
        location: 'Україна'
      }
    }
  ];

  const filteredCaseStudies = caseStudies;

  const openLightbox = (index: number) => {
    setSelectedMediaIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMediaIndex(null);
  };

  const goToPrevious = () => {
    if (selectedMediaIndex !== null && selectedMediaIndex > 0) {
      setSelectedMediaIndex(selectedMediaIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedMediaIndex !== null && selectedMediaIndex < filteredCaseStudies.length - 1) {
      setSelectedMediaIndex(selectedMediaIndex + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMediaIndex === null) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (selectedMediaIndex > 0) {
          setSelectedMediaIndex(selectedMediaIndex - 1);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (selectedMediaIndex < filteredCaseStudies.length - 1) {
          setSelectedMediaIndex(selectedMediaIndex + 1);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMediaIndex, filteredCaseStudies.length]);

  const currentMedia = selectedMediaIndex !== null ? filteredCaseStudies[selectedMediaIndex] : null;

  return (
    <>
      <SEO
        title="Галерея — Prefab Homes"
        description="Галерея реалізованих модульних проєктів в Україні: фото, відео, кейси. Якість та майстерність Prefab Homes."
        url="/gallery"
        keywords={buildKeywords('галерея модульних будинків Україна, prefab портфоліо, фото модульні Київ')}
      />
      <div className="bg-white">
      <div className="pt-20">
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight text-center">Кейси та галерея</h1>
            <p className="text-xl text-black/90 mb-6 leading-relaxed text-center">
              Реальні об’єкти, етапи будівництва та рівень виконання кожного проєкту Prefab Homes. Подивіться наші роботи.
            </p>
          </div>

          {/* Featured Portfolio Case - Full Width */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-xl md:hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                {/* Thumbnail - Larger for featured */}
                <div className="relative w-full lg:w-2/5 h-80 lg:h-auto overflow-hidden flex-shrink-0">
                  <img 
                    src="/gallery/pdfs/thumbs/188 Large.jpeg" 
                    alt="Обкладинка портфоліо"
                    className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-primary text-black py-2 px-4 text-sm font-thin rounded-lg uppercase tracking-wide shadow-lg">
                      Обране портфоліо
                    </div>
                  </div>
                </div>
                {/* Description - Enhanced for featured */}
                <div className="w-full lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-thin text-gray-900 mb-4">
                      Модульний будинок 188 м²
                    </h3>
                    <p className="text-gray-900 font-body font-normal mb-6 leading-relaxed text-lg">
                      Зведений огляд портфоліо з різними серіями модульних будинків: кейси, параметри, етапи будівництва та результат по завершенні.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-sm font-thin bg-primary/10 text-gray-900 px-4 py-2 rounded-full">
                        Повне портфоліо
                      </span>
                      <span className="text-sm font-thin bg-primary/10 text-gray-900 px-4 py-2 rounded-full">
                        Кілька проєктів
                      </span>
                      <span className="text-sm font-thin bg-primary/10 text-gray-900 px-4 py-2 rounded-full">
                        Документація
                      </span>
                    </div>
                  </div>
                  <a
                    href="/gallery/pdfs/PREFAB PORTFOLIO SAMPLE _compressed (3).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-block w-full sm:w-auto overflow-hidden text-center rounded-lg font-thin bg-primary text-black py-3 sm:py-4 px-8 sm:px-12 text-base sm:text-lg"
                  >
                    <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap">
                      Переглянути кейс
                    </span>
                    <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white">
                      <span>Переглянути кейс</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Cases Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
              {/* Portfolio Case 1 - Сучасний будинок */}
              <div className="bg-white rounded-xl shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/gallery/pdfs/thumbs/160 Large.jpeg" 
                      alt="Сучасний будинок 160 m², кейс"
                      className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  {/* Description */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-thin text-gray-900 mb-3">
                        Сучасний будинок 160 m²
                      </h3>
                      <p className="text-gray-900 font-body font-normal mb-4 leading-relaxed">
                        Кейс: сучасний модульний будинок із SIP-конструкцією, великими житловими зонами та енергоефективним рішенням.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Серія Modern
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          160 m²
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          SIP-конструкція
                        </span>
                      </div>
                    </div>
                    <a
                      href="/gallery/pdfs/MODERN HOME 160 m2_compressed.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-black py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
                    >
                      <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
                        Переглянути кейс
                      </span>
                      <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white w-full">
                        <span>Переглянути кейс</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Portfolio Case 2 - Modульний будинок 180 m² */}
              <div className="bg-white rounded-xl shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/gallery/pdfs/thumbs/124 Large.jpeg" 
                      alt="Modульний будинок 180 m², кейс"
                      className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  {/* Description */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-thin text-gray-900 mb-3">
                        Modульний будинок 180 m²
                      </h3>
                      <p className="text-gray-900 font-body font-normal mb-4 leading-relaxed">
                        Документація просторого модульного проєкту: гнучке планування, ефективний монтаж і преміальні фініші.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Серія Modular
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          180 m²
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Гнучкий дизайн
                        </span>
                      </div>
                    </div>
                    <a
                      href="/gallery/pdfs/MODULAR HOME 180 m2_compressed.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-black py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
                    >
                      <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
                        Переглянути кейс
                      </span>
                      <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white w-full">
                        <span>Переглянути кейс</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Portfolio Case 3 - Modульний будинок 220 m² */}
              <div className="bg-white rounded-xl shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/gallery/pdfs/thumbs/220 Large.jpeg" 
                      alt="Modульний будинок 220 m², кейс"
                      className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  {/* Description */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-thin text-gray-900 mb-3">
                        Modульний будинок 220 m²
                      </h3>
                      <p className="text-gray-900 font-body font-normal mb-4 leading-relaxed">
                        Великий модульний будинок: преміальні фініші, просторі плани та сучасні технології будівництва.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Серія Modular
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          220 m²
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Преміум-дизайн
                        </span>
                      </div>
                    </div>
                    <a
                      href="/gallery/pdfs/MODULAR HOME 220 m2_compressed.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-black py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
                    >
                      <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
                        Переглянути кейс
                      </span>
                      <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white w-full">
                        <span>Переглянути кейс</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Portfolio Case 4 - Modульний будинок 170 m² */}
              <div className="bg-white rounded-xl shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/gallery/pdfs/thumbs/170 Large.jpeg" 
                      alt="Modульний будинок 170 m², кейс"
                      className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  {/* Description */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-thin text-gray-900 mb-3">
                        Modульний будинок 170 m²
                      </h3>
                      <p className="text-gray-900 font-body font-normal mb-4 leading-relaxed">
                        Повна документація продуманого модульного проєкту з сучасними зручностями та ефективним плануванням простору.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Серія Modular
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          170 m²
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Сучасні зручності
                        </span>
                      </div>
                    </div>
                    <a
                      href="/gallery/pdfs/MODULAR HOME 170 m2_compressed.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-black py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
                    >
                      <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
                        Переглянути кейс
                      </span>
                      <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white w-full">
                        <span>Переглянути кейс</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Portfolio Case 5 - Modульний будинок 165 m² */}
              <div className="bg-white rounded-xl shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/gallery/pdfs/thumbs/165 Large.jpeg" 
                      alt="Modульний будинок 165 m², кейс"
                      className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  {/* Description */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-thin text-gray-900 mb-3">
                        Modульний будинок 165 m²
                      </h3>
                      <p className="text-gray-900 font-body font-normal mb-4 leading-relaxed">
                        Кейс середнього розміру: сучасний дизайн, енергоефективність і якісне виконання робіт.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Серія Modular
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          165 m²
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Енергоефективність
                        </span>
                      </div>
                    </div>
                    <a
                      href="/gallery/pdfs/MODULAR HOME 165 m2_compressed.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-black py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
                    >
                      <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
                        Переглянути кейс
                      </span>
                      <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white w-full">
                        <span>Переглянути кейс</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Portfolio Case 6 - Modульний будинок 124 m² */}
              <div className="bg-white rounded-xl shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/gallery/pdfs/thumbs/180 Large.jpeg" 
                      alt="Modульний будинок 124 m², кейс"
                      className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  {/* Description */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-thin text-gray-900 mb-3">
                        Modульний будинок 124 m²
                      </h3>
                      <p className="text-gray-900 font-body font-normal mb-4 leading-relaxed">
                        Компактний модульний будинок: раціональне використання площі та сучасні принципи планування.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Серія Modular
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          124 m²
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Компактний дизайн
                        </span>
                      </div>
                    </div>
                    <a
                      href="/gallery/pdfs/MODULAR HOME 124 m2_compressed.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-black py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
                    >
                      <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
                        Переглянути кейс
                      </span>
                      <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white w-full">
                        <span>Переглянути кейс</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Portfolio Case 7 - Modульний будинок 106 m² */}
              <div className="bg-white rounded-xl shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/gallery/pdfs/thumbs/106 Large.jpeg" 
                      alt="Modульний будинок 106 m², кейс"
                      className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  {/* Description */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-thin text-gray-900 mb-3">
                        Modульний будинок 106 m²
                      </h3>
                      <p className="text-gray-900 font-body font-normal mb-4 leading-relaxed">
                        Документація компактного модульного будинку: розумні планувальні рішення та швидкий монтаж.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Серія Modular
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          106 m²
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Розумне планування
                        </span>
                      </div>
                    </div>
                    <a
                      href="/gallery/pdfs/MODULAR HOME 106 m2_compressed.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-black py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
                    >
                      <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
                        Переглянути кейс
                      </span>
                      <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white w-full">
                        <span>Переглянути кейс</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Portfolio Case 8 - Modульний будинок 99 m² */}
              <div className="bg-white rounded-xl shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/gallery/pdfs/thumbs/99 Large.jpeg" 
                      alt="Modульний будинок 99 m², кейс"
                      className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  {/* Description */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-thin text-gray-900 mb-3">
                        Modульний будинок 99 m²
                      </h3>
                      <p className="text-gray-900 font-body font-normal mb-4 leading-relaxed">
                        Компактний модульний проєкт: ефективне зонування та сучасні методи prefab-будівництва.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Серія Modular
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          99 m²
                        </span>
                        <span className="text-xs font-thin bg-primary/10 text-gray-900 px-3 py-1 rounded-full">
                          Ефективне планування
                        </span>
                      </div>
                    </div>
                    <a
                      href="/gallery/pdfs/MODULAR HOME 99 m2_compressed.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-black py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
                    >
                      <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap w-full">
                        Переглянути кейс
                      </span>
                      <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white w-full">
                        <span>Переглянути кейс</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View Portfolio CTA Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-thin text-white mb-4">
                Повне портфоліо проєктів
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-body font-normal mb-8 leading-relaxed">
                Завантажте збірник кейсів із детальним описом реалізованих об’єктів усіх серій.
              </p>
              <a
                href="/gallery/pdfs/PREFAB HOMES PORTFOLIO_compressed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-block overflow-hidden text-center rounded-lg font-thin bg-white text-black py-3 sm:py-4 px-8 sm:px-12 text-base sm:text-lg md:text-xl"
              >
                <span className="translate-y-0 md:group-hover/btn:-translate-y-full md:group-hover/btn:opacity-0 transition-all duration-300 inline-block whitespace-nowrap">
                  Повне портфоліо
                </span>
                <div className="flex items-center absolute left-0 top-0 h-full w-full justify-center translate-y-full opacity-0 md:group-hover/btn:translate-y-0 md:group-hover/btn:opacity-100 transition-all duration-300 rounded-lg z-10 whitespace-nowrap bg-gray-900 text-white">
                  <span>Повне портфоліо</span>
                </div>
              </a>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 auto-rows-fr">
            {filteredCaseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className="group flex flex-col bg-white rounded-lg shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(index);
                      }
                    }}
                    aria-label={`Відкрити ${study.type === 'video' ? 'відео' : 'зображення'}: ${study.title}`}
              >
                {/* Image Section - Fixed Height */}
                <div className="relative overflow-hidden h-32 sm:h-36 md:h-40 lg:h-64 bg-white flex-shrink-0">
                  <img 
                    src={study.thumbnail} 
                    alt={`${study.title} — ${study.category}, ${study.type === 'video' ? 'відео' : 'фото'}`}
                    className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Video Play Button */}
                  {study.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/90 text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center md:group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-white py-16 px-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-thin text-primary mb-2">150+</div>
                <div className="text-gray-900">Завершені об’єкти</div>
              </div>
              <div>
                <div className="text-4xl font-thin text-primary mb-2">98%</div>
                <div className="text-gray-900">Задоволеність клієнтів</div>
              </div>
              <div>
                <div className="text-4xl font-thin text-primary mb-2">4.2</div>
                <div className="text-gray-900">Середньо днів монтажу</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {currentMedia && selectedMediaIndex !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Переглядач медіа"
          >
            <div 
              className="relative max-w-6xl max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label="Закрити переглядач"
              >
                &times;
              </button>

              {/* Previous Arrow */}
              {selectedMediaIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl hover:text-gray-300 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded p-2"
                  aria-label="Попереднє зображення"
                >
                  &#8249;
                </button>
              )}

              {/* Next Arrow */}
              {selectedMediaIndex < filteredCaseStudies.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl hover:text-gray-300 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded p-2"
                  aria-label="Наступне зображення"
                >
                  &#8250;
                </button>
              )}
              
              {currentMedia.type === 'image' ? (
                <img 
                  src={currentMedia.fullSrc} 
                  alt="Кейс — збільшене зображення"
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={currentMedia.fullSrc}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    title="Відео з кейсу"
                    aria-label="Відеоплеєр кейсу"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
    </div>
    </>
  );
};

export default GalleryPage;