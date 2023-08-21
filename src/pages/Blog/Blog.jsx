import React from 'react'
import Bloghero from '../../images/BlogHero.svg'
import main1 from '../../images/exchange1.svg'
import main2 from '../../images/main2.svg'
import main3 from '../../images/main3.svg'
import Discover from '../../images/btn2.svg'
import { Link } from 'react-router-dom'

function Blog() {
    const Cards = [
        {
            id: 1,
            mainimg: <img src={main1} alt="" className="rounded-tl-3xl rounded-tr-3xl" />,
            heading: "HOW TO SELL YOUR ITUNES GIFTCARD WITH US .",
            subp: "19 June, 2019",
            subp2: "BUSINESS",
            p1: "Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.",
            btn: <img src={Discover} alt="Discover" className="" />,
        },
        {
            id: 2,
            mainimg: <img src={main2} alt="" className="rounded-tl-3xl rounded-tr-3xl" />,
            heading: "EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.",
            subp: "19 June, 2019",
            subp2: "BUSINESS",
            p1: "Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.",
            btn: <img src={Discover} alt="Discover" className="" />,
        },
        {
            id: 3,
            mainimg: <img src={main3} alt="" className="rounded-tl-3xl rounded-tr-3xl" />,
            heading: "ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...",
            subp: "19 June, 2019",
            subp2: "BUSINESS",
            p1: "Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.",
            btn: <img src={Discover} alt="Discover" className="" />,
        }

    ]
    return (
        <>

            <div className="heroBg lg:min-h-[110vh]   sm:min-h-[140vh] xs:min-h-[140vh]  lg:flex lg:justify-around sm:grid  sm:grid-cols-1 xs:grid  xs:grid-cols-1  ">

                <div className='lg:w-[34%] sm:w-[50%] xs:w-[85%] xs:mx-auto mt-48 xs:mt-16 sm:mx-auto lg:mx-0 lg:ml-24'>
                    <div className='text-white text-xs mb-5'><span>HOME/BLOG</span></div>
                    <h2 className='lg:text-[40px] lg:w-[80%] sm:text-3xl xs:text-2xl lg:leading-normal text-white font-bold '>
                        Stay updated,
                        Never miss a post.
                    </h2>
                    <p className='mt-6 lg:leading-normal text-lg text-white font-normal w-[85%]'>Get to know the latest stuff about our services
                        via our blog post.
                    </p>

                </div>
                <div className='sm:mx-auto lg:mx-0 lg:mr-32' >
                    <img src={Bloghero} alt="Bitcoin" className='mt-20' />
                </div>
            </div>

            <div className='w-[75%] xs:w-[90%] mx-auto'>
                {/* Map Function to make 3 card  */}
                {Cards.map((info) => (
                    <div className='mt-12 mb-5'>


                        {info.mainimg}
                        <div className='flex flex-col justify-center items-center  cardborder'>
                            <h2 className='mt-10 xs:mx-4 font-bold lg:text-[32px] sm:text-2xl  bg-gradient-to-b from-[#FD749B] text-center to-[#281AC8] bg-clip-text text-transparent ' >{info.heading}</h2>
                            <p className='flex justify-center mt-5  text-xs  '>
                                <span>{info.subp}</span>
                                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2 border-[#333333] ' />
                                <span>{info.subp2}</span>
                            </p>
                            <p className='w-[70%] text-center text-base font-normal mt-8'>
                                {info.p1}
                            </p>
                            <Link to="/blogContent"><button className='mt-7 mb-10'>{info.btn}</button> </Link>
                        </div>

                    </div>))}


            </div>
            <div className='flex flex-wrap justify-center mt-24 mb-40'>

                <nav aria-label="Page navigation example">
                    <ul class="inline-flex xs:flex-wrap xs:justify-center -space-x-px text-base h-10">
                        <li>
                            {/* <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a> */}
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center bg-gradient-to-b from-[#FD749B]  to-[#281AC8]  text-white text-base rounded-[100px] mt-5 mr-3 justify-center p-7 h-[50px] w-[60px] leading-tight border border-[#E0E0E0] hover:bg-purple-800 hover:text-white ">01</a>


                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center bg-white   text-gray-600 text-base rounded-[100px] mt-5 mr-3 justify-center p-7 h-[50px] w-[60px] leading-tight border border-[#E0E0E0] hover:bg-gray-100 hover:text-gray-700 ">02</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center bg-white   text-gray-600 text-base rounded-[100px] mt-5 mr-3 justify-center p-7 h-[50px] w-[60px] leading-tight border border-[#E0E0E0] hover:bg-gray-100 hover:text-gray-700">03</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center bg-white   text-gray-600 text-base rounded-[100px] mt-5 mr-3 justify-center p-7 h-[50px] w-[60px] leading-tight border border-[#E0E0E0] hover:bg-gray-100 hover:text-gray-700">...</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center p-7 h-[60px] w-[100px] leading-tight rounded-full mt-5 text-gray-500 bg-white border border-[#E0E0E0]  hover:bg-gray-100 hover:text-gray-700 ">Next</a>
                        </li>
                    </ul>
                </nav>

            </div>

        </>
    )
}

export default Blog
// 