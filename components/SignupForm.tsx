import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaExclamationCircle } from 'react-icons/fa'

const SignupForm = () => {
  const [email, setEmail] = useState('')
  const [errMessage, setErrMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/mailchimp', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setErrMessage(error)
      return
    }

    setEmail('')
    setSuccessMessage('Thanks for subscribing! 🎉')
  }
  return (
    <Wrapper id="sign-up">
      <h2
        style={{
          fontSize: '6rem',
          textAlign: 'center',
          marginBottom: '2rem',
          fontFamily: 'Space Grotesk',
          lineHeight: 1,
          color: '#f4f4f4',
        }}
      >
        Coming soon.
      </h2>
      <Tagline>Sign up to receive updates on this course! 🎉</Tagline>
      <StyledForm onSubmit={handleSubscribe}>
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Button whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
          Sign up
        </Button>
        {(errMessage || successMessage) && (
          <Messages initial={{ x: '-50%', y: 10 }} animate={{ y: 0 }}>
            {errMessage && (
              <MessageError>
                <FaExclamationCircle style={{ marginRight: 5 }} />
                {errMessage}
              </MessageError>
            )}
            {successMessage && (
              <MessageSuccess>{successMessage}</MessageSuccess>
            )}
          </Messages>
        )}
      </StyledForm>
    </Wrapper>
  )
}

export default SignupForm

// Styles
const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 2rem 5rem;
  background: url('/images/bg.jpg');
  background-size: cover;
  border-radius: 0.5rem;
  margin: 6rem 0 4rem;
  border: 2px solid #f4f4f4;
  scroll-margin-top: 25em;
  box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.2);

  @media (min-width: 1024px) {
    padding: 5rem 0rem 7rem;
    scroll-margin-top: 40em;
  }
`

const Tagline = styled.h3`
  color: #61dafb;
  font-size: 2.2rem;
  text-align: center;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: 1.1px;
  margin-bottom: 3.2rem;

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`

const StyledForm = styled.form`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  position: relative;
`

const Input = styled.input`
  border: none;
  padding: 1.4rem 1rem;
  font-size: 2rem;
  font-family: inherit;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  border: 1px solid #bb6bd9;
  color: pink;
  background: #333;
  outline: none;

  &::placeholder {
    color: pink;
  }
`

const Button = styled(motion.button)`
  border: none;
  padding: 1.4rem 1.8rem;
  font-size: 2.2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background: linear-gradient(95.66deg, #61dafb 30.07%, #bb6bd9 104.98%);
  color: #333;
  cursor: pointer;
  position: relative;
  z-index: 30;
  box-shadow: 0 0 10px 3px rgba(89, 86, 213, 0.3);
  width: 100%;
  outline: none;

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`

const Messages = styled(motion.div)`
  position: absolute;
  bottom: -9.5rem;
  left: 50%;
  font-size: 2rem;
  font-weight: 600;

  @media (min-width: 1024px) {
    bottom: -12.5rem;
  }
`

const MessageSuccess = styled(motion.span)`
  width: 100%;
  white-space: nowrap;
  color: green;
  display: flex;
  align-items: center;
`

const MessageError = styled(motion.span)`
  width: 100%;
  white-space: nowrap;
  color: red;
  display: flex;
  align-items: center;
`
