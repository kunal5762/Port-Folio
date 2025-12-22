import React from 'react'
import { PiStarFourThin } from "react-icons/pi";
function Tdcard1() {
    return (
        <div>
            <div className='thirdFadeDrop max-sm:h-[260px] max-sm:w-[550px] h-[260px] w-[600px] bg-[#191919] rounded-3xl flex flex-row gap-4 justify-around items-center px-[20px] cursor-pointer hover:scale-110 transition-transform duration-200 origin-center'>
                <div className=' flex flex-col justify-center items-center h-[200px] w-[160px] bg-[#1D1D1D] rounded-4xl gap-4'>
                    <div className='text-[45px]'><p>0</p></div>
                    <div className='text-[#323232] text-[16px] font-bold'><p>YEARS <br /> EXPERIENCE</p></div>
                </div>
                <div className=' flex flex-col justify-center items-center h-[200px] w-[160px] bg-[#1D1D1D] rounded-4xl gap-4'>
                     <div className='text-[45px]'><p>+10</p></div>
                    <div className='text-[#323232] text-[16px] font-bold'><p>CLIENTS <br /> WORLDWIDE</p></div>
                </div>
                <div className=' flex flex-col justify-center items-center h-[200px] w-[160px] bg-[#1D1D1D] rounded-4xl gap-4'>
                   <div className='text-[45px]'><p>+30</p></div>
                    <div className='text-[#323232] text-[16px] font-bold'><p>TOTAL <br /> PROJECTS</p></div>
                </div>
            </div>
        </div>
    )
}

export default Tdcard1