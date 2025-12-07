/**
 * SEO Utility Functions for Codeloom Studio
 * 
 * This module provides reusable functions for generating SEO metadata,
 * structured data, and other SEO-related utilities.
 */

/**
 * Generate OpenGraph metadata for a page
 * @param {Object} options - The options for generating OpenGraph metadata
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.url - Page URL
 * @param {string} [options.image] - Image URL (defaults to og-image.png)
 * @param {string} [options.type] - OpenGraph type (defaults to "website")
 * @returns {Object} OpenGraph metadata object
 */
export function generateOpenGraph({
  title,
  description,
  url,
  image = "https://codeloom.studio/assets/og-image.png",
  type = "website",
}) {
  return {
    type,
    locale: "en_US",
    title,
    description,
    url,
    siteName: "Codeloom Studio",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
  };
}

/**
 * Generate Twitter Card metadata for a page
 * @param {Object} options - The options for generating Twitter Card metadata
 * @param {string} options.title - Card title
 * @param {string} options.description - Card description
 * @param {string} [options.image] - Image URL (defaults to og-image.png)
 * @returns {Object} Twitter Card metadata object
 */
export function generateTwitterCard({
  title,
  description,
  image = "https://codeloom.studio/assets/og-image.png",
}) {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    site: "@codeloom",
    creator: "@codeloom",
  };
}

/**
 * Generate complete page metadata
 * @param {Object} options - The options for generating page metadata
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.url - Page URL
 * @param {string[]} [options.keywords] - Additional keywords for the page
 * @param {string} [options.image] - Custom OG image
 * @returns {Object} Complete metadata object
 */
export function generatePageMetadata({
  title,
  description,
  url,
  keywords = [],
  image,
}) {
  const baseKeywords = [
    "design studio",
    "development agency",
    "product design",
    "startup development",
    "codeloom",
  ];

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    openGraph: generateOpenGraph({ title, description, url, image }),
    twitter: generateTwitterCard({ title, description, image }),
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate Organization Schema.org JSON-LD
 * @returns {Object} Organization structured data
 */
export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": "https://codeloom.studio/#organization",
    name: "Codeloom Studio",
    url: "https://codeloom.studio",
    logo: {
      "@type": "ImageObject",
      url: "https://codeloom.studio/assets/codeloom-logo.svg",
      width: 512,
      height: 512,
    },
    description:
      "Product design, development and growth studio for startups and founders.",
    sameAs: [
      "https://www.linkedin.com/company/codeloom-studio/",
      "https://twitter.com/codeloom",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9137421926",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Maharashtra",
    },
  };
}

/**
 * Generate BreadcrumbList Schema.org JSON-LD
 * @param {Array<{name: string, url: string}>} items - Breadcrumb items
 * @returns {Object} BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    "@id": "https://codeloom.studio/#breadcrumb",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Article Schema.org JSON-LD
 * @param {Object} options - Article options
 * @param {string} options.title - Article title
 * @param {string} options.description - Article description
 * @param {string} options.url - Article URL
 * @param {string} options.datePublished - Published date (ISO 8601)
 * @param {string} [options.dateModified] - Modified date (ISO 8601)
 * @param {string} [options.image] - Article image URL
 * @returns {Object} Article structured data
 */
export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image = "https://codeloom.studio/assets/og-image.png",
}) {
  return {
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "Codeloom Studio",
      url: "https://codeloom.studio",
    },
    publisher: {
      "@type": "Organization",
      name: "Codeloom Studio",
      logo: {
        "@type": "ImageObject",
        url: "https://codeloom.studio/assets/codeloom-logo.svg",
      },
    },
    image: {
      "@type": "ImageObject",
      url: image,
    },
  };
}

/**
 * Generate FAQ Schema.org JSON-LD
 * @param {Array<{question: string, answer: string}>} faqs - FAQ items
 * @returns {Object} FAQPage structured data
 */
export function generateFAQSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Service Schema.org JSON-LD
 * @param {Object} options - Service options
 * @param {string} options.name - Service name
 * @param {string} options.description - Service description
 * @param {string} options.url - Service URL
 * @returns {Object} Service structured data
 */
export function generateServiceSchema({ name, description, url }) {
  return {
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Codeloom Studio",
      url: "https://codeloom.studio",
    },
    url,
    areaServed: "IN",
  };
}

/**
 * Combine multiple schemas into a graph
 * @param {Object[]} schemas - Array of schema objects
 * @returns {Object} Combined schema with @graph
 */
export function combineSchemas(schemas) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}

/**
 * Generate canonical URL
 * @param {string} path - Page path
 * @returns {string} Full canonical URL
 */
export function generateCanonicalUrl(path) {
  const baseUrl = "https://codeloom.studio";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
