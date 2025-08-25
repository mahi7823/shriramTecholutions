import Script from 'next/script'

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shriram Tech Solutions",
    "description": "Professional AI/ML Developer & WhatsApp Business API Expert with 5+ years experience. Specializing in intelligent automation solutions for businesses.",
    "url": "https://www.shritech.digital",
    "logo": "https://www.shritech.digital/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7433000131",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "sameAs": [
      "https://github.com/mahi7823/shriramTecholutions"
    ]
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Shriram Tech Solutions",
    "description": "AI/ML Development Services, WhatsApp Business API Integration, Machine Learning Solutions, and Intelligent Automation",
    "url": "https://www.shritech.digital",
    "telephone": "+91-7433000131",
    "email": "myadav8890@outlook.com",
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
    "name": "Shriram Tech Solutions",
    "jobTitle": "AI/ML Developer & WhatsApp Business API Expert",
    "description": "Professional AI/ML Developer with 5+ years experience specializing in WhatsApp Business API, FastAPI, Next.js, and Python solutions",
    "url": "https://www.shritech.digital",
    "email": "myadav8890@outlook.com",
    "telephone": "+91-7433000131",
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
    "url": "https://www.shritech.digital",
    "description": "Professional AI/ML Developer Portfolio - WhatsApp Business API Expert",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.shritech.digital/?q={search_term_string}",
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
        "item": "https://www.shritech.digital"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.shritech.digital/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About Us",
        "item": "https://www.shritech.digital/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.shritech.digital/#contact"
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
