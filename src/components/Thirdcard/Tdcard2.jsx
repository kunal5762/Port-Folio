import React from 'react'
import { PiStarFourThin } from "react-icons/pi";
function Tdcard2() {
    return (
        <div>
            <div className='thirdFadeDrop max-sm:h-[250px] max-sm:w-[550px] h-[260px] w-[600px] bg-[#191919] rounded-3xl flex flex-col gap-18 px-[50px] justify-center hover:scale-110 transition-transform duration-200 origin-center max-sm:hover:scale-110 max-sm:transition-transform max-sm:duration-200 max-sm:origin-center'>
                <div className='h-[50px] text-[50px] pt-[35px]'>
                <PiStarFourThin />
                </div>
                <div className=' h-[180px] text-[35px]'>
                    <p className='text-white font-bold'>let`s <br />Work <span className='text-[#697BE4]'>together.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Tdcard2