import type { MetadataRoute } from 'next'
import { SERVICE_SLUGS, SITE_URL } from '@/utils/serviceLandings'

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = ['', 'services', 'fleet', 'about', 'blog', 'contact']
  const serviceRoutes = SERVICE_SLUGS.map((slug) => `services/${slug}`)

  return [...coreRoutes, ...serviceRoutes].map((path) => ({
    url: `${SITE_URL}/${path}${path ? '/' : ''}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : path.startsWith('services/') ? 0.9 : 0.7,
  }))
}
