import React from 'react'
import HeroSection from '../../components/HeroSection'

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

const connections = [
    {
        title: 'Ethernet',
        price: '10.99',
        totalStock: '50000',
        currentStock: '999',
        soldStock: '28579',
        sourceImg: '/assets/images/ethernet1.png'
    },
    {
        title: 'Ethernet',
        price: '10.99',
        totalStock: '50000',
        currentStock: '999',
        soldStock: '28579',
        sourceImg: '/assets/images/ethernet2.png'
    },
    {
        title: 'Ethernet',
        price: '10.99',
        totalStock: '50000',
        currentStock: '999',
        soldStock: '28579',
        sourceImg: '/assets/images/ethernet3.png'
    }
]

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

const broadband = [
    {
        title: 'UID',
        price: '10.99',
        totalStock: '50000',
        currentStock: '999',
        soldStock: '28579',
        sourceImg: '/assets/images/broadband1.png'
    },
    {
        title: 'Protect',
        price: '10.99',
        totalStock: '50000',
        currentStock: '999',
        soldStock: '28579',
        sourceImg: '/assets/images/broadband2.png'
    },
    {
        title: 'Door Access',
        price: '10.99',
        totalStock: '50000',
        currentStock: '999',
        soldStock: '28579',
        sourceImg: '/assets/images/broadband2.png'
    }
]

const Store = () => {
    return (
        <div>
            <HeroSection options={options} />
            <div className="max-w-7xl mx-auto px-2 py-10 space-y-5">
                <div className="p-2 border rgba(27,176,190,0.3) grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                    {connections && connections.length && connections.map(item => (
                        <div key={item.title} className="space-y-3">
                            <img src={item.sourceImg} alt="ethernet" loading='lazy' className='w-full h-auto' />
                            <div className="flex justify-between font-source font-bold text-[rgba(28,28,28,0.75)]">
                                <p>{item.title}</p>
                                <p>${item.price}/mo</p>
                            </div>
                            <div className="flex justify-between py-2 font-poppins text-[#7A7A7A]">
                                <p>In Stock: {item.currentStock}pc</p>
                                <p>Sold: {item.soldStock}</p>
                            </div>
                            <div className="flex justify-between gap-3">
                                <button className='w-1/2 flex justify-center items-center py-3 bg-[#2958FF] text-white rounded'>Details</button>
                                <button className='w-1/2 flex justify-center items-center py-3 border border-[#2958FF] text-[#2958FF] rounded'>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-2 border rgba(27,176,190,0.3) grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                    {services && services.length && services.map(item => (
                        <div key={item.title} className="space-y-3">
                            <img src={item.sourceImg} alt="ethernet" loading='lazy' className='w-full h-auto' />
                            <div className="flex justify-between font-source font-bold text-[rgba(28,28,28,0.75)]">
                                <p>{item.title}</p>
                                <p>${item.price}/mo</p>
                            </div>
                            <div className="flex justify-between py-2 font-poppins text-[#7A7A7A]">
                                <p>In Stock: {item.currentStock}pc</p>
                                <p>Sold: {item.soldStock}</p>
                            </div>
                            <div className="flex justify-between gap-3">
                                <button className='w-1/2 flex justify-center items-center py-3 bg-[#2958FF] text-white rounded'>Details</button>
                                <button className='w-1/2 flex justify-center items-center py-3 border border-[#2958FF] text-[#2958FF] rounded'>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-[rgba(41,88,255,0.2)] h-[1.5px]"></div>
                <div className="my-10">
                    <p className='text-2xl font-source font-bold text-[#161616] py-2'>Broadband</p>
                    <div className="p-2 border rgba(27,176,190,0.3) grid grid-cols-1 md:grid-cols-3 gap-5">
                        {broadband && broadband.length && broadband.map(item => (
                            <div key={item.title} className="space-y-3">
                                <img src={item.sourceImg} alt="ethernet" loading='lazy' className='w-full h-auto' />
                                <div className="flex justify-end font-source font-bold text-[rgba(28,28,28,0.75)]">
                                    {/* <p>Ethernet</p> */}
                                    <p>${item.price}/mo</p>
                                </div>
                                <div className="flex justify-between py-2 font-poppins text-[#7A7A7A]">
                                    <p>In Stock: {item.currentStock}pc</p>
                                    <p>Sold: {item.soldStock}</p>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <button className='w-1/2 flex justify-center items-center py-3 bg-[#2958FF] text-white rounded'>Details</button>
                                    <button className='w-1/2 flex justify-center items-center py-3 border border-[#2958FF] text-[#2958FF] rounded'>Order Online</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[rgba(41,88,255,0.2)] h-[1.5px]"></div>
                <div className="p-2 border rgba(27,176,190,0.3) grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                        {broadband && broadband.length && broadband.map(item => (
                            <div key={item.title} className="space-y-3">
                                <img src={item.sourceImg} alt="ethernet" loading='lazy' className='w-full h-auto' />
                                <div className="flex justify-between font-source font-bold text-[rgba(28,28,28,0.75)]">
                                    <p>{item.title}</p>
                                    <p>$10/mo</p>
                                </div>
                                <div className="flex justify-between py-2 font-poppins text-[#7A7A7A]">
                                    <p>In Stock: {item.currentStock}pc</p>
                                    <p>Sold: {item.soldStock}</p>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <button className='w-1/2 flex justify-center items-center py-3 bg-[#2958FF] text-white rounded'>Details</button>
                                    <button className='w-1/2 flex justify-center items-center py-3 border border-[#2958FF] text-[#2958FF] rounded'>Order Online</button>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default Store