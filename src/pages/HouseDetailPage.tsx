import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { houseData, getHouseBySlug } from '../data/houses';
import { AnimatedButton } from '../components/ui/animated-button';
import { useRequestModal } from '../contexts/RequestModalContext';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';

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
          <h1 className="text-4xl font-heading font-thin text-gray-900 mb-4">House Not Found</h1>
          <p className="text-gray-900 mb-8">The house you're looking for doesn't exist.</p>
          <Link to="/gallery" className="bg-primary text-white px-6 py-3 font-thin hover:bg-primary-hover transition-colors rounded-lg">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }
  
  // Use only actual house images (main image, additional images, and facades)
  const houseImages = [
    house.imageUrl,
    ...(house.additionalImages || []),
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

  const specifications = {
    dimensions: {
      'Total Area': `${house.squareFeet} ft² (${house.squareMeters} m²)`,
      'Living Area': `${Math.round(house.squareFeet * 0.85)} ft²`,
      'Bedrooms': house.type === 'BUNGALOWS' ? '3' : '4',
      'Bathrooms': house.type === 'BUNGALOWS' ? '2' : '3',
      'Garage': 'Double garage included'
    },
    construction: {
      'Wall System': 'Insulated timber frame',
      'Insulation': 'Triple-layer thermal barrier',
      'Windows': 'Triple-glazed, argon-filled',
      'Roof': 'Metal standing seam',
      'Foundation': 'Concrete slab or basement'
    },
    energy: {
      'Heating System': 'Heat pump with underfloor heating',
      'Ventilation': 'Mechanical ventilation with heat recovery',
      'Solar Ready': 'Pre-wired for solar panels',
      'Annual Energy Cost': '£400-600'
    },
    features: {
      'Smart Home': 'Integrated automation system',
      'Kitchen': 'Premium fitted kitchen included',
      'Flooring': 'Engineered hardwood throughout',
      'Warranty': '10-year structural warranty'
    }
  };

  // Structured data for Product schema
  const productSchema = house ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": house.name,
    "description": house.description,
    "image": `https://prefabhomes.co.uk${house.imageUrl}`,
    "brand": {
      "@type": "Brand",
      "name": "Prefab Homes"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://prefabhomes.co.uk/house/${house.slug}`,
      "priceCurrency": "GBP",
      "price": house.price,
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
        "name": "Square Feet",
        "value": `${house.squareFeet} ft²`
      },
      {
        "@type": "PropertyValue",
        "name": "Square Meters",
        "value": `${house.squareMeters} m²`
      },
      {
        "@type": "PropertyValue",
        "name": "Category",
        "value": house.category
      },
      {
        "@type": "PropertyValue",
        "name": "Type",
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
        "name": "Home",
        "item": "https://prefabhomes.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gallery",
        "item": "https://prefabhomes.co.uk/gallery"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": house.name,
        "item": `https://prefabhomes.co.uk/house/${house.slug}`
      }
    ]
  } : null;

  return (
    <>
      <SEO
        title={house ? `${house.name} - ${house.category} Prefab Home` : 'House Details'}
        description={house ? `${house.name} - ${house.description}. ${house.squareFeet} ft², £${house.price.toLocaleString()}. Prefab home UK, Oxford, London, Oxfordshire.` : 'View house details'}
        url={house ? `/house/${house.slug}` : '/house'}
        image={house?.imageUrl}
        type="product"
        keywords={house ? buildKeywords(`${house.name}, ${house.category} prefab home UK, prefabricated house Oxford London, ${house.squareFeet} sq ft, £${house.price}, modular house`) : undefined}
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
                <div role="tabpanel" aria-label={`Main image view ${activeImageIndex + 1}`}>
                  <div 
                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    onClick={() => openLightbox(activeImageIndex)}
                  >
                    <img 
                      src={houseImages[activeImageIndex]} 
                      alt={`${house.name} - Main view ${activeImageIndex + 1} of ${houseImages.length}`}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                  </div>
              </div>
              
              {/* Thumbnail Gallery */}
                <div className="flex flex-nowrap gap-2 sm:gap-2.5 overflow-x-auto scrollbar-hide -ml-1 sm:-ml-2 pr-6 sm:pr-8 py-3" role="tablist" aria-label="House image gallery">
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
                    aria-label={`View image ${index + 1} of ${houseImages.length} for ${house.name}`}
                    tabIndex={activeImageIndex === index ? 0 : -1}
                  >
                    <img 
                      src={image} 
                      alt={`${house.name} view ${index + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-200"
                      loading="lazy"
                    />
                  </button>
                  </div>
                ))}
              </div>
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
                      {house.livingArea ? `${house.livingArea.feet} ft²` : `${house.squareFeet} ft²`}
                </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-body font-normal leading-tight">Total Living Area</div>
                </div>
                  <div className="bg-white shadow-md rounded-lg p-4 sm:p-5">
                    <div className="text-xl sm:text-2xl lg:text-2xl font-thin text-primary mb-1.5 sm:mb-2 break-words">£{house.price.toLocaleString()}</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-body font-normal leading-tight">Price</div>
                </div>
              </div>

              {/* Key Features */}
                {house.keyFeatures && house.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-thin mb-4 sm:mb-5 text-gray-900">Key Features</h3>
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
                  Request Quote
                </AnimatedButton>
                <AnimatedButton
                  variant="greyToYellow"
                    className="px-6 sm:px-8 py-3 sm:py-3.5 font-thin w-full text-center text-sm sm:text-base"
                >
                  Download Brochure
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
                    { id: 'overview', label: 'Overview' },
                    { id: 'specifications', label: 'Specifications' },
                    { id: 'floorplan', label: 'Floor Plan' },
                    { id: 'customization', label: 'Customization' }
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
                    <h3 className="text-2xl font-heading font-thin mb-6">About {house.name}</h3>
                    {house.about ? (
                      <div className="text-gray-900 font-body font-normal whitespace-pre-line">
                        {house.about.split('\n').map((paragraph, index) => (
                          <p key={index} className={index > 0 ? "mt-4" : ""}>{paragraph}</p>
                        ))}
                      </div>
                    ) : (
                      <>
                    <p className="text-gray-900 mb-6 font-body font-normal">
                      The {house.name} represents the pinnacle of modern prefab home design, combining 
                      exceptional energy efficiency with contemporary aesthetics. This {house.type.toLowerCase()} 
                      design maximizes living space while maintaining the highest standards of construction quality.
                    </p>
                    <p className="text-gray-900 mb-6 font-body font-normal">
                      Built to Passive House standards, this home delivers unparalleled energy performance, 
                      reducing heating costs by up to 90% compared to conventional homes. The integrated 
                      smart home system provides complete control over lighting, climate, and security.
                    </p>
                    <p className="text-gray-900 font-body font-normal">
                      With factory precision construction and on-site assembly in just 3-5 days, you can 
                      move into your dream home faster than ever before, without compromising on quality or performance.
                    </p>
                      </>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-thin mb-6">What's Included</h3>
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
                        <span>Complete structural shell with premium insulation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Triple-glazed windows and exterior doors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Mechanical ventilation with heat recovery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Premium fitted kitchen with appliances</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Complete bathroom suites</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Engineered hardwood flooring throughout</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Smart home automation system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span>Professional installation and commissioning</span>
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
                          <h3 className="text-2xl font-heading font-thin">What's Not Included</h3>
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
                      <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-thin mb-5 sm:mb-6 text-primary border-b border-gray-200 pb-3 sm:pb-4">Dimensions</h3>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {house.dimensions.totalArea && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Total Area:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{house.dimensions.totalArea.feet} ft² ({house.dimensions.totalArea.meters} m²)</dd>
                          </div>
                        )}
                        {house.dimensions.livingArea && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Living Area:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{house.dimensions.livingArea.feet} ft² ({house.dimensions.livingArea.meters} m²)</dd>
                          </div>
                        )}
                        {house.dimensions.coveredTerrace && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Covered Terrace:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{house.dimensions.coveredTerrace.feet} ft² ({house.dimensions.coveredTerrace.meters} m²)</dd>
                          </div>
                        )}
                        {house.dimensions.bedrooms && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Bedrooms:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{house.dimensions.bedrooms}</dd>
                          </div>
                        )}
                        {house.dimensions.bathrooms && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Bathrooms:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{String(house.dimensions.bathrooms)}</dd>
                          </div>
                        )}
                        {house.dimensions.overallSize && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Overall Size:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{house.dimensions.overallSize}</dd>
                          </div>
                        )}
                        {house.dimensions.walkInWardrobes && (
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <dt className="text-sm sm:text-base font-medium text-gray-700">Walk-in Wardrobes:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900">{house.dimensions.walkInWardrobes}</dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  )}
                  {house.construction && (
                    <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-thin mb-5 sm:mb-6 text-primary border-b border-gray-200 pb-3 sm:pb-4">Construction</h3>
                      <dl className="space-y-4 sm:space-y-5">
                        {house.construction.wallSystem && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-4 sm:pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
                            <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">Wall System:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{house.construction.wallSystem}</dd>
                          </div>
                        )}
                        {house.construction.insulation && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-4 sm:pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
                            <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">Insulation:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{house.construction.insulation}</dd>
                          </div>
                        )}
                        {house.construction.windows && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-4 sm:pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
                            <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">Windows:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{house.construction.windows}</dd>
                          </div>
                        )}
                        {house.construction.roof && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-4 sm:pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
                            <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">Roof:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{house.construction.roof}</dd>
                          </div>
                        )}
                        {house.construction.foundation && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 pb-4 sm:pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
                            <dt className="text-sm sm:text-base font-medium text-gray-700 sm:min-w-[140px]">Foundation:</dt>
                            <dd className="text-sm sm:text-base font-thin text-gray-900 text-left sm:text-right flex-1">{house.construction.foundation}</dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    {house.energyEnvironment && house.energyEnvironment.length > 0 && (
                      <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-thin mb-5 sm:mb-6 text-primary border-b border-gray-200 pb-3 sm:pb-4">Energy & Environment</h3>
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
                        <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-thin mb-5 sm:mb-6 text-primary border-b border-gray-200 pb-3 sm:pb-4">Features</h3>
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
                        {category === 'energy' ? 'Energy & Environment' : category}
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
                                {house.floorPlans && house.floorPlans.length > 1 ? `Version ${index + 1}` : 'Floor Plan'}
                              </h4>
                            </div>
                            <div className="relative w-full overflow-hidden">
                              <img
                                src={floorPlan}
                                alt={`${house.name} Floor Plan ${index + 1}`}
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
                    <h3 className="text-2xl font-heading font-thin mb-4">Floor Plan Coming Soon</h3>
                    <p className="text-gray-900 mb-6">
                      Detailed architectural drawings and 3D floor plans are being prepared for this model.
                    </p>
                    <button
                      type="button"
                      className="bg-primary text-white px-6 py-3 font-thin hover:bg-primary-hover transition-colors rounded-lg touch-manipulation"
                      onClick={() => house && openRequestModal({ requestType: 'floor_plan', sourceSlug: house.slug, context: 'Floor Plan' })}
                    >
                      Request Floor Plan
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
                    <h3 className="text-2xl font-heading font-thin mb-6">Available Add-Ons</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Sanitary Ware & Bathroom Equipment</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">WC, shower, taps, boiler, cabinets and all bathroom fixtures</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Sanitary Ware & Bathroom Equipment' })}
                        >
                          Request Quote
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Heating & Ventilation Systems</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">ASHP, radiators, underfloor heating, MVHR or any HVAC equipment</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Heating & Ventilation Systems' })}
                        >
                          Request Quote
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Fire Safety Systems</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Smoke detectors, heat detectors, fire alarm panels and emergency lighting</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Fire Safety Systems' })}
                        >
                          Request Quote
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Foundations</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Supply and installation of screw-pile foundations or any concrete foundation system</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Foundations' })}
                        >
                          Request Quote
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Mechanical Lifting Equipment</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Crane hire, telehandlers, fall-arrest systems and scaffolding</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Mechanical Lifting Equipment' })}
                        >
                          Request Quote
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">Planning Permission & Regulatory Fees</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Submission, architectural fees, engineering approvals and associated documentation</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'Planning Permission & Regulatory Fees' })}
                        >
                          Request Quote
                        </AnimatedButton>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 md:col-span-2">
                        <h4 className="text-lg font-heading font-thin mb-2 text-gray-900">External Utilities & Site Works</h4>
                        <p className="text-sm text-gray-600 font-body font-normal mb-3">Groundworks, external drainage, mains connection for water, electricity or sewage</p>
                        <AnimatedButton
                          variant="yellowOnWhite"
                          className="px-4 py-2 text-sm font-thin w-full sm:w-auto touch-manipulation"
                          onClick={() => house && openRequestModal({ requestType: 'quote', sourceSlug: house.slug, context: 'External Utilities & Site Works' })}
                        >
                          Request Quote
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
                      Schedule Consultation
                    </AnimatedButton>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Houses */}
          <div className="mt-20 pt-16 border-t">
            <h3 className="text-3xl font-light text-gray-900 mb-8">Similar Designs</h3>
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
                  <p className="text-gray-900 mb-2">{relatedHouse.squareFeet} ft² • {relatedHouse.type}</p>
                  <p className="text-primary font-thin">£{relatedHouse.price.toLocaleString()}</p>
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
            alt={`${house.name} - Full screen view ${lightboxImageIndex + 1} of ${houseImages.length}`}
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
              aria-label="Previous image"
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
              aria-label="Next image"
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
            aria-label="Close lightbox"
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