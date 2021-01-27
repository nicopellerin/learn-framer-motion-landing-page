import React, { useState, Dispatch, SetStateAction, FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
// import { FaTv } from 'react-icons/fa'

import LoopLogo from './LoopLogo'
import DropdownMobile from './DropdownMobile'
import Overlay from './Overlay'
import VideoPlayer from './VideoPlayer'
import Link from 'next/link'

interface Props {
  toggleDropdown: boolean
  setToggleDropdown: Dispatch<SetStateAction<boolean>>
}

const HeroBackground: FC<Props> = ({ toggleDropdown, setToggleDropdown }) => {
  // const [show, setShow] = useState(false)
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)
  // const [buttonLoaded, setButtonLoaded] = useState(false)

  // useEffect(() => {
  //   const idx = window.setTimeout(() => setButtonLoaded(true), 1500)
  //   return () => window.clearTimeout(idx)
  // }, [])

  return (
    <>
      <Wrapper>
        <Image
          src="/images/bg.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
        <Info>
          <LoopLogo />
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 18, stiffness: 60 }}
          >
            Step your animation game up
          </Title>
          <Tagline
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 60,
              delay: 0.2,
            }}
          >
            Learn Framer Motion - from beginner to advanced
          </Tagline>
          {/* <>
              <Button
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: 'spring',
                  damping: 18,
                  stiffness: 60,
                  delay: 0.5,
                }}
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
              >
                Pre-order &mdash; 19.99${' '}
                <span
                  style={{ textDecoration: 'line-through', color: 'crimson' }}
                >
                  49.99$
                </span>
              </Button>
              <AnimatePresence>
                {buttonLoaded && show && (
                  <SavingsWrapper
                    initial={{ y: -30, rotateX: 145 }}
                    animate={{ y: 0, rotateX: 0 }}
                    exit={{ y: -35, rotateX: 90 }}
                    transition={{ type: 'spring', damping: 20 }}
                  >
                    <Savings>Save 40%</Savings>
                  </SavingsWrapper>
                )}
              </AnimatePresence>
              <WatchVideoButton
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  type: 'spring',
                  damping: 18,
                  stiffness: 60,
                  delay: 1.2,
                }}
                onClick={() => setShowVideoPlayer(true)}
              >
                <FaTv
                  style={{
                    marginRight: '0.7rem',
                    color: 'rebeccapurple',
                  }}
                />
                Watch video
              </WatchVideoButton>
            </> */}

          <Link href="#sign-up">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: 'spring',
                damping: 18,
                stiffness: 60,
                delay: 0.5,
              }}
            >
              <Button whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
                Sign up!
              </Button>
            </motion.span>
          </Link>
        </Info>
        <ManOne
          src="/images/white_man_3d.png"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 20, delay: 0.7 }}
        />
        <WomanOne
          src="/images/black_girl_3d.png"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 20, delay: 0.9 }}
        />
        <ManTwo
          src="/images/black_man_3d.png"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 20, delay: 1.1 }}
        />
        <WomanTwo
          src="/images/white_girl_3d.png"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 20, delay: 1.3 }}
        />
      </Wrapper>
      <AnimatePresence>
        {toggleDropdown && (
          <DropdownMobile setToggleDropdown={setToggleDropdown} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toggleDropdown && <Overlay setToggleDropdown={setToggleDropdown} />}
      </AnimatePresence>
      <AnimatePresence>
        {showVideoPlayer && (
          <VideoPlayer setShowVideoPlayer={setShowVideoPlayer} />
        )}
      </AnimatePresence>
    </>
  )
}

export default HeroBackground

// Styles
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Info = styled(motion.div)`
  padding: 0 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  @media (min-width: 1024px) {
    padding: 0;
    top: 46%;
  }

  @media (min-width: 1366px) {
    padding: 0;
    top: 40%;
  }
`

const Title = styled(motion.h1)`
  font-size: 5.2rem;
  background: -webkit-linear-gradient(45deg, #e39aff 1%, #61dafb 123.31%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3.2rem;
  font-family: 'Space Grotesk';
  font-weight: 700;
  line-height: 1.1;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 7.2rem;
  }

  @media (min-width: 1366px) {
    font-size: 8rem;
  }
`

