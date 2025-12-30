import React from 'react'
import img3 from '../../assets/sdcardimh.png'
function Sdcard1() {
    return (
        <div className='max-sm:max-w-[45%]'>
            <div className='secondFadeDrop cursor-pointer max-sm:max-h-[220px] max-sm:max-w-[100%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center h-[260px] w-[300px] bg-[#191919] rounded-3xl sm:flex sm:flex-col sm:gap-2 sm:justify-center sm:items-center hover:scale-110 transition-transform duration-200 origin-center'>
                <div className=''>
                    <img className='max-sm:max-h-[100px] max-sm:max-w-[100px] sm:h-[120px] sm:w-[120px]' src={img3} alt="" />
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