import React from 'react'
import Main from '../Main'
import Second from '../Second'
import Lastcd from '../Lastcd'

function Home() {
  return (
    <div className='max-sm:flex max-sm:justify-center max-sm:items-center'>
      <div className=' max-sm:max-w-[640px] max-xl:px-2 sm:flex sm:flex-col sm:mt-8 w-[100%] sm:items-center'>
        <Main />
        <Second/>
        <Lastcd/>
      </div>
    </div>
  )
}

export default Home