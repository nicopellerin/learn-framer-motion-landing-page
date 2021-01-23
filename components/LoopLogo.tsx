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
      width={250}
      height={250}
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
`

const Logo = styled(motion.img)``

const Loop = styled(motion.img)`
  position: absolute;
  top: 40%;
  left: 75%;
  width: 50rem;
  height: 50rem;
  z-index: 3;
`
