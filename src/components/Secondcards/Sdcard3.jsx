import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
function Sdcard3() {
    return (
        <div className='max-sm:max-w-[100%]'>
            <div className='secondFadeDrop max-sm:max-h-[220px] max-sm:max-w-[100%] max-sm:px-1 max-sm:py-2 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-2 h-[260px] w-[300px] bg-[#191919] rounded-3xl sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-8 hover:scale-110 transition-transform duration-200 origin-center'>
                <div className='pointer-events-none max-sm:max-h-[190px] max-sm:max-w-[90%] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-2 max-sm:py-2 sm:h-[100px] w-[220px] bg-[#0f0f0f] rounded-4xl sm:flex sm:justify-center sm:items-center sm:gap-4'>
                    <a className=' pointer-events-auto bg-[#141313] h-[80px] w-[80px] rounded-full text-[50px] flex justify-center items-center cursor-pointer ' href='https://x.com/Kunal_Rana_08?t=qC6UrITFDTt0_9yXB-IFAw&s=09' target='_blank' rel="noopener noreferrer">
                        <CiTwitter />
                    </a>
                    <a className=' pointer-events-auto bg-[#141313] h-[70px] w-[80px] rounded-full text-[45px] flex justify-center items-center cursor-pointer '  href="https://www.linkedin.com/in/kunal-rana-666633372" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <div className='h-[50px] flex flex-col'>
                    <p className='text-[#323232] text-[25px] font-bold max-sm:hidden'>STAY WITH ME</p>
                    <p className='text-white text-[16px] font-bold'>Profiles</p>
                </div>
            </div>
        </div>
    )
}

export default Sdcard3





