import React from 'react'
import footer_logo from '../../images/Footer-Logo.svg'
import footer_social from '../../images/Social-Media-Icons.svg'
import mask from '../../images/Mask.png'
import mask_2 from '../../images/mask-2.svg'

function Footer() {
    return (
        <>
            <div className='bg-[#151515] text-white'>
                <div className='grid grid-cols-12  gap-1 py-20  max-w-[90%] mx-auto'>
                    <div className='xl:col-span-5 lg:col-span-4 sm:col-span-6 xs:col-span-12 p-4 '>
                        <div><img src={footer_logo} alt="logo"  /></div>
                        <div className='mt-10 w-[70%] xs:w-[90%]'>
                            <p className='text-[#A2A2A2] text-sm font-normal text-justify leading-6'> Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum</p>
                        </div>
                        <div className='mt-8'>
                            <div className="footer-social-icon">
                                <img src={footer_social} alt="Social Icons Footer" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-2 sm:col-span-6 sm:mt-3 lg:mt-0 xs:col-span-12 xs:ml-4 xs:mt-8 '>
                        <div><h2 className='font-medium text-lg'>CoinBase Links</h2></div>
                        <div className='mt-8'>
                            <ul className='text-[#A2A2A2] text-xs  flex flex-col gap-4'>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Sell</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className='xl:col-span-1 lg:col-span-2 sm:col-span-6 sm:mt-10 lg:mt-0 xs:col-span-12 xs:ml-4 xs:mt-8 xl:w-[120%]'>
                        <div><h2 className='font-medium text-lg'>Contact Us</h2></div>
                        <div className='mt-8'>
                            <ul className='text-[#A2A2A2] text-xs flex flex-col gap-4'>
                                <li><a href="tel:(+234) 137632128">
                                    (+234) 137632128
                                </a>
                                </li>
                                <li><a href="mailto:coinbase@yahoo.com">Coinbase@yahoo.com</a></li>
                                <li><address className='pb-6 not-italic'>Address goes here</address></li>
                                <li></li>
                                <li>Download Our App</li>
                            </ul>
                        </div>
                    </div>
                    <div className='xl:col-span-4 lg:col-span-4 sm:col-span-6 xs:col-span-12 lg:ml-24 sm:mt-10 lg:mt-0 xs:ml-4 xs:mt-8 '>
                    <div><h2 className='font-medium text-lg'>CoinBase Instagram</h2></div>
                        <div className='mt-8 flex flex-wrap gap-3 max-w-xs '>
                            <img src={mask_2} alt="Instagram Mask" />
                            <img src={mask_2} alt="Instagram Mask" />
                            <img src={mask_2} alt="Instagram Mask" />
                            <img src={mask_2} alt="Instagram Mask" />
                            <img src={mask_2} alt="Instagram Mask" />
                            <img src={mask_2} alt="Instagram Mask" />
                            <img src={mask_2} alt="Instagram Mask" />
                            <img src={mask_2} alt="Instagram Mask" />
                           
                        </div>
                    </div>
                    
                </div>
                <div className='col-span-full max-w-[90%] mx-auto pb-5'><p className='text-[#A2A2A2] font-normal text-base'>© 2019  Designed by Cr8tiv_yemmy</p></div>
                
            </div>
        </>
    )
}

export default Footer