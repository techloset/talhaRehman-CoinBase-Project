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
import testimonial from '../../images/Testimonial.svg'
import scrollt from '../../images/Scroll.svg'


function LandaingPage() {
  return (
    <>
      {/* Section 1 hero section  */}
      <div className="heroBg min-h-[130vh] xs:min-h-[160vh]  grid lg:grid-cols-2 sm:grid  sm:grid-cols-1 xs:grid  xs:grid-cols-1 ">
        <div className='xl:w-[75%] lg:w-[90%] sm:w-[80%] xs:w-[90%] mx-auto mt-36 xs:mt-16 xl:ml-48 lg:ml-36'>
          <h2 className='lg:text-[40px] sm:text-4xl xs:text-3xl font-normal text-white font-["Open Sans"] lg:leading-normal sm:leading-normal xs:leading-snug'>
            We provide easy solution
            to exchange your <span className='font-bold font-[poppins]'> Bitcoin/
              GiftCard for money</span>
          </h2>
          <p className='mt-8 leading-9 text-lg text-white font-normal w-[89%]'>CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.
          </p>
          <button className='mt-9'><img src={Get_started} alt="" /></button>

        </div>
        <div className='sm:mx-auto lg:mx-0 lg:ml-10' >
          <img src={hero2} alt="Bitcoin" className='sm:mt-16 xs:mt-3' />

        </div>

      </div>

      {/* Section 2 Welcome to coinBase */}
      <div className='max-w-[90%] mx-auto'>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:mx-auto xs:grid-cols-1 xs:mx-auto mt-12'>
          <div className='xs:mt-6 '> <img src={section2} alt="Hi image" className='sm:block sm:mx-auto xs:block xs:mx-auto' /></div>
          <div className='sm:mt-10 lg:mt-0 xs:mt-9'>
            <h2 className='font-bold lg:text-[28px] sm:text-2xl xs:text-2xl bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent xs:text-center sm:text-center lg:text-left '>Welcome to CoinBase</h2>
            <hr className=' w-16 border-2 border-pink-500 rounded-sm lg:mt-5 sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0 ' />
            <p className='lg:mt-9  text-base font-normal leading-10 w-[80%] xs:w-[90%] text-left sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0 '>We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.
            </p>
            <button className='lg:mt-12 sm:block xs:block sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0 '><img src={discover_btn} alt="Discover button" /></button>

          </div>
        </div>
      </div>
      {/* Section 3 */}

      <div className='heroBg2 min-h-[150vh] xs:hidden sm:hidden lg:block '>
        <div className='xl:pt-[35%] lg:pt-[45%]'>
          <div className='max-w-[76%] mx-auto bg-white py-10 rounded-3xl'>
            <div className='flex justify-around'>
              <h2><img src={OurRates} alt="" /></h2>
              <h2><img src={OurRates2} alt="" /></h2>
              <h2><img src={OurRates3} alt="" /></h2>
            </div>
           
            <hr className='mt-4 border-2 border-[rgba(187, 187, 187, 1)]' />
            <div className='grid grid-cols-12'>
              <div className='col-span-4'>
                <div className='mt-6'>
                  <div className='flex  justify-evenly'>
                    <img src={bitcoin} alt="" />
                    <div className='ml-3'>
                      <p className='mb-3'>We Buy @ <span className='font-bold text-sm'> ₦350/$ </span></p>
                      <p>We Buy @ <span className='font-bold text-sm'> ₦350/$ </span></p>
                    </div>
                  </div>
                  <div className='flex justify-evenly mt-20 '>
                    <img src={eth} alt="" className='ml-4' />
                    <div className='ml-6'>
                      <p className='mb-3'>We Buy @ <span className='font-bold text-sm'> ₦350/$ </span></p>
                      <p>We Buy @ <span className='font-bold text-sm'> ₦350/$ </span></p>
                    </div>
                  </div>

                </div>
              </div>
              <div className='col-span-4'>
                <div className=''>
               
                  <div className='flex  justify-evenly items-center'>
                    <img src={bank} alt="" className='ml-10' />
                    <p>Bank Transfer</p>
                    <div className='ml-2 flex flex-col items-center mt-5'>
                      <p>NGN</p> 
                      <p className='mb-3 font-semibold'>#3452030300303.24/$</p>
                    </div>
                  </div>
                  <div className='flex mt-10  justify-evenly items-center'>
                    <img src={bitcoin} alt="" />
                    <p className='-ml-10'>Bitcoin</p>
                    <div className='ml-3'>
                      <p className='mb-3 '><span className='font-semibold mr-3'>399.98</span>BTC</p>
                    </div>
                  </div>
                  <div className='flex mt-10 justify-evenly items-center'>
                    <img src={eth} alt="" />
                    <p className='-ml-10'>Ethereum</p>
                    <div className='ml-3'>
                      <p className='mb-3 '><span className='font-semibold mr-4'>100</span>ETH</p>
                    </div>
                  </div>


                </div>

              </div>
              <div className='col-span-3 flex flex-col justify-around items-center'>
              <div>
                  <button className='text-center text-white w-[85.67px] h-[24.2px] text-[8px] font-bold leading-[25px]  bg-gradient-to-b  from-[#FD749B]  to-[#281AC8] rounded-[5px]'>
                  8 hours ago
                  </button>
                </div>
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
              <img src={scrollt} alt="" className='col-span-1 mt-6 ml-14' />
            </div>
            
          </div>
          
        </div>

      </div>
      {/* Section 4 */}
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:mx-auto xs:grid-cols-1 xs:mx-auto mt-12 max-w-[90%] mx-auto '>
        <div className='xl:ml-36'>
          <h2 className='font-bold lg:text-[28px] xl:w-[53%] sm:leading-normal lg:w-[55%] sm:text-2xl lg:mx-0 sm:mx-auto xs:text-2xl xs:mx-auto  xs:w-[80%] bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent xs:text-center sm:text-center lg:text-left '>Great experience
            with CoinBase</h2>
          <hr className='w-16 border-2 border-pink-500 rounded-sm lg:mt-5 sm:mx-auto  sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0' />
          <p className='lg:mt-9  text-base font-normal leading-10 w-[77%] xs:w-[90%] text-left sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0'>CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
          </p>
          <button className='lg:mt-12 sm:block xs:block sm:mx-auto sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0 '><img src={discover_btn} alt="Discover button" /></button>
        </div>
        <div> <img src={section4} alt="Hi image" className='sm:block sm:mx-auto xs:block xs:mx-auto' /></div>
      </div>

      {/* Section 5 Trade from anywhere */}
      <div className='landingSection5 min-h-[40vh] '>
        <div className='mt-32'>.
          <div className='lg:max-w-[65%] md:w-[70%] sm:w-[80%] xs:w-[85%] mx-auto mt-28 mb-20 pb-20 shadowTrade  '>
            <div className='pt-14 xs:py-3'>  <h2 className='font-bold lg:text-[28px] xl:w-[53%] sm:leading-normal lg:w-[55%] sm:text-2xl sm:mx-auto xs:text-2xl xs:mx-auto  xs:w-[80%] bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent xs:text-center sm:text-center  '>Trade from anywhere</h2></div>
            <hr className='w-10 border-2 mx-auto mt-3 border-[#FD749B] rounded-md' />
            <div className='grid grid-cols-2 xs:grid-cols-1 mt-10'>
              <div className='md:px-24 md:py-20 sm:p-20 xs:p-14 mx-auto border-2 border-fuchsia-800 rounded-3xl'>
                <img src={bitcoin} alt="bitcoin" />
                <h3 className='mt-5 font-bold text-base'>Bitcoin</h3>
              </div>
              <div className='md:px-24 md:py-20 sm:p-20 xs:p-14 mx-auto  border-2 border-fuchsia-800 rounded-3xl xs:mt-5'>
                <img src={gift_card} alt="bitcoin" />
                <h3 className='mt-5 font-bold text-base'>Gift Cards</h3>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Section 6  our blogs */}
      <div className='lg:mt-36'>
        <div className='max-w-[90%] mx-auto'>
          <h2 className='font-bold lg:text-[28px] xl:w-[53%] sm:leading-normal lg:w-[55%] sm:text-2xl sm:mx-auto xs:text-2xl xs:mx-auto  xs:w-[80%] bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent xs:text-center sm:text-center  '>Our blog</h2>
          <hr className='w-12 border-2 mx-auto mt-3 border-[#FD749B] rounded-md' />
          <h3 className='font-normal text-base text-center mt-7'>Get to know the latest stuff via our blog post.</h3>
          <div className='flex justify-center items-center relative mt-20'>

            <div className='border-2 h-[286px] bg-white relative left-36 -z-10 w-[30%] grayscale p-10 rounded-2xl xs:hidden sm:hidden lg:block'>
              <p className='flex justify-start  mt-3 text-[#888888] text-xs'>
                <span> 19 June, 2019 </span>
                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2' />
                <span>BUSINESS</span>
              </p>
              <h2 className=' text-xl mt-3'>HOW TO SELL YOUR ITUNES
                GIFTCARD WITH US</h2>
              <p className='mt-3 w-[70%] text-[10px]'>Lorem ipsum dolor sit amet, magna habemus
                ius ad, qui minimum voluptaria in. Ad mei modus
                quodsi complectitur, postea...</p>
              <button className='mt-3 grayscale'><img src={readmore} alt="" /></button>
            </div>

            <div className='border-2 border-fuchsia-800 shadowBlog  bg-white relative sm:w-[80%] lg:w-[30%] xs:w-[95%] z-10 p-11 xs:p-5  '>
              <p className='flex justify-start mt-3  text-xs'>
                <span> 19 June, 2019 </span>
                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2' />
                <span>BUSINESS</span>
              </p>
              <h2 className='font-bold text-2xl mt-3 leading-10 bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent'>ETH TO NAIRA EXCHANGE
                RATE IS NOW #400 PER...</h2>
              <p className='mt-3 xl:w-[88%] lg:w-[100%] text-xs leading-7'>Lorem ipsum dolor sit amet, magna habemus
                ius ad, qui minimum voluptaria in. Ad mei modus
                quodsi complectitur, postea...</p>
              <Link to="/blogContent" ><button className='mt-3'><img src={readmore} alt="" /></button></Link>
            </div>


            <div className='border-2 h-[286px] relative -z-10 right-16 w-[30%] grayscale p-10 rounded-2xl xs:hidden sm:hidden lg:block'>
              <p className='flex justify-start mt-3 text-[#888888] text-xs'>
                <span> 19 June, 2019 </span>
                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2' />
                <span>BUSINESS</span>
              </p>
              <h2 className=' text-xl mt-3'>EXCHANGE 5 PRODUCTS & 
GET 1 FREE PRODUCT.</h2>
              <p className='mt-3 w-[70%] text-[10px]'>Lorem ipsum dolor sit amet, magna habemus
                ius ad, qui minimum voluptaria in. Ad mei modus
                quodsi complectitur, postea...</p>
              <button className='mt-3 grayscale'><img src={readmore} alt="" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className='section7Bg min-h-[160vh] xs:min-h-[150vh]'>
        <div className='max-w-[80%] mx-auto '>.
          <div className='w-[30%]  xs:w-[90%] mx-auto sm:mt-[420px] xs:mt-56'>
            <h2 className='text-center font-bold text-[28px]  text-white'>10,000 Satisfied clients
              around the world</h2>
            <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
          </div>
          <div className='w-[45%] xs:w-[95%] mx-auto mt-12 text-white'>
            <p className='text-base text-center font-normal leading-[40px]'>Yeah! we’re proud with numbers. We’ve helped thousands of clients all around the world with our bespoke service. Hover ontop of them pic to view their testimonials.</p>

          </div>
          <div className='xs:hidden relative' >
            <img src={section7} alt=" Image" />
            <img src={testimonial} alt="" className='absolute xl:left-[530px] md:left-[30%] xl:top-52 md:top-[20%] sm:hidden md:block' />
          </div>

        </div>
      </div>

      {/* Section 8 */}
      <div className='max-w-[80%] mx-auto'>
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
      <div className='section9 max-h-[82vh]  xs:hidden'>.
        <div className='flex mt-96 justify-center  flex-wrap' >
          <div className='mr-5 '>
            <img src={iphone1} alt="" />
          </div>
          <div>
            <img src={iphone2} alt="" />
          </div>
        </div>

      </div>

      {/* Section 10 */}
      <div className='sm:mt-[25%]  xs:mt-20'>
        <div className='flex flex-col items-center '>
          <h2 className='xs:px-5'><img src={section10} alt="" /></h2>
          <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
          <div className='lg:w-[27%] sm:w-[38%] xs:w-[80%] mt-7'>
            <p className='text-base text-center font-normal leading-loose'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
          </div>
        </div>
        <div className='flex justify-center  my-12  mb-36'>
          <form action="" className='flex justify-center xs:grid xs:grid-cols-1 xs:gap-5'>
            <input type="Email" placeholder='Email *' className='  mx-8 px-3 py-2 xs:mx-auto placeholder-gray-500 border border-pink-300 rounded-[100px] focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 w-96 xs:w-[90%] ' required />
            <button type='submit' className='self-center xs:mx-auto'><img src={discover} alt="" className='' /></button>
          </form>

        </div>
      </div>

      {/* End  */}







    </>
  )
}

export default LandaingPage