import React from 'react';
import { AnimatedButton } from './ui/animated-button';

const ReadyToStartSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-black mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3 leading-tight px-1 sm:px-2 md:px-0">
              Ready to Start Your Journey?
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-black/90 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 xl:mb-4 max-w-3xl mx-auto leading-relaxed px-1 sm:px-2 md:px-0">
              Transform your vision into reality with our expert team. From initial consultation 
              to final assembly, we're here to guide you every step of the way.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4 justify-center items-center mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-4">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black mb-0.5 sm:mb-1">3-5</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-black/80">Days Assembly</div>
              </div>
              <div className="hidden sm:block w-px h-6 sm:h-8 md:h-10 bg-black/30"></div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black mb-0.5 sm:mb-1">10</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-black/80">Year Warranty</div>
              </div>
              <div className="hidden sm:block w-px h-6 sm:h-8 md:h-10 bg-black/30"></div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black mb-0.5 sm:mb-1">Highly Energy Efficient</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-black/80">Energy Rating</div>
              </div>
            </div>

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
              variant="greyToYellow"
              className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base md:text-lg"
            >
              Download Brochure
            </AnimatedButton>
          </div>

            <div className="mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-3 xl:mt-4 text-black/70 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-normal px-1 sm:px-2 md:px-0">
              Free consultation • No obligation • Expert guidance
            </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStartSection;