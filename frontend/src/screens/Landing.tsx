import React from 'react'

import TopNavbar from '../components/Nav/TopNavbar'
import { Contact } from '../components/Sections/Contact'
import { Footer } from '../components/Sections/Footer'
import { Header } from '../components/Sections/Header'
import { Pricing } from '../components/Sections/Pricing'
import { Projects } from '../components/Sections/Projects'
import { Services } from '../components/Sections/Services'

export default function Landing () {
  return (
    <>
      <TopNavbar home />
      <Header />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer home/>
    </>
  )
}
