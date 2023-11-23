import React from 'react'
import HeroSection from '../../components/HeroSection'
import Accordion from '../../components/Accordion'
import { Link } from 'react-router-dom'
import { FaEthernet } from 'react-icons/fa'
import { RiWirelessChargingLine } from 'react-icons/ri'
import { MdOutlineFiberSmartRecord } from 'react-icons/md'
import { AiOutlineAntDesign, AiOutlineDisconnect, AiOutlineSecurityScan } from 'react-icons/ai'
import { BiCctv } from 'react-icons/bi'
import { BsDoorOpenFill } from 'react-icons/bs'
import { SiApachedruid } from 'react-icons/si'
import { IoWifiSharp,IoWifiOutline } from "react-icons/io5";

const services = [
  {
    title: 'What areas do you cover?',
    description: 'We cover and will attend any business in England Wales or Scotland.'
  },
  {
    title: 'Do you do work abroad?',
    description: 'Yes we do. We can provide our expertise globally and can also support and manage our services remotely providing we have installed our UniFi equipment.'
  },
  {
    title: 'Do you provide your services to residential customers?',
    description: 'Yes we do however, the equipment provided is business grade and we do not offer a lower rates for residential customers. As the saying goes, you get what you pay for.'
  },
  {
    title: 'Is your work guaranteed?',
    description: 'Yes, all our work is guaranteed. We provide a minimum of 12 months warranty on all supplied products and, for customer who purchase their equipment outright from us, we also provide 12 months free maintenance with discount on our maintenance contracts after. For customer who lease equipment from use, we provide remote management for the duration of the contracted term and maintenance on any supplied network or security equipment.'
  },
  {
    title: 'Can I use your service if someone else has installed our equipment?',
    description: 'Yes of course, we are happy to resolve any issues or faults you are having with your network that another engineer or company has installed.'
  },
  {
    title: 'Can you provide a wireless network to cover a large area?',
    description: 'We certainly can. This is one of our specialties. We can cover large outdoor areas, stadiums, hotels, campsites and everything in-between.  We have a viable solution for every situation.'
  }
]

