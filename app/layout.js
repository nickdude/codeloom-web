import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadataBase = new URL("https://codeloom.studio");

export const metadata = {
  metadataBase: new URL("https://codeloom.studio"),
  title: {
    default: "Codeloom — UI/UX Design, App Development, CRM, SaaS & ERP Solutions",
    template: "%s | Codeloom Studio"
  },
  description:
    "Codeloom Studio — Leading IT firm specializing in UI/UX design, mobile app development, CRM solutions, custom websites, SaaS platforms, and ERP systems. Expert product design and development for startups and enterprises. Transform your business with cutting-edge technology solutions.",
  applicationName: "Codeloom Studio",
  authors: [{ name: "Codeloom Studio", url: "https://codeloom.studio" }],
  creator: "Codeloom Studio",
  publisher: "Codeloom Studio",
  keywords: [
    // Core Services
    "UI/UX design",
    "UX design agency",
    "UI design services",
    "user interface design",
    "user experience design",
    "app development",
    "mobile app development",
    "iOS app development",
    "Android app development",
    "cross-platform app development",
    "React Native development",
    "Flutter development",
    "CRM development",
    "CRM solutions",
    "custom CRM system",
    "CRM integration",
    "Salesforce development",
    "website development",
    "web development",
    "custom website design",
    "responsive web design",
    "website design company",
    "SaaS development",
    "SaaS platform development",
    "cloud-based SaaS",
    "SaaS application development",
    "B2B SaaS",
    "multi-tenant SaaS",
    "ERP development",
    "ERP solutions",
    "custom ERP system",
    "ERP implementation",
    "enterprise resource planning",
    "ERP software development",
    
    // Technology Stack
    "React development",
    "Next.js development",
    "Node.js development",
    "fullstack development",
    "JavaScript development",
    "TypeScript development",
    "Python development",
    "cloud solutions",
    "AWS development",
    "Azure development",
    
    // Business Solutions
    "IT firm",
    "software development company",
    "product design",
    "product development",
    "startup development",
    "enterprise software",
    "digital transformation",
    "business automation",
    "workflow automation",
    "API development",
    "API integration",
    "microservices",
    
    // Industry Focus
    "startup studio",
    "MVP development",
    "startup consulting",
    "tech consulting",
    "IT consulting",
    "software consulting",
    "agile development",
    "scrum development",
    
    // Location & Brand
    "codeloom",
    "codeloom studio",
    "IT company India",
    "software company India",
    "design agency India",
    "development agency India",
    "Mumbai IT firm",
    "India tech company",
    
    // Additional Services
    "e-commerce development",
    "dashboard development",
    "admin panel development",
    "web application",
    "progressive web app",
    "PWA development",
    "mobile-first design",
    "startup growth",
    "digital product design",
    "custom software development",
  ],
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Business",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Codeloom — UI/UX Design, App Development, CRM, SaaS & ERP Solutions",
    description:
      "Leading IT firm specializing in UI/UX design, mobile app development, CRM solutions, custom websites, SaaS platforms, and ERP systems. Transform your business with expert product design and development.",
    url: "https://codeloom.studio",
    siteName: "Codeloom Studio",
    images: [
      {
        url: "https://codeloom.studio/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codeloom — UI/UX Design, App Development, CRM, SaaS & ERP Solutions",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codeloom — UI/UX Design, App Development, CRM, SaaS & ERP Solutions",
    description:
      "Leading IT firm specializing in UI/UX design, mobile app development, CRM solutions, SaaS platforms, and ERP systems. Expert product design & development.",
    images: ["https://codeloom.studio/assets/og-image.png"],
    site: "@codeloom",
    creator: "@codeloom",
  },
  icons: {
    icon: [
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/C.svg", type: "image/svg+xml" },
    ],
    shortcut: "/assets/C.svg",
    apple: [
      { url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/assets/C.svg", rel: "mask-icon", color: "#F54A00" },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://codeloom.studio",
  },
  verification: {
    google: "googledccb23aa51cf918f.html",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
      description: "Leading IT firm specializing in UI/UX design, mobile app development, CRM solutions, custom websites, SaaS platforms, and ERP systems for startups and enterprises.",
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
      knowsAbout: [
        "UI/UX Design",
        "Mobile App Development",
        "CRM Development",
        "Website Development",
        "SaaS Development",
        "ERP Development",
        "Product Design",
        "Software Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://codeloom.studio/#website",
      url: "https://codeloom.studio",
      name: "Codeloom Studio",
      description: "IT Firm - UI/UX Design, App Development, CRM, SaaS & ERP Solutions",
      publisher: {
        "@id": "https://codeloom.studio/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://codeloom.studio/#webpage",
      url: "https://codeloom.studio",
      name: "Codeloom — UI/UX Design, App Development, CRM, SaaS & ERP Solutions",
      isPartOf: {
        "@id": "https://codeloom.studio/#website",
      },
      about: {
        "@id": "https://codeloom.studio/#organization",
      },
      description: "Leading IT firm specializing in UI/UX design, mobile app development, CRM solutions, custom websites, SaaS platforms, and ERP systems.",
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://codeloom.studio/#service",
      name: "Codeloom Studio",
      image: "https://codeloom.studio/assets/og-image.png",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      url: "https://codeloom.studio",
      telephone: "+91-9137421926",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "10",
      },
      serviceType: [
        "UI/UX Design",
        "User Interface Design",
        "User Experience Design",
        "Mobile App Development",
        "iOS App Development",
        "Android App Development",
        "Web Development",
        "Website Development",
        "CRM Development",
        "CRM Solutions",
        "SaaS Development",
        "SaaS Platform Development",
        "ERP Development",
        "ERP Solutions",
        "Product Design",
        "Software Development",
        "Custom Software Development",
        "E-commerce Development",
        "API Development",
        "Cloud Solutions",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design Services",
              description: "Professional user interface and user experience design for web and mobile applications",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description: "Custom iOS and Android app development using React Native and Flutter",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CRM Development",
              description: "Custom CRM solutions and integrations for business management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
              description: "Responsive and scalable website development with modern technologies",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SaaS Development",
              description: "Cloud-based SaaS platform development and deployment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ERP Development",
              description: "Enterprise resource planning systems and custom ERP solutions",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Manifest and theme */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F54A00" />
        {/* Favicons (PNG fallbacks generated by scripts) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/android-chrome-512x512.png" />
        {/* Fallback SVG (some browsers support svg favicons) */}
        <link rel="icon" href="/assets/C.svg" />
        <link rel="mask-icon" href="/assets/C.svg" color="#F54A00" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JSON-LD Organization schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />

        {children}
      </body>
    </html>
  );
}
