import type { PostEntry } from '@/types/post'
import { getCollection } from 'astro:content'

export async function getPostEntries() {
  const postsEntries = await getCollection('posts')
  return postsEntries
}

export function getPostUrl(postEntry: PostEntry) {
  return `/post/${postEntry.id}/`
}
