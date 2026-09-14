const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://joboufra.es').replace(/\/+$/, '')

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
