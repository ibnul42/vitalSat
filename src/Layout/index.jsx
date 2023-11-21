import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Layout = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`flex flex-col ${open ? "h-screen overflow-y-hidden md:min-h-screen md:h-auto md:overflow-y-visible" : ""} min-h-screen overflow-y-auto overflow-x-hidden`}>
      {/* <div className={`w-screen h-screen overflow-x-hidden ${open ? 'overflow-y-hidden' : 'overflow-y-auto'} flex flex-col`}> */}
      <Header open={open} setOpen={setOpen} />
      <div className="flex-1">
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default Layout