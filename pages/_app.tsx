import React from 'react'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

import 'typeface-inter'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/space-grotesk/500.css'

import GlobalStyles from '../styles/GlobalStyles'

interface Props {
  Component: any
  pageProps: any
}

const MyApp = ({ Component, pageProps }: Props) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
        />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
        <GlobalStyles />
      </RecoilRoot>
    </>
  )
}

export default MyApp
