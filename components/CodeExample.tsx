import * as React from 'react'
import { useState, memo } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const CodeExample = () => {
  const [showAvatar, setShowAvatar] = useState(true)

  return (
    <CodeContainer>
      <CodeAvatar>
        <AnimatePresence>
          {showAvatar && (
            <Avatar
              src="/images/avatar-demo.png"
              alt="avatar"
              initial={{ y: 175, x: '-50%' }}
              animate={{ y: 0 }}
              exit={{ y: 175 }}
              transition={{ type: 'spring', damping: 16 }}
              loading="lazy"
            />
          )}
        </AnimatePresence>
      </CodeAvatar>
      <Button
        whileHover={{ y: -1 }}
        whileTap={{ y: 1 }}
        onClick={() => setShowAvatar((prevState) => !prevState)}
      >
        {showAvatar ? 'Hide' : 'Show'} avatar
      </Button>
    </CodeContainer>
  )
}

export default memo(CodeExample)

// Styles
const Button = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1.4rem 1.8rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background: linear-gradient(95.66deg, #61dafb 30.07%, #bb6bd9 104.98%);
  color: #333;
  cursor: pointer;
  position: relative;
  z-index: 30;
  box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.7);
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
  outline: none;

  &:disabled {
    cursor: initial;
    pointer-events: none;
  }

  @media (min-width: 450) {
    font-size: 2.4rem;
  }
`

const CodeContainer = styled(motion.div)`
  overflow: hidden;
  width: 30rem;
  margin: 0 auto 6rem;
  overflow: hidden;
`

const Avatar = styled(motion.img)`
  width: 10rem;
  position: absolute;
  left: 50%;
`

const CodeAvatar = styled.div`
  overflow: hidden;
  height: 20rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem;
  background: linear-gradient(146.82deg, #f4d7ff 9.68%, #bb6bd9 89.83%);
  border-radius: 50%;
  margin: 0 auto 3rem;
  box-shadow: 0px 3px 3px 3px rgba(155, 81, 224, 0.26);
  border: 3px solid rgba(155, 81, 224, 0.62);
  z-index: 10;
`
