import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaReact, FaArrowUp } from 'react-icons/fa'

import SignupForm from './SignupForm'
import AboutMe from './AboutMe'
import CodeBlock from './CodeBlock'

const WhatYouWillLearn = () => {
  return (
    <Wrapper>
      <AboutMe />
      <Container id="what-you-will-learn">
        <Title>What you will learn &mdash;</Title>
        <Text>
          Before taking this course, please make sure that you are at least
          familiar with the basics of{' '}
          <ReactText>
            React <FaReact style={{ marginLeft: 3 }} />
          </ReactText>
          . To learn more, you can visit{' '}
          <StyledA href="https://reactjs.org/" target="_blank" rel="noopener">
            reactjs.org
          </StyledA>
          .
        </Text>
        <Text>
          In this course, we will be creating{' '}
          <strong>2 website projects</strong> (including a{' '}
          <strong>full portfolio</strong>) that are composed of many animated
          components, starting from <strong>simple</strong> to then more{' '}
          <strong>advanced</strong> animations. My goal is to teach you
          beautiful animation concepts that you can then use in your own
          projects.
        </Text>
        <Text>
          Along the way, you will learn how to build some cool animated
          components such as:
        </Text>
        <List>
          <ListItem>Modals</ListItem>
          <ListItem>Sliders</ListItem>
          <ListItem>Dropdowns</ListItem>
          <ListItem>Page transitions</ListItem>
          <ListItem>Buttons</ListItem>
          <ListItem>Drag 'n drop list</ListItem>
          <ListItem>Looping animations</ListItem>
          <ListItem>Form confirmation transitions</ListItem>
          <ListItem>Draggable components</ListItem>
          <ListItem>
            <strong>and many more!</strong>
          </ListItem>
        </List>
        <CodeBlock />
        <DonutWrapper>
          <Donut src="/images/donut.png" alt="donut" />
        </DonutWrapper>
        <VideoWrapper>
          <Video
            src="https://www.youtube.com/embed/n3H-KdSa6I0?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Demo video"
          ></Video>
        </VideoWrapper>
        <VideoText>
          <FaArrowUp style={{ marginRight: 7 }} />
          Preview of the <strong>Portfolio project</strong> we will be building
          in this course (No audio)
        </VideoText>
        <Text>
          This course will also teach you how to make use of scrolling
          animations to build <strong>Parallax</strong> effects and
          transitioning elements on scroll.
        </Text>
        <Text>
          You will also learn on how to use <strong>Framer Motion</strong> with
          CSS-in-JS libraries such as <strong>styled-components</strong>.
        </Text>
        <Text>
          By the way, all the animations on this website are done using only{' '}
          <strong>Framer Motion</strong>.
        </Text>
        <SignupForm />
      </Container>
      <Wave
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 1200 129"
      >
        <path
          width="100%"
          d="M 0 64 L 48 48 C 96 32 192 0 288 0 C 384 0 480 32 576 58.7 C 672 85 768 107 864 85.3 C 960 64 1056 0 1152 0 C 1248 0 1344 64 1392 96 L 1440 128 L 1440 192 L 0 192 Z"
          fill="#eef"
        ></path>
      </Wave>
    </Wrapper>
  )
}

export default WhatYouWillLearn

// Styles
const Wrapper = styled.div`
  background: #010101;
  position: relative;
  z-index: 102;
`

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 6rem 2rem 10rem;

  @media (min-width: 1024px) {
    padding: 6rem 3rem 22rem;
  }

  @media (min-width: 1800px) {
    padding: 10rem 3rem 30rem;
  }
`

const Title = styled.h2`
  font-size: 5.4rem;
  font-family: 'Space Grotesk', sans-serif;
  color: #f6deff;
  line-height: 1.1;

  @media (max-width: 330px) {
    font-size: 5.2rem;
  }

  @media (max-height: 667px) {
    font-size: 4.6rem;
  }

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`

const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.6;
  color: #f4f4f4;
`

const List = styled.ul`
  color: #f6deff;
  margin-bottom: 5rem;
`

const ListItem = styled.li`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.8;
`

const Wave = styled(motion.svg)`
  position: absolute;
  width: 100vw;
  bottom: -1px;
  z-index: 3103;
  overflow: hidden;

  @media (min-width: 1024px) {
    bottom: -30px;
  }
`

const DonutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Donut = styled.img`
  text-align: center;
  margin: 1rem 0 3rem 0;
  width: 13rem;
  height: 11rem;
`

const StyledA = styled.a`
  color: #f6deff;
`

const ReactText = styled.span`
  display: inline-flex;
  align-items: center;
  color: #61dafb;
`

const VideoWrapper = styled.figure`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  width: 100%;
  overflow: hidden;
  margin: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Video = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const VideoText = styled.span`
  display: block;
  color: #f6deff;
  margin-bottom: 4rem;
  font-size: 1.4rem;
`
