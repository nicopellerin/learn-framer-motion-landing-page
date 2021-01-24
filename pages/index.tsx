import { useState } from 'react'

import Bar from '../components/Bar'
import HeroBackground from '../components/HeroBackground'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Wave from '../components/Wave'

const IndexPage = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  return (
    <>
      <Navbar />
      <NavbarMobile setToggleDropdown={setToggleDropdown} />
      <HeroBackground
        toggleDropdown={toggleDropdown}
        setToggleDropdown={setToggleDropdown}
      />
      <Wave />
      <Bar />
    </>
  )
}

export default IndexPage
