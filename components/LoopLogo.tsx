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
      src="/images/react-logo.png"
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
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.4rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 4rem;
  }
`

const Logo = styled(motion.img)`
  position: relative;
  z-index: 4;
  width: 22rem;

  @media (max-width: 330px) {
    width: 20rem;
  }

  @media (max-height: 667px) {
    width: 20rem;
  }

  @media (min-width: 768px) {
    width: 26rem;
  }

  @media (min-width: 1366px) {
    width: 40rem;
  }
`

const Loop = styled(motion.img)`
  position: absolute;
  top: 50%;
  left: 65%;
  width: 32rem;
  height: 32rem;
  z-index: 3;

  @media (max-width: 330px) {
    width: 30rem;
    height: 30rem;
  }

  @media (max-height: 667px) {
    width: 28rem;
    height: 28rem;
  }

  @media (min-width: 768px) {
    width: 35rem;
    height: 35rem;
  }

  @media (min-width: 1366px) {
    width: 50rem;
    height: 50rem;
    top: 40%;
  }
`
