import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'

const options = [
    {
        name: 'UID Solution',
        icon: '/assets/icons/uid.svg',
        link: '/'
    },
    {
        name: 'Protect with CCTV',
        icon: '/assets/icons/router.svg',
        link: '/'
    }, {
        name: 'Door Access',
        icon: '/assets/icons/box.svg',
        link: '/'
    }, {
        name: 'Ajax alarming system',
        icon: '/assets/icons/box.svg',
        link: '/'
    },
]

const dest = {
    title: 'store',
    link: '/store',
    child: {
        title: 'course',
        link: '/course',
        child: {
            title: 'ethernet network',
            link: '/ethernet-network',
        }
    }
}

const features = [
    {
        title: 'Product',
        assets: ['/assets/images/product01.png', '/assets/images/product02.png', '/assets/images/product03.png', '/assets/images/product04.png']
    },
    {
        title: 'Deployment',
        assets: ['/assets/images/product02.png', '/assets/images/product03.png', '/assets/images/product04.png']
    },
    {
        title: 'in the box',
        assets: ['/assets/images/product02.png', '/assets/images/product01.png', '/assets/images/product03.png', '/assets/images/product04.png']
    }
]

const specification = [
    {
        title: 'Mechanical',
        props: {
            dimensions: 'Info',
            Weight: 'Info'
        }
    },
    {
        title: 'Hardware',
        props: {
            dimensions: 'Information',
            Weight: 'Information'
        }
    }
]

