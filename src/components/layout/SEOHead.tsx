import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = "Shriram Tech Solutions - AI/ML Developer & WhatsApp Business API Expert",
  description = "Professional AI/ML Developer with 5+ years experience. WhatsApp Business API, FastAPI, Next.js, Python solutions. Proven results: 300% order increases, 95% accuracy rates.",
  canonical = "https://shriramtech.com",
  ogImage = "/og-image.jpg"
}: SEOHeadProps) {
  const fullTitle = title.includes("Shriram Tech") ? title : `${title} | Shriram Tech Solutions`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Shriram Tech Solutions" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Shriram Tech Solutions" />
      <meta name="keywords" content="AI developer, ML developer, WhatsApp Business API, FastAPI, Next.js, Python, chatbot development, document processing, computer vision, predictive analytics" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Shriram Tech Solutions",
            "description": description,
            "url": canonical,
            "telephone": "+91-7433000131",
            "email": "contact@shriramtech.com",
            "areaServed": "India",
            "serviceType": [
              "AI Development",
              "ML Development", 
              "WhatsApp Business API",
              "Chatbot Development",
              "Document Processing AI",
              "Computer Vision",
              "Predictive Analytics"
            ]
          })
        }}
      />
    </Head>
  );
}
