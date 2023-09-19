import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Breadcrumb = ({ title, link, child }) => {
    return (
        <div className="flex gap-2">
            <div className='py-1 flex items-center gap-1 font-poppins text-sm text-[rgba(28,28,28,0.75)]'>
                <Link to={link} className='capitalize'>{title}</Link>
                {child && <img src='/assets/icons/arrow-black.svg' className='-rotate-90 w-3 h-3' alt='arrow' />}
            </div>
            {child && <Breadcrumb {...child} />}
        </div>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    child: PropTypes.object,
}


export default Breadcrumb
