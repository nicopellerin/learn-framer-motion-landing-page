import React, { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Props {
  setToggleDropdown: Dispatch<SetStateAction<boolean>>
  zIndex?: number
}

interface StyledProps {
  zIndex: number
}

const Overlay: FC<Props> = ({ setToggleDropdown, zIndex = 49 }) => {
  return (
    <OverlayStyled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setToggleDropdown(false)}
      transition={{ type: 'spring', damping: 18, delay: 0.1 }}
      zIndex={zIndex}
    />
  )
}

export default Overlay

// Styles
const OverlayStyled = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  backdrop-filter: blur(1px);
  z-index: ${(props: StyledProps) => props.zIndex};
`
