import React from 'react'
import PropTypes from 'prop-types'

const HeroSection = ({ title, text, options }) => {
    return (
        <div className='bg-gradient-to-b from-[#01032A] via-[#010213] to-[#00011D] h-[450px] md:h-[500px] py-5'>
            <div className="max-w-7xl h-full mx-auto px-2 flex flex-col">
                {options && options.length > 0 &&
                    <div className='py-5 flex flex-wrap gap-10 justify-end md:justify-center'>
                        {options.map(item => (
                            <div key={item.name} className="flex flex-col gap-3 items-center">
                                <img src={item.icon} alt={item.name} className='w-8 h-8' />
                                <p className='text-white'>{item.name}</p>
                            </div>
                        ))}
                    </div>}
                <div className="flex-1 flex flex-col justify-end md:justify-start">
                    {text && <p className='text-[#FDD10E] font-semibold py-1'>{text}</p>}
                    {title && <h1 className='text_gradient font-extrabold text-3xl md:text-4xl text-center py-5'>{title}</h1>}
                </div>
            </div>
        </div>
    )
}

HeroSection.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    options: PropTypes.array
}

export default HeroSection