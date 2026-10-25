/**
 * Build-time pre-rendering.
 * Renders every route to static HTML (with its own <title>, description and Open Graph tags)
 * so pages load instantly and are fully readable by search engines and link previews.
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const serverDir = join(root, 'dist-server')

const template = await readFile(join(dist, 'index.html'), 'utf8')
const { render, prerenderPaths } = await import(pathToFileURL(join(serverDir, 'entry-server.js')).href)

const written = []
for (const url of prerenderPaths) {
  const { html, head, path } = render(url)
  const page = template
    .replace('<!--app-head-->', head)
    .replace('<div id="root"><!--app-html--></div>', `<div id="root" data-prerendered-path="${path}">${html}</div>`)

  // "/" → index.html, "/about" → about/index.html, "/404" → 404.html
  const file = path === '/' ? 'index.html' : path === '/404' ? '404.html' : join(path.slice(1), 'index.html')
  await mkdir(dirname(join(dist, file)), { recursive: true })
  await writeFile(join(dist, file), page)
  const urlFile = file.replaceAll('\\', '/')
  written.push({ path, file: `/${urlFile}` })
  console.log(`  prerendered ${path.padEnd(28)} → dist/${urlFile}`)
}

// Azure Static Web Apps: map each clean URL ("/about") to its pre-rendered file explicitly
const swaFile = join(dist, 'staticwebapp.config.json')
const swa = JSON.parse(await readFile(swaFile, 'utf8'))
const rewrites = written
  .filter(({ path }) => path !== '/' && path !== '/404')
  .map(({ path, file }) => ({ route: path, rewrite: file }))
swa.routes = [...rewrites, ...(swa.routes ?? []).filter((r) => !r.rewrite)]
await writeFile(swaFile, `${JSON.stringify(swa, null, 2)}\n`)
console.log(`  wrote ${rewrites.length} route rewrites → dist/staticwebapp.config.json`)

await rm(serverDir, { recursive: true, force: true })
