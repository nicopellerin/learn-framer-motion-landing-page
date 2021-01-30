import styled from 'styled-components'
import { motion } from 'framer-motion'
import { memo } from 'react'

const Dog = () => {
  return (
    <Dog3D
      src="/images/dog-3d2.webp"
      alt="Dog"
      animate={{ y: [5, 0, 5] }}
      transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      loading="lazy"
    />
  )
}

export default memo(Dog)

// Styles
const Dog3D = styled(motion.img)`
  max-width: 95%;

  @media (min-width: 1024px) {
    max-width: 100%;
  }
`
