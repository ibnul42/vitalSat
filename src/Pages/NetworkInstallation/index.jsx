import React, { useState } from 'react'
import HeroSection from '../../components/HeroSection'
import Accordion from '../../components/Accordion'
import { Link } from 'react-router-dom'

const services = [
    {
        title: 'Do I have to be at home?',
        description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
    },
    {
        title: 'lorum imsump is a dummy text to check the interace?',
        description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
    },
    {
        title: 'lorum imsump is a dummy text?',
        description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
    },
    {
        title: 'lorum imsump is a dummy text to check the interace?',
        description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
    },
    {
        title: 'lorum imsump is a dummy text to check the interace?',
        description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
    },
    {
        title: 'lorum imsump is a dummy text?',
        description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
    },
    {
        title: 'Is the work supervised?',
        description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
    },
    {
        title: 'lorum imsump is a dummy text to check the interace?',
        description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
    }
]

const NetworkInstallation = () => {
    const [hoverIndex, setHoverIndex] = useState(null)

    const hoverInput = (index) => {
        setHoverIndex(index)
    }
    return (
        <div className=''>
            <HeroSection title={'Network Installation Unifi & Edge Profiles'} />
            <div className="max-w-7xl mx-auto px-2 py-10">
                <div className="">
                    <p className='text-2xl md:text-3xl lg:text-5xl flex flex-col items-center text_gradient font-bold'><span>Does Your Network Perform</span> <span>Well ? NO?</span></p>
                    <p className='text_gradient text-center md:py-3'>We are one step ahead of installing high quality Covarage</p>
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
                <div className="space-y-4">
                    <p className='text-[rgba(1,17,72,1)] text-xl md:text-3xl lg:text-4xl font-bold flex flex-col items-center'><span>We Provide the Best</span> <span>Service Ubiquiti Unifi network</span></p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div onMouseEnter={() => hoverInput(1)} onMouseLeave={() => setHoverIndex(null)} className={`${hoverIndex === 1 && 'bg-[#011148]'} px-2 py-2 flex flex-col gap-2 transition-all cursor-pointer rounded-md`}>
                            <img src="/assets/wifi_group.svg" alt="wifi" className='my-5 w-full' />
                            <p className='text_gradient font-bold text-xl'>Ethernet</p>
                            <p className={`${hoverIndex === 1 ? 'text-[rgba(234,234,234,.75)]' : 'text-[rgba(28,28,28,0.75)]'} line-clamp-3 h-[75px]`}>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
                            <button className='bg-gradient-to-t from-[#1BB0BE] to-[#2958FF] px-6 py-2 rounded-md text-white capitalize'>Order Online</button>
                            <div className="bg-gradient-to-t from-[#1BB0BE] to-[#2958FF] p-[1px] rounded-md">
                                <div className="w-full bg-white rounded-md">
                                    <button className='px-6 py-2 rounded-md w-full text_gradient capitalize'>contact Us</button>
                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={() => hoverInput(2)} onMouseLeave={() => setHoverIndex(null)} className={`${hoverIndex === 2 && 'bg-[#011148]'} px-2 py-2 flex flex-col gap-2 transition-all cursor-pointer rounded-md`}>
                            <img src="/assets/wifi_group.svg" alt="wifi" className='my-5 w-full' />
                            <p className='text_gradient font-bold text-xl'>Wireless</p>
                            <p className={`${hoverIndex === 2 ? 'text-[rgba(234,234,234,.75)]' : 'text-[rgba(28,28,28,0.75)]'} line-clamp-3 h-[75px]`}>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
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
                            <p className={`${hoverIndex === 3 ? 'text-[rgba(234,234,234,.75)]' : 'text-[rgba(28,28,28,0.75)]'} line-clamp-3 h-[75px]`}>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
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