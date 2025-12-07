import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object | object[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Prefab Homes | High-Performance, Energy Efficient, Built in Days',
  description = 'Discover premium prefab homes engineered for efficiency. Highly energy efficient design, rapid 3-5 day assembly, and sustainable construction. Starting from £275,000.',
  image = '/sharp_logo_high_res.png',
  url = 'https://prefabhomes.co.uk',
  type = 'website',
  noindex = false,
  keywords,
  author = 'Prefab Homes',
  publishedTime,
  modifiedTime,
  structuredData,
}) => {
  const fullTitle = title.includes('Prefab Homes') ? title : `${title} | Prefab Homes`;
  const fullUrl = url.startsWith('http') ? url : `https://prefabhomes.co.uk${url}`;
  const fullImage = image.startsWith('http') ? image : `https://prefabhomes.co.uk${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Prefab Homes" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffbf00" />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-GB" />
      <link rel="alternate" hrefLang="en-GB" href={fullUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
          ))
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )
      )}
    </Helmet>
  );
};

export default SEO;

