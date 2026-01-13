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

export function formatPostDate(date: Date) {
  const instant = Temporal.Instant.from(date.toISOString())
  return instant.toZonedDateTimeISO(Temporal.Now.timeZoneId()).toLocaleString('zh-CN', { dateStyle: 'medium' })
}
