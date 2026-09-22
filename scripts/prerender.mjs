import { readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const outputPath = resolve('dist/index.html')
const serverEntryPath = resolve('dist-ssr/entry-server.js')
const marker = '<div id="root"></div>'

const template = await readFile(outputPath, 'utf8')
if (!template.includes(marker)) {
  throw new Error('The root marker was not found in the client build.')
}

const { render } = await import(pathToFileURL(serverEntryPath).href)
const renderedApp = render()
const prerenderedPage = template.replace(marker, `<div id="root">${renderedApp}</div>`)

await writeFile(outputPath, prerenderedPage)
await rm(resolve('dist-ssr'), { recursive: true, force: true })

console.log('Prerendered the homepage into dist/index.html.')
