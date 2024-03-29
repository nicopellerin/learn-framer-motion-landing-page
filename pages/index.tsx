import { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Bar from '../components/Bar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HeroBackground from '../components/HeroBackground'
import NavbarMobile from '../components/NavbarMobile'
import WhatYouWillLearn from '../components/WhatYouWillLearn'

const Navbar = dynamic(() => import('../components/Navbar'))

const IndexPage = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  return (
    <>
      <Head>
        <title>LearnFramerMotion.com - From beginner to advanced</title>
      </Head>
      <Navbar />
      <NavbarMobile setToggleDropdown={setToggleDropdown} />
      <HeroBackground
        toggleDropdown={toggleDropdown}
        setToggleDropdown={setToggleDropdown}
      />
      <Bar />
      <WhatYouWillLearn />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage
