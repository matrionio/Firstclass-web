import type { Metadata } from 'next'
import { SITE_URL } from '@/utils/serviceLandings'

export const metadata: Metadata = {
  title: 'Contact FIRST CLASS LIMO',
  description: 'Request a quote or contact FIRST CLASS LIMO for luxury transportation in Greater Montreal.',
  alternates: { canonical: `${SITE_URL}/contact/` },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
