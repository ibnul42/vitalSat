import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Layout = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`w-screen h-screen overflow-x-hidden ${open ? 'overflow-y-hidden' : 'overflow-y-auto'} flex flex-col`}>
      <Header open={open} setOpen={setOpen} />
      <div className="flex-1">
        <ScrollToTop />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default Layout