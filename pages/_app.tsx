// pages/_app.tsx
import '../styles/globals.css'         // adjust path if your globals live elsewhere
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
