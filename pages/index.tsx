import { useState } from 'react'
import Head from 'next/head'

import Bar from '../components/Bar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HeroBackground from '../components/HeroBackground'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Wave from '../components/Wave'
import WhatYouWillLearn from '../components/WhatYouWillLearn'

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
      <Wave />
      <Bar />
      <WhatYouWillLearn />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage
