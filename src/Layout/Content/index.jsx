import React from 'react'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import { Route, Routes } from 'react-router-dom'
import NetworkInstallation from '../../Pages/NetworkInstallation'
import SecurityNetwork from '../../Pages/SecurityNetwork'
import BroadbandNetwork from '../../Pages/BroadbandNetwork'


const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/network-intallation" element={<NetworkInstallation />} />
      <Route path="/security-network" element={<SecurityNetwork />} />
      <Route path="/broadband-network" element={<BroadbandNetwork />} />
    </Routes>
  )
}

export default Content