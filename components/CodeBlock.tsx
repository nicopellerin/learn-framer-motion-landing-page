import * as React from 'react'
import styled from 'styled-components'

import CodeExample from './CodeExample'
import Code from './Code'

const CodeBlock = () => {
  return (
    <ExampleContainer>
      <ExampleTitle>Code example &mdash;</ExampleTitle>
      <CodeExample />
      <Text>
        Here is a simple example of <TextSpan>showing {'&'} hiding</TextSpan> an
        image. You can click the button above to see the effect in action.
        &#128064;
      </Text>
      <Text>
        Just below is the code it took to make this whole animation possible. As
        you can see, <TextSpan>Framer Motion</TextSpan> is a really powerful
        library and makes it quite easy to make beautiful animations without
        much extra code.
      </Text>
      <Code />
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
          To use Framer Motion with CSS/Sass/inline-styles, you use the
          following syntax for a div:{' '}
          <TextSpan
            style={{ color: '#61dafb' }}
          >{`<motion.div className={someClass}>
            {code}
          </motion.div>
          `}</TextSpan>
          . If you are confused, don't worry, as I will teach you how all of
          this works! {':)'}
        </NoteText>
      </NoteContainer>
    </ExampleContainer>
  )
}

export default CodeBlock

// Styles

const ExampleContainer = styled.div`
  margin-bottom: 4rem;
`

const ExampleTitle = styled.h4`
  font-size: 4rem;
  color: #112;
  margin-bottom: 4rem;
  color: #f4f4f4;
`

const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.6;
  color: #f4f4f4;
`

const TextSpan = styled.span`
  color: pink;
`

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
