import React from 'react'
import cardimg from '../../assets/cardimg.png'
import { PiSignatureLight } from "react-icons/pi";
import { Link } from "react-router";
function card2() {
    return (
        <div>

            <div className='fadeDrop max-sm:flex max-sm:w-[280px] max-sm:h-[320px] max-sm:gap-2 w-[600px] h-[320px] flex flex-col rounded-4xl justify-center items-center gap-4 text-[#323232]'>
                <div className='bg-[#191919] h-[40px] w-[100%] rounded-4xl flex justify-center items-center max-sm:w-[270px] max-sm:text-[9px] hover:scale-110 transition-transform duration-200 origin-center'>
                    ST WORK AND  <span className='text-white px-2'>FEATURED</span>  . LATEST WORK AND <span className='text-white px-2'>FEATURED</span>
                </div>
                <div className='cursor-pointer max-sm:flex max-sm:flex-col max-sm:gap-2 flex h-[280px] w-[100%] gap-5 '>
                     <div className='max-sm:flex max-sm:justify-aroundr max-sm:items-center max-sm:w-[270px] max-sm:h-[135px] h-[100%] w-[50%] bg-[#191919] rounded-4xl flex flex-col justify-around  items-center hover:scale-110 transition-transform duration-200 origin-center'>
                        <div className='max-sm:h-[40px] max-sm:text-[60px] max-sm:w-full h-[80px] w-[100%] text-[100px] text-white pl-22 max-sm:pl-26'><PiSignatureLight /></div>
                        <div className=' h-[50px] max-sm:text-[10px] '>
                            <p className='text-[#323232] text-[20px] font-bold'>MORE ABOUT US</p>
                            <p className='text-white text-[15px] font-bold'>Credentials</p>
                        </div>
                    </div>

                  
                   <div className='cursor-pointer max-sm:h-[140px] max-sm:w-[270px] max-sm:flex max-sm:flex-row max-sm:justify-center max-sm:items-center h-[100%] w-[50%] bg-[#191919] rounded-4xl flex flex-col max-sm:gap-2 justify-around items-center hover:scale-110 transition-transform duration-200 origin-center'>
                        <div className='h-[130px] '>
                           <Link to={"/works"}> <img className='max-sm:h[100px] max-sm:w-[130px] h-[140px] w-[150px]' src={cardimg} alt="My Projects" /></Link>
                        </div>

                        <div className=' max-sm:flex  max-sm:flex-col max-sm:justify-center max-sm:items-center h-[70px]'>
                            <p className='text-[#323232] text-[20px] font-bold'>SHOWCASE</p>
                            <p className='text-white text-[15px] font-bold'>Project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card2