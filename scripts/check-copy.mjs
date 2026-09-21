import { readFile, readdir } from 'node:fs/promises'
import { extname, join } from 'node:path'

const root = new URL('../', import.meta.url)
const allowedExtensions = new Set(['.ts', '.tsx', '.css', '.html', '.md', '.svg', '.json'])
const excludedNames = new Set(['node_modules', 'dist', 'package-lock.json', 'tsconfig.tsbuildinfo'])
const files = []

async function collect(relativePath) {
  const directory = new URL(relativePath, root)
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (excludedNames.has(entry.name)) continue
    const childPath = join(relativePath, entry.name)
    if (entry.isDirectory()) {
      await collect(`${childPath}/`)
    } else if (allowedExtensions.has(extname(entry.name))) {
      files.push(childPath)
    }
  }
}

await collect('src/')
await collect('public/')
files.push('index.html', 'README.md', 'package.json')

const failures = []
for (const file of files) {
  const content = await readFile(new URL(file.replaceAll('\\', '/'), root), 'utf8')
  if (/[–—]/u.test(content)) failures.push(`${file}: contains a prohibited dash character`)
  if (/href=["']#["']/u.test(content)) failures.push(`${file}: contains a placeholder href`)
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`Copy validation passed for ${files.length} files.`)
