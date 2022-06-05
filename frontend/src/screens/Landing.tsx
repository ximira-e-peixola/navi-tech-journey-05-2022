import React from 'react'

import TopNavbar from '../components/Nav/TopNavbar'
import { Blog } from '../components/Sections/Blog'
import { Contact } from '../components/Sections/Contact'
import { Footer } from '../components/Sections/Footer'
import { Header } from '../components/Sections/Header'
import { Pricing } from '../components/Sections/Pricing'
import { Projects } from '../components/Sections/Projects'
import { Services } from '../components/Sections/Services'
import { Map } from '../components/Sections/Map'

export default function Landing () {
  return (
    <>
      <TopNavbar />
      <Header />
      <Map />
      <Services />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}
