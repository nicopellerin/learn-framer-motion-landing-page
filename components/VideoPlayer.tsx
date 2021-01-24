import React, { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Overlay from './Overlay'
import { FaTimes, FaPlayCircle } from 'react-icons/fa'

interface Props {
  setShowVideoPlayer: Dispatch<SetStateAction<boolean>>
}

const VideoPlayer: FC<Props> = ({ setShowVideoPlayer }) => {
  return (
    <Wrapper>
      <VideoContainer
        initial={{ x: '-50%', y: '-50%', opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', damping: 18, delay: 0.2 }}
      >
        <CloseWrapper
          initial={{ x: '-50%', y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', damping: 14, delay: 0.2 }}
          onClick={() => setShowVideoPlayer(false)}
        >
          <Icon role="button" whileHover={{ rotate: 7 }}>
            <FaTimes
              style={{ fontSize: '3rem', color: 'rgba(227, 154, 255, 1)' }}
            />
          </Icon>
        </CloseWrapper>
        <FaPlayCircle
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '8rem',
            zIndex: 9000,
            color: 'rgba(227, 154, 255, 0.8)',
          }}
        />
      </VideoContainer>
      <Overlay setToggleDropdown={setShowVideoPlayer} zIndex={1000} />
    </Wrapper>
  )
}

export default VideoPlayer

// Styles
const Wrapper = styled.div``

const VideoContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 40rem;
  background: #000;
  z-index: 3000;

  @media (min-width: 1024px) {
    max-width: 80rem;
    height: 50rem;
  }
`

const CloseWrapper = styled(motion.div)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #010101;
  position: absolute;
  top: -7rem;
  right: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4000;
  box-shadow: 0 0 10px 5px rgba(89, 86, 213, 0.2);
  border: 2px solid rgba(227, 154, 255, 0.7);
  cursor: pointer;

  @media (min-width: 1024px) {
    top: -6rem;
    right: -6rem;
  }
`

const Icon = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-items: center;
`
