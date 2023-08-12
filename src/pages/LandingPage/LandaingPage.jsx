import React from 'react'
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
import bitcoin from '../../images/bitcoin.svg'
import gift_card from '../../images/Gift-cards.svg'
import trade from '../../images/trade.svg'
import ourBlogIcon from '../../images/ourBlogIcon.svg'
import section7 from '../../images/sction7_2.svg'
import download from '../../images/downloadApp.svg'
import downloadStore from '../../images/Store.svg'
import iphone1 from '../../images/X-1.svg'
import iphone2 from '../../images/X-2.svg'
import section10 from '../../images/subscribe.svg'
import discover from '../../images/btn2.svg'
import readmore from '../../images/readmorebtn.svg'
import eth from '../../images/Eth.svg'
import bank from '../../images/bank-building.svg'
import { Link } from 'react-router-dom'


function LandaingPage() {
  return (
    <>
      {/* Section 1 hero section  */}
      <div className="heroBg min-h-[150vh]  grid lg:grid-cols-2 sm:grid  sm:grid-cols-1 xs:grid  xs:grid-cols-1 ">
        <div className='xl:w-[70%] lg:w-[90%] sm:w-[80%] xs:w-[90%] mx-auto mt-36 xs:mt-16'>
          <h2 className='text-5xl xs:text-2xl text-white font-["Open Sans"] leading-snug'>
            We provide easy solution
            to exchange your <span className='font-bold font-[poppins]'> Bitcoin/
              GiftCard for money</span>
          </h2>
          <p className='mt-8 leading-9 text-lg text-white font-normal w-[89%]'>CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.
          </p>
          <button className='mt-9'><img src={Get_started} alt="" /></button>

        </div>
        <div className='sm:mx-auto lg:mx-0' >
          <img src={hero2} alt="Bitcoin" className='mt-20' />

        </div>

      </div>

      {/* Section 2 Welcome to coinBase */}
      <div className='max-w-[90%] mx-auto'>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:mx-auto xs:grid-cols-1 xs:mx-auto mt-12'>
          <div className='xs:mt-6 '> <img src={section2} alt="Hi image" className='sm:block sm:mx-auto xs:block xs:mx-auto' /></div>
          <div>
            <img src={welcome} alt="" className='sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0 lg:mt-0' />
            <hr className=' w-16 border-2 border-pink-500 rounded-sm lg:mt-5 sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0 ' />
            <p className='lg:mt-9  text-base font-normal leading-10 w-[75%] xs:w-[90%] text-left sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0 '>We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.
            </p>
            <button className='lg:mt-12 sm:block xs:block sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0 '><img src={discover_btn} alt="Discover button" /></button>

          </div>
        </div>
      </div>
      {/* Section 3 */}

      <div className='heroBg2 min-h-[150vh] xs:hidden sm:hidden lg:block '>
        <div className='pt-[33%]'>
          <div className='max-w-[80%] mx-auto bg-white py-10 rounded-3xl'>
            <div className='flex justify-around'>
              <h2><img src={OurRates} alt="" /></h2>
              <h2><img src={OurRates2} alt="" /></h2>
              <h2><img src={OurRates3} alt="" /></h2>
            </div>
            <hr className='mt-4 border-2 border-[rgba(187, 187, 187, 1)]' />
            <div className='grid grid-cols-3'>
              <div>
                <div className='mt-6'>
                  <div className='flex  justify-evenly'>
                    <img src={bitcoin} alt="" />
                    <div className='ml-3'>
                      <p className='mb-3'>We Buy @ ₦350/$</p>
                      <p>We Buy @ ₦350/$</p>
                    </div>
                  </div>
                  <div className='flex justify-evenly mt-9 '>
                    <img src={eth} alt="" />
                    <div className='ml-4'>
                      <p className='mb-3'>We Buy @ ₦350/$</p>
                      <p>We Buy @ ₦350/$</p>
                    </div>
                  </div>

                </div>
              </div>
              <div>
                <div className='mt-6'>
                  <div className='flex  justify-evenly items-center'>
                    <img src={bank} alt="" />
                    <p>Bank Transfer</p>
                    <div className='ml-3'>
                      <p className='mb-3 font-semibold'>#3452030300303.24/$</p>
                    </div>
                  </div>
                  <div className='flex mt-5  justify-evenly items-center'>
                    <img src={bitcoin} alt="" />
                    <p>Bank Transfer</p>
                    <div className='ml-3'>
                      <p className='mb-3 '><span className='font-semibold'>399.98</span>BTC</p>
                    </div>
                  </div>
                  <div className='flex mt-5 justify-evenly items-center'>
                    <img src={eth} alt="" />
                    <p>Bank Transfer</p>
                    <div className='ml-3'>
                      <p className='mb-3 '><span className='font-semibold'>100</span>ETH</p>
                    </div>
                  </div>


                </div>

              </div>
              <div className='flex flex-col justify-around items-center'>
                <div className='flex  justify-evenly items-center'>
                  <p>Bitcoin BTC      Bank
                    Transfer NGN</p>
                </div>
                <div>
                  1.16 BTC = 696152299929.23 NGN
                </div>
                <div>
                  Amazon Card    -  Bank
                  Transfer NGN
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>


      {/* Section 4 */}
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:mx-auto xs:grid-cols-1 xs:mx-auto mt-12 max-w-[90%] mx-auto '>
        <div>
          <img src={great_exp} alt=""  className='sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0 lg:mt-0'/>
          <hr className='w-16 border-2 border-pink-500 rounded-sm lg:mt-5 sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0' />
          <p className='lg:mt-9  text-base font-normal leading-10 w-[75%] xs:w-[90%] text-left sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0'>CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
          </p>
          <button className='lg:mt-12 sm:block xs:block sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0 '><img src={discover_btn} alt="Discover button" /></button>
        </div>
        <div> <img src={section4} alt="Hi image" className='sm:block sm:mx-auto xs:block xs:mx-auto'/></div>
      </div>

      {/* Section 5 Trade from anywhere */}
      <div className='landingSection5 min-h-[40vh] '>
        <div className='mt-16'>.
          <div className='lg:max-w-[50%] md:w-[70%] sm:w-[80%] xs:w-[85%] mx-auto mt-24 mb-20 border-2 pb-10 bg-white rounded-2xl  '>
            <div className='pt-10 xs:py-3'><img src={trade} alt="" className='block mx-auto' /></div>
            <hr className='w-10 border-2 mx-auto mt-3 border-[#FD749B] rounded-md' />
            <div className='grid grid-cols-2 xs:grid-cols-1 mt-10'>
              <div className='p-20 mx-auto cardborderLanding'>
                <img src={bitcoin} alt="bitcoin" />
                <h3 className='mt-5 font-bold text-base'>Bitcoin</h3>
              </div>
              <div className='p-20 mx-auto cardborderLanding xs:mt-5'>
                <img src={gift_card} alt="bitcoin" />
                <h3 className='mt-5 font-bold text-base'>Gift Cards</h3>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Section 6  our blogs */}
      <div className=''>
        <div className='max-w-[90%] mx-auto'>
          <h2 className='text-center'><img src={ourBlogIcon} alt="Our Blogs" className='block mx-auto' /></h2>
          <hr className='w-12 border-2 mx-auto mt-3 border-[#FD749B] rounded-md' />
          <h3 className='font-normal text-base text-center mt-7'>Get to know the latest stuff via our blog post.</h3>
          <div className='flex justify-center relative mt-20'>

            <div className='border-2 bg-white relative left-12 -z-10 w-[30%] grayscale p-10 rounded-2xl xs:hidden sm:hidden lg:block'>
              <p className='flex justify-start mt-3 text-[#888888] text-xs'>
                <span> 19 June, 2019 </span>
                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2' />
                <span>BUSINESS</span>
              </p>
              <h2 className=' text-2xl mt-3'>HOW TO SELL YOUR ITUNES
                GIFTCARD WITH US</h2>
              <p className='mt-3'>Lorem ipsum dolor sit amet, magna habemus
                ius ad, qui minimum voluptaria in. Ad mei modus
                quodsi complectitur, postea...</p>
              <button className='mt-3 grayscale'><img src={readmore} alt="" /></button>
            </div>

            <div className='border-2 border-[#FD749B] bg-white relative sm:w-[80%] lg:w-[30%] xs:w-[95%] z-10 p-10 rounded-2xl'>
              <p className='flex justify-start mt-3  text-xs'>
                <span> 19 June, 2019 </span>
                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2' />
                <span>BUSINESS</span>
              </p>
              <h2 className='font-bold text-2xl mt-3 bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent'>ETH TO NAIRA EXCHANGE
                RATE IS NOW #400 PER...</h2>
              <p className='mt-3'>Lorem ipsum dolor sit amet, magna habemus
                ius ad, qui minimum voluptaria in. Ad mei modus
                quodsi complectitur, postea...</p>
             <Link to="/blogContent" ><button className='mt-3'><img src={readmore} alt="" /></button></Link>
            </div>


            <div className='border-2 relative -z-10 right-12 w-[30%] grayscale p-10 rounded-2xl xs:hidden sm:hidden lg:block'>
              <p className='flex justify-start mt-3 text-[#888888] text-xs'>
                <span> 19 June, 2019 </span>
                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2' />
                <span>BUSINESS</span>
              </p>
              <h2 className=' text-2xl mt-3'>ETH TO NAIRA EXCHANGE
                RATE IS NOW #400 PER...</h2>
              <p className='mt-3'>Lorem ipsum dolor sit amet, magna habemus
                ius ad, qui minimum voluptaria in. Ad mei modus
                quodsi complectitur, postea...</p>
              <button className='mt-3 grayscale'><img src={readmore} alt="" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className='section7Bg min-h-[190vh] xs:min-h-[150vh]'>
        <div className='max-w-[80%] mx-auto '>.
          <div className='w-[30%]  xs:w-[90%] mx-auto mt-96'>
            <h2 className='text-center font-bold text-3xl text-white'>10,000 Satisfied clients
              around the world</h2>
            <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
          </div>
          <div className='w-[40%] xs:w-[90%] mx-auto mt-12 text-white'>
            <p className='text-base text-center font-normal'>Yeah! we’re proud with numbers. We’ve helped thousands of clients all around the world with our bespoke service. Hover ontop of them pic to view their testimonials.</p>

          </div>
          <div className='xs:hidden' >
            <img src={section7} alt=" Image" />
          </div>

        </div>
      </div>

      {/* Section 8 */}
      <div className='max-w-[80%] mx-auto mb-10'>
        <div className='flex flex-col items-center'>
          <div className='xs:py-5'><img src={download} alt="" /></div>
          <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
          <div className='w-[30%] xs:w-[80%] mt-7'>
            <p className='text-base text-center font-normal leading-loose'>Discover exclusive deals and discounts with
              our mobile experience.</p>
          </div>
          <div className='mt-5'>
            <img src={downloadStore} alt="" />
          </div>
        </div>

      </div>

      {/* Section 9 */}
      <div className='section9 max-h-[80vh] mb-96 xs:hidden'>.
        <div className='flex mt-64 justify-center  flex-wrap' >
          <div className='mr-5'>
            <img src={iphone1} alt="" />
          </div>
          <div>
            <img src={iphone2} alt="" />
          </div>
        </div>

      </div>

      {/* Section 10 */}
      <div className='mt-48'>
        <div className='flex flex-col items-center '>
          <h2 className='xs:px-5'><img src={section10} alt="" /></h2>
          <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
          <div className='w-[30%] xs:w-[80%] mt-7'>
            <p className='text-base text-center font-normal leading-loose'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
          </div>
        </div>
        <div className='flex justify-center  my-12  mb-36'>
          <form action="" className='flex justify-center xs:grid xs:grid-cols-1 xs:gap-5'>
            <input type="Email" placeholder='Email *' className=' mx-8 px-3 py-2 xs:mx-auto placeholder-gray-500 border border-pink-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 w-96 xs:w-[90%] ' required />
            <button type='submit' className='self-center xs:mx-auto'><img src={discover} alt="" className='' /></button>
          </form>

        </div>
      </div>

      {/* End  */}







    </>
  )
}

export default LandaingPage