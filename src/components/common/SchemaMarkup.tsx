import Script from 'next/script'
import { contactInfo } from '@/config/contactInfo'

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": contactInfo.name,
    "description": contactInfo.professional.title + " with 5+ years experience. Specializing in intelligent automation solutions for businesses.",
    "url": contactInfo.website,
    "logo": `${contactInfo.website}/logo-mark.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactInfo.phone,
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "sameAs": [
      contactInfo.socialMedia.github,
      contactInfo.socialMedia.linkedin
    ].filter(Boolean)
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": contactInfo.name,
    "description": "AI/ML Development Services, WhatsApp Business API Integration, Machine Learning Solutions, and Intelligent Automation",
    "url": contactInfo.website,
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
    "areaServed": "India",
    "serviceType": [
      "AI Development",
      "Machine Learning Solutions",
      "WhatsApp Business API Integration",
      "Chatbot Development",
      "Document Processing AI",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "Business Intelligence Dashboards"
    ],
    "priceRange": "Contact for quote",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI/ML Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Customer Support Chatbot",
            "description": "Reduce customer service costs by 70% with intelligent WhatsApp chatbots"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Document Processing AI",
            "description": "Process 1000+ documents hourly with 95% accuracy using advanced NLP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Computer Vision Solutions",
            "description": "Automate visual inspection and quality control with 96% accuracy"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5"
    }
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": contactInfo.name,
    "jobTitle": contactInfo.professional.title,
    "description": `Professional AI/ML Developer with 5+ years experience specializing in ${contactInfo.professional.specializations.slice(0, 4).join(', ')}`,
    "url": contactInfo.website,
    "email": contactInfo.email,
    "telephone": contactInfo.phone,
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "WhatsApp Business API",
      "Python Development",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "Computer Vision",
      "Natural Language Processing",
      "Predictive Analytics",
      "Business Intelligence"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "WhatsApp Business API Specialist",
        "description": "Certified WhatsApp Business API partner with proven results"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shriram Tech Solutions",
    "url": "https://shritech.digital",
    "description": "Professional AI/ML Developer Portfolio - WhatsApp Business API Expert",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://shritech.digital/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://shritech.digital"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://shritech.digital/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About Us",
        "item": "https://shritech.digital/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://shritech.digital/#contact"
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema)
        }}
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  )
}
