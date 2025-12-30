import React from 'react'
import { FaCamera } from "react-icons/fa";
import { IoIosColorFilter } from "react-icons/io";
import { GrTask } from "react-icons/gr";
import { IoPhonePortrait } from "react-icons/io5";
function Sdcard2() {
    return (
        <div>
            <div className='secondFadeDrop max-sm:max-h-[220px] max-sm:max-w-[640px] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center h-[260px] max-sm:gap-5 sm:w-[600px] bg-[#191919] rounded-3xl sm:flex sm:flex-col sm:justify-center sm:px-[45px] sm:gap-5 hover:scale-110 transition-transform duration-200 origin-center '>
                <div className=' max-sm:flex max-sm:items-center max-sm:justify-between max-sm:gap-8 max-sm:max-h-[50px] max-sm:text-[35px] h-[80px] sm:text-[60px] sm:flex sm:gap-12 sm:pl-16 cursor-pointer ' >
                    <div><FaCamera /></div>
                    <div><GrTask /></div>
                    <div><IoIosColorFilter /></div>
                    <div><IoPhonePortrait /></div>
                </div>
                <div className='h-[50px] '>
                    <p className='max-sm:text-[26px] text-[#323232] sm:text-[25px] font-bold'>SPECIALIZATION</p>
                    <p className='max-sm:text-[16px] text-white sm:text-[16px] font-bold'>Work on Services</p>
                </div>
            </div>
        </div>
    )
}

export default Sdcard2