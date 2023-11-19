import React, { useEffect, useState } from 'react'
import HeroSection from '../../components/HeroSection'
import Accordion from '../../components/Accordion'
import { Link } from 'react-router-dom'
import { GrDocumentPerformance } from "react-icons/gr";
import { GiRapidshareArrow } from "react-icons/gi";
import { MdOutlineSecurity  } from "react-icons/md";
import SectionContent from '../../components/SectionContent';

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

const NetworkInstallation = () => {
    const [hoverIndex, setHoverIndex] = useState(null)

    const hoverInput = (index) => {
        setHoverIndex(index)
    }
    return (
        <div className=''>
            <HeroSection title={''} />
            <div className="max-w-7xl mx-auto px-2 py-10">
                <div className="">
                    <p className='text-2xl md:text-3xl lg:text-5xl flex flex-col items-center text_gradient font-bold'>Reliable, Fast and Secure Ethernet Networking</p>
                    {/* <p className='text-2xl md:text-3xl lg:text-5xl flex flex-col items-center text_gradient font-bold'><span>Does Your Network Perform</span> <span>Well ? NO?</span></p> */}
                    {/* <p className='text_gradient text-center md:py-3'>We are one step ahead of installing high quality Covarage</p> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 text-center">
                        <div className="flex flex-col items-center lg:px-5">
                            {/* <img src="/assets/icons/ethernet.svg" alt="ethernet" className='h-16 md:h-20 w-16 md:w-20 my-2' /> */}
                            <GrDocumentPerformance className='w-16 md:w-20 h-auto my-4' />
                            <p className='text-[#011148] text-lg lg:text-xl xl:text-2xl md:font-bold font-source my-2'>Reliability</p>
                            <p className='hidden md:block text-[rgba(28,28,28,0.75)] text-sm xl:text-base'>Hard wired ethernet networks. Where reliability meets performance, your data's journey is in trusted hands.</p>
                        </div>
                        <div className="flex flex-col items-center lg:px-8">
                            {/* <img src="/assets/icons/wireless.svg" alt="wireless" className='h-16 md:h-20 w-16 md:w-20 my-2' /> */}
                            <GiRapidshareArrow className='w-16 md:w-20 h-auto my-4' />
                            <p className='text-[#011148] text-lg lg:text-xl xl:text-2xl md:font-bold font-source my-2'>Speed</p>
                            <p className='hidden md:block text-[rgba(28,28,28,0.75)] text-sm xl:text-base'>Experience the fast lane of data with our lightning-fast Ethernet networks.</p>
                        </div>
                        <div className="flex flex-col items-center lg:px-8">
                            {/* <img src="/assets/icons/fiber.svg" alt="fiber" className='h-16 md:h-20 w-16 md:w-20 my-2' /> */}
                            <MdOutlineSecurity className='w-16 md:w-20 h-auto my-4' />
                            <p className='text-[#011148] text-lg lg:text-xl xl:text-2xl md:font-bold font-source my-2'>Security</p>
                            <p className='hidden md:block text-[rgba(28,28,28,0.75)] text-sm xl:text-base'>Keep your businesses network and devices safe a secure with robust network security.</p>
                        </div>
                    </div>
                </div>
                <div className="py-10 space-y-10">
                    <SectionContent title={`Security`} description={`Network security is paramount in today's digital landscape. At VSATUi, we take this seriously. We can provide, support & manage your Ubiquiti Unifi or Edge networks, ensuring your data is shielded from cyber threats. Trust us to keep your connections secure. Your businesses network security is our priority.`} />
                    <SectionContent title={`Network Installation`} description={`Designing and installing networks is where we shine. We bring Unifi to life, tailored to your needs. Smooth, efficient, and hassle-free. We make your network work for you.`} />
                </div>
                <div className="space-y-4">
                    {/* <p className='text-[rgba(1,17,72,1)] text-xl md:text-3xl lg:text-4xl font-bold flex flex-col items-center'><span>We Provide the Best</span> <span>Service Ubiquiti Unifi network</span></p> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div onMouseEnter={() => hoverInput(1)} onMouseLeave={() => setHoverIndex(null)} className={`${hoverIndex === 1 && 'bg-[#011148]'} px-2 py-2 flex flex-col gap-2 transition-all cursor-pointer rounded-md`}>
                            <img src="/assets/wifi_group.svg" alt="wifi" className='my-5 w-full' />
                            <p className='text_gradient font-bold text-xl'>Ethernet Networks</p>
                            <p className={`${hoverIndex === 1 ? 'text-[rgba(234,234,234,.75)]' : 'text-[rgba(28,28,28,0.75)]'} line-clamp-3 h-[75px]`}>Fast, reliable, secure & cost effective, these are just a few of the benefits of using VSATUi to supply and support your Unifi or Edge ethernet network.</p>
                            <button className='bg-gradient-to-t from-[#1BB0BE] to-[#2958FF] px-6 py-2 rounded-md text-white capitalize'>Order Online</button>
                            <div className="bg-gradient-to-t from-[#1BB0BE] to-[#2958FF] p-[1px] rounded-md">
                                <div className="w-full bg-white rounded-md">
                                    <button className='px-6 py-2 rounded-md w-full text_gradient capitalize'>contact Us</button>
                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={() => hoverInput(2)} onMouseLeave={() => setHoverIndex(null)} className={`${hoverIndex === 2 && 'bg-[#011148]'} px-2 py-2 flex flex-col gap-2 transition-all cursor-pointer rounded-md`}>
                            <img src="/assets/wifi_group.svg" alt="wifi" className='my-5 w-full' />
                            <p className='text_gradient font-bold text-xl'>Wireless Networks</p>
                            <p className={`${hoverIndex === 2 ? 'text-[rgba(234,234,234,.75)]' : 'text-[rgba(28,28,28,0.75)]'} line-clamp-3 h-[75px]`}>Fast, reliable, secure, small or large scale wireless networking in or outdoors with unbeatable performance. </p>
                            <button className='bg-gradient-to-t from-[#1BB0BE] to-[#2958FF] px-6 py-2 rounded-md text-white capitalize'>Order Online</button>
                            <div className="bg-gradient-to-t from-[#1BB0BE] to-[#2958FF] p-[1px] rounded-md">
                                <div className="w-full bg-white rounded-md">
                                    <button className='px-6 py-2 rounded-md w-full text_gradient capitalize'>contact Us</button>
                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={() => hoverInput(3)} onMouseLeave={() => setHoverIndex(null)} className={`${hoverIndex === 3 && 'bg-[#011148]'} px-2 py-2 flex flex-col gap-2 transition-all cursor-pointer rounded-md`}>
                            <img src="/assets/wifi_group.svg" alt="wifi" className='my-5 w-full' />
                            <p className='text_gradient font-bold text-xl'>Fiber Optic</p>
                            <p className={`${hoverIndex === 3 ? 'text-[rgba(234,234,234,.75)]' : 'text-[rgba(28,28,28,0.75)]'} line-clamp-3 h-[75px]`}>The future of network communication is here. The fastest most secure and reliable form of connectivity. Cover large distances with minimal loss in speed and no interference. </p>
                            <button className='bg-gradient-to-t from-[#1BB0BE] to-[#2958FF] px-6 py-2 rounded-md text-white capitalize'>Order Online</button>
                            <div className="bg-gradient-to-t from-[#1BB0BE] to-[#2958FF] p-[1px] rounded-md">
                                <div className="w-full bg-white rounded-md">
                                    <button className='px-6 py-2 rounded-md w-full text_gradient capitalize'>contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default NetworkInstallation