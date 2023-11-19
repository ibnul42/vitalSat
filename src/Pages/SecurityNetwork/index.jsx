import React, { useState } from 'react'
import HeroSection from '../../components/HeroSection'
import Accordion from '../../components/Accordion'
import { Link, useNavigate } from 'react-router-dom'

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

const options = [
    {
        name: 'UID Solution',
        icon: '/assets/icons/uid.svg'
    },
    {
        name: 'Protect with CCTV',
        icon: '/assets/icons/router.svg'
    }, {
        name: 'Door Access',
        icon: '/assets/icons/box.svg'
    }, {
        name: 'Ajax alarming system',
        icon: '/assets/icons/box.svg'
    },
]

const serviceNetworks = [
    {
        title: 'UID Solution',
        description: 'Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame',
        order: '/',
        contact: '/contact'
    },
    {
        title: 'Protect With CCTV',
        description: 'Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame',
        order: '/',
        contact: '/contact'
    },
    {
        title: 'Door Access',
        description: 'Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame',
        order: '/',
        contact: '/contact'
    },
    {
        title: 'Ajax Alarming System',
        description: 'Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame',
        order: '/',
        contact: '/contact'
    }
]

const SecurityNetwork = () => {
    const navigate = useNavigate()
    const [hoverIndex, setHoverIndex] = useState(null)

    const hoverInput = (index) => {
        setHoverIndex(index)
    }

    const contactClickHandler = (i) => {
        navigate(i.contact)
    }

    const orderClickHandler = (i) => {
        navigate(i.order)
    }
    return (
        <div className=''>
            <HeroSection text={'Empowering Networks:'} title={'Security installation for your safety'} options={options} />
            <div className="max-w-7xl mx-auto px-2 py-10">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 text-center">
                        <div className="flex flex-col items-center lg:px-5">
                            <img src="/assets/icons/ethernet.svg" alt="ethernet" className='h-16 md:h-20 w-16 md:w-20 my-2' />
                            <p className='text-[#011148] text-lg lg:text-xl xl:text-2xl md:font-bold font-source'>Better Performance & Stability</p>
                            <p className='hidden md:block text-[rgba(28,28,28,0.75)] text-sm xl:text-base'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
                        </div>
                        <div className="flex flex-col items-center lg:px-8">
                            <img src="/assets/icons/wireless.svg" alt="wireless" className='h-16 md:h-20 w-16 md:w-20 my-2' />
                            <p className='text-[#011148] text-lg lg:text-xl xl:text-2xl md:font-bold font-source'>High Density Covarage</p>
                            <p className='hidden md:block text-[rgba(28,28,28,0.75)] text-sm xl:text-base'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
                        </div>
                        <div className="flex flex-col items-center lg:px-8">
                            <img src="/assets/icons/fiber.svg" alt="fiber" className='h-16 md:h-20 w-16 md:w-20 my-2' />
                            <p className='text-[#011148] text-lg lg:text-xl xl:text-2xl md:font-bold font-source'>Reduce Energy Consumption</p>
                            <p className='hidden md:block text-[rgba(28,28,28,0.75)] text-sm xl:text-base'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
                        </div>
                    </div>
                </div>
                <div className="py-10 space-y-10">
                    <div className="space-y-3 flex flex-col items-center">
                        <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'>Security</p>
                        <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
                        <div className="w-full max-w-5xl py-5 md:py-10">
                            <img src="/assets/demo.png" className='aspect-video w-full' alt="demo" />
                        </div>
                        <Link to='/' className='capitalize bg-[#2958FF] hover:bg-[#0c30b3] transition-all px-6 py-3 rounded-md text-white'>contact us today</Link>
                    </div>
                    <div className="space-y-3 flex flex-col items-center">
                        <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'>Network Installation</p>
                        <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
                        <div className="w-full max-w-5xl py-5 md:py-10">
                            <img src="/assets/demo.png" className='aspect-video w-full' alt="demo" />
                        </div>
                        <Link to='/' className='capitalize bg-[#2958FF] hover:bg-[#0c30b3] transition-all px-6 py-3 rounded-md text-white'>contact us today</Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#F2F3F6]">
                <div className="max-w-7xl mx-auto px-2 py-10">
                    <div className="space-y-4">
                        <p className='text-[rgba(1,17,72,1)] text-xl md:text-3xl lg:text-4xl font-bold flex flex-col items-center'><span>We Provide the Best</span> <span>Service Ubiquiti Unifi network</span></p>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {serviceNetworks.map((item, index) => (
                                <div key={index} onMouseEnter={() => hoverInput(index)} onMouseLeave={() => setHoverIndex(null)} className={`${hoverIndex === index && 'bg-[#011148]'} px-2 py-2 flex flex-col gap-2 transition-all cursor-pointer rounded-md`}>
                                    <img src="/assets/wifi_group.svg" alt="wifi" className='my-5 w-full' />
                                    <p className='text_gradient font-bold text-xl'>{item.title}</p>
                                    <p className={`${hoverIndex === index ? 'text-[rgba(234,234,234,.75)]' : 'text-[rgba(28,28,28,0.75)]'} line-clamp-3 h-[75px]`}>{item.description}</p>
                                    <button onClick={() => orderClickHandler(item)} className='bg-[rgb(41,88,255)] hover:bg-[rgb(37,62,151)] px-6 py-2 rounded-md text-white capitalize'>Order Online</button>
                                    <div className="bg-gradient-to-t from-[#1BB0BE] to-[#2958FF] p-[1px] rounded-md">
                                        <div className="w-full bg-white rounded-md">
                                            <button onClick={() => contactClickHandler(item)} className='px-6 py-2 rounded-md w-full text_gradient capitalize'>contact Us</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
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

export default SecurityNetwork