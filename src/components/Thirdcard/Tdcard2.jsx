import React from 'react'
import { PiStarFourThin } from "react-icons/pi";
function Tdcard2() {
    return (
        <div>
            <div className='thirdFadeDrop max-sm:flex max-sm:flex-col max-sm:justify-around max-sm:items-start max-sm:rounded-2xl max-sm:py-4 max-sm:max-h-[220px] max-sm:max-w-[640px] max-lg:max-w-[340px] max-sm:pl-8 max-lg:px-10 max-xl:max-w-[450px] h-[260px] lg:w-[640px] bg-[#191919] sm:rounded-3xl sm:flex sm:flex-col sm:gap-18 lg:px-[50px] sm:justify-center hover:scale-110 transition-transform duration-200 origin-center'>
                <div className=' max-sm:text-[40px] max-sm:h-[50px] h-[50px] sm:text-[50px] sm:pt-[35px]'>
                <PiStarFourThin />
                </div>
                <div className='max-sm:max-h-[90px] h-[180px] max-lg:text-[25px] lg:text-[35px] max-sm:text-[25px]'>
                    <p className='text-white font-bold'>let`s <br />Work <span className='text-[#697BE4]'>together.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Tdcard2