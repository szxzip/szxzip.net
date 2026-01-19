import type { PostEntry } from '@/post/types'
import { Temporal } from '@js-temporal/polyfill'
import { getCollection } from 'astro:content'

export async function getPostEntries() {
  const postsEntries = await getCollection('posts')
  return import.meta.env.PROD
    ? postsEntries.filter(entry => !entry.data.draft)
    : postsEntries
}

export function getPostUrl(postEntry: PostEntry) {
  if (!postEntry) {
    return '/'
  }
  return `/posts/${postEntry.id}/`
}

export async function getPostTags() {
  const tagsSet = new Set<string>()
  const posts = await getCollection('posts')
  posts.forEach((post) => {
    post.data.tags?.forEach(tag => tagsSet.add(tag))
  })
  return Array.from(tagsSet).sort()
}

export function sortPostEntriesByDate(entries: PostEntry[]): PostEntry[] {
  return [...entries].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
}

export function pinPostEntries(entries: PostEntry[]): PostEntry[] {
  const pinnedEntries = entries.filter(entry => entry.data.pinned)
  const regularEntries = entries.filter(entry => !entry.data.pinned)
  return [...pinnedEntries, ...regularEntries]
}

export function getPostTagUrl(tag: string) {
  return `/tags/${tag}`
}

export function formatPostDate(date: Date, locale: string = 'zh-cn') {
  const instant = Temporal.Instant.from(date.toISOString())
  const [language, region] = locale.split('-')
  const localeString = region ? `${language}-${region.toUpperCase()}` : locale
  return instant.toZonedDateTimeISO(Temporal.Now.timeZoneId()).toLocaleString(localeString, { dateStyle: 'medium' })
}
