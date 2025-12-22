import React from 'react'
import Sdcard1 from './Secondcards/Sdcard1'
import Sdcard2 from './Secondcards/Sdcard2'
import Sdcard3 from './Secondcards/Sdcard3'

function Second() {
  return (
    <div>

      <div className='max-sm:flex max-sm:flex-col max-sm:gap-4 h-[280px] w-[100%] gap-4 flex '>
        <div className='max-sm:flex max-sm:gap-3  '>
          <Sdcard1 />
          <div className='sm:hidden'>
            <Sdcard3 />
          </div>
        </div>
        <Sdcard2 />
        <div className='max-sm:hidden'><Sdcard3 /></div>
        
      </div>
    </div>
  )
}

export default Second