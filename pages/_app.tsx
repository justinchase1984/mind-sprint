// pages/_app.tsx
import '../styles/globals.css'               // or wherever your globals live
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'    // ← this path must point to your Layout.tsx

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
