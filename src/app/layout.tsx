import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/common/GoogleAnalytics'
import SchemaMarkup from '@/components/common/SchemaMarkup'
import FAQSchema from '@/components/common/FAQSchema'
import LocalBusinessSchema from '@/components/common/LocalBusinessSchema'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shritech.digital'),
  title: {
    default: 'Shriram Tech Solutions - AI/ML Developer & WhatsApp Business API Expert | 5+ Years Experience',
    template: '%s | Shriram Tech Solutions - AI/ML Expert'
  },
  description: 'Professional AI/ML Developer with 5+ years experience in India. WhatsApp Business API specialist, FastAPI, Next.js, Python solutions. Proven results: 300% order increases, 95% accuracy rates. Contact: myadav8890@outlook.com | +91-7433000131',
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
    url: 'https://www.shritech.digital',
    siteName: 'Shriram Tech Solutions',
    title: 'Shriram Tech Solutions - AI/ML Developer & WhatsApp Business API Expert',
    description: 'Professional AI/ML Developer with 5+ years experience. WhatsApp Business API, FastAPI, Next.js, Python solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shriram Tech Solutions - AI/ML Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shriram Tech Solutions - AI/ML Developer & WhatsApp Business API Expert',
    description: 'Professional AI/ML Developer with 5+ years experience. WhatsApp Business API, FastAPI, Next.js, Python solutions.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'verification-token', // Add your actual Google verification token
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <ThemeProvider>
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
          <SchemaMarkup />
          <FAQSchema />
          <LocalBusinessSchema />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
