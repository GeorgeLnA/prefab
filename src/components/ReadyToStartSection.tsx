import React from 'react';
import { AnimatedButton } from './ui/animated-button';

const ReadyToStartSection: React.FC = () => {
  return (
    <section 
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-primary to-primary-dark"
      style={{ 
        width: '100vw',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        maxWidth: 'none'
      }}
    >
      <div className="w-full px-4 sm:px-5">
        <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-black mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 leading-tight px-1 sm:px-2 md:px-0">
              Ready to Start Your Journey?
            </h2>
            <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-black/90 mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 leading-relaxed px-1 sm:px-2 md:px-0">
              Transform your vision into reality with our expert team. From initial consultation 
              to final assembly, we're here to guide you every step of the way.
            </p>
          
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 justify-center items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black mb-1 sm:mb-1.5 md:mb-2">5-7</div>
                <div className="text-xs sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-black/80">Days Assembly</div>
              </div>
              <div className="hidden sm:block w-px h-8 sm:h-10 md:h-12 lg:h-14 bg-black/30"></div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black mb-1 sm:mb-1.5 md:mb-2">10</div>
                <div className="text-xs sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-black/80">Year Warranty</div>
              </div>
            </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <AnimatedButton
              asLink={true}
              href="/contact"
              variant="whiteOnYellow"
              className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg text-center"
            >
              Schedule Consultation
            </AnimatedButton>
            <AnimatedButton
              variant="greyToYellow"
              className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg text-center"
            >
              Download Brochure
            </AnimatedButton>
          </div>

            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 text-black/70 text-xs sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-normal px-1 sm:px-2 md:px-0">
              Free consultation • No obligation • Expert guidance
            </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStartSection;