import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import useMedia from 'use-media'
import { FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'

import CodeExample from './CodeExample'
import Code from './Code'
import CodeNote from './CodeNote'

const CodeBlock = () => {
  const isWide = useMedia({ minWidth: '768px' })

  const [showCode, setShowCode] = useState(false)

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
      {isWide ? (
        <>
          <Code />
          <CodeNote />
        </>
      ) : (
        <>
          <ButtonCode
            onClick={() => setShowCode((prevState) => !prevState)}
            whileHover={{ y: -1 }}
            whileTap={{ y: 1 }}
          >
            {showCode ? 'Hide' : 'View'} code{' '}
            <FaCode style={{ marginLeft: 5 }} />
          </ButtonCode>
          {showCode ? (
            <>
              <Code />
              <CodeNote />
            </>
          ) : null}
        </>
      )}
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

const ButtonCode = styled(motion.button)`
  outline: none;
  padding: 1.4rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  background: linear-gradient(146.82deg, #bb6bd9 68%, #bb6bd0 89.83%);
  color: #eef;
  margin: 3rem 0;
  width: 100%;
  box-shadow: 0px 3px 3px 3px rgba(155, 81, 224, 0.26);
  border: 3px solid rgba(155, 81, 224, 0.62);
`
