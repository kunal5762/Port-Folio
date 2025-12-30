import React from 'react'
import Tdcard1 from './Thirdcard/Tdcard1'
import Tdcard2 from './Thirdcard/Tdcard2'

function Lastcd() {
  return (
    <div>
        <div className='max-sm:flex max-sm:flex-col max-sm:max-w-[640px] max-sm:h-[500px] max-sm:px-3 max-sm:gap-4 max-lg:max-w-[1024px] sm:h-[300px] w-[100%] sm:gap-6 sm:flex  '>
            <Tdcard1/>
            <Tdcard2/>
        </div>
    </div>
  )
}

export default Lastcd