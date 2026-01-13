import type { PostEntry } from '@/post/types'
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
