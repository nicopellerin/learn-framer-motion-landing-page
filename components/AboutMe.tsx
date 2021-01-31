import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'

const AboutMe = () => {
  return (
    <Wrapper id="about-me">
      <Container>
        <Title>About me &mdash;</Title>
        <Info>
          <picture>
            <source srcSet="/images/me.webp" type="image/webp" />
            <Me src="/images/me.jpg" alt="Nico Pellerin" />
          </picture>
          <div>
            <Welcome>Hi! I'm Nico &#128400; </Welcome>
            <Text>
              I will be your instructor for this course. Based out of Montreal,
              Canada, I'm a developer with a passion for all things tech.
              Currently employed as an application developer, I enjoy
              continually learning new concepts and staying up-to-date with the
              latest tech in this fast-paced environment. When not coding, I
              love to produce electronic music, as well as design stuff. I also
              recently took an interest in creating audio VST plugins.
            </Text>
          </div>
        </Info>
      </Container>
      <Wave
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 1200 129"
      >
        <path
          width="100%"
          d="M 0 64 L 48 48 C 96 32 192 0 288 0 C 384 0 480 32 576 58.7 C 672 85 768 107 864 85.3 C 960 64 1056 0 1152 0 C 1248 0 1344 64 1392 96 L 1440 128 L 1440 192 L 0 192 Z"
          fill="#010101"
        ></path>
      </Wave>
    </Wrapper>
  )
}

export default AboutMe

// Styles
const Wrapper = styled.div`
  background: #f6deff;
  position: relative;
  z-index: 102;
`

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 6rem 2rem 10rem;

  @media (min-width: 768px) {
    padding: 5rem 3rem 14rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem 22rem;
  }

  @media (min-width: 1800px) {
    padding: 6rem 3rem 27rem;
  }
`

const Title = styled.h2`
  font-size: 5.4rem;
  font-family: 'Space Grotesk', sans-serif;
  color: #333;
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
`

const Info = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
  }
`

const Me = styled.img`
  max-width: 80%;
  border-radius: 50%;
  border: 5px solid #f4f4f4;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 0rem;
    max-width: 90%;
  }
`

const Welcome = styled.h3`
  font-size: 3.4rem;
  color: rebeccapurple;
`

const Wave = styled(motion.svg)`
  position: absolute;
  width: 100vw;

  bottom: -1px;
  z-index: 3103;

  @media (min-width: 768px) {
    bottom: -1rem;
  }

  @media (min-width: 1024px) {
    bottom: -2rem;
  }

  @media (min-width: 1800px) {
    bottom: -5.2rem;
  }
`
