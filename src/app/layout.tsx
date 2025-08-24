import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://shriramtech.com'),
  title: {
    default: 'Shriram Tech Solutions - AI/ML Developer & WhatsApp Business API Expert',
    template: '%s | Shriram Tech Solutions'
  },
  description: 'Professional AI/ML Developer with 5+ years experience. WhatsApp Business API, FastAPI, Next.js, Python solutions. Proven results: 300% order increases, 95% accuracy rates.',
  keywords: ['AI developer', 'ML developer', 'WhatsApp Business API', 'FastAPI', 'Next.js', 'Python', 'chatbot development', 'document processing', 'computer vision', 'predictive analytics'],
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
    url: 'https://shriramtech.com',
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
        {children}
      </body>
    </html>
  )
}
