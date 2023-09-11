import React from 'react'
import PropTypes from 'prop-types'

const HeroSection = ({ title }) => {
    return (
        <div className='bg-gradient-to-b from-[#01032A] via-[#010213] to-[#00011D]'>
            <div className="max-w-7xl mx-auto px-2 h-96 flex items-end md:items-start">
                <h1 className='text_gradient font-extrabold py-10 text-3xl md:text-4xl lg:text-6xl'>{title}</h1>
            </div>
        </div>
    )
}

HeroSection.propTypes  = {
    title: PropTypes.string
}

export default HeroSection