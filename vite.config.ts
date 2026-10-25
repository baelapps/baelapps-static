import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'

/**
 * `vite preview` serves the pre-rendered pages the way production hosting does:
 * /about → dist/about/index.html, unknown paths → dist/404.html with a 404 status.
 */
function servePrerenderedPages(): Plugin {
  return {
    name: 'serve-prerendered-pages',
    configurePreviewServer(server) {
      const dist = server.config.build.outDir
      server.middlewares.use((req, res, next) => {
        const path = (req.url ?? '/').split(/[?#]/)[0].replace(/\/+$/, '') || '/'
        if (/\.[a-z0-9]+$/i.test(path)) return next() // assets and files
        const file = join(dist, path, 'index.html')
        if (existsSync(file)) {
          req.url = `${path === '/' ? '' : path}/index.html`
          return next()
        }
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(readFileSync(join(dist, '404.html')))
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), servePrerenderedPages()],
})
