import React from 'react'
import Logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom'
import { useState } from "react";


const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className='grid grid-cols-12 max-w-[92%] mx-auto py-6 xs:hidden'>
        <div className="logo lg:col-span-3 my-auto sm:col-span-6">
          <Link to="./" ><img src={Logo} alt="" /></Link>
        </div>
        <button data-collapse-toggle="navbar-default" type="button" class="xs:inline-flex xs:items-center xs:p-2 xs:w-10 xs:h-10 xs:justify-end text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="navigation lg:col-span-4 sm:col-span-6 my-auto xs:hidden" id="navbar-default">
          <ul className='flex lg:justify-between my-auto sm:justify-evenly'>
            <li className='text-[#333]  text-base font-bold '>
              <Link to="./" >
                Home
              </Link>
            </li>
            <li className='text-[#333]  text-base font-bold '><Link to="/about">About Us</Link></li>
            <li className='text-[#333]  text-base font-bold '>
              <Link to="./blog">
                Blog
              </Link>
            </li>
            <li className='text-[#333]  text-base font-bold '>Contact Us</li>
          </ul>

        </div>
        <div className="login flex justify-center col-span-5 my-auto ml-36 sm:hidden lg:flex xs:hidden">
          <h3 className='text-[#333]  text-base font-bold text-center my-auto '>Sell bitcoin/Giftcard</h3>
          <button className='login-header text-white rounded-3xl text-center h-14 w-40 ml-16 px-7'>Login</button>
        </div>
      </div>

      {/* Mobile Navbar Only  */}
      <nav className="w-full bg-white shadow sm:hidden">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="logo lg:col-span-3 my-auto sm:col-span-6">
                <Link to="./" ><img src={Logo} alt="" /></Link>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="./" >
                    Home
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="./blog">
                    Blog
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/blogContent">Blog Content</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header