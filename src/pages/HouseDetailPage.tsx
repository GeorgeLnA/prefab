import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { houseData } from '../data/houses';

const HouseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const houseId = parseInt(id || '0');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Get the house data
  const house = houseData[houseId];
  
  if (!house) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-gray-800 mb-4">House Not Found</h1>
          <p className="text-gray-600 mb-8">The house you're looking for doesn't exist.</p>
          <Link to="/gallery" className="bg-primary text-white px-6 py-3 font-medium hover:bg-primary-hover transition-colors">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }
  
  // Sample additional images for the house
  const houseImages = [
    house.imageUrl,
    "https://images.pexels.com/photos/7031405/pexels-photo-7031405.jpeg",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    "https://images.pexels.com/photos/7534177/pexels-photo-7534177.jpeg",
    "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg"
  ];

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
      'Energy Rating': 'A+++',
      'Heating System': 'Heat pump with underfloor heating',
      'Ventilation': 'Mechanical ventilation with heat recovery',
      'Solar Ready': 'Pre-wired for solar panels',
      'Annual Energy Cost': '£400-600'
    },
    features: {
      'Smart Home': 'Integrated automation system',
      'Kitchen': 'Premium fitted kitchen included',
      'Flooring': 'Engineered hardwood throughout',
      'Warranty': '10-year structural warranty',
      'Assembly Time': '3-5 days on-site'
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/gallery" className="hover:text-primary">Gallery</Link>
              <span>/</span>
              <span className="text-gray-800">{house.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="mb-4">
                <img 
                  src={houseImages[activeImageIndex]} 
                  alt={house.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-5 gap-2">
                {houseImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative overflow-hidden rounded-md ${
                      activeImageIndex === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${house.name} view ${index + 1}`}
                      className="w-full h-20 object-cover hover:opacity-80 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* House Information */}
            <div>
              <div className="mb-6">
                <div className="inline-block bg-blue-600 text-white py-1 px-3 text-sm font-medium mb-4">
                  VAULT STANDARD
                </div>
                <h1 className="text-4xl font-heading font-bold text-gray-800 mb-4">{house.name}</h1>
                <p className="text-xl text-gray-600 mb-6 font-body font-normal">
                  High-performance prefab home with exceptional energy efficiency and modern design.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{house.squareFeet} ft²</div>
                  <div className="text-gray-600">Total Living Area</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">£{house.price.toLocaleString()}</div>
                  <div className="text-gray-600">Starting Price</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3-5</div>
                  <div className="text-gray-600">Days Assembly</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">A+++</div>
                  <div className="text-gray-600">Energy Rating</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Passive House Certified for maximum energy efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Factory-built precision with premium materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Smart home automation system included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>10-year structural warranty</span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-medium transition-colors duration-200 flex-1">
                  Request Quote
                </button>
                <button className="border border-gray-300 text-gray-800 px-8 py-3 font-medium hover:bg-gray-50 transition-colors duration-200 flex-1">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="border-t pt-16">
            {/* Tab Navigation */}
            <div className="flex flex-wrap border-b mb-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'specifications', label: 'Specifications' },
                { id: 'floorplan', label: 'Floor Plan' },
                { id: 'customization', label: 'Customization' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-6 font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-96">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-heading font-semibold mb-6">About {house.name}</h3>
                    <p className="text-gray-700 mb-6 font-body font-normal">
                      The {house.name} represents the pinnacle of modern prefab home design, combining 
                      exceptional energy efficiency with contemporary aesthetics. This {house.type.toLowerCase()} 
                      design maximizes living space while maintaining the highest standards of construction quality.
                    </p>
                    <p className="text-gray-700 mb-6 font-body font-normal">
                      Built to Passive House standards, this home delivers unparalleled energy performance, 
                      reducing heating costs by up to 90% compared to conventional homes. The integrated 
                      smart home system provides complete control over lighting, climate, and security.
                    </p>
                    <p className="text-gray-700 font-body font-normal">
                      With factory precision construction and on-site assembly in just 3-5 days, you can 
                      move into your dream home faster than ever before, without compromising on quality or performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold mb-6">What's Included</h3>
                    <ul className="space-y-3">
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
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(specifications).map(([category, specs]) => (
                    <div key={category} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
                        {category === 'energy' ? 'Energy & Environment' : category}
                      </h3>
                      <dl className="space-y-3">
                        {Object.entries(specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <dt className="text-gray-600">{key}:</dt>
                            <dd className="font-medium text-gray-800">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'floorplan' && (
                <div className="text-center">
                  <div className="bg-gray-100 p-12 rounded-lg mb-6">
                    <div className="text-6xl text-gray-400 mb-4">📐</div>
                    <h3 className="text-2xl font-heading font-semibold mb-4">Floor Plan Coming Soon</h3>
                    <p className="text-gray-600 mb-6">
                      Detailed architectural drawings and 3D floor plans are being prepared for this model.
                    </p>
                    <button className="bg-primary text-white px-6 py-3 font-medium hover:bg-primary-hover transition-colors">
                      Request Floor Plan
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'customization' && (
                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-6">Customization Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Interior Finishes</h4>
                      <p className="text-gray-600">Choose from premium flooring, paint colors, and fixture options</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Layout Modifications</h4>
                      <p className="text-gray-600">Adjust room configurations to suit your lifestyle needs</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Energy Upgrades</h4>
                      <p className="text-gray-600">Add solar panels, battery storage, and EV charging stations</p>
                    </div>
                  </div>
                  <div className="mt-12 text-center">
                    <button className="bg-primary text-white px-8 py-3 font-medium hover:bg-primary-hover transition-colors mr-4">
                      Schedule Consultation
                    </button>
                    <button className="border border-gray-300 text-gray-800 px-8 py-3 font-medium hover:bg-gray-50 transition-colors">
                      View All Options
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Houses */}
          <div className="mt-20 pt-16 border-t">
            <h3 className="text-3xl font-light text-gray-800 mb-8">Similar Designs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {houseData.filter((_, index) => index !== houseId).slice(0, 3).map((relatedHouse, index) => (
                <Link key={index} to={`/house/${houseData.indexOf(relatedHouse)}`} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img 
                      src={relatedHouse.imageUrl} 
                      alt={relatedHouse.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">{relatedHouse.name}</h4>
                  <p className="text-gray-600 mb-2">{relatedHouse.squareFeet} ft² • {relatedHouse.type}</p>
                  <p className="text-primary font-semibold">£{relatedHouse.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HouseDetailPage;