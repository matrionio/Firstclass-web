import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import ScrollToTop from '@/components/shared/ScrollToTop'
import { LanguageProvider } from '@/context/LanguageContext'
import { COMPANY_INFO } from '@/utils/constants'
import { SITE_URL } from '@/utils/serviceLandings'
import ConsentBanner from '@/components/shared/ConsentBanner'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'FIRST CLASS LIMO | Luxury Transportation Services',
    template: '%s | FIRST CLASS LIMO',
  },
  description:
    'Premium luxury limousine and transportation services in Montreal. Airport transfers, corporate travel, special events, and more. Available 24/7.',
  keywords: [
    'limousine Montreal',
    'luxury transportation Montreal',
    'airport transfers Montreal',
    'corporate transportation Quebec',
    'limo service Montreal',
    'chauffeur service Montreal',
    'FIRST CLASS LIMO',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    siteName: 'FIRST CLASS LIMO',
    title: 'FIRST CLASS LIMO | Luxury Transportation Services',
    description:
      'Premium luxury limousine and transportation services in Greater Montreal. Available 24/7.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIRST CLASS LIMO | Luxury Transportation Services',
    description: 'Premium luxury limousine and transportation services in Greater Montreal.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Safely serializes JSON for embedding in <script> tags by escaping
// characters that could break out of the HTML script context.
function safeJsonLd(obj: object): string {
  return JSON.stringify(obj)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/'/g, '\\u0027')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          id="consent-mode-default"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
        {/* Google Tag Manager — loads after Consent Mode defaults above are set */}
        <script
          id="gtm-loader"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PC56693S');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY_INFO.name,
              description: 'Luxury transportation services in Greater Montreal.',
              legalName: COMPANY_INFO.legalName,
              url: SITE_URL,
              telephone: COMPANY_INFO.phone,
              email: COMPANY_INFO.email,
              areaServed: {
                '@type': 'Place',
                name: 'Greater Montreal, Quebec, Canada',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: COMPANY_INFO.phone,
                email: COMPANY_INFO.email,
                contactType: 'customer service',
                availableLanguage: ['English', 'French'],
              },
            }),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PC56693S"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
          <ConsentBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
