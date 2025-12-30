import React from 'react'
import img1 from '../../assets/mainimg.jpeg'
import { Link } from 'react-router'
function Card1() {
  return (
    <div className='max-sm:max-w-[50%]'>
      <div className=' fadeDrop max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:max-w-[100%] max-sm:max-h-[280px] max-sm:gap-3 max-sm:px-1 bg-[#191919] max-sm:rounded-2xl h-[320px] sm:w-[600px] sm:flex sm:rounded-4xl sm:justify-center sm:items-center sm:gap-8 text-[#323232] hover:scale-110 transition-transform duration-200 origin-center'>
        <div className=' max-sm:max-h-[118px] max-sm:w-[118px] h-[220px] w-[200px] rounded-2xl overflow-hidden '>
          <img className='max-sm:max-h-[120px] max-sm:max-w-[120px] sm:h-[230px] w-[210px] bg-no-repeat bg-contain' src={img1} alt="" />
        </div>
        <div className='sm:flex sm:flex-col '>
          <div className=' max-sm:text-base sm:text-[19px] sm:font-bold'>A WEB DEVELOPER</div>
          <div className='max-sm:text-base text-white sm:text-[30px] sm:font-bold'>Kunal Rana</div>
          <div className='max-sm:text-base sm:text-[18px] sm:font-bold'>I am Software Developer</div>
        </div>
      </div>
    </div>
  )
}

export default Card1