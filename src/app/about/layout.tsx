import type { Metadata } from 'next'
import { SITE_URL } from '@/utils/serviceLandings'

export const metadata: Metadata = {
  title: 'About FIRST CLASS LIMO',
  description: 'Learn about FIRST CLASS LIMO and its luxury transportation services in Greater Montreal.',
  alternates: { canonical: `${SITE_URL}/about/` },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
