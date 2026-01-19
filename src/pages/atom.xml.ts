import rss from '@astrojs/rss'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { getPostEntries, sortPostEntriesByDate } from '@/post'
import { themeConfig } from '@/theme.config'

const markdownParser = new MarkdownIt()

export async function GET() {
  const entries = await getPostEntries()

  const sortedEntries = sortPostEntriesByDate(entries)

  const items = sortedEntries.map((entry) => {
    const content = themeConfig.feeds?.rss?.fullText === false
      ? undefined
      : sanitizeHtml(markdownParser.render(entry.body ?? ''), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
        })

    return {
      title: entry.data.title,
      pubDate: entry.data.pubDate,
      description: entry.data.description,
      link: `/posts/${entry.id}/`,
      content,
    }
  })

  return rss({
    title: themeConfig.site.title,
    description: themeConfig.site.description,
    site: themeConfig.site.website,
    items,
    customData: `<language>${themeConfig.site.locale}</language>`,
  })
}
