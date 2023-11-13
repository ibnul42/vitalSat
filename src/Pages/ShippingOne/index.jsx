import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ShippingOne = () => {
    const navigate = useNavigate()
    const checkoutClickHandler = () => {
        navigate('/shipping-1')
    }
    const [selectedPlan, setSelectedPlan] = useState('')

    const planClickOption = (val) => {
        setSelectedPlan(val)
    }
    return (
        <div className='h-auto'>
            <div className="max-w-7xl mx-auto px-2">
                <div className="py-3">
                    <div className="flex gap-3 py-1">
                        <img src="/assets/icons/arrow-black.svg" className='w-3 h-auto rotate-90 cursor-pointer' alt="arrow" />
                        <p>Continue Shopping</p>
                    </div>
                    <div className="w-full h-[1px] bg-[rgba(27,176,190,0.3)]"></div>
                </div>
                <div className="py-3">
                    <div className="flex gap-4">
                        <div className="flex gap-3 py-1">
                            <p>Cart</p>
                            <img src="/assets/icons/arrow-black.svg" className='w-3 h-auto -rotate-90 cursor-pointer' alt="arrow" />
                        </div>
                        <div className="flex gap-3 py-1">
                            <p>Your Info</p>
                            <img src="/assets/icons/arrow-black.svg" className='w-3 h-auto -rotate-90 cursor-pointer' alt="arrow" />
                        </div>
                        <div className="flex gap-3 py-1">
                            <p className='text-[rgba(125,125,125,0.8)]'>Shipping</p>
                            <img src="/assets/icons/arrow-black.svg" className='w-3 h-auto -rotate-90 cursor-pointer' alt="arrow" />
                        </div>
                        <div className="flex gap-3 py-1">
                            <p className='text-[rgba(125,125,125,0.8)]'>Payment</p>
                            <img src="/assets/icons/arrow-black.svg" className='w-3 h-auto -rotate-90 cursor-pointer' alt="arrow" />
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-[rgba(27,176,190,0.3)]"></div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-5 px-2 h-full flex justify-center items-center">
                <div className="w-full grid grid-cols-12 gap-5">
                    <div className="col-span-8 px-10">
                        <div className="space-y-3">
                            <p className='text-[#011148]'>Contact Details</p>
                            <div className="space-y-2">
                                <p className='text-[#161616]'>Email Address</p>
                                <div className="bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] p-[1px] pl-[4px] outline-2 focus-within:outline-0 rounded-md overflow-hidden">
                                    <input type="text" name="email" className="w-full px-2 py-3 focus-within:border-blue-500 focus-within:outline-0 rounded-md placeholder:text-black" placeholder='Enter email address'></input>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 flex flex-col gap-2">
                            <div className="flex gap-3 pt-2 pb-4">
                                <input type="checkbox" name="" id="" />
                                <p className='text-[#161616]'>Subscribe for news letter to know offers</p>
                            </div>
                            <p>Please select if you plan to use your products in a residential or business environment</p>
                        </div>
                        <div className="py-3 flex gap-4">
                            <div className="border border-[#1BB0BE] p-1 rounded w-1/2 cursor-pointer" onClick={() => planClickOption('resident')}>
                                <div className={`${selectedPlan === 'resident' ? 'bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] text-white' : 'bg-white'} py-3 rounded flex items-center justify-center gap-2`}>
                                    <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center">
                                        <img src="/assets/icons/resident.svg" className='w-4 h-auto' alt="home" />
                                    </div>
                                    <p className='text-center'>Residential</p>
                                </div>
                            </div>
                            <div className="border border-[#1BB0BE] p-1 rounded w-1/2 cursor-pointer" onClick={() => planClickOption('organization')}>
                                <div className={`${selectedPlan === 'organization' ? 'bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] text-white' : 'bg-white'} py-3 rounded flex items-center justify-center gap-2`}>
                                    <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center">
                                        <img src="/assets/icons/organization.svg" className='w-4 h-auto' alt="home" />
                                    </div>
                                    <p className='text-center'>Corporate</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 py-3">
                            <p className='text-[#011148]'>Shipping Address</p>
                            <div className="space-y-2">
                                <div className="bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] p-[1px] pl-[4px] outline-2 focus-within:outline-0 rounded-md overflow-hidden">
                                    <input type="text" name="email" className="w-full px-2 py-3 focus-within:border-blue-500 focus-within:outline-0 rounded-md placeholder:text-black" placeholder='Enter email address'></input>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 py-3">
                            <p className='text-[#011148]'>Enter Your Name</p>
                            <div className="grid gap-4 grid-cols-2">
                                <div className="col-span-1 bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] p-[1px] pl-[4px] outline-2 focus-within:outline-0 rounded-md overflow-hidden">
                                    <input type="text" name="email" className="w-full px-2 py-3 focus-within:border-blue-500 focus-within:outline-0 rounded-md placeholder:text-black" placeholder='First Name'></input>
                                </div>
                                <div className="col-span-1 bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] p-[1px] pl-[4px] outline-2 focus-within:outline-0 rounded-md overflow-hidden">
                                    <input type="text" name="email" className="w-full px-2 py-3 focus-within:border-blue-500 focus-within:outline-0 rounded-md placeholder:text-black" placeholder='Last Name'></input>
                                </div>
                                <div className="col-span-2 bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] p-[1px] pl-[4px] outline-2 focus-within:outline-0 rounded-md overflow-hidden">
                                    <input type="text" name="email" className="w-full px-2 py-3 focus-within:border-blue-500 focus-within:outline-0 rounded-md placeholder:text-black" placeholder='Phone Number'></input>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 py-3">
                            <p className='text-[#011148]'>Enter Your Address</p>
                            <div className="grid gap-4 grid-cols-2">
                                <div className="col-span-2 bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] p-[1px] pl-[4px] outline-2 focus-within:outline-0 rounded-md overflow-hidden">
                                    <input type="text" name="email" className="w-full px-2 py-3 focus-within:border-blue-500 focus-within:outline-0 rounded-md placeholder:text-black" placeholder='Address 1'></input>
                                </div>
                                <div className="col-span-2 bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] p-[1px] pl-[4px] outline-2 focus-within:outline-0 rounded-md overflow-hidden">
                                    <input type="text" name="email" className="w-full px-2 py-3 focus-within:border-blue-500 focus-within:outline-0 rounded-md placeholder:text-black" placeholder='Address 2'></input>
                                </div>
                                <div className="col-span-1 bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] p-[1px] pl-[4px] outline-2 focus-within:outline-0 rounded-md overflow-hidden">
                                    <input type="text" name="email" className="w-full px-2 py-3 focus-within:border-blue-500 focus-within:outline-0 rounded-md placeholder:text-black" placeholder='City'></input>
                                </div>
                                <div className="col-span-1 bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] p-[1px] pl-[4px] outline-2 focus-within:outline-0 rounded-md overflow-hidden">
                                    <input type="text" name="email" className="w-full px-2 py-3 focus-within:border-blue-500 focus-within:outline-0 rounded-md placeholder:text-black" placeholder='State/Region'></input>
                                </div>
                                <div className="col-span-1 bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] p-[1px] pl-[4px] outline-2 focus-within:outline-0 rounded-md overflow-hidden">
                                    <input type="text" name="email" className="w-full px-2 py-3 focus-within:border-blue-500 focus-within:outline-0 rounded-md placeholder:text-black" placeholder='Postal Code'></input>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button onClick={checkoutClickHandler} className='bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] text-white px-8 py-2 rounded max-w-fit'>Next</button>
                        </div>
                    </div>
                    <div className="col-span-4 text-[rgba(28,28,28,0.75)]">
                        <div className="h-1 w-full bg-[#2958FF]"></div>
                        <div className="py-2 px-2">
                            <p className='text_gradient py-3'>Booking Summary</p>
                            <div className="space-y-2">
                                <p className='flex gap-2 items-center'><img src="/assets/icons/home.svg" className='w-4 h-auto' alt="home" /><span>Ethernet Network</span></p>
                                <p className='flex gap-2 items-center'><img src="/assets/icons/calendar.svg" className='w-4 h-auto' alt="calender" /><span>11/03/2022 in the morning</span></p>
                                <p className='flex gap-2 items-center'><img src="/assets/icons/monthly.svg" className='w-4 h-auto' alt="monthly" /><span>Monthly</span></p>
                            </div>
                            <div className="space-y-2">
                                <p className='font-semibold'>Service section(s):</p>
                                <p className='w-full flex justify-between'><span>Sub total</span><span>$199.00</span></p>
                                <p className='w-full flex justify-between'><span>Sales Tax 8.875%</span><span>$15.75</span></p>
                                <div className="h-[1px] w-full bg-[#2958FF]"></div>
                                <p className='w-full flex justify-between'><span className='font-medium'>Total</span><span className='text_gradient'>$214.75</span></p>
                            </div>
                            <p className='py-2'><span className='text-red-500'>*</span>Recurring rates applied after initials visit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingOne