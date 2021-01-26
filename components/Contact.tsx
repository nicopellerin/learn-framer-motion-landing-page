import * as React from 'react'
import styled from 'styled-components'

import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Title>Say hi &mdash;</Title>
        <Tagline>
          Just wanna say hi or have any questions regarding the course? Hit me
          up and I will get back to you asap &#128049;
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
  padding: 4rem 2rem 10rem;
  max-width: 110rem;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 2rem 0 14rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-size: 6rem;
  font-family: 'Space Grotesk', sans-serif;
  color: #333;
  line-height: 1.1;
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
