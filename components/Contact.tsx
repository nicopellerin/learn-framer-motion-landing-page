import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'

import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Wave
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 1200 129"
      >
        <path
          width="100%"
          d="M 0 64 L 48 48 C 96 32 192 0 288 0 C 384 0 480 32 576 58.7 C 672 85 768 107 864 85.3 C 960 64 1056 0 1152 0 C 1248 0 1344 64 1392 96 L 1440 128 L 1440 192 L 0 192 Z"
          fill="#fff"
        ></path>
      </Wave>
      <Container>
        <Title>Say hi &mdash;</Title>
        <Tagline>
          Just wanna say hi or have any questions regarding the course? Hit me
          up using the form and I will get back to you asap.
        </Tagline>
        <ContactForm />
      </Container>
    </Wrapper>
  )
}

export default Contact

// Styles
const Wrapper = styled.div`
  background: #fff;
  position: relative;
  z-index: 3000;
`

const Container = styled.div`
  padding: 6rem 0 14rem;
  max-width: 110rem;
  margin: 0 auto;

  @media (max-width: 1600px) {
    padding: 4rem 3rem 10rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-size: 5rem;
  font-family: 'Space Grotesk', sans-serif;
  color: #333;
`

const Tagline = styled.h3`
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 5rem;
  font-size: 2rem;
  max-width: 72ch;

  @media (max-width: 500px) {
    line-height: 1.5em;
  }
`

const Wave = styled(motion.svg)`
  position: absolute;
  top: 0;
  z-index: 3103;
  top: -150px;

  @media (max-width: 500px) {
    top: -29px;
  }
`
