import type { Metadata } from 'next'
import { SITE_URL } from '@/utils/serviceLandings'

export const metadata: Metadata = {
  title: 'Luxury Vehicle Fleet in Greater Montreal',
  description: 'Explore the published FIRST CLASS LIMO fleet, including sedans, SUVs, an executive van, and electric vehicles.',
  alternates: { canonical: `${SITE_URL}/fleet/` },
}

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return children
}
