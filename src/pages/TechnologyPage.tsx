import React from 'react';
import SmoothScroll from '../components/ui/smooth-scroll';

const TechnologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO ANIMATION SECTION */}
      <SmoothScroll />

      {/* CALL TO ACTION - MUCH BIGGER */}
      <section className="container mx-auto px-4 py-32">
        <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-primary mb-8 text-center">Ready to Experience Our Technology?</h2>
        <p className="text-2xl text-gray-700 mb-10 text-center max-w-3xl mx-auto font-body font-normal">
          Discover how our innovative prefab technology can transform your living experience. From concept to completion, we're here to guide you through every step of the process.
        </p>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto font-body font-normal">
          Contact our team today to learn more about our technology, explore our designs, and start your journey toward a better home. We believe in making the future of housing accessible, efficient, and inspiring for everyone.
        </p>
        <div className="text-center border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-semibold font-heading text-primary mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-8 font-body font-normal">
            Take the first step toward your dream home today. Our experts are ready to help you design, build, and move in faster than you ever thought possible.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-primary hover:bg-primary-hover text-white px-12 py-4 text-xl font-bold rounded transition-colors duration-200 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage; 