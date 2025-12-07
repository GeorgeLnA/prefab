import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedButton } from '../components/ui/animated-button';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our prefab homes."
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl font-heading font-bold text-primary mb-4">404</h1>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-body font-normal leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                asLink={true}
                href="/"
                variant="yellowOnWhite"
                className="px-8 py-4 font-semibold text-base"
              >
                Go to Homepage
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href="/designs"
                variant="white"
                className="px-8 py-4 font-semibold text-base"
              >
                Browse Designs
              </AnimatedButton>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-3">Popular Pages</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/designs" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Designs
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Technology
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-3">House Types</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/skandy" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Skandy
                    </Link>
                  </li>
                  <li>
                    <Link to="/smart" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Smart
                    </Link>
                  </li>
                  <li>
                    <Link to="/modular" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Modular
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

