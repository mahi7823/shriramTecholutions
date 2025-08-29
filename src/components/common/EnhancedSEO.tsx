'use client'

import { usePathname } from 'next/navigation'

export default function EnhancedSEO() {
  const pathname = usePathname()
  
  // Page-specific structured data
  const getPageSpecificSchema = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shritech.digital'
    
    if (pathname === '/') {
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Shriram Tech Solutions",
        "url": baseUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        },
        "sameAs": [
          "https://github.com/mahi7823/shriramTecholutions",
          "https://www.linkedin.com/company/shriram-tech-solutions"
        ]
      }
    }
    
    return null
  }

  const schema = getPageSpecificSchema()

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://wa.me" />
      
      {/* Additional meta tags for better SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Shriram Tech" />
      
      {/* Geo tagging for local SEO */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="28.7041;77.1025" />
      <meta name="ICBM" content="28.7041, 77.1025" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://shritech.digital'}${pathname}`} />
    </>
  )
}
