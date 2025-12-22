import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
function Sdcard3() {
    return (
        <div>
            <div className='secondFadeDrop max-sm:h-[260px] max-sm:w-[270px] max-sm:flex max-sm:justify-center max-sm:items-center h-[260px] w-[300px] bg-[#191919] rounded-3xl flex flex-col justify-center items-center gap-8 hover:scale-110 transition-transform duration-200 origin-center'>
                <div className='pointer-events-none h-[100px] w-[220px] bg-[#0f0f0f] rounded-4xl flex justify-center items-center gap-4'>
                    <a className=' pointer-events-auto bg-[#141313] h-[70px] w-[80px] rounded-full text-[50px] flex justify-center items-center cursor-pointer ' href='https://x.com/Kunal_Rana_08?t=qC6UrITFDTt0_9yXB-IFAw&s=09' target='_blank' rel="noopener noreferrer">
                        <CiTwitter />
                    </a>
                    <a className=' pointer-events-auto bg-[#141313] h-[70px] w-[80px] rounded-full text-[45px] flex justify-center items-center cursor-pointer '  href="https://www.linkedin.com/in/kunal-rana-666633372" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <div className='h-[50px] flex flex-col'>
                    <p className='text-[#323232] text-[25px] font-bold'>STAY WITH ME</p>
                    <p className='text-white text-[16px] font-bold'>Profiles</p>
                </div>
            </div>
        </div>
    )
}

export default Sdcard3





