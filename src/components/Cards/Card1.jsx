import React from 'react'
import img1 from '../../assets/mainimg.jpeg'
import { Link } from 'react-router'
function Card1() {
  return (
    <div className='max-sm:max-w-[50%]'>
      <div className=' fadeDrop max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:max-w-[90%] max-sm:max-h-[280px] max-sm:gap-3 max-sm:px-1 bg-[#191919] max-sm:rounded-2xl max-lg:max-w-[380px] max-lg:px-3 max-lg:flex max-lg:items-center max-lg:justify-between max-lg:flex-col max-lg:py-4 max-xl:max-w-[600px] max-xl:px-4 h-[320px] w-[600px] lg:flex sm:rounded-2xl lg:justify-center lg:items-center lg:gap-8 text-[#323232] hover:scale-110 transition-transform duration-200 origin-center'>
        <div className=' max-sm:max-h-[118px] max-sm:w-[118px] max-lg:max-h-[178px] max-lg:max-w-[168px] h-[220px] w-[200px] rounded-2xl overflow-hidden '>
          <img className='max-sm:max-h-[120px] max-sm:max-w-[120px] max-lg:max-h-[180px] max-lg:max-w-[170px] lg:h-[230px] w-[210px] bg-no-repeat bg-contain' src={img1} alt="" />
        </div>
        <div className='sm:flex sm:flex-col '>
          <div className=' max-sm:text-base max-lg:text-[15px] lg:text-[19px] lg:font-bold'>A WEB DEVELOPER</div>
          <div className='max-sm:text-base text-white max-lg:text-[22px] lg:text-[30px] lg:font-bold'>Kunal Rana</div>
          <div className='max-sm:text-base sm:text-[18px] sm:font-bold'>I am Software Developer</div>
        </div>
      </div>
    </div>
  )
}

export default Card1