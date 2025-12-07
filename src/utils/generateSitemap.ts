// Utility to generate sitemap.xml
// This can be used to generate a sitemap dynamically or statically

export const generateSitemap = (routes: Array<{ path: string; lastmod?: string; changefreq?: string; priority?: string }>) => {
  const baseUrl = 'https://prefabhomes.co.uk';
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod || currentDate}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority || '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Static routes for sitemap
export const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/designs', priority: '0.9', changefreq: 'weekly' },
  { path: '/gallery', priority: '0.9', changefreq: 'weekly' },
  { path: '/technology', priority: '0.9', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/skandy', priority: '0.8', changefreq: 'monthly' },
  { path: '/smart', priority: '0.8', changefreq: 'monthly' },
  { path: '/modular', priority: '0.8', changefreq: 'monthly' },
  { path: '/modern', priority: '0.8', changefreq: 'monthly' },
  { path: '/mobile', priority: '0.8', changefreq: 'monthly' },
  { path: '/bungalow', priority: '0.8', changefreq: 'monthly' },
  { path: '/skandy-nordy', priority: '0.8', changefreq: 'monthly' },
  { path: '/modern-b', priority: '0.8', changefreq: 'monthly' },
  { path: '/lounge', priority: '0.8', changefreq: 'monthly' },
  { path: '/design-yourself', priority: '0.7', changefreq: 'monthly' },
  { path: '/design-form', priority: '0.7', changefreq: 'monthly' },
];

