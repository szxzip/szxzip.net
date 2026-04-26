// src/utils/filters.ts
import type { Post } from '~/types'

export const hiddenCategories = ['日记', '草稿']

export function filterHidden(posts: Post[]): Post[] {
    return posts.filter(
        post => !post.data.categories?.some(cat => hiddenCategories.includes(cat))
    )
}
