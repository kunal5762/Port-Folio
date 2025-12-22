import React from 'react'
import img1 from '../../assets/mainimg.jpeg'
import { Link } from 'react-router'
function Card1() {
  return (
    <div>
      <div className='fadeDrop max-sm:flex max-sm:flex-col max-sm:w-[280px] max-sm:h-[320px] max-sm:py-2 max-sm:gap-2  bg-[#191919] h-[320px] w-[600px] flex rounded-4xl justify-center items-center gap-8 text-[#323232] hover:scale-110 transition-transform duration-200 origin-center'>
        <div className=' max-sm:h-[150px] max-sm:w-[180px] h-[220px] w-[200px] rounded-2xl overflow-hidden '>
          <img className='max-sm:h-[150px] max-sm:w-[180px] h-[230px] w-[210px] bg-no-repeat bg-contain' src={img1} alt="" />
        </div>
        <div className='flex flex-col '>
          <div className=' max-sm:text-[11px] text-[19px] font-bold'>A WEB DESIGNER</div>
          <div className='max-sm:text-[20px] text-white text-[30px] font-bold'>Kunal Rana</div>
          <div className='max-sm:text-[px] text-[18px] font-bold'>I am Software Developer <br />in India.</div>
        </div>
      </div>
    </div>
  )
}

export default Card1