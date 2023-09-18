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
        title: 'UID',
        price: '10.99',
        totalStock: '50000',
        currentStock: '999',
        soldStock: '28579',
        sourceImg: '/assets/images/uid.png'
    },
    {
        title: 'Protect',
        price: '10.99',
        totalStock: '50000',
        currentStock: '999',
        soldStock: '28579',
        sourceImg: '/assets/images/protect.png'
    },
    {
        title: 'Door Access',
        price: '10.99',
        totalStock: '50000',
        currentStock: '999',
        soldStock: '28579',
        sourceImg: '/assets/images/door.png'
    },
    {
        title: 'Alarm System',
        price: '10.99',
        totalStock: '50000',
        currentStock: '999',
        soldStock: '28579',
        sourceImg: '/assets/images/system.png'
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