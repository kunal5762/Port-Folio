import React from 'react'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import { PiSignatureLight } from "react-icons/pi";
function Main() {
  return (
    <div >
      <div className='max-sm:max-w-[100%] max-sm:flex max-sm:items-center max-sm:max-h-[310px] max-sm:px-2 max-sm:gap- max-lg:px-1 h-[340px] w-[100%] sm:flex sm:gap-5 '>
        <Card1 />
        <Card2 />
      </div>

    </div>
  )
}

export default Main