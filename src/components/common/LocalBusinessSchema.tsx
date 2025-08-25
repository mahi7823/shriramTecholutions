import Script from 'next/script'

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.shritech.digital/#LocalBusiness",
    "name": "Shriram Tech Solutions",
    "alternateName": "ShriTech Digital",
    "description": "Professional AI/ML Developer & WhatsApp Business API Expert serving businesses across India. Specializing in intelligent automation, chatbot development, and machine learning solutions.",
    "url": "https://www.shritech.digital",
    "telephone": "+91-7433000131",
    "email": "myadav8890@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.7041",
      "longitude": "77.1025"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "City", 
        "name": "Delhi"
      },
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "City",
        "name": "Bangalore"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "28.7041",
        "longitude": "77.1025"
      },
      "geoRadius": "2000000"
    },
    "openingHours": [
      "Mo-Su 00:00-23:59"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "priceRange": "Contact for quote",
    "acceptsReservations": "True",
    "currenciesAccepted": "INR",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "UPI",
      "Bank Transfer"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI/ML Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WhatsApp Business API Integration",
            "description": "Complete WhatsApp Business API setup, chatbot development, and automation solutions"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "Contact for quote"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "AI Customer Support Solutions",
            "description": "Intelligent chatbots and automated customer service systems with 70% cost reduction"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "Contact for quote"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Document Processing AI",
            "description": "Automated document processing with 95% accuracy using advanced NLP techniques"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "Contact for quote"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Restaurant Owner Delhi"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best investment we ever made! Orders tripled in first month. Our staff is happier and customers love the convenience. ROI was 400% in just 6 months."
      }
    ],
    "sameAs": [
      "https://github.com/mahi7823/shriramTecholutions",
      "https://www.linkedin.com/company/shriram-tech-solutions"
    ]
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema)
      }}
    />
  )
}
