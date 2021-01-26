import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Wave = () => {
  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 225"
      preserveAspectRatio="xMinYMin slice"
      initial={{ y: 250 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 18, stiffness: 50 }}
    >
      <path
        width="100%"
        d="M-20 67.8H41.1667C102.333 67.8 224.667 67.8 347 107.315C469.333 147.253 591.667 225.647 714 214.735C836.333 203.4 958.667 101.7 1081 73.4147C1203.33 45.5531 1325.67 90.0469 1386.83 113.035L1448 135.6V339H1386.83C1325.67 339 1203.33 339 1081 339C958.667 339 836.333 339 714 339C591.667 339 469.333 339 347 339C224.667 339 102.333 339 41.1667 339H-20V67.8Z"
        fill="#F6DEFF"
      />
    </Wrapper>
  )
}

export default Wave

// Styles
const Wrapper = styled(motion.svg)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 101;
  pointer-events: none;
`
