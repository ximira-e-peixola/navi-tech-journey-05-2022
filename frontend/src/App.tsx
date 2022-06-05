import React from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

// Screens
import Landing from './screens/Landing'
import Calculate from './screens/Calculate'

export default function App () {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/calculate' element={<Calculate />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}
