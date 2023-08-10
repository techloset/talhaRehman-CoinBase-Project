import React from 'react'
import './Header.css'
import Logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='grid grid-cols-12 max-w-[92%] mx-auto py-6'>
        <div className="logo col-span-3 my-auto">
          <Link to="./" ><img src={Logo} alt="" /></Link>
        </div>
        <div className="navigation col-span-4 my-auto">
          <ul className='flex justify-between my-auto'>
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
        <div className="login flex justify-center col-span-5 my-auto ml-36">
          <h3 className='text-[#333]  text-base font-bold text-center my-auto '>Sell bitcoin/Giftcard</h3>
          <button className='login-header text-white rounded-3xl text-center h-14 w-40 ml-16'>Login</button>
        </div>
      </div>
    </>
  )
}

export default Header