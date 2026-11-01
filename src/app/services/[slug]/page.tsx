import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceLandingContent from '@/components/services/ServiceLandingContent'
import { COMPANY_INFO } from '@/utils/constants'
import { SERVICE_LANDING_META, SERVICE_SLUGS, SITE_URL, ServiceSlug } from '@/utils/serviceLandings'

export async function generateStaticParams(): Promise<{ slug: ServiceSlug }[]> {
  return SERVICE_SLUGS.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const slug = params.slug as ServiceSlug
  const service = SERVICE_LANDING_META[slug]

  if (!service) return {}

  const canonical = `${SITE_URL}/services/${slug}/`
  const pageTitle = `${service.title} | FIRST CLASS LIMO`

  return {
    title: pageTitle,
    description: service.description,
    keywords: [service.serviceType, 'Greater Montreal', 'luxury transportation', 'chauffeur service'],
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'en_CA',
      url: canonical,
      siteName: COMPANY_INFO.name,
      title: pageTitle,
      description: service.description,
    },
    twitter: {
      card: 'summary',
      title: pageTitle,
      description: service.description,
    },
  }
}

function safeJsonLd(value: object) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/'/g, '\\u0027')
}

export default function ServiceLandingPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as ServiceSlug
  const service = SERVICE_LANDING_META[slug]

  if (!service) notFound()

  const canonical = `${SITE_URL}/services/${slug}/`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.serviceType,
    description: service.description,
    url: canonical,
    areaServed: {
      '@type': 'Place',
      name: 'Greater Montreal, Quebec, Canada',
    },
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      legalName: COMPANY_INFO.legalName,
      url: SITE_URL,
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <ServiceLandingContent slug={slug} />
    </>
  )
}
