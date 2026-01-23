import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { Temporal } from '@js-temporal/polyfill'
import consola from 'consola'

type ArgValue = string | boolean

interface ParsedArgs {
  _: string[]
  help?: boolean
  [key: string]: ArgValue | string[] | undefined
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/["']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function parseArgs(argv: string[]): ParsedArgs {
  const out: ParsedArgs = { _: [] }

  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i]
    if (!a) {
      continue
    }

    if (a === '--') {
      continue
    }

    if (a === '-h' || a === '--help') {
      out.help = true
      continue
    }

    if (!a.startsWith('-')) {
      out._.push(a)
      continue
    }

    if (a.startsWith('--no-')) {
      out[a.slice(5)] = false
      continue
    }

    if (a.startsWith('--')) {
      const key = a.slice(2)
      const next = argv[i + 1]
      if (next && !next.startsWith('-')) {
        out[key] = next
        i += 1
      }
      else {
        out[key] = true
      }
      continue
    }

    if (a.length === 2) {
      const key = a.slice(1)
      const next = argv[i + 1]
      if (next && !next.startsWith('-')) {
        out[key] = next
        i += 1
      }
      else {
        out[key] = true
      }
    }
  }

  return out
}

function printHelp() {
  process.stdout.write(`\
Create a new post under src/contents/posts.

Usage:
  pnpm post:create -- --title "My Post" [options]

Options:
  --title, -t        Post title (default: filename)
  --slug, -s         Post slug (default: derived from title)
  --date             pubDate in YYYY-MM-DD (default: today)
  --description      Post description (default: empty)
  --tags             Comma-separated tags (default: empty)
  --draft            Set draft: true
  --no-draft         Set draft: false
  --pinned           Set pinned: true
  --no-pinned        Set pinned: false
  --filename         Output filename (e.g. "my-post.md" or "my-post.mdx")
  --overwrite        Overwrite existing file
  --open             Open in VS Code after creation
  --no-open          Do not open after creation
  -h, --help         Show help
\
`)
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
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    printHelp()
    return
  }

  consola.start('Ready to create a new post!')

  const targetDir = path.resolve(process.cwd(), 'src/contents/posts')
  fs.mkdirSync(targetDir, { recursive: true })

  const filenameArg = (typeof args.filename === 'string' ? args.filename : undefined)
  let baseName = ''
  let extension = ''

  if (filenameArg) {
    const ext = path.extname(filenameArg)
    if (ext === '.md' || ext === '.mdx') {
      extension = ext
      baseName = filenameArg.slice(0, -ext.length)
    }
    else {
      baseName = filenameArg
      extension = '.md'
    }
  }
  else {
    baseName = String(await consola.prompt('Enter file name: ', { type: 'text' }))
    extension = String(await consola.prompt('Select file extension: ', { type: 'select', options: ['.md', '.mdx'] }))
  }

  baseName = baseName.trim()
  if (!baseName) {
    consola.error('File name is required')
    process.exitCode = 1
    return
  }

  if (baseName.includes('/') || baseName.includes('\\')) {
    consola.error('File name must not include path separators')
    process.exitCode = 1
    return
  }

  const title = String((typeof args.title === 'string' ? args.title : undefined)
    ?? (typeof args.t === 'string' ? args.t : undefined)
    ?? baseName)

  const dateInput = (typeof args.date === 'string' ? args.date : undefined) ?? getTodayISODate()
  const pubDate = validateISODate(dateInput)
  if (!pubDate) {
    consola.error(`Invalid --date: ${dateInput} (expected YYYY-MM-DD)`)
    process.exitCode = 1
    return
  }

  const tags = (typeof args.tags === 'string' ? args.tags : '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)

  const description = String((typeof args.description === 'string' ? args.description : undefined) ?? '')

  const pinned = args.pinned === true

  let draft: boolean
  if (args.draft === true) {
    draft = true
  }
  else if (args.draft === false) {
    draft = false
  }
  else {
    draft = Boolean(await consola.prompt('Is this a draft?', { type: 'confirm', initial: true }))
  }

  const derivedSlug = slugify(String(
    (typeof args.slug === 'string' ? args.slug : undefined)
    ?? (typeof args.s === 'string' ? args.s : undefined)
    ?? title,
  ))

  let slug = derivedSlug
  if (!slug) {
    slug = String(await consola.prompt('Enter slug (required): ', { type: 'text' }))
      .trim()
  }
  if (!slug) {
    consola.error('slug is required')
    process.exitCode = 1
    return
  }

  const fileName = `${baseName}${extension}`
  const fullPath = path.join(targetDir, fileName)
  const overwrite = args.overwrite === true
  if (fs.existsSync(fullPath) && !overwrite) {
    consola.error(`File already exists: ${path.relative(process.cwd(), fullPath)}`)
    consola.info('Use --overwrite to overwrite it.')
    process.exitCode = 1
    return
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

    let shouldOpen: boolean
    if (args.open === true) {
      shouldOpen = true
    }
    else if (args.open === false) {
      shouldOpen = false
    }
    else {
      shouldOpen = Boolean(await consola.prompt('Open the new post in VS Code?', { type: 'confirm', initial: true }))
    }

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
