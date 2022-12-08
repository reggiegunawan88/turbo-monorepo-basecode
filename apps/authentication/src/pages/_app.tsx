import 'style' // import tailwind-css from dependencies
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

// dynamic import
const Snackbar = dynamic(() => import('ui').then((module) => module.Snackbar))

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Snackbar />
    </>
  )
}
