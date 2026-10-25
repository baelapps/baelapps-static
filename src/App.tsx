import { useEffect } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { useRouter } from './router/location'
import { RouterProvider } from './router/Router'
import { applyHead, matchRoute } from './router/routes'

function CurrentPage() {
  const { path } = useRouter()
  const route = matchRoute(path)
  const Page = route.component

  useEffect(() => applyHead(route), [route])

  return <Page />
}

export default function App({ path }: { path: string }) {
  return (
    <RouterProvider initialPath={path}>
      <div id="top">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">
          <CurrentPage />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  )
}
