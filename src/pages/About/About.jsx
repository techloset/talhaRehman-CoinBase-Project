import React from 'react'
import abouthero2 from '../../images/abouthero2.svg'

function About() {
    return (
        <>
            <div className="heroBg min-h-[100vh]  flex justify-around ">

                <div className='w-[34%] mt-36'>
                    <div className='text-white text-xs mb-5'><span>HOME/ABOUT</span></div>
                    <h2 className='text-5xl text-white font-bold  leading-snug'>
                        Great service,
                        Professional support
                    </h2>
                    <p className='mt-8 leading-9 text-lg text-white font-normal w-[89%]'>CoinBase is a platform for trading your bitcoin and
                        giftcard at the best rate, why not give us a trial.
                    </p>

                </div>
                <div >
                    <img src={abouthero2} alt="Bitcoin" className='mt-20' />
                </div>
            </div>
            
        </>
    )
}

export default About