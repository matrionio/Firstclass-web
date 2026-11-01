import type { Metadata } from 'next'
import { SITE_URL } from '@/utils/serviceLandings'

export const metadata: Metadata = {
  title: 'Luxury Transportation Services in Greater Montreal',
  description: 'Explore FIRST CLASS LIMO services for airport transfers, corporate transportation, events, tours, hourly service, and direct transfers.',
  alternates: { canonical: `${SITE_URL}/services/` },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