const Tagline = styled(motion.h2)`
  font-size: 2rem;
  background: -webkit-linear-gradient(45deg, #f1f1f1 1%, #f6deff 123.31%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  letter-spacing: 1.1px;
  margin-bottom: 3rem;
  font-family: 'Inter';
  line-height: 1.3;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 4.5rem;
  }

  @media (min-width: 1366px) {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
`

const Button = styled(motion.button)`
  border: none;
  padding: 1.4rem 2rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background: linear-gradient(95.66deg, #61dafb 30.07%, #bb6bd9 104.98%);
  color: #333;
  cursor: pointer;
  position: relative;
  z-index: 30;
  box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.5);
  outline: none;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1366px) {
    font-size: 2.4rem;
  }
`

const ManOne = styled(motion.img)`
  position: absolute;
  z-index: 100;
  left: -3%;
  bottom: 1%;
  width: 14rem;
  pointer-events: none;

  @media (min-width: 768px) {
    left: 0;
    width: 32rem;
    bottom: 2%;
  }

  @media (min-width: 1024px) {
    left: -1%;
    width: 38rem;
    bottom: 5%;
  }

  @media (min-width: 1366px) {
    left: -1%;
    width: 46rem;
    bottom: 6%;
  }

  @media (min-width: 1600px) {
    left: 0;
    bottom: 11%;
  }
`

const WomanOne = styled(motion.img)`
  position: absolute;
  z-index: 100;
  left: 3%;
  bottom: 0;
  width: 20rem;

  @media (min-width: 768px) {
    left: 8%;
    width: 42rem;
    bottom: 0;
  }

  @media (min-width: 1024px) {
    left: 11%;
    bottom: 0%;
    width: 50rem;
  }

  @media (min-width: 1366px) {
    left: 14%;
    bottom: 3%;
    width: 56rem;
  }

  @media (min-width: 1600px) {
    left: 12%;
    bottom: 7%;
  }
`

const ManTwo = styled(motion.img)`
  position: absolute;
  z-index: 100;
  right: -5%;
  bottom: 1%;
  width: 14rem;

  @media (min-width: 768px) {
    width: 32rem;
    right: -2%;
    bottom: 1%;
  }

  @media (min-width: 1024px) {
    right: -2%;
    bottom: 3%;
    width: 38rem;
  }

  @media (min-width: 1366px) {
    right: -2%;
    bottom: 4%;
    width: 46rem;
  }

  @media (min-width: 1600px) {
    right: 0;
    bottom: 8%;
  }
`

const WomanTwo = styled(motion.img)`
  position: absolute;
  z-index: 100;
  right: 2%;
  bottom: 0;
  width: 20rem;

  @media (min-width: 768px) {
    width: 42rem;
    right: 6%;
    bottom: 0%;
  }

  @media (min-width: 1024px) {
    right: 12%;
    bottom: 1%;
    width: 48rem;
  }

  @media (min-width: 1366px) {
    right: 14%;
    bottom: 4%;
    width: 56rem;
  }

  @media (min-width: 1600px) {
    right: 17%;
    bottom: 7%;
  }
`

// const SavingsWrapper = styled(motion.div)`
//   position: relative;
//   width: 20rem;
//   display: flex;
//   justify-content: center;
//   text-align: center;
// `

// const Savings = styled(motion.span)`
//   background: rgba(244, 244, 244, 1);
//   position: absolute;
//   width: 100%;
//   font-size: 1.6rem;
//   padding: 0.5rem;
//   font-weight: 600;
//   border-bottom-left-radius: 0.5rem;
//   border-bottom-right-radius: 0.5rem;
//   color: rebeccapurple;
//   box-shadow: 0 0 10px 5px rgba(89, 86, 213, 0.3);
// `

// const WatchVideoButton = styled(motion.button)`
//   z-index: 30;
//   margin-top: 4.2rem;
//   border: 2px solid rgba(227, 154, 255, 0.7);
//   padding: 0.5rem 1rem;
//   border-radius: 0.5rem;
//   font-weight: 600;
//   background: #f6deff;
//   cursor: pointer;
//   color: rebeccapurple;
//   display: flex;
//   align-items: center;

//   @media (min-width: 1024px) {
//     margin-top: 5rem;
//   }
// `
