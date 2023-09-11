import React from 'react'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import { Route, Routes } from 'react-router-dom'
import NetworkInstallation from '../../Pages/NetworkInstallation'


const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/network-intallation" element={<NetworkInstallation />} />
    </Routes>
  )
}

export default Content