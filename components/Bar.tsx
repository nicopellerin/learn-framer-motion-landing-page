import React, { memo } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

const Bar = () => {
  const { scrollY } = useViewportScroll()

  const opacityVal = useTransform(scrollY, [0, 200, 400], [1, 0.5, 0])
  const yVal = useTransform(scrollY, [0, 200, 400], [0, 30, 75])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <Wrapper
        initial={{ x: '-50%' }}
        animate={{ y: [-5, 0, -5] }}
        transition={{
          easings: 'ease-in-out',
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Container style={{ opacity: opacityVal, y: yVal }}>
          <Link href="#what-you-will-learn">
            <a>
              <Text>Learn more</Text>
            </a>
          </Link>
          <Line />
        </Container>
      </Wrapper>
    </motion.span>
  )
}

export default memo(Bar)

// Styles
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 20;
`

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled(motion.span)`
  color: #e39aff;
  font-size: 1.6rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
`

const Line = styled(motion.div)`
  width: 2px;
  height: 2.5rem;
  background: rgba(97, 218, 251, 0.7);
  margin-top: 0.8rem;

  @media (min-width: 768px) {
    height: 4rem;
  }
`
