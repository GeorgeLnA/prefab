import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

const GalleryPage: React.FC = () => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 21,
      title: 'Modern Nordic Exterior',
      category: 'EXTERIORS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 21 Large.jpeg',
      fullSrc: '/gallery/SK_ND 21 Large.jpeg',
      description: 'Modern Nordic prefab home exterior',
      details: {
        size: '1,500 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 20,
      title: 'Scandinavian Home Exterior',
      category: 'EXTERIORS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 20 Large.jpeg',
      fullSrc: '/gallery/SK_ND 20 Large.jpeg',
      description: 'Scandinavian prefab home exterior',
      details: {
        size: '1,600 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 19,
      title: 'Nordic Exterior Design',
      category: 'EXTERIORS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 19 Large.jpeg',
      fullSrc: '/gallery/SK_ND 19 Large.jpeg',
      description: 'Nordic prefab home exterior',
      details: {
        size: '1,400 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 18,
      title: 'Modern Scandinavian Exterior',
      category: 'EXTERIORS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 18 Large.jpeg',
      fullSrc: '/gallery/SK_ND 18 Large.jpeg',
      description: 'Modern Scandinavian prefab home exterior',
      details: {
        size: '1,500 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 14,
      title: 'Scandinavian Living Space',
      category: 'INTERIORS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 14 Large.jpeg',
      fullSrc: '/gallery/SK_ND 14 Large.jpeg',
      description: 'Scandinavian interior design',
      details: {
        size: '1,500 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 13,
      title: 'Modern Nordic Home',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 13 Large.jpeg',
      fullSrc: '/gallery/SK_ND 13 Large.jpeg',
      description: 'Modern Nordic prefab home',
      details: {
        size: '1,700 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 12,
      title: 'Scandinavian Prefab Design',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 12 Large.jpeg',
      fullSrc: '/gallery/SK_ND 12 Large.jpeg',
      description: 'Scandinavian prefab home',
      details: {
        size: '1,400 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 11,
      title: 'Nordic Design Excellence',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 11 Large.jpeg',
      fullSrc: '/gallery/SK_ND 11 Large.jpeg',
      description: 'Nordic prefab home design',
      details: {
        size: '1,500 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 10,
      title: 'Scandinavian Modern Home',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 10 Large.jpeg',
      fullSrc: '/gallery/SK_ND 10 Large.jpeg',
      description: 'Modern Scandinavian prefab home',
      details: {
        size: '1,600 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 9,
      title: 'Nordic Prefab Home',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 9 Large.jpeg',
      fullSrc: '/gallery/SK_ND 9 Large.jpeg',
      description: 'Nordic prefab home',
      details: {
        size: '1,400 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 7,
      title: 'Scandinavian Architecture',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 7 Large.jpeg',
      fullSrc: '/gallery/SK_ND 7 Large.jpeg',
      description: 'Scandinavian prefab home design',
      details: {
        size: '1,300 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 6,
      title: 'Modern Scandinavian Home',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 6 Large.jpeg',
      fullSrc: '/gallery/SK_ND 6 Large.jpeg',
      description: 'Modern Scandinavian prefab home',
      details: {
        size: '1,500 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 5,
      title: 'Nordic Design Home',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 5 Large.jpeg',
      fullSrc: '/gallery/SK_ND 5 Large.jpeg',
      description: 'Nordic prefab home',
      details: {
        size: '1,400 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 4,
      title: 'Scandinavian Living',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 4 Large.jpeg',
      fullSrc: '/gallery/SK_ND 4 Large.jpeg',
      description: 'Scandinavian prefab home',
      details: {
        size: '1,600 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 3,
      title: 'Modern Prefab Home',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 3 Large.jpeg',
      fullSrc: '/gallery/SK_ND 3 Large.jpeg',
      description: 'Contemporary prefab home',
      details: {
        size: '1,300 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 2,
      title: 'Nordic Architecture',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 2 Large.jpeg',
      fullSrc: '/gallery/SK_ND 2 Large.jpeg',
      description: 'Nordic-inspired prefab home design',
      details: {
        size: '1,500 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
      }
    },
    {
      id: 1,
      title: 'Scandinavian Home Design',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/gallery/SK_ND 1 Large.jpeg',
      fullSrc: '/gallery/SK_ND 1 Large.jpeg',
      description: 'Modern Scandinavian prefab home',
      details: {
        size: '1,400 sq ft',
        completion: '2024',
        type: 'Skandy',
        location: 'UK'
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
        title="Gallery - Prefab Homes"
        description="Browse our gallery of completed prefab home projects. See real homes, case studies, photos, and videos showcasing our quality and craftsmanship."
        url="/gallery"
      />
      <div className="bg-white">
      <div className="pt-20">
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight text-center">Case Studies & Gallery</h1>
            <p className="text-xl text-black/90 mb-6 max-w-3xl mx-auto leading-relaxed text-center">
              Explore real projects, construction processes, and the quality craftsmanship that goes into every Prefab Home. See our work in action.
            </p>
          </div>


          {/* Case Studies Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-6 xl:gap-8 auto-rows-fr">
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
                    aria-label={`View ${study.type === 'video' ? 'video' : 'full image'} of ${study.title}`}
              >
                {/* Image Section - Fixed Height */}
                <div className="relative overflow-hidden h-32 sm:h-36 md:h-40 lg:h-64 bg-white flex-shrink-0">
                  <img 
                    src={study.thumbnail} 
                    alt={`${study.title} - ${study.category} case study ${study.type === 'video' ? 'video' : 'photo'}`}
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-thin text-primary mb-2">150+</div>
                <div className="text-gray-900">Completed Projects</div>
              </div>
              <div>
                <div className="text-4xl font-thin text-primary mb-2">98%</div>
                <div className="text-gray-900">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-thin text-primary mb-2">4.2</div>
                <div className="text-gray-900">Avg. Assembly Days</div>
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
            aria-label="Media viewer"
          >
            <div 
              className="relative max-w-6xl max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label="Close media viewer"
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
                  aria-label="Previous image"
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
                  aria-label="Next image"
                >
                  &#8250;
                </button>
              )}
              
              {currentMedia.type === 'image' ? (
                <img 
                  src={currentMedia.fullSrc} 
                  alt="Case study - enlarged view"
                  className="max-w-full max-h-full object-contain mx-auto"
                />
              ) : (
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={currentMedia.fullSrc}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    title="Case study video"
                    aria-label="Case study video player"
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