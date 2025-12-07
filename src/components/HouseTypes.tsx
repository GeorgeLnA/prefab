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
      name: 'Nordy',
      description: 'Nordic elegance and comfort for modern living.',
      imageUrl: '/NORDY/NORDY 65_1F.jpg',
      features: ['Nordic style', 'Warm interiors', 'Sustainable build'],
      price: 'From £39,960',
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

      // Check if device supports hover (desktop)
      const supportsHover = window.matchMedia("(hover: hover)").matches;
      if (!supportsHover) return;

      let enterTimeline: gsap.core.Timeline | null = null;
      let leaveTimeline: gsap.core.Timeline | null = null;

      const handleMouseEnter = () => {
        // Kill any running leave animation
        if (leaveTimeline) {
          leaveTimeline.kill();
          leaveTimeline = null;
        }
        
        // Kill any running enter animation
        if (enterTimeline) {
          enterTimeline.kill();
        }

        // Create a timeline for smoother coordinated animation
        enterTimeline = gsap.timeline();
        
        // Animate initial text out (fade and move right)
        if (textSpanRef.current) {
          enterTimeline.to(textSpanRef.current, {
            x: 48,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            force3D: true
          }, 0);
        }
        
        // Animate expanding circle (starts slightly before text fades completely)
        if (bgCircleRef.current) {
          enterTimeline.set(bgCircleRef.current, {
            opacity: 1,
            scale: 0,
            xPercent: -50,
            yPercent: -50,
            force3D: true
          }, 0.1);
          enterTimeline.to(bgCircleRef.current, {
            left: "50%",
            top: "50%",
            width: "100%",
            height: "100%",
            scale: 1.8,
            xPercent: -50,
            yPercent: -50,
            duration: 0.4,
            ease: "power2.out",
            force3D: true
          }, 0.1);
        }
        
        // Animate hover text in (fade and move from right, starts when initial text is mostly gone)
        if (hoverContentRef.current) {
          enterTimeline.to(hoverContentRef.current, {
            x: -9,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
            force3D: true
          }, 0.3);
        }
      };

      const handleMouseLeave = () => {
        // Kill any running enter animation
        if (enterTimeline) {
          enterTimeline.kill();
          enterTimeline = null;
        }
        
        // Kill any running leave animation
        if (leaveTimeline) {
          leaveTimeline.kill();
        }

        // Create a timeline for smoother coordinated animation
        leaveTimeline = gsap.timeline({
          onComplete: () => {
            leaveTimeline = null;
            // Ensure final state is correct
            if (textSpanRef.current) {
              gsap.set(textSpanRef.current, { x: 4, opacity: 1 });
            }
            if (hoverContentRef.current) {
              gsap.set(hoverContentRef.current, { x: 48, opacity: 0 });
            }
            if (bgCircleRef.current) {
              gsap.set(bgCircleRef.current, {
                left: "50%",
                top: "50%",
                width: "8px",
                height: "8px",
                scale: 0,
                opacity: 0,
                xPercent: -50,
                yPercent: -50
              });
            }
          }
        });
        
        // Animate hover text out first (fade and move right) - must complete before color changes
        if (hoverContentRef.current) {
          leaveTimeline.to(hoverContentRef.current, {
            x: 48,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            force3D: true
          }, 0);
        }
        
        // Animate circle back to small size - starts AFTER text is completely gone
        if (bgCircleRef.current) {
          leaveTimeline.to(bgCircleRef.current, {
            left: "50%",
            top: "50%",
            width: "8px",
            height: "8px",
            scale: 0,
            opacity: 0,
            xPercent: -50,
            yPercent: -50,
            duration: 0.35,
            ease: "power2.in",
            force3D: true
          }, 0.3);
        }
        
        // Animate initial text back in - starts when circle is shrinking
        if (textSpanRef.current) {
          leaveTimeline.to(textSpanRef.current, {
            x: 4,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            force3D: true
          }, 0.4);
        }
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        // Clean up animations
        if (enterTimeline) enterTimeline.kill();
        if (leaveTimeline) leaveTimeline.kill();
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <div
        ref={buttonRef}
        className="relative block w-full overflow-hidden text-center rounded-lg font-thin bg-primary text-white py-2 sm:py-2.5 px-3 sm:px-4 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base"
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
            left: "50%", 
            top: "50%", 
            width: "8px", 
            height: "8px",
            transform: "translate(-50%, -50%) scale(0)",
            opacity: 0,
            willChange: "transform, opacity"
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
    <section className="pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-black mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 leading-tight px-1 sm:px-2 md:px-0">
            HOUSE CATEGORIES
          </h2>
        </div>

        {/* House Types Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 auto-rows-fr">
          {houseTypes.map((type, index) => (
            <Link
              key={index}
              to={type.path}
              className="bg-white rounded-lg shadow-lg overflow-hidden md:hover:shadow-2xl transition-all duration-500 group flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-32 sm:h-36 md:h-40 lg:h-44 flex-shrink-0">
                <img 
                  src={type.imageUrl} 
                  alt={`${type.name} prefab home exterior view`}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 md:group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="px-4 sm:px-5 md:px-6 pt-6 sm:pt-7 md:pt-8 lg:pt-10 pb-6 sm:pb-7 md:pb-8 lg:pb-10 flex flex-col flex-grow min-h-0">
                <div className="flex-grow">
                  <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-thin text-gray-900 mb-0.5 sm:mb-1 md:mb-1.5">{type.name}</h3>
                </div>

                {/* Price and CTA - Fixed at bottom with consistent padding */}
                <div className="flex flex-col gap-2 sm:gap-3 mt-auto">
                  <span className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-thin text-primary">{type.price}</span>
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
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
              {modularHouses.map((house, index) => {
                const isMod70 = house.name.includes('MOD-70');
                return (
                <Link 
                  key={index} 
                  to={`/house/${house.slug}`}
                  className={`bg-gray-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden md:hover:scale-[1.02] md:hover:scale-105 transition-transform duration-300 cursor-pointer ${isMod70 ? 'hidden lg:block' : ''}`}
                >
                  <img src={house.imageUrl} alt={house.name} className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover" />
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8">
                    <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-thin text-primary mb-0.5 sm:mb-1 md:mb-1.5">{house.name}</div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-medium text-white mb-0.5 sm:mb-1 md:mb-1.5">{house.squareFeet} ft² • {house.type}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-thin text-white">From £{house.price.toLocaleString()}</div>
                  </div>
                </Link>
              );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                asLink={true}
                href="/modular"
                variant="white"
                className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-thin text-base sm:text-lg md:text-xl"
              >
                See More
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href="/design-form"
                variant="yellow"
                className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-thin text-base sm:text-lg md:text-xl"
              >
                Instant Quote
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="py-24 sm:py-28 md:py-32 lg:py-36 bg-gradient-to-br from-primary to-primary-dark mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-tight px-1 sm:px-2 md:px-0">
              Can't decide which type suits you best?
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-black/90 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 max-w-3xl mx-auto leading-relaxed px-1 sm:px-2 md:px-0">
              Our design consultants can help you choose the perfect house type based on your 
              lifestyle, budget, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <AnimatedButton
                asLink={true}
                href="/contact"
                variant="whiteOnYellow"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg"
              >
                Schedule Consultation
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href="/designs"
                variant="greyToYellow"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg"
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