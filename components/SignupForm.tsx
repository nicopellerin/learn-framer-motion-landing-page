import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaExclamationCircle, FaDiscord } from 'react-icons/fa'
import { Circle } from 'better-react-spinkit'

const SignupForm = () => {
  const [email, setEmail] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [errMessage, setErrMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrMessage('')
    setSuccessMessage('')

    setIsSending(true)

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
      setIsSending(false)
      return
    }

    setErrMessage('')
    setEmail('')
    setIsSending(false)
    setSuccessMessage('Thanks for subscribing! 🎉')
  }
  return (
    <Wrapper id="sign-up">
      <Title>Coming soon.</Title>
      <Tagline>
        Sign up to receive updates, free animation tips and a{' '}
        <Discount>60% discount</Discount> on this course! 🎉
      </Tagline>
      <StyledForm onSubmit={handleSubscribe}>
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Button
          whileHover={{ y: isSending ? 0 : -1 }}
          whileTap={{ y: isSending ? 0 : 1 }}
          disabled={isSending}
        >
          {isSending ? (
            <>
              <Circle style={{ marginRight: 7 }} />
              Signing up...
            </>
          ) : (
            'Sign up'
          )}
        </Button>
        {!errMessage && !successMessage && (
          <DiscordMessage>
            + access to a private
            <DiscordColorText>
              Discord <FaDiscord style={{ margin: '0 0.5rem 0 0.2rem' }} />
            </DiscordColorText>{' '}
            server!
          </DiscordMessage>
        )}
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
  padding: 5rem 2rem 8rem;
  background: url('/images/bg.jpg');
  background-size: cover;
  margin: 6rem -2rem 4rem;
  scroll-margin-top: 25em;
  box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.2);
  border-top: 2px solid #f4f4f4;
  border-bottom: 2px solid #f4f4f4;
  box-shadow: 0 0 35px 10px rgba(89, 86, 213, 0.5);

  @media (min-width: 450px) {
    border-radius: 0.5rem;
    padding: 5rem 0rem 7rem;
    scroll-margin-top: 30em;
    border: 2px solid #f4f4f4;
    margin: 6rem 0rem 4rem;
  }
`

const Title = styled.h2`
  font-size: 5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1;
  color: #f4f4f4;

  @media (min-width: 450px) {
    font-size: 6rem;
  }
`

const Tagline = styled.h3`
  color: #61dafb;
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: 1.1px;
  max-width: 34ch;
  margin: 0 auto;
  margin-bottom: 3.2rem;

  @media (min-width: 450px) {
    font-size: 2.4rem;
    max-width: 45ch;
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
  font-size: 1.8rem;
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

  @media (min-width: 450px) {
    font-size: 2rem;
  }
`

const Button = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1.4rem 1.8rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background: linear-gradient(95.66deg, #61dafb 30.07%, #bb6bd9 104.98%);
  color: #333;
  cursor: pointer;
  position: relative;
  z-index: 30;
  box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.7);
  width: 100%;
  outline: none;

  &:disabled {
    cursor: initial;
    pointer-events: none;
  }

  @media (min-width: 450) {
    font-size: 2.4rem;
  }
`

const Messages = styled(motion.div)`
  position: absolute;
  bottom: -5.5rem;
  left: 50%;
  font-size: 1.8rem;
  font-weight: 500;

  @media (min-width: 768px) {
    bottom: -4.5rem;
  }
`

const MessageSuccess = styled(motion.span)`
  width: 100%;
  white-space: nowrap;
  color: var(--successColor);
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

const Discount = styled.span`
  font-weight: 700;
  color: #f6deff;
`

const DiscordMessage = styled.span`
  position: absolute;
  bottom: -5.5rem;
  color: #f6deff;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
  font-weight: 600;
  white-space: nowrap;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    bottom: -4.5rem;
  }
`

const DiscordColorText = styled.span`
  color: #7289da;
  display: inline-flex;
  align-items: center;
  margin-left: 0.4rem;
`
