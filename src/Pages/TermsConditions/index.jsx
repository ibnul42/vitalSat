import React, { useEffect } from 'react'

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0,100)
    },[])
    return (
        <div>
            <div className="relative">
                <img src="/assets/images/tos.png" className='h-48 md:h-full w-full object-cover' alt="" />
                <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
                    <p className='text-white font-bold md:text-xl lg:text-2xl'>Terms & Conditions</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-10 px-2">
                <div className="my-7 py-2 border-b-[1.5px] rounded-lg border-[rgba(27,176,190,0.6)]">
                    <div className="flex gap-2 items-center">
                        <p className='text_gradient'>Terms</p>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-[rgba(27,176,190,0.4)] to-[rgba(41,88,255,0.4)]"></div>
                    </div>
                    <p className='text-[rgba(28,28,28,0.75)] text-sm py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis molestiae soluta nemo provident magni possimus inventore. Nesciunt nostrum voluptates beatae, unde dolore numquam tenetur sapiente maxime sunt neque similique architecto sit eius quas amet. Dolor, nam animi. Quos fuga, numquam eius tempora commodi quisquam officia, iusto eveniet nostrum laudantium id? Deleniti asperiores in temporibus quidem quisquam, blanditiis sint dignissimos, fugit alias porro repellat accusantium, sapiente eum! Praesentium beatae commodi quasi unde incidunt rem, illo libero, dolorem quae iusto placeat.</p>
                </div>
                <div className="my-7 py-2 border-b-[1.5px] rounded-lg border-[rgba(27,176,190,0.6)]">
                    <div className="flex gap-2 items-center">
                        <p className='text_gradient'>Refund Policy:</p>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-[rgba(27,176,190,0.4)] to-[rgba(41,88,255,0.4)]"></div>
                    </div>
                    <p className='text-[rgba(28,28,28,0.75)] text-sm py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis molestiae soluta nemo provident magni possimus inventore. Nesciunt nostrum voluptates beatae, unde dolore numquam tenetur sapiente maxime sunt neque similique architecto sit eius quas amet. Dolor, nam animi. Quos fuga, numquam eius tempora commodi quisquam officia, iusto eveniet nostrum laudantium id? Deleniti asperiores in temporibus quidem quisquam, blanditiis sint dignissimos, fugit alias porro repellat accusantium, sapiente eum! Praesentium beatae commodi quasi unde incidunt rem, illo libero, dolorem quae iusto placeat.</p>
                </div>
                <div className="my-7 py-2 border-b-[1.5px] rounded-lg border-[rgba(27,176,190,0.6)]">
                    <div className="flex gap-2 items-center">
                        <p className='text_gradient'>Delivery Policy:</p>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-[rgba(27,176,190,0.4)] to-[rgba(41,88,255,0.4)]"></div>
                    </div>
                    <p className='text-[rgba(28,28,28,0.75)] text-sm py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis molestiae soluta nemo provident magni possimus inventore. Nesciunt nostrum voluptates beatae, unde dolore numquam tenetur sapiente maxime sunt neque similique architecto sit eius quas amet. Dolor, nam animi. Quos fuga, numquam eius tempora commodi quisquam officia, iusto eveniet nostrum laudantium id? Deleniti asperiores in temporibus quidem quisquam, blanditiis sint dignissimos, fugit alias porro repellat accusantium, sapiente eum! Praesentium beatae commodi quasi unde incidunt rem, illo libero, dolorem quae iusto placeat.</p>
                </div>
                <div className="my-7 py-2 border-b-[1.5px] rounded-lg border-[rgba(27,176,190,0.6)]">
                    <div className="flex gap-2 items-center">
                        <p className='text_gradient'>Cancellation Policy:</p>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-[rgba(27,176,190,0.4)] to-[rgba(41,88,255,0.4)]"></div>
                    </div>
                    <p className='text-[rgba(28,28,28,0.75)] text-sm py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis molestiae soluta nemo provident magni possimus inventore. Nesciunt nostrum voluptates beatae, unde dolore numquam tenetur sapiente maxime sunt neque similique architecto sit eius quas amet. Dolor, nam animi. Quos fuga, numquam eius tempora commodi quisquam officia, iusto eveniet nostrum laudantium id? Deleniti asperiores in temporibus quidem quisquam, blanditiis sint dignissimos, fugit alias porro repellat accusantium, sapiente eum! Praesentium beatae commodi quasi unde incidunt rem, illo libero, dolorem quae iusto placeat.</p>
                </div>
            </div>
        </div>
    )
}

export default TermsConditions