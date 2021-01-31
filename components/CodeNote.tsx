import * as React from 'react'
import styled from 'styled-components'

const CodeNote = () => {
  return (
    <NoteContainer>
      <NoteText>
        <strong>Note:</strong> If you are not familiar with the syntax above,
        it's using <TextSpan>styled-components</TextSpan> for the styling. You
        can learn more about it{' '}
        <StyledA
          href="http://styled-components.com/"
          target="_blank"
          rel="noopener"
        >
          here
        </StyledA>
        .
      </NoteText>
      <NoteText>
        {' '}
        To use Framer Motion with CSS/Sass/inline-styles, you use the following
        syntax for a div:{' '}
        <TextSpan
          style={{ color: '#61dafb' }}
        >{`<motion.div className={someClass}>
            {code}
          </motion.div>
          `}</TextSpan>
        . If you are confused, don't worry, as I will teach you how all of this
        works! {':)'}
      </NoteText>
    </NoteContainer>
  )
}

export default CodeNote

// Styles
const StyledA = styled.a`
  color: pink;
`

const NoteContainer = styled.div`
  background: #112;
  padding: 0.2rem 2rem;
  border-radius: 0.5rem;
  margin-top: 3rem;
  border: 1px solid pink;
`

const NoteText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.6;
  color: #f4f4f4;
`

const TextSpan = styled.span`
  color: pink;
`
