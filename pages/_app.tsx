import React from 'react'
import { RecoilRoot } from 'recoil'

import 'typeface-inter'
import '@fontsource/space-grotesk/700.css'

import GlobalStyles from '../styles/GlobalStyles'

interface Props {
  Component: any
  pageProps: any
}

const MyApp = ({ Component, pageProps }: Props) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <GlobalStyles />
    </RecoilRoot>
  )
}

export default MyApp
