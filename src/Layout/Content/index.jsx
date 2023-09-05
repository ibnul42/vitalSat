import React from 'react'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import { Route, Routes } from 'react-router-dom'


const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Content