import React from 'react'
import HeroSection from '../../components/HeroSection'
import Accordion from '../../components/Accordion'

const services = [
  {
    title: 'Do I have to be at home?',
    description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
  },
  {
    title: 'lorum imsump is a dummy text to check the interace?',
    description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
  },
  {
    title: 'lorum imsump is a dummy text?',
    description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
  },
  {
    title: 'lorum imsump is a dummy text to check the interace?',
    description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
  },
  {
    title: 'lorum imsump is a dummy text to check the interace?',
    description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
  },
  {
    title: 'lorum imsump is a dummy text?',
    description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
  },
  {
    title: 'Is the work supervised?',
    description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
  },
  {
    title: 'lorum imsump is a dummy text to check the interace?',
    description: 'It’s not necessary, but you may be at home if you like. Otherwise, you have to leave the keys or code so we can enter your house.'
  }
]

const Home = () => {
  return (
    <div className=''>
      <HeroSection title={'VitalSAT Ubiquiti Networks Innovative Technologies'} />
      <div className="bg-[#00032E]">
        <div className="max-w-7xl mx-auto px-2 py-10 md:py-12">
          <div className="space-y-4">
            <p className='fotext-center font-semibold py-1'>Our Services</p>
            <p className='text_gradient text-xl md:text-3xl lg:text-4xl flex flex-col items-center'><span>We Provide the Best</span> <span>Service Ubiquiti Unifi network</span></p>
          </div>
          <div className="hidden md:flex flex-wrap justify-between my-5">
            <div className="w-fit space-y-2 order-1">
              <p className='text-[rgba(160,188,248,0.2)] text-6xl font-source font-bold text-center'>01</p>
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                  <p className='text_gradient text-xl text-center -mt-2'>Network Installation</p>
                </div>
                <div className="flex gap-24 items-end py-1 px-6">
                  <img src="/assets/icons/network1.svg" alt="network" className='h-14 w-auto' />
                  <img src="/assets/icons/network2.svg" alt="network" className='h-7 w-auto' />
                  <img src="/assets/icons/network3.svg" alt="network" className='h-14 w-auto' />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                <div className="flex flex-col items-start pl-4 justify-center">
                  <img src="/assets/icons/ethernet.svg" alt="ethernet" className='h-8 w-8' />
                  <p className='text_gradient py-1'>Ethernet</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src="/assets/icons/wireless.svg" alt="wireless" className='h-8 w-8' />
                  <p className='text_gradient py-1'>Wireless Deployment</p>
                </div>
                <div className="flex flex-col">
                  <img src="/assets/icons/fiber.svg" alt="fiber" className='h-8 w-8 ml-14' />
                  <p className='text_gradient py-1'>Fibre Optic Networks</p>
                </div>
              </div>
            </div>
            <div className="w-fit space-y-2 order-3 lg:order-2">
              <p className='text-[rgba(160,188,248,0.2)] text-6xl font-source font-bold text-center'>02</p>
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                  <p className='text_gradient text-xl text-center -mt-2'>Security</p>
                </div>
                <div className="">
                  <div className="flex gap-10 items-end py-1 px-6">
                    <img src="/assets/icons/security1.svg" alt="security" className='h-14 w-auto' />
                    <img src="/assets/icons/security2.svg" alt="security" className='h-9 w-28' />
                    <img src="/assets/icons/security3.svg" alt="security" className='h-14 w-auto' />
                  </div>
                  <div className="py-2 flex justify-between text-xs text-center">
                    <div className="flex flex-col items-start pl-4 justify-center">
                      <img src="/assets/icons/ethernet.svg" alt="ethernet" className='h-8 w-8' />
                      <p className='text_gradient py-1'>UID Solution</p>
                    </div>
                    <div className="flex justify-between gap-2">
                      <div className="flex flex-col items-center justify-center">
                        <img src="/assets/icons/wireless.svg" alt="wireless" className='h-8 w-8 ml-4' />
                        <p className='text_gradient py-1'>Protect with CCTV</p>
                      </div>
                      <div className="flex flex-col">
                        <img src="/assets/icons/fiber.svg" alt="fiber" className='h-8 w-8 ml-8' />
                        <p className='text_gradient py-1'>Door Access</p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <img src="/assets/icons/fiber.svg" alt="fiber" className='h-8 w-8 ml-[68px]' />
                      <p className='text_gradient py-1'>Ajax Alarming System</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-fit space-y-2 order-2 lg:order-3">
              <p className='text-[rgba(160,188,248,0.2)] text-6xl font-source font-bold text-center'>03</p>
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                  <p className='text_gradient text-xl text-center -mt-2'>EoT</p>
                </div>
                <div className="">
                  <div className="flex gap-24 items-end py-1 px-6">
                    <img src="/assets/icons/eot1.svg" alt="eot" className='h-14 w-auto' />
                    <img src="/assets/icons/eot2.svg" alt="eot" className='h-14 w-auto' />
                  </div>
                  <div className="py-2 flex justify-between text-xs text-center">
                    <div className="flex flex-col items-start pl-4 justify-center">
                      <img src="/assets/icons/ethernet.svg" alt="ethernet" className='h-8 w-8' />
                      <p className='text_gradient py-1'>Fixed Wire</p>
                    </div>
                    <div className="flex flex-col pr-2">
                      <img src="/assets/icons/wireless.svg" alt="fiber" className='h-8 w-8 ml-1' />
                      <p className='text_gradient py-1'>Wireless</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5 md:hidden">
            <div className="">
              <p className='text-[rgba(160,188,248,0.2)] text-5xl font-source font-bold'>01</p>
              <p className='text_gradient text-xl font-source py-2'>Network Installation</p>
              <div className="grid grid-cols-3 gap-5 text-xs text-center">
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <img src="/assets/icons/ethernet.svg" alt="network" className='ethernet' />
                  <p className='text_gradient py-1'>Ethernet</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <img src="/assets/icons/wireless.svg" alt="network" className='wireless' />
                  <p className='text_gradient py-1'>Wireless Deployment</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <img src="/assets/icons/fiber.svg" alt="fiber" className='' />
                  <p className='text_gradient py-1'>Fibre Optic Networks</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className='text-[rgba(160,188,248,0.2)] text-5xl font-source font-bold'>02</p>
              <p className='text_gradient text-xl font-source py-2'>Security</p>
              <div className="grid grid-cols-3 gap-5 text-xs text-center">
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <img src="/assets/icons/ethernet.svg" alt="network" className='ethernet' />
                  <p className='text_gradient py-1'>UID Solution</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <img src="/assets/icons/wireless.svg" alt="network" className='wireless' />
                  <p className='text_gradient py-1'>Protect with CCTV</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <img src="/assets/icons/fiber.svg" alt="fiber" className='' />
                  <p className='text_gradient py-1'>Door Access</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <img src="/assets/icons/fiber.svg" alt="fiber" className='' />
                  <p className='text_gradient py-1'>Door Access</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className='text-[rgba(160,188,248,0.2)] text-5xl font-source font-bold'>01</p>
              <p className='text_gradient text-xl font-source py-2'>Network Installation</p>
              <div className="grid grid-cols-3 gap-5 text-xs text-center">
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <img src="/assets/icons/ethernet.svg" alt="network" className='ethernet' />
                  <p className='text_gradient py-1'>Fixed Wire</p>
                </div>
                <div className="px-5 py-4 bg-[#011148] flex flex-col items-center justify-center">
                  <img src="/assets/icons/wireless.svg" alt="network" className='wireless' />
                  <p className='text_gradient py-1'>Wireless</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 py-10">
        <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'><span>We Provide the Best</span> <span>Service Ubiquiti Unifi network</span></p>
        <div className="py-10 space-y-10">
          <div className="space-y-3 flex flex-col items-center">
            <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'>Network Installation</p>
            <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
            <div className="w-full max-w-5xl py-5 md:py-10">
              <img src="/assets/demo.png" className='aspect-video w-full' alt="demo" />
            </div>
            <button className='capitalize bg-[#2958FF] hover:bg-[#0c30b3] transition-all px-6 py-3 rounded-md text-white'>contact us today</button>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'>Security</p>
            <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
            <div className="w-full max-w-5xl py-5 md:py-10">
              <img src="/assets/demo.png" className='aspect-video w-full' alt="demo" />
            </div>
            <button className='capitalize bg-[#2958FF] hover:bg-[#0c30b3] transition-all px-6 py-3 rounded-md text-white'>contact us today</button>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <p className='text-xl md:text-3xl lg:text-4xl flex flex-col items-center text-[#011148] font-bold'>Network Installation</p>
            <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
            <div className="w-full max-w-5xl py-5 md:py-10">
              <img src="/assets/demo.png" className='aspect-video w-full' alt="demo" />
            </div>
            <button className='capitalize bg-[#2958FF] hover:bg-[#0c30b3] transition-all px-6 py-3 rounded-md text-white'>contact us today</button>
          </div>

        </div>
      </div>
      <div className="bg-[rgba(1,17,72,0.05)]">
        <div className="max-w-7xl mx-auto px-2 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Accordion slColor="#FFDE17" items={services} />
            <div className="px-2 md:px-10 h-auto flex justify-center items-center">
              <img src="/assets/question.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home