import React, { useState } from 'react'
import HeroSection from '../../components/HeroSection'
import Accordion from '../../components/Accordion'
import { Link, useNavigate } from 'react-router-dom'

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

const options = [
    {
        name: 'Fixed Wire',
        icon: '/assets/icons/box.svg'
    },
    {
        name: 'Wireless',
        icon: '/assets/icons/router.svg'
    }
]

const serviceNetworks = [
    {
        title: 'Wireless',
        description: 'Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame',
        order: '/',
        contact: '/contact'
    },
    {
        title: 'Fixed Wire',
        description: 'Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non nonLorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non',
        order: '/',
        contact: '/contact'
    }
]

const BroadbandNetwork = () => {
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
            <HeroSection title={'High Speed Broadband Internet Connection'} options={options} />
            <div className="max-w-7xl mx-auto px-2 py-10">
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
            <div className="">
                <div className="max-w-7xl mx-auto px-2 py-10">
                    <div className="space-y-4">
                        <div className="">
                            <p className='text-[#FDD10E] font-semibold py-1 uppercase text-center'>What we do</p>
                            <p className='text-[rgba(1,17,72,1)] text-xl md:text-3xl lg:text-4xl font-bold flex flex-col items-center'><span>We Provide the Best</span> <span>Service Ubiquiti Unifi network</span></p>
                        </div>
                        <div className={`flex flex-wrap gap-5 justify-center`}>
                            {serviceNetworks.map((item, index) => (
                                <div key={index} onMouseEnter={() => hoverInput(index)} onMouseLeave={() => setHoverIndex(null)} className={`${hoverIndex === index && 'bg-[#011148]'} px-2 py-2 flex flex-col gap-2 transition-all cursor-pointer rounded-md w-full md:w-1/3 lg:w-1/4`}>
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

export default BroadbandNetwork