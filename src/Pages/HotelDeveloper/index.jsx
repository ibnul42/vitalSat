import React from 'react'
import { Link } from 'react-router-dom'
// import { Helmet } from 'react-helmet-async'

const HotelDeveloper = () => {
    const watchdemoClickHandler = () => { }
    return (
        <div className='flex-1'>
            {/* <Helmet>
                <title>Hotel & Developers</title>
                <link rel="canonical" href="" />
            </Helmet> */}
            <div className="bg-[#011148] text-white">
                <div className="max-w-7xl mx-auto px-2 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                    <div className="flex flex-col gap-2 h-auto justify-center order-2 md:order-1">
                        <p className='text-xl md:text-2xl lg:text-4xl font-source text_gradient'>Hotels & Developers</p>
                        <p className='text-gray text-sm text-[rgba(234,234,234,0.75)] lg:text-base my-2'>Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cursus diam at fermentum. Ullamcorper amet integer sed erat. Quam sem molestie in egestas est.
                            Accumsan morbi lacus velit pulvinar donec. Cum hendrerit pellentesque mattis vel dictumst sit nibh. Semper morbi scelerisque donec viverra congue.</p>
                        <div className="flex justify-center md:justify-start">
                            <div onClick={watchdemoClickHandler} className="px-10 py-4 bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] w-fit rounded cursor-pointer flex justify-center items-center gap-2 justify-self-end">
                                <p className='font-inter font-semibold'>Watch Demo</p>
                                <img src="/assets/icons/video.svg" className='w-5 h-5' alt="video" />
                            </div>
                        </div>
                    </div>
                    <div className="h-auto flex items-center justify-end order-1 md:order-2">
                        <img src="/assets/hoteldev.svg" className='w-full lg:w-10/12' alt="security" />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-2 py-10 flex flex-col gap-3">
                <div className="">
                    <p className='text-2xl md:text-3xl lg:text-5xl flex flex-col md:flex-row gap-0 md:gap-3 items-center justify-center text_gradient min-h-[55px]'><span>Hotel Developers</span> <span className='hidden md:block'>-</span> <span>slogan goes here</span></p>
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
                </div>
            </div>
        </div>
    )
}

export default HotelDeveloper