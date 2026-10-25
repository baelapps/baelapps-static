import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { normalizePath } from './router/location'
import { matchRoute, notFoundRoute, renderHead, routes } from './router/routes'

/** Paths to pre-render at build time (plus the 404 page). */
export const prerenderPaths = [...routes.map((r) => r.path), notFoundRoute.path]

/** Render one route to HTML for the build-time pre-renderer (scripts/prerender.mjs). */
export function render(url: string) {
  const path = normalizePath(url)
  const route = matchRoute(path)
  const html = renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )
  return { html, head: renderHead(route), path }
}
