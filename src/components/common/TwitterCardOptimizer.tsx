'use client';

import { usePathname } from 'next/navigation';

interface TwitterCardProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function TwitterCardOptimizer({
  title,
  description,
  image = '/og-image.svg',
  url
}: TwitterCardProps) {
  const pathname = usePathname();
  const fullUrl = url || `https://shritech.digital${pathname}`;
  
  // Default values based on page
  const defaultTitle = title || 'AI/ML Developer India - Shriram Tech Solutions';
  const defaultDescription = description || 'Expert AI/ML Developer in India. 5+ years experience in WhatsApp Business API, FastAPI, Python & Next.js.';

  return (
    <>
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ShriramTechSol" />
      <meta name="twitter:creator" content="@ShriramTechSol" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={`https://shritech.digital${image}`} />
      <meta name="twitter:image:alt" content="Shriram Tech Solutions - AI/ML Developer Portfolio" />
      <meta name="twitter:url" content={fullUrl} />
      
      {/* Additional Twitter meta tags for better optimization */}
      <meta name="twitter:domain" content="shritech.digital" />
      <meta name="twitter:label1" content="Services" />
      <meta name="twitter:data1" content="AI/ML Development, WhatsApp Business API" />
      <meta name="twitter:label2" content="Experience" />
      <meta name="twitter:data2" content="5+ Years" />
    </>
  );
}
