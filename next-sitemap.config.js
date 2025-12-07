/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://codeloom.studio',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 7000,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://codeloom.studio/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for specific paths
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.includes('#help') || path.includes('#our-results')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.includes('#contact')) {
      priority = 0.9;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
