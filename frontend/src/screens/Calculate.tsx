import React from 'react'

import TopNavbar from '../components/Nav/TopNavbar'
import { Footer } from '../Sections/Footer/Footer'
import { Map } from '../Sections/Map/Map'

export default function Landing () {
  return (
    <>
      <TopNavbar home={false} />
      <Map />
      <Footer />
    </>
  )
}
