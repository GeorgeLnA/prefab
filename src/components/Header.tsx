import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatedButton } from './ui/animated-button';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileHouseTypesOpen, setMobileHouseTypesOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  // Handle scroll direction for header hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide/show if scrolled past a threshold (e.g., 100px)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsScrollingDown(true);
        } else {
          // Scrolling up
          setIsScrollingDown(false);
        }
      } else {
        // Always show header when near top
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    const baseClass = 'inline-flex items-center gap-1.5 lg:gap-2 px-0 py-2 font-normal text-gray-900 hover:text-primary transition-all duration-300 bg-transparent border-none cursor-pointer whitespace-nowrap';
    
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
  }> = ({ children, href, variant = 'primary', onClick, className = '' }) => {
    // Primary buttons (like Consultation) use 'primary' variant (yellow → grey on hover)
    // Secondary buttons use 'yellow' variant (yellow → white on hover)
    const animatedVariant = variant === 'primary' ? 'primary' : 'yellow';
    
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
    <header className={`fixed top-0 left-0 right-0 z-50 pt-2 px-2 sm:pt-3 sm:px-3 md:pt-4 md:px-4 lg:pt-4 lg:px-6 xl:px-8 transition-transform duration-300 ${
      isScrollingDown ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <nav className={`bg-white rounded-xl sm:rounded-2xl shadow-lg transition-all duration-300 max-w-[1920px] mx-auto`} role="navigation" aria-label="Main navigation">
        <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <Link 
                to="/" 
                onClick={handleLogoClick} 
                className="flex items-center group"
                aria-label="Prefab Homes - Go to homepage"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  <img 
                    src="/sharp_logo_high_res.png" 
                    alt="Prefab Homes Logo - Engineered for Efficiency" 
                    className="h-6 w-auto sm:h-7 md:h-8 lg:h-9 flex-shrink-0"
                    width="auto"
                    height="auto"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] sm:text-xs md:text-sm font-light tracking-wide transition-colors duration-200 text-gray-900 group-hover:opacity-70 truncate">
                      PREFAB HOMES
                    </span>
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider sm:tracking-widest font-medium transition-colors duration-200 text-gray-900 group-hover:opacity-70 leading-tight">
                      Engineered for Efficiency
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              <ul className="flex items-center gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
                <li>
                  <NavbarItem as="a" href="/" className="text-gray-900 text-xs lg:text-sm xl:text-base">
                    Home
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/technology" className="text-gray-900 text-xs lg:text-sm xl:text-base">
                    Technology
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/designs" className="text-gray-900 text-xs lg:text-sm xl:text-base">
                    Designs
                  </NavbarItem>
                </li>
                <li className="relative group">
                  <NavbarItem className="text-gray-900 text-xs lg:text-sm xl:text-base">
                    House Types
                    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavbarItem>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-gray-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-lg z-50">
                    {houseTypes.map((type) => (
                      <Link
                        key={type.name}
                        to={type.path}
                        className="block px-4 py-3 text-sm text-gray-900 hover:bg-primary hover:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {type.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-900 my-1"></div>
                    <Link
                      to="/design-form"
                      className="block px-4 py-3 text-sm text-primary font-semibold bg-primary/10 hover:bg-primary hover:text-white transition-colors duration-200 text-center rounded-b-lg"
                    >
                      Modular Houses
                    </Link>
                  </div>
                </li>
                <li>
                  <NavbarItem as="a" href="/gallery" className="text-gray-900 text-xs lg:text-sm xl:text-base">
                    Gallery
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/contact" className="text-gray-900 text-xs lg:text-sm xl:text-base">
                    Contact
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/blog" className="text-gray-900 text-xs lg:text-sm xl:text-base">
                    Blog
                  </NavbarItem>
                </li>
              </ul>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <Button variant="primary" href="/contact" className="text-[10px] lg:text-xs xl:text-sm px-2 py-1.5 lg:px-3 lg:py-1.5 xl:px-3 xl:py-2 whitespace-nowrap">
                <span className="hidden xl:inline">Schedule Consultation</span>
                <span className="xl:hidden">Consultation</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 text-xs sm:text-sm font-normal text-gray-900 hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer min-h-[44px] min-w-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              style={{ touchAction: 'manipulation' }}
            >
              <span className="hidden sm:inline">Menu</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-xs sm:max-w-sm md:max-w-md bg-white shadow-xl overflow-y-auto">
          {/* Panel Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-900 sticky top-0 bg-white z-10">
            <p id="mobile-menu-title" className="text-sm sm:text-base font-medium text-gray-900">Menu</p>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-900 hover:text-gray-900 hover:bg-white rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              style={{ touchAction: 'manipulation' }}
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Panel Content */}
          <div className="px-4 sm:px-6 py-4 sm:py-6">
            <nav>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900 hover:bg-white active:bg-white rounded-lg transition-colors min-h-[44px]"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span>Home</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900 hover:bg-white active:bg-white rounded-lg transition-colors min-h-[44px]"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span>Technology</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/designs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900 hover:bg-white active:bg-white rounded-lg transition-colors min-h-[44px]"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span>Designs</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleMobileHouseTypesToggle}
                    className="flex items-center justify-between w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900 hover:bg-white active:bg-white rounded-lg transition-colors min-h-[44px]"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span>House Types</span>
                    <svg 
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-900 transition-transform duration-200 flex-shrink-0 ${mobileHouseTypesOpen ? 'rotate-90' : ''}`}
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {mobileHouseTypesOpen && (
                    <ul className="ml-2 sm:ml-4 mt-1 space-y-1 border-l-2 border-gray-900 pl-3 sm:pl-4">
                      {houseTypes.map((type) => (
                        <li key={type.name}>
                          <Link
                            to={type.path}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileHouseTypesOpen(false);
                            }}
                            className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 hover:bg-white active:bg-white rounded-lg transition-colors min-h-[40px]"
                    style={{ touchAction: 'manipulation' }}
                          >
                            <span>{type.name}</span>
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </li>
                      ))}
                      <li className="mt-2 pt-2 border-t border-gray-900">
                        <Link
                          to="/design-form"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileHouseTypesOpen(false);
                          }}
                          className="flex items-center justify-center w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-white active:bg-primary/90 rounded-lg transition-colors min-h-[44px]"
                          style={{ touchAction: 'manipulation' }}
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
                    className="flex items-center justify-between w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900 hover:bg-white active:bg-white rounded-lg transition-colors min-h-[44px]"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span>Gallery</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900 hover:bg-white active:bg-white rounded-lg transition-colors min-h-[44px]"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span>Contact</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900 hover:bg-white active:bg-white rounded-lg transition-colors min-h-[44px]"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span>Blog</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Action Buttons */}
            <div className="mt-6 sm:mt-8 space-y-3">
              <Button variant="secondary" href="/contact" className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;