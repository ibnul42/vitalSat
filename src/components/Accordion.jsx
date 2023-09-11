import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'


const Accordion = ({ items, slColor }) => {
    const [showDetail, setShowDetail] = useState(null)
    const expandHandler = (index) => {
        if (showDetail === index) setShowDetail(null)
        else setShowDetail(index)
    }
    return (
        <div className="w-full mx-auto p-2 font-semibold">
            {items && items.map((item, index) => (
                <div key={index} className={`flex flex-col ${showDetail === index ? 'bg-gradient-to-r from-[#1BB0BE] to-[#2958FF]' : 'bg-[#011148]'} rounded-md my-2 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)]`}>
                    <div onClick={() => expandHandler(index)} className={`px-3 py-2 flex gap-1 justify-between items-center cursor-pointer`}>
                        <p className='w-[95%] font-bold md:text-lg text-white'>{item.title}</p>
                        <p className='text-2xl text-yellow-700'>
                            <img src="/assets/icons/arrow.svg" alt="arrow" className={`${showDetail === index && 'rotate-180'} transition-all w-full`} />
                        </p>
                    </div>
                    <p className={`${showDetail === index ? 'h-auto bg-[#EAEAEA] py-2' : 'h-0 overflow-hidden'} transition-all text-sm px-3`}>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

Accordion.propTypes = {
    items: PropTypes.array,
    slColor: PropTypes.string,
}

export default Accordion