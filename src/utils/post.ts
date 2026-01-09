import { getCollection } from 'astro:content'

export async function fetchPostEntries() {
  const postsEntries = await getCollection('posts')
  return postsEntries
}
