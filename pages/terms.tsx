import Head from 'next/head'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Mind Sprint</title>
        <meta name="description" content="Terms and conditions for using Mind Sprint." />
      </Head>
      <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Terms of Service</h1>
        <p>Welcome to Mind Sprint! By using our site, you agree to these terms…</p>
        {/* Add your rules here */}
      </main>
    </>
  )
}
