import React from 'react'
import { FaCamera } from "react-icons/fa";
import { IoIosColorFilter } from "react-icons/io";
import { GrTask } from "react-icons/gr";
import { IoPhonePortrait } from "react-icons/io5";
function Sdcard2() {
    return (
        <div>
            <div className='secondFadeDrop max-sm:h-[250px] max-sm:w-[550px] max-sm:gap-2 h-[260px] w-[600px] bg-[#191919] rounded-3xl flex flex-col justify-center  px-[45px] gap-5 hover:scale-110 transition-transform duration-200 origin-center '>
                <div className=' max-sm:text-[50px] max-sm:w-full h-[80px] text-[60px] flex gap-12 pl-16 cursor-pointer' >
                    <div><FaCamera /></div>
                    <div><GrTask /></div>
                    <div><IoIosColorFilter /></div>
                    <div><IoPhonePortrait /></div>
                </div>
                <div className='h-[50px] '>
                    <p className='max-sm:text-[24px] text-[#323232] text-[25px] font-bold'>SPECIALIZATION</p>
                    <p className='max-sm:text-[14px] text-white text-[16px] font-bold'>Work on Services</p>
                </div>
            </div>
        </div>
    )
}

export default Sdcard2