const Home = () => {
  return (
    <div className=''>
      <HeroSection title={'VSATUi. Network Infrastructure, Data and Security Specialists'} />
      <div className="bg-[#00032E]">
        <div className="max-w-7xl mx-auto px-2 py-10 md:py-12">
          <div className="space-y-4">
            <p className='text-[#FDD10E] text-center font-semibold py-1'>Our Services</p>
            <p className='text_gradient text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-center'><span>VitalSAT-UN, Specialists in</span> <span>Ubiquiti UniFi and Edge Equipment</span></p>
          </div>
          <div className="hidden md:flex flex-wrap justify-between my-5">
            <div className="w-fit space-y-2 order-1">
              <p className='text-[rgba(160,188,248,0.2)] text-6xl font-source font-bold text-center'>01</p>
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                  <p className='text_gradient text-xl text-center -mt-2 ml-2'>Network Installation</p>
                </div>
                <div className="flex gap-24 items-end py-1 px-6">
                  <img src="/assets/icons/network1.svg" alt="network" className='h-14 w-auto' />
                  <img src="/assets/icons/network2.svg" alt="network" className='h-7 w-auto' />
                  <img src="/assets/icons/network3.svg" alt="network" className='h-14 w-auto' />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                <div className="flex flex-col items-start pl-4 justify-center">
                  {/* <img src="/assets/icons/ethernet.png" alt="ethernet" className='h-8 w-8' /> */}
                  <FaEthernet className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Ethernet</p>
                </div>
                <div className="flex flex-col items-center justify-center pl-2">
                  {/* <img src="/assets/icons/wireless.svg" alt="wireless" className='h-8 w-8' /> */}
                  <IoWifiSharp className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Wireless</p>
                </div>
                <div className="flex flex-col items-center pl-10 justify-center">
                  <img src="/assets/icons/fiber.svg" alt="fiber" className='h-8 w-auto' />
                  {/* <MdOutlineFiberSmartRecord className='h-8 w-8 text-white' /> */}
                  <p className='text_gradient py-1'>Fibre Optic</p>
                </div>
              </div>
            </div>
            <div className="w-fit space-y-2 order-1">
              <p className='text-[rgba(160,188,248,0.2)] text-6xl font-source font-bold text-center'>02</p>
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                  <p className='text_gradient text-xl text-center -mt-2 ml-2'>Security</p>
                </div>
                <div className="flex gap-24 items-end py-1 px-6">
                  <img src="/assets/icons/network1.svg" alt="network" className='h-14 w-auto' />
                  <img src="/assets/icons/network2.svg" alt="network" className='h-7 w-auto' />
                  <img src="/assets/icons/network3.svg" alt="network" className='h-14 w-auto' />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                <div className="flex flex-col items-start pl-4 justify-center">
                  {/* <img src="/assets/icons/ethernet.png" alt="ethernet" className='h-8 w-8' /> */}
                  <BiCctv className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>CCTV</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {/* <img src="/assets/icons/wireless.svg" alt="wireless" className='h-8 w-8' /> */}
                  <BsDoorOpenFill className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Door Access</p>
                </div>
                <div className="flex flex-col items-center justify-center pl-8">
                  {/* <img src="/assets/icons/fibre.png" alt="fiber" className='h-8 w-8 ml-14' /> */}
                  <AiOutlineSecurityScan className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Security Alarm</p>
                </div>
              </div>
            </div>
            <div className="w-fit space-y-2 order-1">
              <p className='text-[rgba(160,188,248,0.2)] text-6xl font-source font-bold text-center'>03</p>
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                  <p className='text_gradient text-xl text-center -mt-2 ml-2'>Innovative</p>
                </div>
                <div className="flex gap-24 items-end py-1 px-6">
                  <img src="/assets/icons/network1.svg" alt="network" className='h-14 w-auto' />
                  <img src="/assets/icons/network2.svg" alt="network" className='h-7 w-auto' />
                  <img src="/assets/icons/network3.svg" alt="network" className='h-14 w-auto' />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                <div className="flex flex-col items-start pl-4 justify-center">
                  {/* <img src="/assets/icons/ethernet.png" alt="ethernet" className='h-8 w-8' /> */}
                  <SiApachedruid className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>UID</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {/* <img src="/assets/icons/wireless.svg" alt="wireless" className='h-8 w-8' /> */}
                  <AiOutlineDisconnect className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Connect</p>
                </div>
                <div className="flex flex-col items-center pl-10 justify-center">
                  {/* <img src="/assets/icons/fibre.png" alt="fiber" className='h-8 w-8 ml-14' /> */}
                  <AiOutlineAntDesign className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5 md:hidden">
            <div className="">
              <p className='text-[rgba(160,188,248,0.2)] text-5xl font-source font-bold'>01</p>
              <p className='text_gradient text-xl font-source py-2'>Network Installation</p>
              <div className="grid grid-cols-3 gap-5 text-xs text-center">
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <FaEthernet className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Ethernet</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <IoWifiSharp className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Wireless</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  {/* <img src="/assets/icons/fibre.png" alt="fiber" className='' /> */}
                  <img src="/assets/icons/fiber.svg" alt="fiber" className='h-8 w-auto' />
                  <p className='text_gradient py-1'>Fibre Optic</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className='text-[rgba(160,188,248,0.2)] text-5xl font-source font-bold'>02</p>
              <p className='text_gradient text-xl font-source py-2'>Security</p>
              <div className="grid grid-cols-3 gap-5 text-xs text-center">
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <BiCctv className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>CCTV</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <BsDoorOpenFill className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Door Access</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className='text-[rgba(160,188,248,0.2)] text-5xl font-source font-bold'>03</p>
              <p className='text_gradient text-xl font-source py-2'>Innovative</p>
              <div className="grid grid-cols-3 gap-5 text-xs text-center">
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <SiApachedruid className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>UID</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <AiOutlineDisconnect className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Connect</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <AiOutlineAntDesign className='h-8 w-8 text-white' />
                  <p className='text_gradient py-1'>Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 py-10">
        <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'><span>PC & Data Network Infrastructure</span></p>
        <div className="py-10 space-y-10">
          <div className="space-y-3 flex flex-col items-center">
            <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'>Network Installation</p>
            <p className='max-w-4xl text-center'>VSATUi specialists in ethernet and fibre optic networks. Providing professional network solutions for businesses across the UK. Enhanced network security monitoring and service management which can seamlessly integrate with Protect and UID products. Regardless of the size of your project, we provide the complete service from design to installation, maintenance, support and network management. With a large customer base from giant corporate clients to small high street shops, we cater to every client’s needs and expectations. Even our competitor use us!</p>
            <div className="w-full max-w-5xl py-5 md:py-10">
              <img src="/assets/demo.png" className='aspect-video w-full' alt="demo" />
            </div>
            <Link to='/' className='capitalize bg-[#2958FF] hover:bg-[#0c30b3] transition-all px-6 py-3 rounded-md text-white'>contact us today</Link>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'>Security</p>
            <p className='max-w-4xl text-center'>Along side our network security, we also provide robust and reliable security for our client’s buildings. Seamlessly integrate UniFi protect in to your existing UniFi network or, we can install the system as a stand-alone service. This combined with our security alarm system will provide you with an instant alert if there is any unauthorised access. Combined with UID will also allow you to remotely lock your building preventing any intruder from escaping while the police are on their way. </p>
            <div className="w-full max-w-5xl py-5 md:py-10">
              <img src="/assets/demo.png" className='aspect-video w-full' alt="demo" />
            </div>
            <Link to='/' className='capitalize bg-[#2958FF] hover:bg-[#0c30b3] transition-all px-6 py-3 rounded-md text-white'>contact us today</Link>
          </div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 py-10">
        <div className="flex flex-col space-y-5 justify-center items-center">
          <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'>VitalSAT-UN, Specialists in Ubiquiti UniFi & Edge Products</p>
          <img src="/assets/images/question.png" alt="question" className='w-full max-w-2xl' />
        </div>
      </div>
      <div className="bg-[rgba(1,17,72,0.05)]">
        <div className="max-w-7xl mx-auto px-2 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <p className='col-span-2 text-center py-2 md:py-5 text-2xl md:text-5xl text-[rgba(1,17,72,1)] font-rubik font-bold order-2 md:order-1'>Do you have Questions?</p>
            <div className="order-3 md:order-2">
              <Accordion slColor="#FFDE17" items={services} />
            </div>
            <div className="px-2 md:px-10 h-auto flex justify-center items-center order-1 md:order-3">
              <img src="/assets/question.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home