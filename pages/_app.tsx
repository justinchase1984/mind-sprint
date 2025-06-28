import { useEffect } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  // Ensure any old preview flags are cleared
  useEffect(() => {
    sessionStorage.removeItem('previewDay')
    localStorage.removeItem('previewDay')
  }, [])

  return <Component {...pageProps} />
}
