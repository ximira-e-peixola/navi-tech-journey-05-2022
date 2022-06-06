import React from 'react'

import TopNavbar from '../components/Nav/TopNavbar'
import {
  Contact,
  Footer,
  Header,
  Pricing,
  Services
} from '../Sections'

export default function Landing () {
  return (
    <>
      <TopNavbar home />
      <Header />
      <Services />
      <Pricing />
      <Contact />
      <Footer home/>
    </>
  )
}
