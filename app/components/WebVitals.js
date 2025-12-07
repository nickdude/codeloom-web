"use client";

import { useEffect } from "react";
import { useReportWebVitals } from "next/web-vitals";

/**
 * Web Vitals Component for tracking Core Web Vitals
 * 
 * This component tracks and reports Core Web Vitals metrics to your analytics service.
 * Metrics tracked: CLS, FID, FCP, LCP, TTFB, INP
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("Web Vitals:", metric);
    }

    // Send to analytics service
    sendToAnalytics(metric);
  });

  return null;
}

/**
 * Send metric data to analytics service
 * @param {Object} metric - Web vital metric
 */
function sendToAnalytics(metric) {
  const { name, value, id, rating } = metric;

  // Send to Google Analytics 4 (if gtag is available)
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, {
      event_category: "Web Vitals",
      event_label: id,
      value: Math.round(name === "CLS" ? value * 1000 : value),
      metric_rating: rating,
      non_interaction: true,
    });
  }

  // Send to your custom analytics endpoint
  if (typeof window !== "undefined" && navigator.sendBeacon) {
    const body = JSON.stringify({
      name,
      value,
      id,
      rating,
      url: window.location.href,
      timestamp: Date.now(),
    });

    // Replace with your analytics endpoint
    // navigator.sendBeacon('/api/analytics', body);
  }
}

/**
 * Utility function to track custom events
 * @param {string} eventName - Name of the event
 * @param {Object} eventData - Event data
 */
export function trackEvent(eventName, eventData = {}) {
  if (typeof window !== "undefined") {
    // Google Analytics 4
    if (window.gtag) {
      window.gtag("event", eventName, eventData);
    }

    // Custom analytics
    if (navigator.sendBeacon) {
      const body = JSON.stringify({
        event: eventName,
        data: eventData,
        url: window.location.href,
        timestamp: Date.now(),
      });

      // Replace with your analytics endpoint
      // navigator.sendBeacon('/api/analytics/events', body);
    }

    // Console log in development
    if (process.env.NODE_ENV === "development") {
      console.log("Event tracked:", eventName, eventData);
    }
  }
}

/**
 * Track page view
 * @param {string} url - Page URL
 * @param {string} title - Page title
 */
export function trackPageView(url, title) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-XXXXXXXXXX", {
      page_path: url,
      page_title: title,
    });
  }
}
