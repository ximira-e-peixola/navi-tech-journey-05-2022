import React from 'react'

import TopNavbar from '../components/Nav/TopNavbar'
import { Footer } from '../components/Sections/Footer'
import { Map } from '../components/Sections/Map'

export default function Landing () {
  return (
    <>
      <TopNavbar />
      <Map />
      <Footer />
    </>
  )
}
