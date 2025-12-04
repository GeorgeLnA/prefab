import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatedButton } from './ui/animated-button';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileHouseTypesOpen, setMobileHouseTypesOpen] = useState(false);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileHouseTypesOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const houseTypes = [
    { name: 'Skandy', path: '/skandy' },
    { name: 'Nordy', path: '/skandy-nordy' },
    { name: 'Modern', path: '/modern' },
    { name: 'Mobile', path: '/mobile' },
    { name: 'Smart', path: '/smart' },
    { name: 'Bungalow', path: '/bungalow' },
    { name: 'Modular', path: '/modular' }
  ];

  const handleMobileHouseTypesToggle = () => {
    setMobileHouseTypesOpen(!mobileHouseTypesOpen);
  };

  const NavbarItem: React.FC<{ 
    children: React.ReactNode; 
    onClick?: () => void;
    className?: string;
    as?: 'button' | 'a';
    href?: string;
  }> = ({ children, onClick, className = '', as = 'button', href }) => {
    const baseClass = 'inline-flex items-center gap-2 px-0 py-2 text-sm font-normal text-gray-900 hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer';
    
    if (as === 'a' && href) {
      return (
        <Link to={href} className={`${baseClass} ${className}`}>
          {children}
        </Link>
      );
    }
    
    return (
      <button onClick={onClick} className={`${baseClass} ${className}`}>
        {children}
      </button>
    );
  };

  const Button: React.FC<{
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
    onClick?: () => void;
    className?: string;
  }> = ({ children, href, onClick, className = '' }) => {
    // All buttons are yellow by default
    const animatedVariant = 'yellow';
    
    if (href) {
      return (
        <AnimatedButton
          asLink={true}
          href={href}
          variant={animatedVariant}
          className={className}
        >
          {children}
        </AnimatedButton>
      );
    }
    
    return (
      <AnimatedButton
        variant={animatedVariant}
        className={className}
        onClick={onClick}
      >
        {children}
      </AnimatedButton>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8">
      <nav className={`bg-white rounded-2xl shadow-lg transition-all duration-300 max-w-[1920px] mx-auto`}>
        <div className="px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" onClick={handleLogoClick} className="flex items-center group">
                <div className="flex items-center gap-3">
                  <img 
                    src="/sharp_logo_high_res.png" 
                    alt="Prefab Homes Logo" 
                    className="h-7 w-auto"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-light tracking-wide transition-colors duration-200 text-gray-900 group-hover:opacity-70">
                      PREFAB HOMES
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-medium transition-colors duration-200 text-gray-900 group-hover:opacity-70">
                      Engineered for Efficiency
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              <ul className="flex items-center gap-6 xl:gap-8">
                <li>
                  <NavbarItem as="a" href="/" className="text-gray-900">
                    Home
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/technology" className="text-gray-900">
                    Technology
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/designs" className="text-gray-900">
                    Designs
                  </NavbarItem>
                </li>
                <li className="relative group">
                  <NavbarItem className="text-gray-900">
                    House Types
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavbarItem>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-lg">
                    {houseTypes.map((type) => (
                      <Link
                        key={type.name}
                        to={type.path}
                        className="block px-4 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {type.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-200 my-1"></div>
                    <Link
                      to="/design-form"
                      className="block px-4 py-3 text-primary font-semibold bg-primary/10 hover:bg-primary hover:text-white transition-colors duration-200 text-center rounded-b-lg"
                    >
                      Modular Houses
                    </Link>
                  </div>
                </li>
                <li>
                  <NavbarItem as="a" href="/gallery" className="text-gray-900">
                    Gallery
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/contact" className="text-gray-900">
                    Contact
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/blog" className="text-gray-900">
                    Blog
                  </NavbarItem>
                </li>
              </ul>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="secondary" href="/contact">
                Schedule Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex items-center gap-2 px-0 py-2 text-sm font-normal text-gray-900 hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span>Menu</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl overflow-y-auto">
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <p className="text-base font-medium text-gray-900">Menu</p>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Panel Content */}
          <div className="px-6 py-6">
            <nav>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>Home</span>
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>Technology</span>
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/designs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>Designs</span>
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleMobileHouseTypesToggle}
                    className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>House Types</span>
                    <svg 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileHouseTypesOpen ? 'rotate-90' : ''}`}
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {mobileHouseTypesOpen && (
                    <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                      {houseTypes.map((type) => (
                        <li key={type.name}>
                          <Link
                            to={type.path}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileHouseTypesOpen(false);
                            }}
                            className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <span>{type.name}</span>
                            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </li>
                      ))}
                      <li className="mt-2 pt-2 border-t border-gray-200">
                        <Link
                          to="/design-form"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileHouseTypesOpen(false);
                          }}
                          className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-white rounded-lg transition-colors"
                        >
                          Modular Houses
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    to="/gallery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>Gallery</span>
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>Contact</span>
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>Blog</span>
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Action Buttons */}
            <div className="mt-8 space-y-3">
              <Button variant="secondary" href="/contact" className="w-full">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;