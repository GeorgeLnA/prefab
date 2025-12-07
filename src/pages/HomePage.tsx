import React from 'react';
import HomeSmoothScroll from '../components/ui/home-smooth-scroll';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prefab Homes",
    "url": "https://prefabhomes.co.uk",
    "logo": "https://prefabhomes.co.uk/sharp_logo_high_res.png",
    "description": "High-performance prefab homes engineered for efficiency. Highly energy efficient design, rapid 3-5 day assembly, and sustainable construction.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 7495788669",
      "contactType": "Customer Service",
      "email": "prefabhomes.uk@gmail.com",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "sameAs": [
      "https://www.facebook.com/prefabhomes",
      "https://www.instagram.com/prefabhomes",
      "https://twitter.com/prefabhomes"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Prefab Homes",
    "url": "https://prefabhomes.co.uk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://prefabhomes.co.uk/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO
        title="Prefab Homes | High-Performance, Energy Efficient, Built in Days"
        description="Discover premium prefab homes engineered for efficiency. Highly energy efficient design, rapid 3-5 day assembly, and sustainable construction."
        url="/"
        keywords="prefab homes, modular homes, energy efficient homes, sustainable construction, prefabricated houses UK, highly energy efficient"
        structuredData={[organizationSchema, websiteSchema]}
      />
      <HomeSmoothScroll />
    </>
  );
};

export default HomePage;