import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const checkoutClickHandler = () => {
        navigate('/shipping-1')
    }
    return (
        <div className='h-full'>
            <div className="max-w-7xl mx-auto py-20 px-2 h-full flex justify-center items-center">
                <div className="w-full grid grid-cols-12 gap-5">
                    <div className="col-span-8 flex flex-col items-end px-10">
                        <table
                            className="w-full border-l border-r my-5 border-primary"
                        // style={{
                        //     width: "-webkit-fill-available",
                        // }}
                        >
                            <thead className="border-b">
                                <tr className="bg-[#2958FF] text-white grid grid-cols-12">
                                    <th className="px-4 py-2 col-span-6">
                                        Product
                                    </th>
                                    <th className="px-4 py-2 col-span-3">
                                        Duration
                                    </th>
                                    <th className="px-4 py-2 col-span-3">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {services && services.length > 0 ? (
                                    services.map((item, index) => ( */}
                                <tr className="grid grid-cols-12 border-b">
                                    <td className="px-4 py-2 col-span-6 border-primary flex items-center justify-center">
                                        <p>Product 1</p>
                                    </td>
                                    <td className="px-4 py-2 col-span-3 border-primary flex items-center justify-center">
                                        30 Days
                                    </td>
                                    <td className="px-4 py-2 col-span-3 flex justify-center items-center gap-3">
                                        190$
                                        {/* <Link to={`/admin/dashboard/service/${item._id}`}
                                                    className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                                ><AiFillEdit /></Link>
                                                <button
                                                    onClick={() => deleteFaqGeneral(item)}
                                                    className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                                ><MdDelete /></button> */}
                                    </td>
                                </tr>
                                <tr className="grid grid-cols-12 border-b">
                                    <td className="px-4 py-2 col-span-6 border-primary flex items-center justify-center">
                                        <p>Product 1</p>
                                    </td>
                                    <td className="px-4 py-2 col-span-3 border-primary flex items-center justify-center">
                                        30 Days
                                    </td>
                                    <td className="px-4 py-2 col-span-3 flex justify-center items-center gap-3">
                                        190$
                                        {/* <Link to={`/admin/dashboard/service/${item._id}`}
                                                    className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                                ><AiFillEdit /></Link>
                                                <button
                                                    onClick={() => deleteFaqGeneral(item)}
                                                    className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                                ><MdDelete /></button> */}
                                    </td>
                                </tr>
                                {/* //     ))
                                // ) : (
                                //     <tr className="odd:bg-gray-100 grid grid-cols-3">
                                //         <td className="px-4 py-2 col-span-3 border-r border-primary text-center">
                                //             No data available
                                //         </td>
                                //     </tr>
                                // )} */}
                            </tbody>
                        </table>
                        <button onClick={checkoutClickHandler} className='bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] text-white px-5 py-2 rounded max-w-fit'>Checkout</button>
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

export default Cart