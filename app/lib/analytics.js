/**
 * Google Analytics Setup for Next.js
 * 
 * This module provides Google Analytics 4 integration.
 * Replace GA_MEASUREMENT_ID with your actual Google Analytics ID.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

/**
 * Load Google Analytics script
 * Add this to your _document.js or layout.js
 */
export function GoogleAnalyticsScripts() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Page view event
 * @param {string} url - Page URL
 */
export const pageview = (url) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Custom event
 * @param {Object} params - Event parameters
 * @param {string} params.action - Event action
 * @param {string} params.category - Event category
 * @param {string} params.label - Event label
 * @param {number} params.value - Event value
 */
export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
