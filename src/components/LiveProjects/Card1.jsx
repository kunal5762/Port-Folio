import React from 'react'
function Card1(props) {
  return (
   <a href='https://kunal5762.github.io/Task_Manger/' target='_blank' rel="noopener noreferrer">
    <div className='secondFadeDrop max-sm:flex max-sm:flex-col max-sm:gap-10 max-sm:text-center max-sm:items-center h-fit w-[100%] flex justify-between px-10 py-5 bg-[#191919] rounded-3xl hover:scale-90 transition-transform duration-200 origin-center'>
        <div className='max-sm:w-[100%] max-sm:gap-5 w-[70%] gap-3 flex flex-col'>
            <h2 className='text-[38px] font-bold'>{props.heading}</h2>
            <p className='text-[#383737]'>{props.desc}</p>
        </div>
        <div>
            <img className='h-65 w-60 rounded-3xl max-sm:mb-5' src={props.img} alt="" />
        </div>
    </div>
   </a>
  )
}

export default Card1