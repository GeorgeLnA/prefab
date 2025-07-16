import React from 'react';
import { Link } from 'react-router-dom';

const HouseTypes: React.FC = () => {
  const houseTypes = [
    {
      name: 'Skandy',
      description: 'Scandinavian-inspired minimalist design with natural materials.',
      imageUrl: '/Skandy 120 front-1 2.png',
      features: ['Minimalist design', 'Natural materials', 'Clean lines'],
      price: 'From £295,000',
      path: '/skandy-nordy'
    },
    {
      name: 'Nordy',
      description: 'Nordic elegance and comfort for modern living.',
      imageUrl: '/Nordy-65-3D-2.jpg',
      features: ['Nordic style', 'Warm interiors', 'Sustainable build'],
      price: 'From £310,000',
      path: '/skandy-nordy'
    },
    {
      name: 'Modern',
      description: 'Sleek modern design with cutting-edge features.',
      imageUrl: '/2p.jpg',
      features: ['Sleek design', 'Modern amenities', 'Premium materials'],
      price: 'From £315,000',
      path: '/modern'
    },
    {
      name: 'Mobile',
      description: 'Flexible mobile homes for life on the move.',
      imageUrl: '/prefab_homes_lounge_30_front_view.jpg',
      features: ['Mobility', 'Compact living', 'Easy relocation'],
      price: 'From £120,000',
      path: '/mobile'
    },
    {
      name: 'Smart',
      description: 'Intelligent home automation and energy efficiency.',
      imageUrl: '/S-18-1.jpg',
      features: ['Smart home tech', 'Energy efficient', 'Automated systems'],
      price: 'From £320,000',
      path: '/smart'
    },
    {
      name: 'Bungalow',
      description: 'Single-storey living with spacious comfort.',
      imageUrl: '/fasad-1.jpg',
      features: ['Single-storey', 'Open plan', 'Accessible design'],
      price: 'From £250,000',
      path: '/bungalow'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight text-center">
            OUR HOUSE TYPES
          </h2>
          <p className="text-xl text-black/90 mb-6 max-w-3xl mx-auto leading-relaxed text-center">
            Discover our diverse range of prefab home styles, each designed to meet different lifestyle needs and aesthetic preferences.
          </p>
        </div>

        {/* House Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houseTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={type.imageUrl} 
                  alt={type.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white py-2 px-4 text-sm font-medium">
                  {type.name.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{type.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{type.price}</span>
                  <Link 
                    to={type.path}
                    className="bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    View Models &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Design Yourself Section */}
        <div className="w-full my-20">
          <div className="relative bg-primary rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16 md:py-24 overflow-hidden">
            <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
              <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6 drop-shadow-lg">Design Yourself</h2>
              <p className="text-2xl text-black/90 mb-8 max-w-2xl mx-auto md:mx-0">
                Want something truly unique? Use our interactive tools to design your own modular home, tailored to your lifestyle and vision.
              </p>
              <Link
                to="/design-yourself"
                className="inline-block bg-black text-primary font-bold text-xl px-10 py-5 rounded-lg shadow-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                Start Designing &rarr;
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/modular-home-1.jpg"
                alt="Design Your Own Modular Home"
                className="w-full max-w-xl rounded-2xl shadow-2xl border-8 border-black object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Can't decide which type suits you best?
            </h3>
            <p className="text-gray-600 mb-6">
              Our design consultants can help you choose the perfect house type based on your 
              lifestyle, budget, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-medium transition-colors duration-200">
                Schedule Consultation
              </button>
              <Link 
                to="/designs"
                className="border border-gray-300 text-gray-800 px-8 py-3 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Browse All Designs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseTypes;