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
  const [houseTypesDropdownOpen, setHouseTypesDropdownOpen] = useState(false);
  const [hoveredHouseType, setHoveredHouseType] = useState<string | null>(null);

  // Close mobile menu and dropdown when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileHouseTypesOpen(false);
    setHouseTypesDropdownOpen(false);
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
    { name: 'Nordy', path: '/skandy-nordy', image: '/NORDY/NORDY 35_1.2F 4K.jpg' },
    { name: 'Skandy', path: '/skandy', image: '/SKANDY/SKANDY 70 1.jpeg' },
    { name: 'Modern', path: '/modern', image: '/MODERN/1_2k Final Large.jpeg' }
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
    const baseClass = 'inline-flex items-center gap-1 md:gap-1.5 lg:gap-2 px-0 py-2 font-thin text-gray-900 md:hover:text-primary transition-all duration-300 bg-transparent border-none cursor-pointer whitespace-nowrap';
    
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
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 pt-2 px-4 sm:pt-3 sm:px-5 transition-transform duration-300 ${
      isScrollingDown ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <nav className={`bg-white rounded-xl sm:rounded-2xl shadow-lg transition-all duration-300 w-full relative group`} role="navigation" aria-label="Main navigation">
        <div className="px-4 sm:px-5">
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
                    <span className="text-[10px] sm:text-xs md:text-sm font-light tracking-wide transition-colors duration-200 text-gray-900 md:group-hover:opacity-70 truncate">
                      PREFAB HOMES
                    </span>
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider sm:tracking-widest font-medium transition-colors duration-200 text-gray-900 md:group-hover:opacity-70 leading-tight">
                      Engineered for Efficiency
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center flex-1 justify-center">
              <ul className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                <li>
                  <NavbarItem as="a" href="/" className="text-gray-900 text-[10px] md:text-xs lg:text-sm xl:text-base">
                    Home
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/technology" className="text-gray-900 text-[10px] md:text-xs lg:text-sm xl:text-base">
                    Technology
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/designs" className="text-gray-900 text-[10px] md:text-xs lg:text-sm xl:text-base">
                    Designs
                  </NavbarItem>
                </li>
                <li 
                  className="group"
                  onMouseEnter={() => setHouseTypesDropdownOpen(true)}
                  onMouseLeave={() => setHouseTypesDropdownOpen(false)}
                >
                  <NavbarItem className="text-gray-900 text-[10px] md:text-xs lg:text-sm xl:text-base">
                    House Types
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/gallery" className="text-gray-900 text-[10px] md:text-xs lg:text-sm xl:text-base">
                    Gallery
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/contact" className="text-gray-900 text-[10px] md:text-xs lg:text-sm xl:text-base">
                    Contact
                  </NavbarItem>
                </li>
                <li>
                  <NavbarItem as="a" href="/blog" className="text-gray-900 text-[10px] md:text-xs lg:text-sm xl:text-base">
                    Blog
                  </NavbarItem>
                </li>
              </ul>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-1.5 md:gap-2 lg:gap-2 xl:gap-3">
              <Button variant="primary" href="/contact" className="text-[9px] md:text-[10px] lg:text-xs xl:text-sm px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-2 xl:py-2.5 whitespace-nowrap">
                <span className="hidden xl:inline">Schedule Consultation</span>
                <span className="xl:hidden">Consultation</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 text-xs sm:text-sm font-thin text-gray-900 active:opacity-70 transition-opacity bg-transparent border-none cursor-pointer min-h-[44px] min-w-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              style={{ touchAction: 'manipulation' }}
            >
              <span className="hidden sm:inline">Menu</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Dropdown Menu - Positioned relative to nav, full width, centered */}
        <div 
          className={`absolute top-full left-0 right-0 mt-2 w-full bg-white shadow-2xl transition-all duration-200 rounded-2xl z-50 p-4 lg:p-6 ${
            houseTypesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onMouseEnter={() => setHouseTypesDropdownOpen(true)}
          onMouseLeave={() => setHouseTypesDropdownOpen(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] xl:grid-cols-[280px_1fr] 2xl:grid-cols-[320px_1fr] gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            <div className="flex flex-col">
              <h3 className="text-xs sm:text-sm md:text-base font-thin text-gray-900 mb-3 md:mb-4">House Types</h3>
              <ul className="space-y-1.5 md:space-y-2 flex-1">
                {houseTypes.map((type) => {
                  const isComingSoon = false;
                  
                  if (isComingSoon) {
                    return (
                      <li key={type.name}>
                        <div
                          onClick={(e) => e.preventDefault()}
                          className="block px-3 md:px-4 py-2 md:py-2.5 text-xs sm:text-sm md:text-base transition-colors duration-200 rounded-lg text-gray-900 opacity-60 cursor-not-allowed"
                        >
                          {type.name} <span className="text-[10px] md:text-xs text-primary">(Coming Soon)</span>
                        </div>
                      </li>
                    );
                  }
                  
                  return (
                    <li key={type.name}>
                      <Link
                        to={type.path}
                        className={`block px-3 md:px-4 py-2 md:py-2.5 text-xs sm:text-sm md:text-base transition-colors duration-200 rounded-lg ${
                          hoveredHouseType === type.name
                            ? 'bg-primary text-white'
                            : 'text-gray-900 md:hover:bg-primary md:hover:text-white'
                        }`}
                        onMouseEnter={() => {
                          if (window.matchMedia("(hover: hover)").matches) {
                            setHoveredHouseType(type.name);
                          }
                        }}
                        onMouseLeave={() => {
                          if (window.matchMedia("(hover: hover)").matches) {
                            setHoveredHouseType(null);
                          }
                        }}
                      >
                        {type.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 md:mt-5 pt-4 md:pt-5 border-t-2 border-gray-300">
                <Link
                  to="/modular"
                  onMouseEnter={() => setHoveredHouseType('Modular')}
                  onMouseLeave={() => setHoveredHouseType(null)}
                  className={`block px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base font-thin transition-all duration-200 rounded-lg text-center ${
                    hoveredHouseType === 'Modular'
                      ? 'bg-primary text-black shadow-xl'
                      : 'bg-primary text-black shadow-lg md:hover:shadow-xl'
                  }`}
                >
                  Modular Home
                </Link>
              </div>
            </div>
            <div className="flex items-center min-h-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full h-full">
                {[...houseTypes, { name: 'Modular', path: '/modular', image: '/MODULAR/x10/snapedit_1697487301153 Large.jpeg' }].map((type) => {
                  const isComingSoon = false;
                  
                  const content = (
                    <div
                      className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-200 h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[220px] ${
                        isComingSoon ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'
                      } ${
                        hoveredHouseType === type.name && !isComingSoon
                          ? 'shadow-xl ring-2 ring-primary md:scale-105'
                          : 'md:hover:shadow-lg'
                      }`}
                      onMouseEnter={() => {
                        if (window.matchMedia("(hover: hover)").matches && !isComingSoon) {
                          setHoveredHouseType(type.name);
                        }
                      }}
                      onMouseLeave={() => {
                        if (window.matchMedia("(hover: hover)").matches) {
                          setHoveredHouseType(null);
                        }
                      }}
                    >
                      <img 
                        src={type.image} 
                        alt={type.name}
                        className={`w-full h-full object-cover transition-transform duration-300 ${
                          isComingSoon ? '' : 'md:group-hover:scale-110'
                        }`}
                        loading="lazy"
                      />
                      {/* Tint overlay for coming soon */}
                      {isComingSoon && (
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                      )}
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 md:top-3 md:left-3 z-10">
                        <div className="bg-primary text-white py-1 px-2 sm:py-1.5 sm:px-2.5 md:px-3 text-[9px] sm:text-[10px] md:text-xs font-thin rounded-lg whitespace-nowrap">
                          {type.name.toUpperCase()}
                        </div>
                      </div>
                      {/* Coming Soon Badge */}
                      {isComingSoon && (
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="bg-white/95 text-gray-900 py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 text-xs sm:text-sm md:text-base font-thin rounded-lg shadow-lg">
                            Coming Soon
                          </div>
                        </div>
                      )}
                    </div>
                  );

                  if (isComingSoon) {
                    return (
                      <div key={type.name} onClick={(e) => e.preventDefault()}>
                        {content}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={type.name}
                      to={type.path}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    
    {/* Mobile Menu - Outside header to prevent clipping */}
    <div 
      id="mobile-menu"
      className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      aria-hidden={!mobileMenuOpen}
    >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 transition-opacity duration-300" 
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 bottom-0 w-full bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h2 id="mobile-menu-title" className="text-base font-thin text-gray-900">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-900 rounded-lg active:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="px-4 py-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-base font-thin text-gray-900 rounded-lg active:bg-gray-100 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-base font-thin text-gray-900 rounded-lg active:bg-gray-100 transition-colors"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    to="/designs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-base font-thin text-gray-900 rounded-lg active:bg-gray-100 transition-colors"
                  >
                    Designs
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleMobileHouseTypesToggle}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-thin text-gray-900 rounded-lg active:bg-gray-100 transition-colors"
                  >
                    <span>House Types</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${mobileHouseTypesOpen ? 'rotate-90' : ''}`}
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileHouseTypesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="mt-2 space-y-1">
                      {houseTypes.map((type) => {
                        const isComingSoon = false;
                        
                        if (isComingSoon) {
                          return (
                            <li key={type.name}>
                              <div
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="block w-full px-4 py-2.5 text-sm text-gray-700 rounded-lg opacity-60 relative"
                              >
                                <span>{type.name}</span>
                                <span className="ml-2 text-xs text-primary font-thin">(Coming Soon)</span>
                              </div>
                            </li>
                          );
                        }
                        
                        return (
                          <li key={type.name}>
                            <Link
                              to={type.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileHouseTypesOpen(false);
                              }}
                              className="block w-full px-4 py-2.5 text-sm text-gray-700 rounded-lg active:bg-gray-100 transition-colors"
                            >
                              {type.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-3 pt-3 border-t-2 border-gray-300">
                      <Link
                        to="/modular"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileHouseTypesOpen(false);
                        }}
                        className="block w-full px-4 py-3 text-sm font-thin bg-primary text-black rounded-lg relative text-center shadow-lg"
                      >
                        <span>Modular Home</span>
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-base font-thin text-gray-900 rounded-lg active:bg-gray-100 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-base font-thin text-gray-900 rounded-lg active:bg-gray-100 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-base font-thin text-gray-900 rounded-lg active:bg-gray-100 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            {/* CTA Button - full width to match nav links */}
            <div className="px-4 pb-6 pt-4 border-t border-gray-200">
              <Button 
                variant="primary" 
                href="/contact" 
                className="block w-full text-base px-4 py-3 text-center"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;