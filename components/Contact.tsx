import * as React from 'react'
import styled from 'styled-components'
import { FaTwitter } from 'react-icons/fa'

import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Title>Say hi &mdash;</Title>
        <Tagline>
          Just wanna say hi or have any questions regarding the course? Hit me
          up and I will get back to you asap &#128049; <br />
          <br />
          You can also find me on{' '}
          <Twit>
            Twitter <FaTwitter style={{ marginLeft: 5, fontSize: '2rem' }} />
          </Twit>{' '}
          @{' '}
          <StyledA
            href="https://twitter.com/nicopellerin_io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>nicopellerin_io</strong>
          </StyledA>
        </Tagline>
        <ContactForm />
      </Container>
    </Wrapper>
  )
}

export default Contact

// Styles
const Wrapper = styled.div`
  background: #eef;
  position: relative;
  z-index: 3000;
`

const Container = styled.div`
  padding: 4rem 2rem 10rem;
  max-width: 110rem;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 6rem 0 14rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-size: 5.4rem;
  font-family: 'Space Grotesk', sans-serif;
  color: #333;
  line-height: 1.1;

  @media (max-height: 667px) {
    font-size: 4.6rem;
  }

  @media (min-width: 768px) {
    font-size: 6rem;
  }
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

const StyledA = styled.a`
  color: #333;
`

const Twit = styled.span`
  color: #1da1f2;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
`
