import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ open, setOpen }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const links = [
    // { name: "UniFi Gateway Console", link: "/network-intallation" },
    // { name: "Wifi", link: "/wifi" },
    // { name: "Switching", link: "/eot-network" },
    // { name: "Cameras & Security", link: "/security-network" },
    // { name: "New integrations", link: "/new-integrations" },
    // { name: "accessory tech", link: "/" },
    // { name: "Identity", link: "/identity" }
    {
      name: "IT Networking",
      link: "/network-intallation",
      child: [
        { name: "Ethernet", link: "/network-intallation" },
        { name: "Wireless", link: "/network-wireless" },
        { name: "Fibre Optic", link: "/network-fibre" }
      ]
    },
    {
      name: "Security",
      link: "/security",
      child: [
        { name: "UID", link: "/uid-network" },
        { name: "Protect", link: "/protect-network" },
        { name: "Door Access", link: "/door-network" },
        { name: "Alarm System", link: "/alarm-network" },
      ]
    },
    {
      name: "Broadband",
      link: "/broadband",
      child: [
        { name: "Fixed & Wireless", link: "/broadband-network" },
      ]
    },
    {
      name: "EoT",
      link: "/eot",
      child: [
        { name: "Unifi Connect", link: "/eotnetwork" },
      ]
    },
    { name: "Hotels & Developers", link: "/hotel-developer" },
    { name: "Training", link: "/training" },
    { name: "About Us", link: "/about" },
  ]


  const [currentLink, setCurrentLink] = useState(null)
  const [currentItems, setCurrentItems] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [whitebackground, setWhiteBackground] = useState(false)
  const headerRef = useRef(null)
  const headerRefMobile = useRef(null)

  const bgwhiteLinks = ['hotel-developer', 'product']
  useEffect(() => {
    if (bgwhiteLinks.includes(location.pathname.split('/')[1])) {
      setWhiteBackground(true)
    } else {
      setWhiteBackground(false)
    }
    // Add a click event listener to the document
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        // Click occurred outside the header, set currentLink to null
        setCurrentLink(null)
      }
      if (headerRefMobile.current && !headerRefMobile.current.contains(event.target)) {
        // Click occurred outside the header, set currentLink to null
        setOpen(false)
      }
    }

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [open, setOpen, location, bgwhiteLinks])

  const handleClick = (index) => {
    if (currentLink === null) setCurrentLink(index)
    else if (currentLink !== index) setCurrentLink(index)
    else setCurrentLink(null)
    // setCurrentLink(currentLink ? null : index)
  }

  const handleClose = (e) => {
    if (e.target.id) setCurrentLink(null)
  }

  const handleClickMobile = (link, index) => {
    if (currentIndex === null) {
      setCurrentIndex(index)
      setCurrentItems(link.child)
    }
    else if (currentIndex === index) {
      setCurrentIndex(null)
      setCurrentItems(null)
    } else {
      setCurrentIndex(index)
      setCurrentItems(link.child)
    }
  }

  const logoClickHandler = () => {
    navigate('/')
  }

  return (
    <div className='w-full'>
      <div className={`hidden xl:block h-8 ${whitebackground ? 'bg-white' : 'bg-gradient-to-b'} from-[#01042E] to-[#080B34] via-[#040730]`}></div>
      <div className={`hidden xl:block ${whitebackground ? 'bg-white' : 'bg-gradient-to-b'} from-[#01042C] to-[#01032A] -my-1`}>
        <div className={`max-w-7xl mx-auto flex justify-between ${whitebackground ? 'text-black' : 'text-white'}`}>
          <div className='flex gap-5 h-full'>
            <div className="relative px-5 w-32">
              <div onClick={logoClickHandler} className="absolute left-0 -top-0 w-full h-full flex justify-center items-center cursor-pointer">
                <video className="logo-video mb-2" autoPlay muted loop='true'>
                  <source src="/assets/animated_logo.mp4" type="video/mp4" />
                </video>
                {/* <p className='-mt-2 font-extrabold'>Logo</p> */}
              </div>
            </div>
            <ul className="flex gap-4 pt-3" ref={headerRef}>
              {links.map((link, index) => (
                <li
                  key={link.name}
                  onClick={handleClose}
                >
                  {link.child ?
                    <button onClick={() => handleClick(index)} className='capitalize flex gap-1 items-center'>{link.name} {link.child && <img src={`/assets/icons/arrow${whitebackground ? '-black' : ''}.svg`} alt="store" className={`w-3 h-3 pt-1 transition-all ${currentLink === index ? 'rotate-180' : ''}`} />}</button> :
                    <NavLink to={link.link} onClick={() => setCurrentLink(null)}
                      // className='capitalize flex gap-1 items-center hover:text-[rgba(41,88,255,0.7)] transition-all duration-300'
                      className={({ isActive }) => isActive ? "capitalize flex gap-1 items-center text-[rgba(41,88,255,0.7)] transition-all duration-300" : "capitalize flex gap-1 items-center hover:text-[rgba(41,88,255,0.7)] transition-all duration-300"}
                    >{link.name}</NavLink>}
                  <ul className={`absolute mt-2 flex flex-col bg-[#01042E] text-white transition-opacity duration-500 ${currentLink === index ? 'opacity-100' : 'opacity-0'}`}>
                    {link?.child?.map(childLink => (
                      <Link onClick={() => setCurrentLink(null)} key={childLink.name} to={childLink.link} className={`py-2 px-2 hover:bg-pink-600 ${currentLink === index ? 'block' : 'hidden'}`}>{childLink.name}</Link>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 py-2">
            <Link to="/" className='py-1 h-fit px-2'>Support</Link>
            <Link to="/store" className='flex h-fit rounded-md overflow-hidden'><span className={`flex justify-center items-center bg-[#2958FF] px-2 py-1 ${whitebackground ? 'text-white' : 'text-black'}`}>Store</span ><span className='flex justify-center items-center bg-[#FDD10E] px-4 py-1'><img src="/assets/icons/store.svg" alt="store" className='w-4 h-4' /></span></Link>
            <Link to="/cart" className='py-2 flex h-fit'><img src={`/assets/icons/cart${whitebackground ? '-black' : ''}.svg`} alt="cart" className='w-5 h-5' /></Link>
            <Link to="/" className='py-2 flex h-fit'><img src={`/assets/icons/user${whitebackground ? '-black' : ''}.svg`} alt="user" className='w-5 h-5' /></Link>
          </div>
        </div>
      </div>
      <div className="xl:hidden bg-[#FFFFFF] py-2 flex flex-col z-50">
        <div className="flex justify-between items-center px-2">
          <video className="logo-video w-24 -ml-8" autoPlay muted loop='true'>
            <source src="/assets/animated_logo.mp4" type="video/mp4" />
          </video>
          <div onClick={() => setOpen(!open)} className="bg-[rgba(255,255,255,1)] shadow-[0_0_40px_0_rgba(0,0,0,0.15)] h-9 w-9 rounded-md flex flex-col gap-[6px] justify-center items-center cursor-pointer">
            <div className={`w-5 h-[2px] rounded-full bg-[rgba(32,32,32,1)] transition-all duration-300 ${open && 'rotate-45 w-7'}`}></div>
            <div className={`w-5 h-[2px] rounded-full bg-[rgba(32,32,32,1)] transition-all duration-300 ${open && 'hidden'}`}></div>
            <div className={`w-5 h-[2px] rounded-full bg-[rgba(32,32,32,1)] transition-all duration-300 ${open && '-rotate-45 w-7 -mt-[8px] -ml-[1px]'}`}></div>
          </div>
        </div>
        <div className="relative flex items-center justify-center text-white">
          <div className={`absolute top-1 flex-1 transition-all delay-150 bg-gradient-to-b from-[#01042C] to-[#01032A] h-full w-full ${open ? 'h-screen left-0' : '-left-[100vw]'}`}>
            <ul className="flex flex-col gap-4 pt-3 ">
              {links.map((link, index) => (
                <li
                  key={link.name}
                  className='border-b px-2 my-1'
                >
                  {link.child ?
                    <button onClick={() => handleClickMobile(link, index)} className='capitalize flex gap-1 items-center'>{link.name} {link.child && <img src="/assets/icons/arrow.svg" alt="store" className={`w-3 h-3 pt-1 transition-all ${currentIndex === index ? 'rotate-180' : ''}`} />}</button> :
                    <Link to={link.link} onClick={() => setCurrentIndex(null)} className='capitalize flex gap-1 items-center'>{link.name}</Link>}
                  {currentIndex === index &&
                    <ul className={`mt-2 flex flex-col transition-opacity duration-500`}>
                      {currentItems.map(childLink => (
                        <Link onClick={() => setCurrentIndex(null)} key={childLink.name} to={childLink.link} className={`py-2 px-2 hover:bg-pink-600`}>{childLink.name}</Link>
                      ))}
                    </ul>
                  }
                </li>
              ))}
            </ul>
            <div className="flex justify-between gap-4 py-8 px-3">
              {/* <Link to="/" className='py-1 h-fit px-2'>Support</Link> */}
              <Link to="/store" className='flex h-fit rounded-md overflow-hidden'><span className={`flex justify-center items-center bg-[#2958FF] px-2 py-1 ${whitebackground ? 'text-white' : 'text-black'}`}>Store</span ><span className='flex justify-center items-center bg-[#FDD10E] px-4 py-1'><img src="/assets/icons/store.svg" alt="store" className='w-4 h-4' /></span></Link>
              <Link to="/" className='py-2 flex h-fit'><img src={`/assets/icons/cart${whitebackground ? '-black' : ''}.svg`} alt="store" className='w-5 h-5' /></Link>
              {/* <Link to="/" className='py-2 flex h-fit'><img src={`/assets/icons/user${whitebackground ? '-black' : ''}.svg`} alt="store" className='w-5 h-5' /></Link> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Header