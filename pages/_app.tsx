import type { AppProps } from 'next/app'

import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

import '../styles/globals.css'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const myFont = localFont({ src: './georgia.woff2', variable: '--font-georgia' })
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${myFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
