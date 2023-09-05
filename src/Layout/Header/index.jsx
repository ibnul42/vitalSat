import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      name: "Network Installation",
      link: "/",
      child: [
        { name: "Network Installation 1", link: "/network1" },
        { name: "Network Installation 2", link: "/network2" },
        { name: "Network Installation 3", link: "/network3" }
      ]
    },
    {
      name: "Security",
      link: "/",
      child: [
        { name: "Security 1", link: "/security1" },
        { name: "Security 2", link: "/security2" },
        { name: "Security 3", link: "/security3" }
      ]
    },
    {
      name: "EoT",
      link: "/",
      child: [
        { name: "EoT 1", link: "/eot1" },
        { name: "EoT 2", link: "/eot2" },
        { name: "EoT 3", link: "/eot3" }
      ]
    },
    { name: "broadband", link: "/broadband" },
    {
      name: "courses",
      link: "/",
      child: [
        { name: "course 1", link: "/course1" },
        { name: "course 2", link: "/course2" },
        { name: "course 3", link: "/course3" }
      ]
    },
  ]

  const [currentLink, setCurrentLink] = useState(null)
  const headerRef = useRef(null)

  useEffect(() => {
    // Add a click event listener to the document
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        // Click occurred outside the header, set currentLink to null
        setCurrentLink(null);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

  const handleClick = (index) => {
    if (currentLink === null) setCurrentLink(index)
    else if (currentLink !== index) setCurrentLink(index)
    else setCurrentLink(null)
    // setCurrentLink(currentLink ? null : index)
  }

  const handleClose = (e) => {
    if (e.target.id) setCurrentLink(null)
  }

  return (
    <div className='w-full'>
      <div className="h-8 bg-gradient-to-b from-[#01042E] to-[#080B34] via-[#040730]"></div>
      <div className="bg-gradient-to-b from-[#01042C] to-[#01032A]">
        <div className="max-w-7xl mx-auto flex justify-between text-white">
          <div className='flex gap-5'>
            <div className="relative w-20 h-20">
              <div className="absolute left-0 -top-4 w-full h-full bg-white"></div>
            </div>
            <ul className="flex gap-4 pt-3" ref={headerRef}>
              {links.map((link, index) => (
                <li
                  key={link.name}
                  onClick={handleClose}
                >
                  {link.child ?
                    <button onClick={() => handleClick(index)} className='capitalize flex gap-1 items-center'>{link.name} {link.child && <img src="/assets/icons/arrow.svg" alt="store" className={`w-3 h-3 pt-1 transition-all ${currentLink === index ? 'rotate-180' : ''}`} />}</button> :
                    <Link to={link.link} onClick={() => setCurrentLink(null)} className='capitalize flex gap-1 items-center'>{link.name}</Link>}
                  <ul className={`absolute mt-2 flex flex-col bg-[#01042E] transition-opacity duration-500 ${currentLink === index ? 'opacity-100' : 'opacity-0'}`}>
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
            <Link to="/" className='flex h-fit rounded-md overflow-hidden'><span className='flex justify-center items-center bg-[#2958FF] px-2 py-1'>Store</span ><span className='flex justify-center items-center bg-[#FDD10E] px-4 py-1'><img src="/assets/icons/store.svg" alt="store" className='w-4 h-4' /></span></Link>
            <Link to="/" className='py-2 flex h-fit'><img src="/assets/icons/cart.svg" alt="store" className='w-5 h-5' /></Link>
            <Link to="/" className='py-2 flex h-fit'><img src="/assets/icons/user.svg" alt="store" className='w-5 h-5' /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header