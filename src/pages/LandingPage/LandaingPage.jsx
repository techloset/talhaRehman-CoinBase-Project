import React from 'react'
import './LandingPage.css'
import hero2 from '../../images/hero2.svg'
import Get_started from '../../images/Button.svg'
import section2 from '../../images/Section2.svg'
import welcome from '../../images/welcome.svg'
import discover_btn from '../../images/btn2.svg'
import section4 from '../../images/section4.svg'
import great_exp from '../../images/great-exp.svg'
import OurRates from '../../images/OurRates.svg'
import OurRates2 from '../../images/OurRates2.svg'
import OurRates3 from '../../images/OurRates3.svg'

function LandaingPage() {
  return (
    <>
    {/* Section 1 hero section  */}
      <div className="heroBg min-h-[100vh]  flex justify-around ">
        <div className='w-[39%] mt-36'>
        <h2 className='text-5xl text-white font-["Open Sans"] leading-snug'>
          We provide easy solution
          to exchange your <span className='font-bold font-[poppins]'> Bitcoin/
          GiftCard for money</span>
        </h2>
        <p className='mt-8 leading-9 text-lg text-white font-normal w-[89%]'>CoinBase is a platform for trading your bitcoin and
          giftcard at the best rate, why not give us a trial.
        </p>
        <button className='mt-9'><img src={Get_started} alt="" /></button>
        
        </div>
         <div >
          <img src={hero2} alt="Bitcoin" className='mt-20' />

        </div>

      </div>

      {/* Section 2 Welcome to coinBase */}
      <div className='max-w-[90%] mx-auto'>
        <div className='grid grid-cols-2 mt-12'>
          <div> <img src={section2} alt="Hi image" /></div>
          <div>
            <img src={welcome} alt="" />
            <hr className=' w-16 border-2 border-pink-500 rounded-sm mt-5' />
            <p className='mt-9  text-base font-normal leading-10 w-[75%] text-left'>We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.
            </p>
            <button className='mt-12'><img src={discover_btn} alt="Discover button" /></button>
            
          </div>
        </div>
      </div>
        {/* Section 3 */}

        <div className='heroBg2 h-[100vh] '>
          <div className='pt-[23%]'>
          <div className='max-w-[80%] mx-auto bg-white py-10 rounded-3xl'>
            <div className='flex justify-around'>
              <h2><img src={OurRates} alt="" /></h2>
              <h2><img src={OurRates2} alt="" /></h2>
              <h2><img src={OurRates3} alt="" /></h2>
            </div>
            <hr className='mt-4 border-2 border-[rgba(187, 187, 187, 1)]' />
            <div className='grid grid-cols-3'>
              <div> he</div>
              <div>sds</div>
              <div>sd</div>
            </div>

          </div>
          </div>

        </div>


        {/* Section 4 */}
        <div className='grid grid-cols-2 mt-12 max-w-[90%] mx-auto '>
          <div>
            <img src={great_exp} alt="" />
            <hr className='w-16 border-2 border-pink-500 rounded-sm mt-5' />
            <p className='mt-9  text-base font-normal leading-10 w-[75%] text-left'>CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
            </p>
            <button className='mt-12'><img src={discover_btn} alt="Discover button" /></button>
          </div>
          <div> <img src={section4} alt="Hi image" /></div>
        </div>

        {/* Section 5 */}
        <div>
          <div>
            <div>Trade from anywhere</div>


          </div>
        </div>
        
        





      

      
      
    </>
  )
}

export default LandaingPage