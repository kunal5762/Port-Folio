import React from 'react'
import img3 from '../../assets/sdcardimh.png'
function Sdcard1() {
    return (
        <div>
            <div className='secondFadeDrop cursor-pointer max-sm:h-[260px] max-sm:w-[270px] h-[260px] w-[300px] bg-[#191919] rounded-3xl flex flex-col gap-2 justify-center items-center hover:scale-110 transition-transform duration-200 origin-center'>
                <div className=''>
                    <img className='h-[120px] w-[120px]' src={img3} alt="" />
                </div>

                <div className='h-[50px]'>
                    <p className='text-[#323232] text-[25px] font-bold'>BLOG</p>
                    <p className='text-white text-[16px] font-bold'>GFonts</p>
                </div>
            </div>
        </div>
    )
}

export default Sdcard1