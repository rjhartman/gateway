import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
