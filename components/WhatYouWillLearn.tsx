import React from 'react'
import styled from 'styled-components'
import SignupForm from './SignupForm'

const WhatYouWillLearn = () => {
  return (
    <Wrapper id="what-you-will-learn">
      <Container>
        <Title>What you will learn &mdash;</Title>
        <Text>
          In this course, we will be creating{' '}
          <strong>2 website projects</strong> that are composed of many animated
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
        <Text>
          This course will also teach you how to make use of scrolling
          animations to build <strong>Parallax</strong> effects and
          transitioning elements on scroll.
        </Text>
        <Text>
          You will also learn on how to use <strong>Framer Motion</strong> with
          a CSS-in-JS libraries such as <strong>styled-components</strong>.
        </Text>
        <Text>
          By the way, all the animations on this website are done only using{' '}
          <strong>Framer Motion</strong>.
        </Text>
        <SignupForm />
      </Container>
    </Wrapper>
  )
}

export default WhatYouWillLearn

// Styles
const Wrapper = styled.div`
  background: #f6deff;
  position: relative;
  z-index: 102;
`

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 6rem 3rem 10rem;

  @media (min-width: 1024px) {
    padding: 6rem 3rem 22rem;
  }
`

const Title = styled.h2`
  font-size: 5rem;
  font-family: 'Space Grotesk', sans-serif;
  color: #333;
`

const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.4;
`

const List = styled.ul`
  color: rebeccapurple;
`

const ListItem = styled.li`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.4;
`
