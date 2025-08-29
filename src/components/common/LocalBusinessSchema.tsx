import Script from 'next/script'
import { contactInfo } from '@/config/contactInfo'

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${contactInfo.website}/#LocalBusiness`,
    "name": contactInfo.name,
    "alternateName": "ShriTech Digital",
    "description": `${contactInfo.professional.title} serving businesses across India. Specializing in ${contactInfo.professional.specializations.slice(0, 3).join(', ')}.`,
    "url": contactInfo.website,
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
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
      contactInfo.socialMedia.github,
      contactInfo.socialMedia.linkedin,
      contactInfo.socialMedia.twitter,
      contactInfo.socialMedia.facebook
    ].filter(Boolean)
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
