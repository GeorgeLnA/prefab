import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileHouseTypesOpen, setMobileHouseTypesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileHouseTypesOpen(false);
  }, [location.pathname]);

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

  // Determine header styling based on page and scroll
  const isHeroPage = location.pathname === '/';
  const shouldBeTransparent = isHeroPage && !scrolled;
  
  const headerBgClass = shouldBeTransparent ? 'bg-transparent' : 'bg-white';
  const headerShadowClass = shouldBeTransparent ? '' : 'shadow-md';
  const textColor = shouldBeTransparent ? 'text-white' : 'text-black';
  const hoverColor = shouldBeTransparent ? 'hover:text-primary' : 'hover:text-primary';

  const navLinkClassName = (currentPath: string, targetPath: string, neverBold = false) => {
    const isActive = currentPath === targetPath;
    return `${textColor} ${hoverColor} transition-colors duration-200${isActive && !neverBold ? ' font-bold' : ''}`;
  };

  const handleMobileHouseTypesToggle = () => {
    setMobileHouseTypesOpen(!mobileHouseTypesOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${headerBgClass} ${headerShadowClass} py-4 transition-all duration-300`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center group" onClick={handleLogoClick}>
            <img 
              src="/sharp_logo_high_res.png" 
              alt="Prefab Homes Logo" 
              className="h-8 w-auto mr-3"
            />
            <div className="flex flex-col">
              <span className={`text-base font-light tracking-wide transition-colors duration-200 ${textColor} group-hover:text-primary`}>
                PREFAB HOMES
              </span>
              <span className={`text-[10px] uppercase tracking-widest font-medium transition-colors duration-200 ${textColor} group-hover:text-primary`}>
                Engineered for Efficiency
              </span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className={`${textColor} ${hoverColor} transition-colors duration-200`}>Home</Link></li>
            <li>
              <Link
                to="/technology"
                className={navLinkClassName(location.pathname, '/technology', true)}
              >
                Technology
              </Link>
            </li>
            <li><Link to="/designs" className={`${textColor} ${hoverColor} transition-colors duration-200`}>Designs</Link></li>
            
            {/* House Types Dropdown */}
            <li className="relative group">
              <button className={`${textColor} ${hoverColor} transition-colors duration-200 flex items-center`}>
                House Types
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {houseTypes.map((type) => (
                  <Link
                    key={type.name}
                    to={type.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    {type.name}
                  </Link>
                ))}
                <div className="border-t my-1"></div>
                <Link
                  to="/design-form"
                  className="block px-4 py-3 text-primary font-bold bg-primary/10 hover:bg-primary hover:text-white transition-colors duration-200 text-center rounded-b"
                >
                  Modular Houses
                </Link>
              </div>
            </li>
            
            <li><Link to="/gallery" className={`${textColor} ${hoverColor} transition-colors duration-200`}>Gallery</Link></li>
            <li><Link to="/contact" className={`${textColor} ${hoverColor} transition-colors duration-200`}>Contact</Link></li>
            <li><Link to="/blog" className={`${textColor} ${hoverColor} transition-colors duration-200`}>Blog</Link></li>
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 text-sm font-medium transition-colors duration-200 rounded-sm"
          >
            Schedule Consultation
          </Link>
        </div>
        
        <button 
          className={`lg:hidden ${textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><Link to="/" className="block text-gray-800 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/technology" className="block text-gray-800 hover:text-primary transition-colors">Technology</Link></li>
              <li><Link to="/designs" className="block text-gray-800 hover:text-primary transition-colors">Designs</Link></li>
              
              {/* Mobile House Types with Nested Dropdown */}
              <li>
                <button 
                  onClick={handleMobileHouseTypesToggle}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-primary transition-colors"
                >
                  <span className="font-medium">House Types</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobileHouseTypesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileHouseTypesOpen && (
                  <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                    {houseTypes.map((type) => (
                      <li key={type.name}>
                        <Link 
                          to={type.path} 
                          className="block text-gray-700 hover:text-primary transition-colors py-1"
                        >
                          {type.name}
                        </Link>
                      </li>
                    ))}
                    <li className="mt-3 pt-2 border-t border-gray-200">
                      <Link 
                        to="/design-form" 
                        className="block text-primary font-bold bg-primary/10 px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors text-center"
                      >
                        Modular Houses
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              
              <li><Link to="/gallery" className="block text-gray-800 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="block text-gray-800 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="block text-gray-800 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;