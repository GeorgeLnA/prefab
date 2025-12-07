import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { houseData } from '../data/houses';
import { AnimatedButton } from './ui/animated-button';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { gsap } from 'gsap';

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

  // Get modular houses from data
  const modularHouses = houseData.filter(house => house.category === 'MODULAR');

  // ViewModelsButton component with expanding animation (div-based, not a link since it's inside a Link)
  const ViewModelsButton: React.FC = () => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const textSpanRef = useRef<HTMLSpanElement>(null);
    const hoverContentRef = useRef<HTMLDivElement>(null);
    const bgCircleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const button = buttonRef.current;
      if (!button) return;

      const handleMouseEnter = () => {
        // Create a timeline for smoother coordinated animation
        const tl = gsap.timeline();
        
        // Animate initial text out (fade and move right)
        if (textSpanRef.current) {
          tl.to(textSpanRef.current, {
            x: 48,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          }, 0);
        }
        
        // Animate expanding circle (starts slightly before text fades completely)
        if (bgCircleRef.current) {
          tl.to(bgCircleRef.current, {
            left: "0%",
            top: "0%",
            width: "100%",
            height: "100%",
            scale: 1.8,
            duration: 0.5,
            ease: "power2.out",
          }, 0.1);
        }
        
        // Animate hover text in (fade and move from right, starts when initial text is mostly gone)
        if (hoverContentRef.current) {
          tl.to(hoverContentRef.current, {
            x: -4,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }, 0.3);
        }
      };

      const handleMouseLeave = () => {
        // Create a timeline for smoother coordinated animation
        const tl = gsap.timeline();
        
        // Animate hover text out first (fade and move right) - must complete before color changes
        if (hoverContentRef.current) {
          tl.to(hoverContentRef.current, {
            x: 48,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          }, 0);
        }
        
        // Animate circle back to small size - starts AFTER text is completely gone
        if (bgCircleRef.current) {
          tl.to(bgCircleRef.current, {
            left: "20%",
            top: "40%",
            width: "8px",
            height: "8px",
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          }, 0.3);
        }
        
        // Animate initial text back in - starts when circle is shrinking
        if (textSpanRef.current) {
          tl.to(textSpanRef.current, {
            x: 4,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          }, 0.4);
        }
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <div
        ref={buttonRef}
        className="relative block w-full overflow-hidden text-center rounded-lg font-medium bg-primary text-white py-2 sm:py-2.5 px-3 sm:px-4 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base"
      >
        <span 
          ref={textSpanRef}
          className="relative z-10 inline-block whitespace-nowrap"
          style={{ transform: "translateX(4px)" }}
        >
          View Models
        </span>
        <div 
          ref={bgCircleRef}
          className="absolute rounded-lg bg-gray-900 z-20"
          style={{ 
            left: "20%", 
            top: "40%", 
            width: "8px", 
            height: "8px",
            transform: "scale(1)"
          }}
        ></div>
        <div 
          ref={hoverContentRef}
          className="absolute top-0 z-30 flex h-full w-full items-center justify-center gap-2 text-white"
          style={{ transform: "translateX(48px)", opacity: 0 }}
        >
          <span className="whitespace-nowrap">View Models</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-black mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3 leading-tight px-1 sm:px-2 md:px-0">
            OUR HOUSE TYPES
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-black/90 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 max-w-3xl mx-auto leading-relaxed px-1 sm:px-2 md:px-0">
            Discover our diverse range of prefab home styles, each designed to meet different lifestyle needs and aesthetic preferences.
          </p>
        </div>

        {/* House Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {houseTypes.map((type, index) => (
            <Link
              key={index}
              to={type.path}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-40 sm:h-44 md:h-48 flex-shrink-0">
                <img 
                  src={type.imageUrl} 
                  alt={`${type.name} prefab home exterior view`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Type Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary text-white py-1 px-2.5 sm:py-1.5 sm:px-3 text-[10px] sm:text-xs font-medium rounded-md">
                  {type.name.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-3 sm:pb-4 flex flex-col flex-grow min-h-0">
                <div className="flex-grow">
                  <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold text-gray-900 mb-0.5 sm:mb-1 md:mb-1.5">{type.name}</h3>
                  <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-gray-900 mb-0.5 sm:mb-1 md:mb-1.5 line-clamp-2 leading-snug">{type.description}</p>
                </div>

                {/* Price and CTA - Fixed at bottom with consistent padding */}
                <div className="flex flex-col gap-2 sm:gap-3 mt-auto">
                  <span className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold text-primary">{type.price}</span>
                  <ViewModelsButton />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Modular Homes Section */}
        <div className="w-full my-12 sm:my-16 md:my-20">
          <div className="bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 md:py-16 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-white mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3 leading-tight px-1 sm:px-2 md:px-0">MODULAR HOMES</h2>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-white/90 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 max-w-3xl mx-auto leading-relaxed px-1 sm:px-2 md:px-0">
                Want something truly unique? Use our modular system to design your own home, 
                tailored to your lifestyle and vision. Expandable, customizable, and built to grow with you.
              </p>
            </div>

            {/* Modular Houses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
              {modularHouses.map((house, index) => {
                const originalIndex = houseData.findIndex(h => h.name === house.name);
                return (
                <Link 
                  key={index} 
                  to={`/house/${originalIndex}`}
                  className="bg-gray-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <img src={house.imageUrl} alt={house.name} className="w-full h-40 sm:h-48 md:h-52 object-cover" />
                  <div className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 2xl:p-5">
                    <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold text-primary mb-0.5 sm:mb-1 md:mb-1.5">{house.name}</div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-medium text-white mb-0.5 sm:mb-1 md:mb-1.5">{house.squareMeters} m² • {house.type}</div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-white/90 mb-0.5 sm:mb-1 line-clamp-2 sm:line-clamp-3 leading-snug">{house.description}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold text-white">From £{house.price.toLocaleString()}</div>
                  </div>
                </Link>
              );
              })}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <AnimatedButton
                asLink={true}
                href="/design-yourself"
                variant="yellow"
                className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-bold text-base sm:text-lg md:text-xl"
              >
                See More
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark mt-10 sm:mt-12 md:mt-16">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-black mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 leading-tight px-1 sm:px-2 md:px-0">
              Can't decide which type suits you best?
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-black/90 mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-4 max-w-3xl mx-auto leading-relaxed px-1 sm:px-2 md:px-0">
              Our design consultants can help you choose the perfect house type based on your 
              lifestyle, budget, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <AnimatedButton
                asLink={true}
                href="/contact"
                variant="whiteOnYellow"
                className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base md:text-lg"
              >
                Schedule Consultation
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href="/designs"
                variant="whiteOnYellow"
                className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base md:text-lg"
              >
                Browse All Designs
              </AnimatedButton>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HouseTypes;