const SingleProduct = () => {
    const [selectOption, setSelectOption] = useState(false)
    const [itemsToBuy, setItemsToBuy] = useState(2)
    const [selectedFeature, setSelectedFeature] = useState(features[0])
    const [isCollapseble, setIsCollapseble] = useState(false)

    const selectRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                // Click occurred outside the header, set currentLink to null
                setSelectOption(false)
            }
        }

        // Attach the event listener when the component mounts
        document.addEventListener('click', handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [])

    const selectOptionHandler = () => {
        setSelectOption(!selectOption)
    }

    const featureClickhandler = (feature) => {
        setSelectedFeature(feature)
    }

    return (
        <div className='max-w-7xl mx-auto px-2'>
            <div className='py-5 flex flex-wrap gap-10 justify-end md:justify-center'>
                {options.map(item => (
                    <Link to={item.link} key={item.name} className="flex flex-col gap-3 items-center">
                        <img src={item.icon} alt={item.name} className='w-8 h-8' />
                        <p className=''>{item.name}</p>
                    </Link>
                ))}
            </div>
            <Breadcrumb {...dest} />
            <div className="bg-gradient-to-b from-[rgba(27,176,190,0.3)] to-[rgba(41,88,255,0.3)] h-[1.5px] opacity-50 my-1"></div>
            <div className="space-y-3 py-5">
                <div className="flex justify-center flex-wrap gap-3">
                    <div className="bg-gradient-to-r from-[rgba(27,176,190,1)]
to-[rgba(41,88,255,1)] p-[1px] rounded-md overflow-hidden">
                        <button className='py-3 px-6 bg-[rgba(1,17,72,1)] rounded-md text-white text-sm'>Medium Capacity</button>
                    </div>
                    <div className="bg-gradient-to-r from-[rgba(27,176,190,1)]
to-[rgba(41,88,255,1)] p-[1px] rounded-md overflow-hidden">
                        <button className='py-3 px-8 bg-white rounded-md text-sm'>High Capacity</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-2">
                    <div className="h-auto">
                        <img src="/assets/images/product1.png" className={`h-full`} alt="product" />
                    </div>
                    <div className="flex flex-col justify-between gap-3">
                        <div className="space-y-2">
                            <p className='text_gradient text-2xl md:text-3xl lg:text-4xl'>Ubiquiti Unifi Network & Protection Training</p>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    <img src="/assets/icons/star.svg" alt="star" className='h-3 w-3' />
                                    <img src="/assets/icons/star.svg" alt="star" className='h-3 w-3' />
                                    <img src="/assets/icons/star.svg" alt="star" className='h-3 w-3' />
                                    <img src="/assets/icons/star.svg" alt="star" className='h-3 w-3' />
                                    <img src="/assets/icons/star-half.svg" alt="star" className='h-3 w-3' />
                                </div>
                                <p className='text-sm text-[#FF833E]'>(150 Reviews)</p>
                            </div>
                        </div>
                        <div className=" flex gap-2 items-start font-source">
                            <p className='font-bold text-2xl md:text-3xl lg:text-5xl text-[#011148]'>$10.99</p>
                            <p className='line-through font-semibold text-[rgba(28,28,28,0.75)] md:py-2 md:text-xl lg:text-2xl'>$14.99</p>
                        </div>
                        <p className='line-clamp-4 text-[rgba(28,28,28,0.75)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem quisquam, quo molestiae magni unde quasi quas fugit dolores adipisci nihil, a modi consequuntur excepturi! Eaque cupiditate deserunt at veritatis atque dicta fuga ab, provident accusamus repudiandae porro. Unde ratione eveniet, doloremque facere quisquam debitis natus sunt accusantium laboriosam, in assumenda, aperiam error mollitia animi blanditiis ipsa iure vero quas voluptates eos dolore incidunt amet. Debitis aliquam fugiat nihil in necessitatibus quasi nulla quaerat, tempore similique ullam excepturi doloribus doloremque qui vero. Ad cupiditate facere ea esse quaerat ipsum iusto, repellat perferendis libero amet sapiente exercitationem at enim eligendi? Esse?</p>
                        <div className="flex gap-3">
                            <div className="flex bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] rounded-md p-[1px]">
                                <div ref={selectRef} className="bg-white px-2 rounded-l-md text-[#2958FF] flex items-center gap-2 relative cursor-pointer" onClick={selectOptionHandler}>
                                    <p className='font-bold'>{itemsToBuy}</p>
                                    <img src="/assets/icons/arrow-down.svg" alt="arrow" className='h-3 w-3' />
                                    {selectOption &&
                                        <div className={`absolute top-12 left-0 ${selectOption ? 'h-auto' : 'h-0'} w-full border transition-all`}>
                                            <p onClick={() => setItemsToBuy(1)} className='py-1 px-2 text-center bg-white hover:bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] hover:text-white'>1</p>
                                            <p onClick={() => setItemsToBuy(2)} className='py-1 px-2 text-center bg-white hover:bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] hover:text-white'>2</p>
                                            <p onClick={() => setItemsToBuy(3)} className='py-1 px-2 text-center bg-white hover:bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] hover:text-white'>3</p>
                                            <p onClick={() => setItemsToBuy(4)} className='py-1 px-2 text-center bg-white hover:bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] hover:text-white'>4</p>
                                        </div>}
                                </div>
                                <button className='px-5 py-3 text-white'>Buy Now</button>
                            </div>
                            <div className="flex bg-gradient-to-r from-[#1BB0BE] to-[#2958FF] rounded-md overflow-hidden p-[1px]">
                                <button className='px-6 py-3 bg-white hover:bg-transparent rounded-md text-[rgba(28,28,28,0.75)] hover:text-white font-inter font-semibold transition-all'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 flex gap-3 flex-wrap justify-center px-2">
                {features && features.map(feature => (
                    <button onClick={() => featureClickhandler(feature)} key={feature.title} className={`py-3 px-6 ${selectedFeature.title === feature.title ? 'bg-[rgba(1,17,72,1)] text-white' : 'bg-[rgba(234,234,234,0.75)] text-black'} rounded-md text-sm capitalize`}>{feature.title}</button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2">
                {selectedFeature && selectedFeature.assets && selectedFeature.assets.length > 0 && selectedFeature.assets.map(feature => (
                    <img key={feature} src={feature} alt="feature" loading='lazy' />
                ))}
            </div>
            <div className="space-y-3 py-7 md:py-10">
                <div className="flex flex-wrap justify-between items-center text-[rgba(28,28,28,.75)]">
                    <p className='flex-1 font-source font-semibold text-xl'>Specification</p>
                    <span onClick={() => setIsCollapseble(!isCollapseble)} className={`transition-all cursor-pointer ${isCollapseble ? '-rotate-90' : ''}`}> &#9660; </span>
                    <div className="w-full h-[1.5px] bg-gradient-to-r from-[rgba(27,176,190,0.3)] to-[rgba(41,88,255,0.3)]"></div>
                </div>
                <div className={`${isCollapseble ? 'h-0 overflow-hidden' : 'h-auto'} transition-all`}>
                    {specification && specification.length > 0 && specification.map((section, index) => (
                        <div key={index} className="my-5">
                            <p className='underline underline-offset-8 text-lg font-poppins decoration-[rgba(28,28,28,0.5)] my-5'>{section.title}</p>
                            <ul>
                                {Object.entries(section.props).map(([propName, propValue], propIndex) => (
                                    <li key={propIndex} className="text-lg flex flex-col md:flex-row md:gap-3 text-[rgba(28,28,28,0.75)] my-2">
                                        <span className="md:w-40 font-medium">{propName}</span>
                                        <span>{propValue}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct