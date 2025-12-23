import React from 'react'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import { PiSignatureLight } from "react-icons/pi";
function Main() {
  return (
    <div >
        <div className='max-sm:w-[100%] max-sm:px-6 max-sm:h[400px] max-sm:gap-2 h-[340px] w-[100%] flex gap-5 '>
            <Card1/>
           <Card2/>
        </div>

    </div>
  )
}

export default Main