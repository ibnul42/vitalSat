import React from 'react'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import { Route, Routes } from 'react-router-dom'
import NetworkInstallation from '../../Pages/NetworkInstallation'
import SecurityNetwork from '../../Pages/SecurityNetwork'


const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/network-intallation" element={<NetworkInstallation />} />
      <Route path="/security-network" element={<SecurityNetwork />} />
    </Routes>
  )
}

export default Content