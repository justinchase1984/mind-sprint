// pages/_app.tsx
import type { AppProps } from 'next/app'
import '../styles/globals.css'   // ← ONLY import your global CSS here

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
