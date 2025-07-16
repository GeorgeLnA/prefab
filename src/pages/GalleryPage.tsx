import React, { useState } from 'react';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string } | null>(null);

  const categories = ['ALL', 'COMPLETED PROJECTS', 'CONSTRUCTION PROCESS', 'INTERIORS', 'EXTERIORS'];

  const caseStudies = [
    {
      id: 1,
      title: 'Modern Family Home - Surrey',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/Глеваха_1.jpg',
      fullSrc: '/Глеваха_1.jpg',
      description: 'A stunning 3-bedroom modular home completed in just 4 days',
      details: {
        size: '1,400 sq ft',
        completion: '2024',
        type: 'Modular',
        location: 'Surrey, UK'
      }
    },
    {
      id: 2,
      title: 'Skandy-Nordy Forest Retreat',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/Skandy 120 front-1 2.png',
      fullSrc: '/Skandy 120 front-1 2.png',
      description: 'Nordic-inspired design nestled in natural woodland setting',
      details: {
        size: '2,200 sq ft',
        completion: '2024',
        type: 'Skandy-Nordy',
        location: 'Lake District, UK'
      }
    },
    {
      id: 3,
      title: 'Smart Home Assembly Process',
      category: 'CONSTRUCTION PROCESS',
      type: 'video' as const,
      thumbnail: '/S-18-1.jpg',
      fullSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Time-lapse of complete smart home assembly in 3 days',
      details: {
        size: '1,292 sq ft',
        completion: '2024',
        type: 'Smart',
        location: 'Manchester, UK'
      }
    },
    {
      id: 4,
      title: 'Modern Interior Design',
      category: 'INTERIORS',
      type: 'image' as const,
      thumbnail: '/2p.jpg',
      fullSrc: '/2p.jpg',
      description: 'Contemporary interior with premium finishes and smart technology',
      details: {
        size: '1,900 sq ft',
        completion: '2024',
        type: 'Modern',
        location: 'London, UK'
      }
    },
    {
      id: 5,
      title: 'Factory Production Process',
      category: 'CONSTRUCTION PROCESS',
      type: 'video' as const,
      thumbnail: '/render1.jpg',
      fullSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Inside our precision manufacturing facility',
      details: {
        size: 'Various',
        completion: '2024',
        type: 'All Types',
        location: 'Factory, UK'
      }
    },
    {
      id: 6,
      title: 'Modern-B Architectural Excellence',
      category: 'EXTERIORS',
      type: 'image' as const,
      thumbnail: '/prefab_homes_modern_b_80_front_perspective.jpg',
      fullSrc: '/prefab_homes_modern_b_80_front_perspective.jpg',
      description: 'Bold contemporary design with striking facade elements',
      details: {
        size: '1,700 sq ft',
        completion: '2024',
        type: 'Modern-B',
        location: 'Birmingham, UK'
      }
    },
    {
      id: 7,
      title: 'Luxury Interior Showcase',
      category: 'INTERIORS',
      type: 'image' as const,
      thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      fullSrc: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Premium interior finishes and modern amenities',
      details: {
        size: '2,100 sq ft',
        completion: '2024',
        type: 'Modern',
        location: 'Edinburgh, UK'
      }
    },
    {
      id: 8,
      title: 'Modular Home Extension',
      category: 'COMPLETED PROJECTS',
      type: 'image' as const,
      thumbnail: '/photo_2022-10-03-12.44.26.jpeg',
      fullSrc: '/photo_2022-10-03-12.44.26.jpeg',
      description: 'Seamless modular extension added to existing property',
      details: {
        size: '800 sq ft',
        completion: '2024',
        type: 'Modular',
        location: 'Bristol, UK'
      }
    }
  ];

  const filteredCaseStudies = selectedCategory === 'ALL' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const openLightbox = (media: { type: 'image' | 'video', src: string }) => {
    setSelectedMedia(media);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight text-center">Case Studies & Gallery</h1>
            <p className="text-xl text-black/90 mb-6 max-w-3xl mx-auto leading-relaxed text-center">
              Explore real projects, construction processes, and the quality craftsmanship that goes into every Prefab Home. See our work in action.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-lg">
                {/* Media Type Badge */}
                <div className="absolute top-4 left-4 z-10 bg-primary text-white py-1 px-3 text-xs font-medium rounded-sm">
                  {study.type === 'video' ? 'VIDEO' : 'PHOTO'}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10 bg-gray-900 text-white py-1 px-3 text-xs font-medium rounded-sm">
                  {study.category}
                </div>
                
                {/* Thumbnail */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={study.thumbnail} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    onClick={() => openLightbox({ type: study.type, src: study.fullSrc })}
                  />
                  
                  {/* Video Play Button */}
                  {study.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/90 text-white w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 ml-1\" fill="currentColor\" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm opacity-90">
                      {study.type === 'video' ? 'Click to play video' : 'Click to view full size'}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-500">Size:</span>
                      <span className="font-medium ml-2">{study.details.size}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Type:</span>
                      <span className="font-medium ml-2">{study.details.type}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Year:</span>
                      <span className="font-medium ml-2">{study.details.completion}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <span className="font-medium ml-2">{study.details.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gray-50 py-16 px-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Track Record</h3>
              <p className="text-gray-600">Real results from real projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-gray-600">Completed Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.2</div>
                <div className="text-gray-600">Avg. Assembly Days</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">A+++</div>
                <div className="text-gray-600">Energy Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedMedia && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              >
                &times;
              </button>
              
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.src} 
                  alt="Case study"
                  className="max-w-full max-h-full object-contain mx-auto"
                />
              ) : (
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={selectedMedia.src}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    title="Case study video"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default GalleryPage;