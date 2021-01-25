import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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
    <Wrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 60,
        delay: 0.8,
      }}
    >
      <Tagline>
        Coming soon. Sign up to receive updates on this course! 🎉
      </Tagline>
      <StyledForm onSubmit={handleSubscribe}>
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Button>Sign up</Button>
        <Messages initial={{ x: '-50%', y: 10 }} animate={{ y: 0 }}>
          {errMessage && <span>{errMessage}</span>}
          {successMessage && <MessageSuccess>{successMessage}</MessageSuccess>}
        </Messages>
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
  padding: 5rem 0;
`

const Tagline = styled.h3`
  color: #112;
  font-size: 2.4rem;
  text-align: center;
  line-height: 1.4;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`

const StyledForm = styled.form`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  position: relative;
`

const Input = styled.input`
  border: none;
  padding: 0rem 1rem;
  height: 5rem;
  font-size: 1.8rem;
  font-family: inherit;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  border: 1px solid #112;
  color: #112;
  background: ghostwhite;
`

const Button = styled.button`
  border: none;
  padding: 0rem 1.8rem;
  height: 5rem;
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

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`

const Messages = styled(motion.div)`
  position: absolute;
  bottom: -5.5rem;
  left: 50%;
  font-size: 2rem;
  font-weight: 600;
  color: green;
`

const MessageSuccess = styled(motion.span)`
  width: 100%;
  white-space: nowrap;
`
