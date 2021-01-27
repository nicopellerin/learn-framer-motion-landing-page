import React, { useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const links: Link[] = [
  { text: 'What you will learn', link: '#what-you-will-learn' },
  { text: 'Contact', link: '#contact' },
]

interface Link {
  text: string
  link: string
}

const Navbar = () => {
  const [index, setIndex] = useState<number | null>(null)

  return (
    <Wrapper>
      <Image src="/images/logo_new.svg" alt="Logo" width={200} height={40} />
      <Menu>
        <MenuList onMouseLeave={() => setIndex(null)}>
          <AnimateSharedLayout>
            {links.map(({ text, link }, i) => (
              <Link href={link} key={link}>
                <StyledLink>
                  <MenuListItem onMouseOver={() => setIndex(i)}>
                    {text}
                  </MenuListItem>
                  {index === i && (
                    <motion.div
                      layoutId="menuItem"
                      initial={{ y: 1 }}
                      animate={{ y: 0 }}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '0.3rem',
                        background: '#F6DEFF',
                        bottom: '-1.1rem',
                        borderRadius: '0.5rem',
                      }}
                    />
                  )}
                </StyledLink>
              </Link>
            ))}
          </AnimateSharedLayout>
        </MenuList>
      </Menu>
    </Wrapper>
  )
}

export default Navbar

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 3rem 4rem;

  @media (max-width: 1367px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`

const Menu = styled.nav`
  display: flex;
`

const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem 0;
`

const MenuListItem = styled.li`
  font-size: 2rem;
  color: rgba(244, 244, 244, 0.9);
  cursor: pointer;
`

const StyledLink = styled.a`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;

  &:not(:last-child) {
    margin-right: 5rem;

    &::after {
      content: '';
      position: absolute;
      height: 110%;
      width: 2px;
      background: rgba(227, 154, 255, 0.2);
      right: -2.5rem;
      top: 0;
    }
  }
`
