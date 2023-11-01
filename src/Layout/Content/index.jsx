import React from 'react'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import { Route, Routes } from 'react-router-dom'
import NetworkInstallation from '../../Pages/NetworkInstallation'
import SecurityNetwork from '../../Pages/SecurityNetwork'
import BroadbandNetwork from '../../Pages/BroadbandNetwork'
import EotbandNetwork from '../../Pages/EotNetwork'
import HotelDeveloper from '../../Pages/HotelDeveloper'
import Store from '../../Pages/Store'
import SingleProduct from '../../Pages/SIngleProduct'
import TermsConditions from '../../Pages/TermsConditions'


const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/network-intallation" element={<NetworkInstallation />} />
      <Route path="/security-network" element={<SecurityNetwork />} />
      <Route path="/broadband-network" element={<BroadbandNetwork />} />
      <Route path="/eot-network" element={<EotbandNetwork />} />
      <Route path="/hotel-developer" element={<HotelDeveloper />} />
      <Route path="/store" element={<Store />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  )
}

export default Content