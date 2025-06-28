// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  // clear any old preview flags on load
  useEffect(() => {
    sessionStorage.removeItem('previewDay')
    localStorage.removeItem('previewDay')
  }, [])

  // render the page
  return <Component {...pageProps} />
}
