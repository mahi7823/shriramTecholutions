import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/common/GoogleAnalytics'
import SchemaMarkup from '@/components/common/SchemaMarkup'
import FAQSchema from '@/components/common/FAQSchema'
import LocalBusinessSchema from '@/components/common/LocalBusinessSchema'
import EnhancedSEO from '@/components/common/EnhancedSEO'
import TwitterCardOptimizer from '@/components/common/TwitterCardOptimizer'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

// SEO metadata - Optimized for better search engine performance
export const metadata: Metadata = {
  metadataBase: new URL("https://shritech.digital"),
  title: {
    default: 'AI/ML Developer India - Shriram Tech Solutions',
    template: '%s | Shriram Tech'
  },
  description:
    'Expert AI/ML developer with 5+ years experience. WhatsApp Business API, chatbots, FastAPI, Python & Next.js. Reduce costs 70%, improve efficiency. Free consultation.',
  keywords: [
    // Primary keywords
    'AI developer India', 'ML developer India', 'WhatsApp Business API expert India', 'AI consultant India',
    // Technology keywords
    'FastAPI developer', 'Next.js developer', 'Python AI developer', 'React developer', 'TypeScript developer',
    // Service keywords
    'chatbot development India', 'document processing AI', 'computer vision solutions', 'predictive analytics',
    'business intelligence dashboard', 'machine learning automation', 'AI customer support',
    // Location keywords
    'AI developer Delhi', 'ML consultant Mumbai', 'WhatsApp API developer Bangalore', 'AI solutions India',
    // Business keywords
    'AI for restaurants', 'AI for ecommerce', 'AI for law firms', 'business automation AI',
    'cost reduction AI', 'revenue increase AI', 'productivity improvement AI'
  ],
  authors: [{ name: 'Shriram Tech Solutions' }],
  creator: 'Shriram Tech Solutions',
  publisher: 'Shriram Tech Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shritech.digital',
    siteName: 'Shriram Tech Solutions',
    title: 'AI/ML Developer India - Shriram Tech Solutions',
    description:
      'Expert AI/ML developer with 5+ years experience. WhatsApp Business API, chatbots, FastAPI, Python & Next.js. Reduce costs 70%, improve efficiency. Free consultation.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Shriram Tech Solutions - AI/ML Developer Portfolio',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI/ML Developer India - Shriram Tech Solutions',
    description:
      'Expert AI/ML developer with 5+ years experience. WhatsApp Business API, chatbots, FastAPI, Python & Next.js. Reduce costs 70%, improve efficiency.',
    images: ['/og-image.svg'],
    site: '@ShriramTechSol',
    creator: '@ShriramTechSol',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'ZayAh0RA-19RpBttk3oDglvibUIlI3sdqdp-oBOzLwQ',
  },
  alternates: {
    canonical: 'https://shritech.digital',
    languages: {
      'en': 'https://shritech.digital',
      'x-default': 'https://shritech.digital',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Canonical URL always points to main domain */}
        <link rel="canonical" href="https://shritech.digital" />
        {/* ✅ Hreflang for international SEO */}
        <link rel="alternate" hrefLang="en" href="https://shritech.digital" />
        <link rel="alternate" hrefLang="x-default" href="https://shritech.digital" />
        <EnhancedSEO />
        <TwitterCardOptimizer />
        <link rel="icon" type="image/svg+xml" href="/logo-mark.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID || "G-EJBKR606DM"} />
          <SchemaMarkup />
          <FAQSchema />
          <LocalBusinessSchema />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


