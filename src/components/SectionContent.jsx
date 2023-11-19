import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SectionContent = ({ title, description }) => {
    return (
        <div className="space-y-3 flex flex-col items-center">
            <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'>{title}</p>
            <p className='max-w-4xl text-center'>{description}</p>
            <div className="w-full max-w-5xl py-5 md:py-8">
                <img src="/assets/demo.png" className='aspect-video w-full' alt="demo" />
            </div>
            <Link to='/' className='capitalize bg-[#2958FF] hover:bg-[#0c30b3] transition-all px-6 py-3 rounded-md text-white'>contact us today</Link>
        </div>
    )
}

SectionContent.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default SectionContent