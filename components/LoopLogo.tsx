import React, { memo } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LoopLogo = () => (
  <LogoWrapper>
    <Loop
      src="/images/loop.png"
      initial={{ y: '-50%', x: '-50%' }}
      alt="Loop"
    />
    <Logo
      src="/images/react-logo.svg"
      animate={{ y: [0, 3, 0], rotate: [3, 0, -3] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  </LogoWrapper>
)

export default memo(LoopLogo)

// Styles
const LogoWrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;

  @media (min-width: 1024px) {
    margin-bottom: 4rem;
  }
`

const Logo = styled(motion.img)`
  position: relative;
  width: 20rem;
  z-index: 4;

  @media (min-width: 1024px) {
    width: auto;
  }
`

const Loop = styled(motion.img)`
  position: absolute;
  top: 45%;
  left: 75%;
  width: 35rem;
  height: 35rem;
  z-index: 3;

  @media (min-width: 1024px) {
    width: 50rem;
    height: 50rem;
    top: 40%;
  }
`
