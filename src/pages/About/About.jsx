import React from 'react'
import abouthero2 from '../../images/abouthero2.svg'
import tree from '../../images/Tree.svg'
import sub from '../../images/subscribe.svg'
import discover from '../../images/btn2.svg'
import section2 from '../../images/Section2.svg'
import AboutQual from '../../images/Qualities.svg'



function About() {
    return (
        <>
            <div className="heroBg lg:min-h-[100vh] sm:min-h-[120vh]  xs:min-h-[120vh] lg:flex lg:justify-around sm:grid  sm:grid-cols-1 xs:grid  xs:grid-cols-1 ">

                <div className='lg:w-[34%] sm:w-[50%] xs:w-[85%] xs:mx-auto mt-48 xs:mt-16 sm:mx-auto lg:mx-0 lg:ml-24'>
                    <div className='text-white text-xs mb-5'><span>HOME/ABOUT US</span></div>
                    <h2 className='lg:text-[40px] text-3xl xs:text-3xl text-white font-bold  leading-normal'>
                        Great service,
                        Professional support
                    </h2>
                    <p className='mt-8 leading-9 text-lg text-white font-normal w-[92%]'>CoinBase is a platform for trading your bitcoin and
                        giftcard at the best rate, why not give us a trial.
                    </p>

                </div>
                <div className='sm:mx-auto lg:mx-0 lg:mt-20'>
                    <img src={abouthero2} alt="Bitcoin" className='mt-20' />
                </div>
            </div>
            {/* Section 1 */}
            <div className='lg:w-[34%] sm:w-[60%] xs:w-[90%] mx-auto sm:mt-10 lg:mt-0'>
                <h2 className='text-center font-bold text-lg bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent'>
                    “Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec semper leo ut lobortis condimentum. Orci varius natoque penatibus et magnis”

                </h2>
                <hr className='w-16 border-2 border-pink-500 rounded-sm mt-5  text-center mx-auto' />
                <p className='text-center mt-6'>Ramon Ridwan • CEO CoinBase</p>
            </div>
            {/* Section 2 */}
            <div className='mt-20 border-2 w-[70%] xs:w-[90%] mx-auto rounded-2xl border-fuchsia-700'>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div><img src={section2} alt="" /></div>

                    <div className='mt-10'><h2 className='font-bold text-3xl xs:text-2xl xs:text-center fontcolorabout text-center '>About CoinBase</h2></div>
                    <hr className='w-16 border-4 border-pink-500 rounded-xl mt-5 text-center mx-auto' />
                    <div className='lg:w-[50%] sm:w-[80%] xs:w-[90%] leading-10 mt-6 font-normal text-base'><p className='text-center'>CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
                    </p></div>
                    <div className='mt-10 mb-14 xs:px-4'> <img src={AboutQual} alt="" /></div>
                </div>
            </div>


            {/* History */}
            <div>
                <div className="flex justify-center sm:mt-24 sm:w-[80%] sm:mx-auto xs:mt-24 xs:w-[80%] xs:mx-auto lg:mt-[107px] bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] xs:text-[28px] text-5xl leading-[65px] font-bold">
                    Our history
                </div>
                <hr className='w-16 border-2 border-pink-500 rounded-sm mt-0 text-center mx-auto' />
                <div className="flex justify-center   mt-[86px]">
                    <div className="lg:ml-14 lg:mr-5">
                        <div className="lg:mt-5 lg:w-[418px] lg:h-[211px] sm:w-[80%] sm:mx-auto xs:w-[80%] xs:mx-auto">
                            <div className="flex lg:justify-end sm:justify-center xs:justify-center  text-pink-400  sm:text-[28px] xs:text-[28px] text-4xl font-bold">
                                May 2010
                            </div>
                            <div className="mt-5 lg:text-right sm:text-center sm:text-[14px] xs:text-[14px]  leading-[30px]">
                                Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
                                Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
                                Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
                                nibh.uspendisse
                            </div>
                        </div>
                        <div className="lg:mt-[230px] lg:w-[418px] lg:h-[200px] sm:w-[80%] sm:mx-auto sm:text-center sm:mt-9 xs:w-[80%] xs:mx-auto xs:text-center xs:mt-9">
                            <div className="flex lg:justify-end sm:justify-center xs:justify-center  text-pink-400 sm:text-[28px] xs:text-[28px] text-4xl font-bold">
                                May 2019
                            </div>
                            <div className="mt-5 lg:text-right sm:text-center sm:text-[14px]  xs:text-[14px]  leading-[30px]">
                                Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
                                Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
                                Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
                                nibh.uspendisse
                            </div>
                        </div>
                    </div>
                    <div className='sm:hidden xs:hidden lg:block lg:mr-16'>
                        <img className="ml-14" src={tree} alt="" />
                        <div className="mt-5 text-center font-bold uppercase">To be continue…</div>
                    </div>
                    <div className="lg:mt-[240px] lg:w-[418px] lg:h-[200px] sm:hidden lg:block xs:hidden">
                        <div className="text-pink-400 sm:text-[28px] text-4xl font-bold">
                            May 2017
                        </div>
                        <div className="mt-5 text-left sm:text-[14px] text-2xl leading-[30px]">
                            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
                            Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
                            Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
                            nibh.uspendisse
                        </div>
                    </div>
                </div>
            </div>
            {/* Meet the Team */}

            <div className='mt-20 '>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold text-3xl bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent'>Meet the team</h2>
                    <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
                    <p className='w-[35%] text-center mt-5 leading-[40px]'>Meet the team that  makes the process of this system fast and painless as possible to provide you with good result </p>
                </div>

                <div className='mt-10 w-[90%] mx-auto'>
                <div className='flex justify-center'>
                    <div className='bg-[#C4C4C4] rounded-xl w-[300px] h-[185px] mt-[110px] xs:hidden'></div>
                    <div className='shadowabout bg-[#C4C4C4] relative ml-[-130px] rounded-xl w-[300px] h-[230px] mt-[85px] xs:hidden'></div>
                    <div className='shadowabout flex items-end xs:mx-auto bg-gradient-to-b from-[#ed9eb5] to-[#7e78bd] relative ml-[-50px] rounded-xl w-[300px] h-[285px] mt-[60px]'>
                        <div className='text-white ml-5 mb-5'>CEO <br />
                            Amanda Roth </div>
                    </div>
                    <div className='shadowabout -z-10 bg-[#C4C4C4] rounded-xl ml-[-50px] w-[300px] h-[230px] mt-[85px] xs:hidden '></div>
                    <div className='bg-[#C4C4C4] rounded-xl w-[300px] h-[185px] ml-[-130px] mt-[110px] xs:hidden'></div>
                </div>
                </div>
            </div>

            {/* Subscribe */}
            <div className='mt-20'>
                <div className='flex flex-col items-center '>
                    <h2 className='xs:px-3'><img src={sub} alt="" /></h2>
                    <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
                    <div className='w-[25%] xs:w-[70%] mt-7'>
                        <p className='text-base text-center font-normal leading-loose'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
                    </div>
                </div>
                <div className='flex justify-center my-12  mb-24'>
                    <form action="" className='flex justify-center xs:grid xs:gap-4'>
                        <input type="Email" placeholder='Email *' className=' mx-[9px] px-3 py-2 placeholder-gray-500 border border-pink-300 rounded-[100px] focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 w-96 xs:w-[90%]  ' required />
                        <button type='submit' className='self-center xs:mx-auto'><img src={discover} alt="" className='' /></button>
                    </form>

                </div>
            </div>

        </>
    )
}

export default About