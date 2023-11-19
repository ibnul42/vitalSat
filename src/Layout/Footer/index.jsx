import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("CLICKED")
  }
  return (
    <div className='bg-[#F2F3F6]'>
      <div className="max-w-7xl mx-auto px-2 py-5 space-y-5">
        <div className="grid grid-cols-12 gap-4 text-[rgba(28,28,28,0.75)]">
          <div className="col-span-12 md:col-span-5 lg:col-span-3 space-y-2">
            <img src="/assets/logo.png" alt="logo" className='h-auto w-72' />
            {/* <p>Lorem ipsum dolor sit amet consectetur. Tincidunt egestas condimentum at egestas vel dis sed sagittis. Fusce sagittis malesuada.</p> */}
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-4">
            <h5 className='font-bold text-2xl mb-4 text-[rgba(0,4,46,1)] font-source'>Location</h5>
            <div className="py-2 flex flex-col gap-2">
              <p>22-24 Napier Road, South Croydon, Surrey, CR0 6EX</p>
              <a href="mailto:outline@address.com">outline@address.com</a>
              <a href="tel:+13000000000">+1 30000 00000</a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-4">
            <h5 className='font-bold text-2xl mb-4 text-[rgba(0,4,46,1)] font-source'>Sitemap</h5>
            <div className="py-2 flex flex-col gap-2">
              <Link to='/network-intallation'>Network Installation</Link>
              <Link to='/security-network'>Security</Link>
              <Link to='/broadband-network'>Broadband</Link>
              <Link to='/eot-network'>EoT</Link>
              <Link to='/terms'>Terms & Conditions</Link>
            </div>
          </div>
          {/* <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <h5 className='font-bold text-2xl mb-4 text-[rgba(0,4,46,1)] font-source'>Sitemap</h5>
            <div className="py-2 flex flex-col gap-2">
              <Link to='/terms'>Terms & Conditions</Link>
            </div>
          </div> */}
          {/* <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <h5 className='font-bold text-2xl mb-4 text-[rgba(0,4,46,1)] font-source'>Join A Newsletter</h5>
            <form onSubmit={submitHandler} className="flex rounded overflow-hidden">
              <input type="text" className="min-w-0 flex-1 px-2 py-3 placeholder:text-xs bg-[rgba(253,209,14,0.2)] focus:text-black focus:outline-0" placeholder="Input your email here" />
              <button type='submit' className="flex justify-center items-center h-auto w-10 bg-[#FDD10E]">
                <img src="/assets/icons/send.svg" className="w-4 h-4 pl-1" alt="" />
              </button>
            </form>
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row justify-between text-[rgba(28,28,28,0.75)]">
          <div className="py-2">
            <p className='text-center'>Copyright VitalSat Installation</p>
          </div>
          <div className="space-x-5 flex justify-between">
            <Link to='/terms'>Privacy Policy</Link>
            <Link to='/terms'>Term of Use</Link>
            <Link to='/terms'>Partner</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer