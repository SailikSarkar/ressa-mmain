
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

import item1 from './1.jpg'
import item2 from './2.jpg'
import item3 from './3.jpg'
import item4 from './4.jpg'
import item5 from './5.jpg'
import homeImage from "./home3.svg"
import homeImage2 from "./home5.svg"


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* <Popover as="header" className="relative">
        <div className="bg-gray-900 pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                Log in
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
              >
                Start free trial
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a
                    href="#"
                    className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                  >
                    Start free trial
                  </a>
                </div>
                <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-gray-900 hover:underline">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover> */}

      <main>
        <div className="pt-10 bg-gray-100 dark:bg-darkk-800 h-screen sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-yellow-600 rounded-full">
                      We're hiring
                    </span>
                    <span className="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon className="  animate-pulse ml-2 w-5 h-5 text-yellow-500 " aria-hidden="true" />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold dark:text-white text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl">
                    <span className="block">A better way to</span>
                    <span className="block text-yellow-500 dark:text-yellow-400 ">ship web apps</span>
                  </h1>
                  <p className="mt-3  text-xs font-medium text-gray-700 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block duration-500 bg-white dark:bg-gray-200 transition ease-in-out  w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 ring-2 dark:ring-white ring-darkk-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full hover:translate-x-3 hover:scale-110  duration-500 transition ease-in-out delay-150 py-3 px-4 rounded-md  bg-yellow-500 text-white font-medium hover:bg-red-600   focus:ring-offset-2  shadow-xl"
                          >
                            Start free trial
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-xs font-medium text-gray-700 dark:text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                        our{' '}
                        <a href="#" className="font-medium text-black dark:text-white">
                          terms of service
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16    dark:opacity-0 sm:-mb-48 h-full lg:m-0 lg:relative">
                <div className="mx-auto   max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  {/* <img
                    className="w-full   dark:invisible"
                    src={homeImage}
                    alt=""
                  /> */}

<img
                    className="w-full  lg:absolute lg:inset-y-0  sm:h-72  h-full dark:placeholder-invisible   lg:-left-20 lg:h-full lg:w-auto lg:max-w-none"
                    src={homeImage2}
                    alt=""
                  />
             





{/* <div className='  mb-0 w-full h-full overflow-hidden'>
            <div className="relative  w-full h-full p-16  overflowx-hidden">
                <div className="flex absolute left-0 animate-marquee-infinite">
                    <div className=' mt-20 p-3   justify-around'>
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item1} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item2} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item3} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item4} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item5} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item1} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item2} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item3} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item4} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item5} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item1} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item2} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item3} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item4} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item5} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item1} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item2} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item3} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item4} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg mt-5  mr-2' src={item5} alt="" />
                    
                    
                    
                    
                    
                

                  
                    </div>
                    <div className='    justify-around'>
                    
                    
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item1} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item2} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item3} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item4} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item5} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item1} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item2} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item3} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item4} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item5} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item1} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item2} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item3} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item4} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item5} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item1} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item2} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item3} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item4} alt="" />
                        <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item5} alt="" />
                    </div>
                    <div className=' ml-4 mt-40    justify-around'>
                    
                    
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item1} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item2} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item3} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item4} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item5} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item1} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item2} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item3} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item4} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item5} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item1} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item2} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item3} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item4} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item5} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item1} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item2} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item3} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item4} alt="" />
                    <img className=' w-40 h-60 rounded-3xl  shadow-lg  mt-5' src={item5} alt="" />
                </div>
                   
                    
                </div>
            </div>
        </div> */}







                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}