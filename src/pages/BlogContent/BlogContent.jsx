import React from 'react'
import BitCoinImg from '../../images/BlogContentBitCoin.svg'
import SocialIconsF from '../../images/Social_Icons2.svg'
import Exchange5 from '../../images/Exchange5.svg'
import Publish from '../../images/PublishBtn.svg'



function BlogContent() {
    return (
        <>
            {/* Hero Section Blog Content Page */}
            <div className="BlogContentHero min-h-[100vh]  flex justify-center">
                <div className='sm:w-[55%] xs:w-[80%]  sm:mt-60 xs:mt-44'>
                    <h2 className='text-[2rem] text-center text-white font-bold  leading-[45px]'>
                        ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER Transactions
                    </h2>
                    <p className='flex justify-center mt-3 text-white text-xs'>
                        <span> 19 June, 2019 </span>
                        <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2' />
                        <span>BUSINESS</span>
                    </p>
                </div>
            </div>
            <div className='md:max-w-[52%] xs:max-w-[90%] sm:max-w-[80%]  mx-auto '>
                <p className='text-base leading-8'>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                    <br />
                    <br />
                    Planning Your Luxury Trip
                    <br />
                    <br />
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                    <br />
                    <br />
                    The next part of planning is to determine your starting and ending ports. This could be a place close to home and sail in one area or start and finish at two different ports. Generally, starting and stopping in the same port will save you money and is usually more convenient. You can also fly to a destination far from home and then sail another exotic sea. There are luxury yacht charter companies that cruise the Caribbean and Mediterranean seas or around Alaska, the Panama Canal, or anyplace you can imagine.
                    <br />
                    <br />
                    Determining the type of cruise is another aspect of planning a chartered yachting trip. You can have as little or many crew members as the ship will hold. A captain takes all the worries out of navigating and onboard housekeeping services make it a real vacation that rivals the finest hotel services. You can also choose to have a chef and service crew as part of your vacation package.

                </p>
                <div className='grid grid-cols-2 gap-11 mt-14 xs:grid-cols-1' >
                    <div>
                        <p className='text-base leading-[30px]'>
                            If you like the idea of knowing what it is really like to sail, but don’t want to risk safety, you can charter a sailing cruise that puts you in the role of deck hand. A competent crew will direct you as to your “chores” for keeping the ship in top shape and on course.
                            <br />
                            <br />
                            Destinations & Ports of important Charter Companies  One of the greatest benefits of choosing a chartered cruise as a vacation is the choice. You will most likely have a rough itinerary and that can be affected by weather. However, you are flexible in deciding how long you want to stay in a particular port and if you want to add or subtract stops along the way.
                        </p>
                    </div>
                    <div>
                        <img src={BitCoinImg} alt="Bitcoin" />
                    </div>
                </div>
                <div className='mt-20'>
                    <p className='text-base leading-8'>
                        Your yacht is your hotel that travels with you. There is only one flight and one hotel to book! Then you take all of your luggage and unpack it just once to enjoy several days of new destinations.
                        <br />
                        <br />
                        If you have never experienced cruising before, a chartered experience is a great way to get your feet wet. It is different from cruise lines with thousands of guests because the people on your ship will be your friends and family. The personal touches of a chartered trip will help you develop your love for the sea with all the best benefits of commercial cruises.
                    </p>
                </div>

                <div className='grid grid-cols-2 xs:grid-cols-1 mt-24 gap-10'>
                    <div className=''>
                        <h3 className='font-bold text-base italic '>Tags: Business, Capital, Finance</h3>
                    </div>
                    <div className='flex justify-end xs:justify-start items-center'>
                        <p className='mr-4'>Share with</p>
                        <img src={SocialIconsF} alt="Social Icon Facebook Twitter youtube" />
                    </div>
                    <div><h3 className='font-bold text-lg w-[60%]'>
                        How to sell your iTunes giftcard with us
                    </h3></div>
                    <div className='flex justify-end xs:justify-start'>
                        <h2 className='font-bold text-[18px] xl:w-[60%] sm:leading-[25px] sm:w-[85%]  lg:mx-0 sm:mx-auto xs:text-xl   xs:w-[80%] bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent xs:text-center sm:text-center'> Exchange 5 products and get 1 free product</h2>
                    </div>
                    <div>
                        <span className='text-xs text-gray-400 xs:text-left'>Prev Post</span>
                    </div>
                    <div>
                    <span className='text-xs text-gray-400  flex justify-end xs:justify-start'>Next Post</span>
                    </div>
                </div>
            </div>
                <div className='mt-24 lg:mt-[114px]  xs:max-w-[90%] sm:max-w-[80%] xl:w-[58%] mx-auto xl:ml-[358px] 2xl:mx-auto '>
                    <h2 className='font-bold text-2xl'>Leave A Comment</h2>
                    <p className='font-normal text-base mt-3 text-[#333333]'>Your email address will not be published. Required fields are marked *</p>
                    <form action="" className='mt-6 mb-14 lg:mb-[115px]'>
                        <input type="text" placeholder='Name *' className=' px-5 py-5 placeholder-[#2F2F2F] border border-[#D1D1D1] rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 xl:w-[47%] md:w-[48%]  xs:w-full sm:w-full ' required/>
                        <input type="Email" placeholder='Email *' className=' md:ml-3 xl:ml-[46px] px-5 py-5 placeholder-[#2F2F2F] border border-[#D1D1D1]  rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 xl:w-[47%] md:w-[48%] xs:w-full sm:w-full xs:mt-4 sm:mt-4 xs:ml-0 sm:ml-0  ' required/>
                        <textarea rows="8" name="message" id="message" placeholder="Your Comment" class="w-full mt-[30px] px-5 py-5 placeholder-[#2F2F2F] border border-[#D1D1D1]  rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"></textarea>
                    <button type='submit' className='lg:mt-[50px] mt-5'>
                        <img src={Publish} alt="Publish" />
                    </button>
                    </form>
                </div>
            
        </>
    )
}

export default BlogContent