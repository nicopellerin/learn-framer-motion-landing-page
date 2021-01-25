import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <Wrapper>
    <Container>
      &copy; {new Date().getFullYear()}{' '}
      <a
        href="https://nicopellerin.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nico Pellerin
      </a>
      . All rights reserved.
    </Container>
  </Wrapper>
)

export default Footer

// Styles
const Wrapper = styled.footer`
  background: #fff;
`

const Container = styled.div`
  padding: 0rem 3rem 5rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
`
