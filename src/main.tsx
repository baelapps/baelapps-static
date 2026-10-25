import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { normalizePath } from './router/location'

const container = document.getElementById('root')!
const path = normalizePath(window.location.pathname)
const app = (
  <StrictMode>
    <App path={path} />
  </StrictMode>
)

// Pages are pre-rendered at build time. Hydrate when the HTML was rendered for this exact path;
// otherwise (dev server, or a fallback page served for another URL) render from scratch.
if (container.dataset.prerenderedPath === path && container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  container.textContent = ''
  createRoot(container).render(app)
}
