import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { Routes } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto flex flex-col'>
      <Header />
      <div className="flex-1">
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default Layout