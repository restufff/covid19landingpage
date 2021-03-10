import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div className = "wrapper">
    <Head>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp