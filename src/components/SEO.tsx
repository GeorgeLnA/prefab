import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_ORIGIN } from '../lib/utils';

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
  title = 'Prefab Homes | Високоякісні модульні будинки та енергоефективність',
  description = 'Модульні та каркасні будинки Prefab Homes: енергоефективність, швидкий монтаж і чіткі рішення для житла в Україні.',
  image = '/sharp_logo_high_res.png',
  url = '/',
  type = 'website',
  noindex = false,
  keywords,
  author = 'Prefab Homes',
  publishedTime,
  modifiedTime,
  structuredData,
}) => {
  const fullTitle = title.includes('Prefab Homes') ? title : `${title} | Prefab Homes`;
  const fullUrl = url.startsWith('http') ? url : `${SITE_ORIGIN}${url}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_ORIGIN}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="application-name" content="Prefab Homes" />
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
      <meta property="og:locale" content="uk_UA" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional Meta Tags - viewport is in index.html */}
      <meta name="theme-color" content="#ffbf00" />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Language */}
      <meta httpEquiv="content-language" content="uk" />
      <link rel="alternate" hrefLang="uk-UA" href={fullUrl} />
      
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

