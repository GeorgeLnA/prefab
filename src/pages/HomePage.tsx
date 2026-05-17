import React from 'react';
import HomeSmoothScroll from '../components/ui/home-smooth-scroll';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { SITE_EMAIL, SITE_ORIGIN, SITE_PHONE_DISPLAY } from '../lib/utils';

const HomePage: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prefab Homes",
    "url": SITE_ORIGIN,
    "logo": `${SITE_ORIGIN}/sharp_logo_high_res.png`,
    "description": "Високоефективні модульні та каркасні будинки Prefab Homes: енергоефективність, швидкий монтаж і якість заводського виробництва в Україні.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SITE_PHONE_DISPLAY,
      "contactType": "Customer Service",
      "email": SITE_EMAIL,
      "areaServed": "UA",
      "availableLanguage": "Ukrainian"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA"
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
    "url": SITE_ORIGIN,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_ORIGIN}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO
        title="Prefab Homes | Енергоефективні модульні будинки, швидкий монтаж"
        description="Prefab Homes — модульні та каркасні будинки в Україні: висока енергоефективність, сучасні матеріали, чіткі терміни. Доставка та монтаж по всій країні."
        url="/"
        keywords={buildKeywords('Prefab Homes Україна, модульний будинок, каркасний будинок під ключ, SIP, енергоефективний дім', { includeServices: true })}
        structuredData={[organizationSchema, websiteSchema]}
      />
      <HomeSmoothScroll />
    </>
  );
};

export default HomePage;
