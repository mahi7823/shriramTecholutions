'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId?: string
}

export default function GoogleAnalytics({ measurementId = process.env.NEXT_PUBLIC_GA_ID || 'G-EJBKR606DM' }: GoogleAnalyticsProps) {
  // Don't load analytics in development
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  // Don't load if no measurement ID
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics: Invalid or missing measurement ID')
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            cookie_flags: 'secure;samesite=lax',
            anonymize_ip: false,
            allow_google_signals: true,
            allow_ad_personalization_signals: true
          });

          // Enhanced ecommerce tracking
          gtag('config', '${measurementId}', {
            custom_map: {
              'custom_parameter': 'shritech_portfolio'
            }
          });
        `}
      </Script>
    </>
  )
}
