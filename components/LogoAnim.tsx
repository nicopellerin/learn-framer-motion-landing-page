import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const LogoAnim = () => {
  const [isHover, setIsHover] = useState(false)

  const controls = useAnimation()

  useEffect(() => {
    if (isHover) {
      controls.start({
        y: [0, -20, 10, 0],
        rotate: [0, 360],
      })
    }
  }, [isHover])

  return (
    <div
      style={{ position: 'relative' }}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Logo src="/images/logo.png" alt="Logo" />
      <LogoCode src="/images/logo-o.png" alt="Logo code" animate={controls} />
    </div>
  )
}

export default LogoAnim

// Styles
const Logo = styled(motion.img)`
  width: 28rem;
  pointer-events: all;

  @media (min-width: 768px) {
    width: 33rem;
  }
`

const LogoCode = styled(motion.img)`
  position: absolute;
  left: 1.75rem;
  top: 0.6rem;
  width: 3.2rem;

  @media (min-width: 768px) {
    left: 2.1rem;
    top: 0.6rem;
    width: 3.8rem;
  }

  @media (min-width: 1369px) {
    left: 2.1rem;
    top: 0.6rem;
  }
`
