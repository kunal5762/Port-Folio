import React from 'react'
import Main from '../Main'
import Second from '../Second'
import Lastcd from '../Lastcd'

function Home() {
  return (
    <div className='max-sm:flex'>
      <div className='max-sm:mt-6 flex flex-col mt-8 w-[100%] items-center'>
        <Main />
        <Second/>
        <Lastcd/>
      </div>
    </div>
  )
}

export default Home