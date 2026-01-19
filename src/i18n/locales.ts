export interface LocaleMapping {
  home: string
  posts: string
  categories: string
  archive: string
  tags: string
  about: string

  posted_at: string
  page_count: string
  page_number: string
  prev: string
  next: string
  prev_post: string
  next_post: string
  pinned: string
}
export type SupportedLocale = typeof SUPPORTED_LOCALES[number]

export const SUPPORTED_LOCALES = ['en-us', 'zh-cn', 'zh-tw', 'ja-jp', 'ko-kr', 'it-it'] as const

export const LOCALEMAPPINGS: Record<SupportedLocale, LocaleMapping> = {
  'en-us': {
    home: 'Home',
    posts: 'Posts',
    categories: 'Categories',
    archive: 'Archive',
    tags: 'Tags',
    about: 'About',

    posted_at: 'Posted at',
    page_count: '%d pages total',
    page_number: 'Page %d',
    prev: 'Previous',
    next: 'Next',
    prev_post: 'Previous post',
    next_post: 'Next post',
    pinned: 'Pinned',
  },
  'zh-cn': {
    home: '首页',
    posts: '文章',
    categories: '分类',
    archive: '归档',
    tags: '标签',
    about: '关于',

    posted_at: '发布于',
    page_count: '共 %d 页',
    page_number: '第 %d 页',
    prev: '上一页',
    next: '下一页',
    prev_post: '上一篇',
    next_post: '下一篇',
    pinned: '置顶',
  },
  'zh-tw': {
    home: '首頁',
    posts: '文章',
    categories: '分類',
    archive: '歸檔',
    tags: '標籤',
    about: '關於',

    posted_at: '發布於',
    page_count: '共 %d 頁',
    page_number: '第 %d 頁',
    prev: '上一頁',
    next: '下一頁',
    prev_post: '上一篇',
    next_post: '下一篇',
    pinned: '置頂',
  },
  'ja-jp': {
    home: 'ホーム',
    posts: '記事',
    categories: 'カテゴリ',
    archive: 'アーカイブ',
    tags: 'タグ',
    about: '概要',

    posted_at: '投稿日',
    page_count: '全 %d ページ',
    page_number: '%d ページ',
    prev: '前へ',
    next: '次へ',
    prev_post: '前の記事',
    next_post: '次の記事',
    pinned: '固定',
  },
  'ko-kr': {
    home: '홈',
    posts: '게시글',
    categories: '카테고리',
    archive: '아카이브',
    tags: '태그',
    about: '소개',

    posted_at: '게시일',
    page_count: '총 %d 페이지',
    page_number: '%d 페이지',
    prev: '이전',
    next: '다음',
    prev_post: '이전 글',
    next_post: '다음 글',
    pinned: '고정',
  },
  'it-it': {
    home: 'Home',
    posts: 'Articoli',
    categories: 'Categorie',
    archive: 'Archivio',
    tags: 'Tag',
    about: 'Chi siamo',

    posted_at: 'Pubblicato il',
    page_count: '%d pagine totali',
    page_number: 'Pagina %d',
    prev: 'Precedente',
    next: 'Successivo',
    prev_post: 'Articolo precedente',
    next_post: 'Articolo successivo',
    pinned: 'In evidenza',
  },
} as const
