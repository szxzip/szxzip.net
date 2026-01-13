import type { PostEntry } from '@/post/types'
import { Temporal } from '@js-temporal/polyfill'
import { getCollection } from 'astro:content'

export async function getPostEntries() {
  const postsEntries = await getCollection('posts')
  return postsEntries
}

export function getPostUrl(postEntry: PostEntry) {
  if (!postEntry) {
    return '/'
  }
  return `/post/${postEntry.id}/`
}

export function formatPostDate(date: Date, locale: string = 'zh-cn') {
  const instant = Temporal.Instant.from(date.toISOString())
  const [language, region] = locale.split('-')
  const localeString = region ? `${language}-${region.toUpperCase()}` : locale
  return instant.toZonedDateTimeISO(Temporal.Now.timeZoneId()).toLocaleString(localeString, { dateStyle: 'medium' })
}
