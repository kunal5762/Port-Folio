import React from 'react'
import Main from '../Main'
import Second from '../Second'
import Lastcd from '../Lastcd'

function Home() {
  return (
    <div>
      <div className='flex flex-col mt-18 lg:items-center'>
        <Main />
        <Second/>
        <Lastcd/>
      </div>
    </div>
  )
}

export default Home