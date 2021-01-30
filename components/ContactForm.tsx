import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiAlertTriangle } from 'react-icons/fi'
import axios from 'axios'
import { useMedia } from 'react-use-media'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [errors, setErrors] = useState('')

  const isDesktop = useMedia({
    minWidth: 500,
  })

  const hiddenRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (hiddenRef?.current.value !== '') {
      return
    }

    if (name === '' || email === '' || subject === '' || message === '') {
      setErrors('Please fill out all fields')
      return
    }

    setIsSending(true)

    const body = {
      name,
      email,
      subject,
      message,
    }

    try {
      await axios.post('/api/contact', body)
      setIsSent(true)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err) {
      setErrors('An error occurred. Please try again.')
    } finally {
      setIsSending(false)
      setTimeout(() => setIsSent(false), 3000)
    }
  }

  useEffect(() => {
    if (errors) {
      setTimeout(() => setErrors(''), 4000)
    }
  }, [errors])

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <input
          ref={hiddenRef}
          type="hidden"
          name="mrrobot"
          aria-label="Please do not fill in"
        />
        <AnimatePresence>
          {isSent ? (
            <SuccessMsgWrapper>
              <SuccessEmoji>🎉</SuccessEmoji>
              <SuccessTitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', damping: 12 }}
              >
                {'Your message was successfully sent :)'}
              </SuccessTitle>
              <SuccessMsg
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', damping: 12, delay: 0.2 }}
              >
                I will get back to you as soon as possible
              </SuccessMsg>
            </SuccessMsgWrapper>
          ) : (
            <>
              {isDesktop ? (
                <InputRow>
                  <InputFieldWrapper>
                    <Label htmlFor="name">Name</Label>
                    <InputField
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputFieldWrapper>
                  <InputFieldWrapper>
                    <Label htmlFor="email">Email</Label>
                    <InputField
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputFieldWrapper>
                </InputRow>
              ) : (
                <>
                  <InputFieldWrapper>
                    <Label htmlFor="name">Name</Label>
                    <InputField
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputFieldWrapper>
                  <InputFieldWrapper>
                    <Label htmlFor="email">Email</Label>
                    <InputField
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputFieldWrapper>
                </>
              )}
              <InputRow>
                <InputFieldWrapper>
                  <Label htmlFor="subject">Subject</Label>
                  <InputField
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </InputFieldWrapper>
              </InputRow>
              <InputFieldWrapper>
                <Label htmlFor="message">Message</Label>
                <TextareaField
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </InputFieldWrapper>

              <Button whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
                {isSending ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send <FiSend style={{ marginLeft: 5 }} />
                  </>
                )}
              </Button>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {errors && (
            <ErrMsg
              initial={{ opacity: 0, x: '-50%', y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <FiAlertTriangle style={{ marginRight: 7 }} />
              {errors}
            </ErrMsg>
          )}
        </AnimatePresence>
      </div>
      <div>
        <Dog3D
          src="/images/dog-3d2.png"
          alt="Dog"
          animate={{ y: [5, 0, 5] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </FormWrapper>
  )
}

export default ContactForm

// Styles
const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 7rem;
  position: relative;
  z-index: 3000;

  @media (max-width: 500px) {
    padding: 0;
    max-width: 100%;
    grid-template-columns: 1fr;
  }
`

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  width: 100%;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #bb6bd9;
`

const InputField = styled.input`
  border: 1px solid #ccc;
  color: #333;
  background: ghostwhite;
  padding: 0.8em 0.5em;
  border-radius: 5px;
  font-size: 1.8rem;
  font-family: inherit;
  margin-bottom: 1.6rem;
  -webkit-appearance: none;
`

const TextareaField = styled.textarea`
  border: 1px solid #ccc;
  color: #333;
  background: ghostwhite;
  padding: 0.8em 0.5em;
  border-radius: 5px;
  font-size: 1.8rem;
  font-family: inherit;
  margin-bottom: 3rem;
  min-height: 20rem;
  resize: none;
  -webkit-appearance: none;
`

const Button = styled(motion.button)`
  border: none;
  padding: 1.4rem 2rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background: linear-gradient(95.66deg, #61dafb 30.07%, #bb6bd9 104.98%);
  color: #333;
  cursor: pointer;
  position: relative;
  z-index: 30;
  box-shadow: 0 0 10px 3px rgba(89, 86, 213, 0.2);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`

const ErrMsg = styled(motion.span)`
  position: absolute;
  left: 50%;
  bottom: -5rem;
  color: red;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
`

const SuccessMsgWrapper = styled(motion.div)`
  min-height: 48.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const SuccessTitle = styled(motion.h3)`
  margin: 0;
  font-size: 3.6rem;
  color: #cc4bc2;
  line-height: 1.2;
  font-family: 'Space Grotesk', sans-serif;
`

const SuccessMsg = styled(motion.h5)`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2.6rem;
`

const SuccessEmoji = styled.span`
  font-size: 5rem;
  display: block;
  margin-bottom: 2rem;
`

const Dog3D = styled(motion.img)`
  max-width: 95%;

  @media (min-width: 1024px) {
    max-width: 100%;
  }
`
