import React from 'react'
import Sdcard1 from './Secondcards/Sdcard1'
import Sdcard2 from './Secondcards/Sdcard2'
import Sdcard3 from './Secondcards/Sdcard3'

function Second() {
  return (
    <div>

      <div className='max-sm:flex max-sm:flex-col max-sm:max-w-[640px] max-sm:h-[470px] max-sm:gap-4 max-sm:px-3 h-[280px] w-[100%] sm:gap-4 sm:flex '>
        <div className='max-sm:flex max-sm:gap-3  '>
          <Sdcard1 />
          <div className='sm:hidden max-sm:max-w-[50%]'>
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