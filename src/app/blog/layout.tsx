import type { Metadata } from 'next'
import { SITE_URL } from '@/utils/serviceLandings'

export const metadata: Metadata = {
  title: 'Montreal City Guide',
  description: 'A FIRST CLASS LIMO guide to Montreal nightlife, dining, hotels, airports, and getting around the city.',
  alternates: { canonical: `${SITE_URL}/blog/` },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
