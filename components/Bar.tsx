import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Bar = () => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
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
        <Link href="#what-you-will-learn">
          <a>
            <Text>Learn more</Text>
          </a>
        </Link>
        <Line />
      </Wrapper>
    </motion.span>
  )
}

export default Bar

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

const Text = styled(motion.span)`
  color: #e39aff;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
`

const Line = styled(motion.div)`
  width: 2px;
  height: 4rem;
  background: rgba(97, 218, 251, 0.7);
`
