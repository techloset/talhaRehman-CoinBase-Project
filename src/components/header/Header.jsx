import React from 'react'
import './Header.css'
import  Logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <>
    <div className='grid grid-cols-12 max-w-[92%] mx-auto py-6'>
      <div className="logo col-span-3 my-auto">
        <img src={Logo} alt="" />
      </div>
      <div className="navigation col-span-4 my-auto">
        <ul className='flex justify-between my-auto'>
          <li className='text-[#333]  text-base font-bold '>Home</li>
          <li className='text-[#333]  text-base font-bold '>About Us</li>
          <li className='text-[#333]  text-base font-bold '>Blog</li>
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