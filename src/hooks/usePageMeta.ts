import { useEffect } from 'react'
import { SEO_CONFIG } from '../config/seo'

type PageMetaOptions = {
  title?: string
  description?: string
  path?: string
  noIndex?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  )
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export function usePageMeta({
  title,
  description,
  path = '/',
  noIndex = false,
}: PageMetaOptions = {}) {
  useEffect(() => {
    const fullTitle = title
      ? SEO_CONFIG.titleTemplate.replace('%s', title)
      : SEO_CONFIG.defaultTitle
    const desc = description ?? SEO_CONFIG.defaultDescription
    const url = `${SEO_CONFIG.siteUrl}${path === '/' ? '' : path}`
    const image = `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImage}`

    document.title = fullTitle
    document.documentElement.lang = SEO_CONFIG.language

    upsertMeta('name', 'description', desc)
    upsertMeta('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', SEO_CONFIG.locale)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    upsertMeta('name', 'twitter:card', SEO_CONFIG.twitterCard)
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', image)
    upsertLink('canonical', url)
  }, [title, description, path, noIndex])
}
