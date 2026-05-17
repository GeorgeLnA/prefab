import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getHouseBySlug, getHouseTotalAreaSqm, houseData } from '../data/houses';
import { AnimatedButton } from '../components/ui/animated-button';
import { useRequestModal } from '../contexts/RequestModalContext';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { getHousePrice } from '../lib/skandy-nordy-pricing';
import { formatAreaSqm, formatUsdFromUah, getUahPerUsd, SITE_ORIGIN } from '../lib/utils';

const HouseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openRequestModal } = useRequestModal();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [notIncludedOpen, setNotIncludedOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const house = slug ? getHouseBySlug(slug) : null;

  if (!house) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-thin text-gray-900 mb-4">Будинок не знайдено</h1>
          <p className="text-gray-900 mb-8">Шуканий проєкт не існує.</p>
          <Link to="/gallery" className="bg-primary text-white px-6 py-3 font-thin hover:bg-primary-hover transition-colors rounded-lg">
            До галереї
          </Link>
        </div>
      </div>
    );
  }
  
  // Use main image, additional images, floor plan(s), then facades (floor plan duplicated here before facades)
  const houseImages = [
    house.imageUrl,
    ...(house.additionalImages || []),
    ...(house.floorPlans || []),
    ...(house.facades || [])
  ];

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        setLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxOpen]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % houseImages.length);
  };

  const prevImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + houseImages.length) % houseImages.length);
  };

  const goToPrevGalleryImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + houseImages.length) % houseImages.length);
  };

  const goToNextGalleryImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % houseImages.length);
  };

  const specifications = {
    dimensions: {
      'Загальна площа': formatAreaSqm(getHouseTotalAreaSqm(house)),
      'Житлова площа': house.livingArea
        ? formatAreaSqm(house.livingArea.meters)
        : formatAreaSqm(getHouseTotalAreaSqm(house)),
      'Спальні': house.type === 'БУНГАЛО' ? '3' : '4',
      'Ванні кімнати': house.type === 'БУНГАЛО' ? '2' : '3',
      'Гараж': 'Подвійний гараж у комплекті'
    },
    construction: {
      'Система стін': 'Утеплений дерев’яний каркас',
      'Утеплення': 'Тришаровий теплоізоляційний контур',
      'Вікна': 'Трискляні пакети з аргоном',
      'Покрівля': 'Фальцева металева покрівля',
      'Фундамент': 'Монолітна плита або підвал'
    },
    energy: {
      'Опалення': 'Тепловий насос і «тепла підлога»',
      'Вентиляція': 'Механічна вентиляція з рекуперацією тепла',
      'Сонячні панелі': 'Передбачено підключення сонячних модулів',
      'Орієнтовні річні витрати на енергію': `${formatUsdFromUah(24_000)}–${formatUsdFromUah(35_000)} на рік (орієнтир)`
    },
    features: {
      'Розумний дім': 'Інтегрована система автоматизації',
      'Кухня': 'Преміальна вбудована кухня в комплекті',
      'Підлогове покриття': 'Інженерна дошка по всьому дому',
      'Гарантія': '10 років структурної гарантії'
    }
  };

  // Structured data for Product schema
  const productSchema = house ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": house.name,
    "description": house.description,
    "image": `${SITE_ORIGIN}${house.imageUrl}`,
    "brand": {
      "@type": "Brand",
      "name": "Prefab Homes"
    },
    "offers": {
      "@type": "Offer",
      "url": `${SITE_ORIGIN}/house/${house.slug}`,
      "priceCurrency": "USD",
      "price": Math.round(getHousePrice(house) / getUahPerUsd()),
      "availability": house.inStock ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      "seller": {
        "@type": "Organization",
        "name": "Prefab Homes"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Площа",
        "value": formatAreaSqm(getHouseTotalAreaSqm(house))
      },
      {
        "@type": "PropertyValue",
        "name": "Категорія",
        "value": house.category
      },
      {
        "@type": "PropertyValue",
        "name": "Тип",
        "value": house.type
      }
    ]
  } : null;

  const breadcrumbSchema = house ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Головна",
        "item": `${SITE_ORIGIN}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Галерея",
        "item": `${SITE_ORIGIN}/gallery`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": house.name,
        "item": `${SITE_ORIGIN}/house/${house.slug}`
      }
    ]
  } : null;

  return (
    <>
      <SEO
        title={house ? `${house.name} — ${house.category} | Prefab Homes` : 'Проєкт будинку'}
        description={house ? `${house.name} — ${house.description} ${formatAreaSqm(getHouseTotalAreaSqm(house))}, від ${formatUsdFromUah(getHousePrice(house))}. Модульні та каркасні будинки в Україні від Prefab Homes.` : 'Деталі проєкту'}
        url={house ? `/house/${house.slug}` : '/house'}
        image={house?.imageUrl}
        type="product"
        keywords={house ? buildKeywords(`${house.name}, ${house.category} модульний будинок Україна, каркасний будинок Prefab Homes, ${getHouseTotalAreaSqm(house)} м², ${formatUsdFromUah(getHousePrice(house))}`) : undefined}
        structuredData={house ? [productSchema, breadcrumbSchema].filter(Boolean) : undefined}
      />
      <div className="bg-white">
      <div className="pt-20">
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="mb-12 lg:mb-16">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {/* Left Column - Images */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              {/* Main Image */}
                <div role="tabpanel" aria-label={`Головне зображення ${activeImageIndex + 1}`}>
                  <div 
                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    onClick={() => openLightbox(activeImageIndex)}
                  >
                    <img 
                      src={houseImages[activeImageIndex]} 
                      alt={`${house.name} — основний вигляд ${activeImageIndex + 1} з ${houseImages.length}`}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                  </div>
              </div>
              
              {/* Thumbnail Gallery */}
                <div className="flex flex-nowrap gap-2 sm:gap-2.5 overflow-x-auto scrollbar-hide -ml-1 sm:-ml-2 pr-6 sm:pr-8 py-3" role="tablist" aria-label="Галерея зображень будинку">
                {houseImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-[calc(25%-0.4rem)] sm:w-[calc(20%-0.5rem)] min-w-[80px] sm:min-w-[80px] px-2">
                  <button
                    onClick={() => setActiveImageIndex(index)}
                      className={`relative w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 aspect-square ${
                        activeImageIndex === index 
                          ? 'ring-2 ring-primary shadow-md' 
                          : 'hover:ring-1 hover:ring-gray-300'
                    }`}
                    role="tab"
                    aria-selected={activeImageIndex === index}
                    aria-label={`Переглянути зображення ${index + 1} з ${houseImages.length}, ${house.name}`}
                    tabIndex={activeImageIndex === index ? 0 : -1}
                  >
                    <img 
                      src={image} 
                      alt={`${house.name}, зображення ${index + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-200"
                      loading="lazy"
                    />
                  </button>
                  </div>
                ))}
              </div>

              {/* Arrows under thumbnails: previous / next image */}
              {houseImages.length > 1 && (
                <div className="flex items-center justify-center gap-4 pt-2 pb-1">
                  <button
                    type="button"
                    onClick={goToPrevGalleryImage}
                    aria-label="Попереднє зображення"
                    className="p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors touch-manipulation"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="text-sm text-gray-500 font-thin">
                    {activeImageIndex + 1} / {houseImages.length}
                  </span>
                  <button
                    type="button"
                    onClick={goToNextGalleryImage}
                    aria-label="Наступне зображення"
                    className="p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors touch-manipulation"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

              {/* Right Column - Info & Features */}
              <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                {/* Title */}
            <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-heading font-thin text-gray-900 mb-3 sm:mb-4 leading-tight">{house.name}</h1>
              </div>

              {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  <div className="bg-white shadow-md rounded-lg p-4 sm:p-5">
                    <div className="text-xl sm:text-2xl lg:text-2xl font-thin text-primary mb-1.5 sm:mb-2 break-words">
                      {formatAreaSqm(getHouseTotalAreaSqm(house))}
                </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-body font-normal leading-tight">Загальна площа</div>
                </div>
                  <div className="bg-white shadow-md rounded-lg p-4 sm:p-5">
                    <div className="text-xl sm:text-2xl lg:text-2xl font-thin text-primary mb-1.5 sm:mb-2 break-words">{formatUsdFromUah(getHousePrice(house))}</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-body font-normal leading-tight">Ціна</div>
                </div>
              </div>

              {/* Key Features */}
                {house.keyFeatures && house.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-thin mb-4 sm:mb-5 text-gray-900">Ключові переваги</h3>
                    <ul className="space-y-3 sm:space-y-4">
                      {house.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                          <span className="text-sm sm:text-base text-gray-900 font-body font-normal leading-relaxed flex-1">{feature}</span>
                  </li>
                      ))}
                </ul>
              </div>
                )}

              {/* CTA Buttons */}
                <div className="flex flex-col gap-3 sm:gap-4 pt-4">
                <AnimatedButton
                  variant="yellowOnWhite"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 font-thin w-full text-center text-sm sm:text-base"
                  onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug })}
                >
                  Запит на комерційну пропозицію
                </AnimatedButton>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="pt-16">
            {/* Tab Navigation */}
            <div className="border-b mb-6 sm:mb-8">
              <div className="flex overflow-x-auto scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0">
                <div className="flex gap-1 sm:gap-0 min-w-full sm:min-w-0">
                  {[
                    { id: 'overview', label: 'Огляд' },
                    { id: 'specifications', label: 'Характеристики' },
                    { id: 'floorplan', label: 'План поверху' },
                    { id: 'customization', label: 'Додаткові опції' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-3 px-4 sm:py-3 sm:px-6 text-xs sm:text-base font-thin transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                        activeTab === tab.id
                          ? 'border-b-2 border-primary text-primary font-medium'
                          : 'text-gray-600 md:hover:text-gray-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-96">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-heading font-thin mb-6">Про {house.name}</h3>
                    {house.about ? (
                      <div className="text-gray-900 font-body font-normal whitespace-pre-line">
                        {house.about.split('\n').map((paragraph, index) => (
                          <p key={index} className={index > 0 ? "mt-4" : ""}>{paragraph}</p>
                        ))}
                      </div>
                    ) : (
                      <>
                    <p className="text-gray-900 mb-6 font-body font-normal">
                      {house.name} — це сучасний модульний дім, що поєднує енергоефективність, естетику та надійність. 
                      Тип {house.type.toLowerCase()} дозволяє максимально ефективно використати площу при збереженні високої якості будівництва.
                    </p>
                    <p className="text-gray-900 mb-6 font-body font-normal">
                      Конструкція розрахована на низькі витрати на опалення та комфортний мікроклімат круглий рік. 
                      Передбачено місце під «розумний дім» для керування освітленням, кліматом і безпекою.
                    </p>
                    <p className="text-gray-900 font-body font-normal">
                      Завдяки заводській точності та швидкому монтажу на ділянці ви отримуєте готовий до житла дім у стислі терміни — без компромісів щодо якості.
                    </p>
                      </>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-thin mb-6">Що входить у вартість</h3>
                    {house.whatsIncluded && house.whatsIncluded.length > 0 ? (
                      <ul className="space-y-3 mb-8">
                        {house.whatsIncluded.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-3">•</span>
                            <div>
                              <span className="font-medium text-gray-900">{item.title}</span>
                              {item.description && (
                                <span className="text-gray-700"> {item.description}</span>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Повний несучий каркас і багатошарове утеплення</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Трискляні вікна та зовнішні двері</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Механічна вентиляція з рекуперацією тепла</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Преміальна вбудована кухня з технікою</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Повні комплекти санвузлів</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Інженерна підлога по всьому дому</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Система розумного дому</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Монтаж, налагодження та передача об’єкта</span>
                      </li>
                    </ul>
                    )}
                    
                    {/* What's Not Included - Collapsible */}
                    {house.whatsNotIncluded && house.whatsNotIncluded.length > 0 && (
                      <div className="mt-8">
                        <button
                          onClick={() => setNotIncludedOpen(!notIncludedOpen)}
                          className="flex items-center justify-between w-full text-left mb-4"
                        >
                          <h3 className="text-2xl font-heading font-thin">Що не входить у вартість</h3>
                          <svg
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                              notIncludedOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {notIncludedOpen && (
                          <ul className="space-y-3">
                            {house.whatsNotIncluded.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-gray-500 mr-3">•</span>
                                <div>
                                  <span className="font-medium text-gray-900">{item.title}</span>
                                  {item.description && (
                                    <span className="text-gray-700"> {item.description}</span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                  {house.dimensions && (
                    <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-thin mb-5 sm:mb-6 text-primary border-b border-gray-200 pb-3 sm:pb-4">Розміри</h3>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {house.dimensions.totalArea && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Загальна площа:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{formatAreaSqm(getHouseTotalAreaSqm(house))}</dd>
                          </div>
                        )}
                        {house.dimensions.livingArea && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Житлова площа:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{formatAreaSqm(house.dimensions.livingArea.meters)}</dd>
                          </div>
                        )}
                        {house.dimensions.coveredTerrace && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Накрита тераса:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{formatAreaSqm(house.dimensions.coveredTerrace.meters)}</dd>
                          </div>
                        )}
                        {house.dimensions.bedrooms && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Спальні:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{house.dimensions.bedrooms}</dd>
                          </div>
                        )}
                        {house.dimensions.bathrooms && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Ванні кімнати:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{String(house.dimensions.bathrooms)}</dd>
                          </div>
                        )}
                        {house.dimensions.overallSize && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Габарити:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{house.dimensions.overallSize}</dd>
                          </div>
                        )}
                        {house.dimensions.walkInWardrobes && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Гардеробні:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{house.dimensions.walkInWardrobes}</dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  )}
                  {house.construction && (
                    <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-thin mb-5 sm:mb-6 text-primary border-b border-gray-200 pb-3 sm:pb-4">Будівництво</h3>
                      <dl className="space-y-4 sm:space-y-5">
                        {house.construction.wallSystem && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-4 sm:pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
                            <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">Система стін:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{house.construction.wallSystem}</dd>
                          </div>
                        )}
                        {house.construction.insulation && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-4 sm:pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
                            <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">Утеплення:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{house.construction.insulation}</dd>
                          </div>
                        )}
                        {house.construction.windows && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-4 sm:pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
                            <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">Вікна:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{house.construction.windows}</dd>
                          </div>
                        )}
                        {house.construction.roof && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-4 sm:pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
                            <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">Покрівля:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{house.construction.roof}</dd>
                          </div>
                        )}
                        {house.construction.foundation && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-4 sm:pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
                            <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">Фундамент:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{house.construction.foundation}</dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    {house.energyEnvironment && house.energyEnvironment.length > 0 && (
                      <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-thin mb-5 sm:mb-6 text-primary border-b border-gray-200 pb-3 sm:pb-4">Енергетика та екологія</h3>
                        <ul className="space-y-3 sm:space-y-3.5">
                          {house.energyEnvironment.map((item, index) => (
                            <li key={index} className="flex items-start gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm sm:text-base text-gray-900 font-body font-normal leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {house.features && house.features.length > 0 && (
                      <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-thin mb-5 sm:mb-6 text-primary border-b border-gray-200 pb-3 sm:pb-4">Особливості</h3>
                        <ul className="space-y-3 sm:space-y-3.5">
                          {house.features.map((item, index) => (
                            <li key={index} className="flex items-start gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm sm:text-base text-gray-900 font-body font-normal leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {/* Fallback to old format if no structured data */}
                  {!house.dimensions && !house.construction && !house.energyEnvironment && !house.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  {Object.entries(specifications).map(([category, specs]) => (
                        <div key={category} className="bg-white shadow-sm border border-gray-100 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-thin mb-5 sm:mb-6 text-primary border-b border-gray-200 pb-3 sm:pb-4 capitalize">
                        {category === 'energy' ? 'Енергетика та екологія' : category === 'dimensions' ? 'Розміри' : category === 'construction' ? 'Будівництво' : category === 'features' ? 'Особливості' : category}
                      </h3>
                          <dl className="space-y-3 sm:space-y-4">
                        {Object.entries(specs).map(([key, value]) => (
                              <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-3 sm:pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                                <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">{key}:</dt>
                                <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'floorplan' && (
                <div>
                  {house.floorPlans && house.floorPlans.length > 0 ? (
                    <div className="space-y-8 sm:space-y-10">
                        {house.floorPlans.map((floorPlan, index) => (
                          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <div className="p-4 sm:p-6 border-b border-gray-200">
                              <h4 className="text-lg sm:text-xl font-heading font-thin text-gray-900">
                                {house.floorPlans && house.floorPlans.length > 1 ? `Варіант ${index + 1}` : 'План поверху'}
                              </h4>
                            </div>
                            <div className="relative w-full overflow-hidden">
                              <img
                                src={floorPlan}
                                alt={`${house.name} — план поверху ${index + 1}`}
                                className="w-full h-auto object-contain"
                                style={{ display: 'block' }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                <div className="text-center">
                  <div className="bg-white p-12 rounded-lg mb-6">
                    <div className="text-6xl text-gray-900 mb-4">📐</div>
                    <h3 className="text-2xl font-heading font-thin mb-4">План поверху незабаром</h3>
                    <p className="text-gray-900 mb-6">
                      Для цієї моделі готуються детальні архітектурні креслення та плани.
                    </p>
                    <button
                      type="button"
                      className="bg-primary text-white px-6 py-3 font-thin hover:bg-primary-hover transition-colors rounded-lg touch-manipulation"
                      onClick={() => house && openRequestModal({ requestType: 'floor_plan', sourceSlug: house.slug, context: 'План поверху' })}
                    >
                      Замовити план поверху
                    </button>
                  </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'customization' && (
                <div>
                  {/* Add-On Options */}
                  <div>
                    <h3 className="text-2xl font-heading font-thin mb-6">Додаткові опції</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Сантехніка та обладнання ванних</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Унітаз, душова зона, змішувачі, бойлер, шафи та все необхідне для ванних кімнат</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Сантехніка та обладнання ванних' })}
                        >
                          Запит на комерційну пропозицію
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Опалення та вентиляція</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Теплові насоси, радіатори, «тепла підлога», рекуператори та інше HVAC-обладнання</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Опалення та вентиляція' })}
                        >
                          Запит на комерційну пропозицію
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Системи протипожежного захисту</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Димові та теплові датчики, пожежна сигналізація, аварійне освітлення</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Системи протипожежного захисту' })}
                        >
                          Запит на комерційну пропозицію
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Фундаменти</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Поставка та монтаж гвинтових опор або інших бетонних рішень під фундамент</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Фундаменти' })}
                        >
                          Запит на комерційну пропозицію
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Підйомне обладнання</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Оренда кранів, телескопічних навантажувачів, систем запобігання падінню, риштування</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Підйомне обладнання' })}
                        >
                          Запит на комерційну пропозицію
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Дозвільна документація та збори</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Подання документів, архітектурні та інженерні послуги, погодження та супровідна документація</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Дозвільна документація та збори' })}
                        >
                          Запит на комерційну пропозицію
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 md:col-span-2">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Зовнішні мережі та підготовка ділянки</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Земляні роботи, зовнішній дренаж, підключення води, електроенергії та каналізації</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Зовнішні мережі та підготовка ділянки' })}
                        >
                          Запит на комерційну пропозицію
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <AnimatedButton
                      asLink={true}
                      href="/contact"
                      variant="yellowOnWhite"
                      className="px-8 py-3 font-thin"
                    >
                      Записатися на консультацію
                    </AnimatedButton>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Houses */}
          <div className="mt-20 pt-16 border-t">
            <h3 className="text-3xl font-light text-gray-900 mb-8">Схожі проєкти</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {houseData.filter((h) => h.category === house.category && h.slug !== house.slug).slice(0, 3).map((relatedHouse, index) => (
                <Link key={index} to={`/house/${relatedHouse.slug}`} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img 
                      src={relatedHouse.imageUrl} 
                      alt={relatedHouse.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-xl font-thin text-gray-900 mb-2">{relatedHouse.name}</h4>
                  <p className="text-gray-900 mb-2">{formatAreaSqm(getHouseTotalAreaSqm(relatedHouse))} • {relatedHouse.type}</p>
                  <p className="text-primary font-thin">{formatUsdFromUah(getHousePrice(relatedHouse))}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>

    {/* Full-Screen Lightbox */}
    {lightboxOpen && (
      <div 
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={closeLightbox}
      >
        {/* Image */}
        <div 
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={houseImages[lightboxImageIndex]} 
            alt={`${house.name} — повноекранний перегляд ${lightboxImageIndex + 1} з ${houseImages.length}`}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>

        {/* Bottom Controls Bar */}
        <div 
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-60 flex items-center gap-3 sm:gap-4 bg-black/30 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          {houseImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="text-white hover:text-gray-300 transition-colors duration-200 p-1 sm:p-2"
              aria-label="Попереднє зображення"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image Counter */}
          {houseImages.length > 1 && (
            <div className="text-white text-sm sm:text-base px-2 sm:px-3">
              {lightboxImageIndex + 1} / {houseImages.length}
            </div>
          )}

          {/* Next Button */}
          {houseImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="text-white hover:text-gray-300 transition-colors duration-200 p-1 sm:p-2"
              aria-label="Наступне зображення"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="text-white hover:text-gray-300 transition-colors duration-200 p-1 sm:p-2 ml-2 sm:ml-3 border-l border-white/20 pl-3 sm:pl-4"
            aria-label="Закрити перегляд"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    )}
    </>
  );
};

export default HouseDetailPage;