import React from 'react'
import cardimg from '../../assets/cardimg.png'
import { PiSignatureLight } from "react-icons/pi";
import { Link } from "react-router";
function card2() {
    return (
        <div className='max-sm:max-w-[50%]'>
            <div className='fadeDrop max-sm:flex max-sm:items-center max-sm:justify-center max-sm:max-w-[100%] max-sm:max-h-[600px] max-sm:gap-2 max-lg:max-w-[380px] max-xl:max-w-[600px] xl:w-[600px] h-[320px] sm:flex sm:flex-col rounded-4xl sm:justify-center sm:items-center sm:gap-4 text-[#323232]'>
                <div className='hide-below-350 bg-[#191919]  max-sm:flex-col  max-sm:gap-4 max-sm:max-w-[50px] max-sm:max-h-68 max-lg:px-2 max-lg:py-3 max-lg:h-[100%] w-[100%] rounded-2xl flex justify-center items-center max-sm:text-[9px] hover:scale-110 transition-transform duration-200 origin-center'>
                    ST WORK AND  <span className='text-white px-2'>FEATURED</span>  . LATEST WORK AND <span className='text-white px-2'>FEATURED</span>
                </div>
                <div className='cursor-pointer max-sm:max-h-full max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:max-w-[100%] max-lg:max-w-full sm:flex h-[280px] w-[100%] sm:gap-5 '>
                    <div className='max-sm:flex max-sm:flex-col max-sm:justify-around max-sm:items-center max-sm:h-[135px] max-sm:max-w-[320px] max-sm:rounded-2xl max-sm:text-center max-lg:max-w-full max-lg:max-h-[100%] max-lg:px-2 h-[100%] lg:w-[50%] bg-[#191919] sm:rounded-2xl sm:flex sm:flex-col sm:justify-around sm:items-center hover:scale-110 transition-transform duration-200 origin-center'>
                        <div className=' max-sm:pl-12 max-sm:h-[50px] max-sm:max-w-full max-sm:text-[60px] max-lg:pl-8 h-[80px] w-[100%] sm:text-[100px] text-white max-xl:pl-15 xl:pl-22'><PiSignatureLight /></div>
                        <div className='max-sm:max-h-[40px] h-[50px] max-sm:text-[10px] '>
                            <p className='text-[#323232] sm:text-[20px] sm:font-bold max-sm:text-base'>MORE ABOUT US</p>
                            <p className='text-white sm:text-[15px] sm:font-bold max-sm:text max-lg:hidden'>Credentials</p>
                        </div>
                    </div>
                    <div className='cursor-pointer max-sm:h-[135px] max-sm:max-w-[220px] max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:items-center max-sm:py-2 max-sm:rounded-2xl max-lg:max-w-full h-[100%] lg:w-[50%] max-lg:px-2 bg-[#191919] rounded-2xl sm:flex sm:flex-col sm:justify-around sm:items-center hover:scale-110 transition-transform duration-200 origin-center'>
                        <div className='max-sm:max-h-[100px] sm:h-[130px] '>
                           <Link to={"/works"}> <img className='max-sm:max-h-[100px] max-sm:max-w-[110px] h-[140px] w-[150px]' src={cardimg} alt="My Projects" /></Link>
                        </div>

                        <div className=' max-sm:flex max-sm:max-h-[20px]  max-sm:flex-col max-sm:justify-center max-sm:items-center sm:h-[70px]'>
                            <p className='text-[#323232] text-[20px] font-bold max-sm:hidden'>SHOWCASE</p>
                            <p className='text-white text-[15px] font-bold'>Project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card2