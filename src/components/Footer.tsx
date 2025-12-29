import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedButton } from './ui/animated-button';

const Footer: React.FC = () => {
  return (
    <footer 
      className="bg-gray-900 text-white pt-16 sm:pt-20 md:pt-24 pb-0" 
      role="contentinfo"
      style={{ 
        width: '100vw',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        maxWidth: 'none'
      }}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-light text-primary mb-3">PREFAB HOMES</h3>
              <p className="text-sm sm:text-base text-white font-thin leading-relaxed mb-6 max-w-sm">
                High-performance prefab homes with precision craftsmanship. Engineered for efficiency, built in days.
              </p>
            </div>
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              <a 
                href="#" 
                className="text-white md:hover:text-primary transition-colors duration-300" 
                aria-label="Follow us on Twitter" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white md:hover:text-primary transition-colors duration-300" 
                aria-label="Follow us on Facebook" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white md:hover:text-primary transition-colors duration-300" 
                aria-label="Follow us on Instagram" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white md:hover:text-primary transition-colors duration-300" 
                aria-label="Follow us on LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base font-light text-primary mb-4 uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                <Link to="/" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/designs" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                  Designs
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                  Technology
                    </Link>
                  </li>
                  <li>
                <Link to="/gallery" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                  Gallery
                    </Link>
                  </li>
                  <li>
                <Link to="/about" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                      About Us
                    </Link>
                  </li>
                  <li>
                <Link to="/blog" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              
          {/* House Types */}
          <div>
            <h4 className="text-sm sm:text-base font-light text-primary mb-4 uppercase tracking-wider">House Types</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/skandy-nordy" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                  Nordy
                </Link>
              </li>
              <li>
                <Link to="/skandy" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                  Skandy
                </Link>
              </li>
              <li>
                <Link to="/modern" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                  Modern
                </Link>
              </li>
              <li>
                <Link to="/smart" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                  Smart
                </Link>
              </li>
              <li>
                <Link to="/bungalow" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                  Bungalow
                </Link>
              </li>
              <li>
                <Link to="/modular" className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin">
                  Modular Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm sm:text-base font-light text-primary mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+447495788669" 
                  className="text-sm sm:text-base text-primary md:hover:text-primary/80 transition-colors duration-300 font-thin block"
                >
                  +44 7495788669
                </a>
              </li>
              <li>
                <a 
                  href="mailto:prefabhomes.uk@gmail.com" 
                  className="text-sm sm:text-base text-white md:hover:text-primary transition-colors duration-300 font-thin block"
                >
                  prefabhomes.uk@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-sm sm:text-base text-white font-thin">
                  Mon-Fri: 8:00-17:00<br />
                  Sat: 10:00-16:00
                </p>
              </li>
              <li className="pt-4 w-full">
                <AnimatedButton
                  asLink={true}
                  href="/contact"
                  variant="yellow"
                  className="w-full text-sm sm:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 whitespace-nowrap"
                >
                  Schedule Consultation
                </AnimatedButton>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 border-t border-gray-800 pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-white font-thin">
              &copy; {new Date().getFullYear()} Prefab Homes. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <Link 
                to="/privacy-policy" 
                className="text-xs sm:text-sm text-white md:hover:text-primary transition-colors duration-300 font-thin"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-xs sm:text-sm text-white md:hover:text-primary transition-colors duration-300 font-thin"
              >
                Terms of Service
              </Link>
              <Link 
                to="/faq" 
                className="text-xs sm:text-sm text-white md:hover:text-primary transition-colors duration-300 font-thin"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
