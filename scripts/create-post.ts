import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { Temporal } from '@js-temporal/polyfill'
import consola from 'consola'

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/["']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function yamlString(value: string) {
  // JSON string is valid YAML double-quoted string.
  return JSON.stringify(value)
}

function yamlStringArray(values: string[]) {
  return `[${values.map(v => yamlString(v)).join(', ')}]`
}

function getTodayISODate() {
  return Temporal.Now.plainDateISO().toString()
}

function validateISODate(input: string) {
  try {
    return Temporal.PlainDate.from(input).toString()
  }
  catch {
    return null
  }
}

function buildFrontmatter(data: {
  title: string
  pubDate: string
  description: string
  tags: string[]
  draft: boolean
  pinned: boolean
  slug: string
}) {
  return [
    '---',
    `title: ${yamlString(data.title)}`,
    `pubDate: ${data.pubDate}`,
    `description: ${yamlString(data.description)}`,
    `tags: ${yamlStringArray(data.tags)}`,
    `draft: ${data.draft ? 'true' : 'false'}`,
    `pinned: ${data.pinned ? 'true' : 'false'}`,
    `slug: ${yamlString(data.slug)}`,
    '---',
    '',
  ].join('\n')
}

void createPost()

async function createPost(): Promise<void> {
  if (!process.stdin.isTTY) {
    consola.error('post:create 需要在交互式终端(TTY)中运行')
    process.exitCode = 1
    return
  }

  consola.start('Ready to create a new post!')

  const targetDir = path.resolve(process.cwd(), 'src/contents/posts')
  fs.mkdirSync(targetDir, { recursive: true })

  let fileNameInput = String(await consola.prompt('Enter file name: ', { type: 'text' }))
  fileNameInput = fileNameInput.trim()

  if (!fileNameInput) {
    consola.error('File name is required')
    process.exitCode = 1
    return
  }

  if (fileNameInput.includes('/') || fileNameInput.includes('\\')) {
    consola.error('File name must not include path separators')
    process.exitCode = 1
    return
  }

  let extension = path.extname(fileNameInput)
  let baseName = extension ? fileNameInput.slice(0, -extension.length) : fileNameInput
  if (extension !== '.md' && extension !== '.mdx') {
    extension = String(await consola.prompt('Select file extension: ', { type: 'select', options: ['.md', '.mdx'] }))
  }

  baseName = baseName.trim()
  if (!baseName) {
    consola.error('File name is required')
    process.exitCode = 1
    return
  }

  const title = String(await consola.prompt('Enter title: ', { type: 'text', initial: baseName }))
  const description = String(await consola.prompt('Enter description: ', { type: 'text', initial: '' }))
  const tags = String(await consola.prompt('Enter tags (comma-separated): ', { type: 'text', initial: '' }))
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)

  const draft = Boolean(await consola.prompt('Is this a draft?', { type: 'confirm', initial: true }))
  const pinned = Boolean(await consola.prompt('Pinned?', { type: 'confirm', initial: false }))

  const slugDefault = slugify(title || baseName)
  const slug = String(await consola.prompt('Enter slug: ', { type: 'text', initial: slugDefault })).trim()
  if (!slug) {
    consola.error('slug is required')
    process.exitCode = 1
    return
  }

  let pubDate: string | null = null
  const dateDefault = getTodayISODate()
  while (!pubDate) {
    const dateInput = String(await consola.prompt('Enter pubDate (YYYY-MM-DD): ', { type: 'text', initial: dateDefault }))
      .trim()
    pubDate = validateISODate(dateInput || dateDefault)
    if (!pubDate) {
      consola.warn('Invalid date format, expected YYYY-MM-DD')
    }
  }

  const fileName = `${baseName}${extension}`
  const fullPath = path.join(targetDir, fileName)
  if (fs.existsSync(fullPath)) {
    const overwrite = Boolean(await consola.prompt('File exists, overwrite?', { type: 'confirm', initial: false }))
    if (!overwrite) {
      consola.info('Aborted.')
      return
    }
  }

  const frontmatter = buildFrontmatter({
    title,
    pubDate,
    description,
    tags,
    draft,
    pinned,
    slug,
  })

  try {
    fs.writeFileSync(fullPath, `${frontmatter}\n`, 'utf8')
    consola.success(`Created: ${path.relative(process.cwd(), fullPath)}`)

    const shouldOpen = Boolean(await consola.prompt('Open the new post in VS Code?', { type: 'confirm', initial: true }))
    if (shouldOpen) {
      try {
        execSync(`code "${fullPath}"`, { stdio: 'ignore' })
      }
      catch {
        consola.warn('Failed to open VS Code automatically. You can open the file manually.')
      }
    }
  }
  catch (error) {
    consola.error((error as Error).message || 'Failed to create new post!')
    process.exitCode = 1
  }
}
