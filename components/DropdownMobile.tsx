import React, { Dispatch, FC, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const listVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
      velocity: 2,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 100,
      stiffness: 80,
      staggerChildren: 0.7,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
    },
  },
}

interface Props {
  setToggleDropdown: Dispatch<SetStateAction<boolean>>
}

const DropdownMobile: FC<Props> = ({ setToggleDropdown }) => {
  return (
    <>
      <DropdownWrapper
        initial={{ y: 230, x: '-50%' }}
        animate={{ y: 0 }}
        exit={{ y: 230 }}
        transition={{ type: 'spring', damping: 18 }}
      >
        <DropdownList
          variants={listVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <DropdownItem variants={itemVariants}>
            <LinkStyled
              href="https://github.com/nicopellerin"
              target="_blank"
              rel="noopener noreferrer"
            >
              What you will learn
            </LinkStyled>
          </DropdownItem>
          <DropdownItem variants={itemVariants}>
            <LinkStyled
              href="https://twitter.com/nicopellerin_io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </LinkStyled>
          </DropdownItem>
        </DropdownList>
      </DropdownWrapper>
      <CloseWrapper
        initial={{ x: '-50%', y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 18, delay: 0.1 }}
        onClick={() => setToggleDropdown(false)}
      >
        <FaTimes
          style={{ fontSize: '3rem', color: 'rgba(227, 154, 255, 1)' }}
        />
      </CloseWrapper>
    </>
  )
}

export default DropdownMobile

// Styles
const DropdownWrapper = styled(motion.div)`
  position: fixed;
  height: 24rem;
  width: 100%;
  background: #010101;
  bottom: 0;
  left: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 5px solid #bb6bd9;
  z-index: 101;
  max-width: 50rem;
`

const DropdownList = styled(motion.ul)`
  padding: 3.5rem 3rem;
  text-align: center;
  width: 100%;
`

const DropdownItem = styled(motion.li)`
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  width: 100%;

  &:not(:last-of-type) {
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid rgba(227, 154, 255, 0.2);
  }
`

const LinkStyled = styled.a`
  color: rgba(244, 244, 244, 0.9);
  font-weight: 500;
  letter-spacing: 1.2px;
  text-align: center;
`

const CloseWrapper = styled(motion.div)`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #010101;
  position: absolute;
  bottom: 28rem;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  box-shadow: 0 0 10px 5px rgba(89, 86, 213, 0.2);
  border: 2px solid rgba(227, 154, 255, 0.7);
  cursor: pointer;
`
