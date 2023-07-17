import { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

export default function sitemap (): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/sign-in',
    '/sign-up'
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString()
  }))
  return [...routes]
}
