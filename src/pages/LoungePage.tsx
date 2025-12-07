import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { houseData } from '../data/houses';
import SEO from '../components/SEO';
import { AnimatedButton } from '../components/ui/animated-button';
import { ExpandingButton } from '../components/ui/expanding-button';

const LoungePage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter only Lounge category houses
  const loungeHouses = houseData.filter(house => house.category === 'LOUNGE');

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SEO
        title="Lounge Collection - Spacious Open-Plan Prefab Homes"
        description="Spacious open-plan living with premium comfort features. Our Lounge series combines relaxation with modern design for the ultimate living experience."
        url="/lounge"
      />
      <div className="bg-white">
      <div className="pt-20">
        {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-heading font-bold mb-4">Lounge Collection</h1>
            <p className="text-xl font-body font-normal mb-6 max-w-2xl">
              Spacious open-plan living with premium comfort features. Our Lounge series 
              combines relaxation with modern design for the ultimate living experience.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-primary px-4 py-2 font-medium rounded-lg">
                {loungeHouses.length} Models Available
              </span>
              <span className="text-white/80">Starting from £285,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">Lounge Models</h2>
            <p className="text-xl font-body font-normal text-gray-900 max-w-3xl mx-auto">
              Discover our range of Lounge models, each designed to provide the perfect balance of comfort, style, and functionality.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loungeHouses.map((house, index) => {
              const originalIndex = houseData.findIndex(h => h.name === house.name);
              return (
                <Link 
                  key={index} 
                  to={`/house/${originalIndex}`}
                  className="group flex flex-col bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-white">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white py-2 px-4 text-sm font-medium rounded-lg">
                    VAULT STANDARD
                  </div>
                  {/* Lounge Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-primary text-white py-1 px-3 text-xs font-medium rounded-lg">
                    LOUNGE
                  </div>
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={house.imageUrl} 
                      alt={house.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  {/* House Details */}
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2 line-clamp-1">{house.name}</h3>
                    {house.description && (
                      <p className="text-sm text-gray-900 mb-4 line-clamp-2 flex-grow">{house.description}</p>
                    )}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-900">Area</span>
                        <span className="font-medium text-gray-900">{house.squareFeet} ft²</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-900">Type</span>
                        <span className="font-medium text-gray-900">{house.type}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-900">
                        <span className="text-gray-900 font-medium">Price</span>
                        <span className="font-bold text-primary text-lg">£{house.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center text-sm text-gray-900 mb-3">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Passive House Certified
                      </div>
                      <ExpandingButton
                        to={`/house/${originalIndex}`}
                        className="bg-gray-900 text-white py-3 px-4"
                      >
                        View Details &rarr;
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
      <section className="py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Removed colored heading */}
            <h2 className="text-4xl font-heading font-bold text-gray-800 mb-6">Lounge Living</h2>
            <p className="text-xl font-body font-normal text-gray-900 max-w-3xl mx-auto">
              Our Lounge collection combines open-plan living, premium finishes, and energy efficiency for the ultimate in comfort and style.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Open-Plan Design</h3>
              <p className="text-gray-900 font-body font-normal">Spacious layouts that maximize natural light and create seamless living spaces</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Premium Finishes</h3>
              <p className="text-gray-900 font-body font-normal">High-quality materials and finishes throughout for lasting beauty and comfort</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Energy Efficient</h3>
              <p className="text-gray-900 font-body font-normal">Passive House certified designs for minimal environmental impact and low running costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Experience Lounge Living</h2>
          <p className="text-xl text-white/90 font-body font-normal mb-8 max-w-2xl mx-auto">
            Contact our design team to customize your perfect Lounge model or schedule a consultation 
            to explore all available options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton
              variant="white"
              className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base md:text-lg"
            >
              Schedule Viewing
            </AnimatedButton>
            <AnimatedButton
              asLink={true}
              href="/gallery"
              variant="white"
              className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base md:text-lg"
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
              className="absolute top-4 right-4 text-white text-4xl hover:text-white transition-colors z-10"
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Lounge house design"
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