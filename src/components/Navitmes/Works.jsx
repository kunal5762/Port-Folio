import React from 'react'
import Project1 from '../LiveProjects/Project1'
import Project2 from '../LiveProjects/Project2'
function Works() {
  return (
    <>
      <div className='flex justify-center max-sm:h-auto max-lg:h-240 max-xl:h-190 px-10 sm:mb-6'>
        <div className='max-xl:flex max-xl:justify-around max-lg:flex max-lg:justify-around max-lg:gap-10 2xl:flex justify-center flex-col max-sm:gap-3 max-sm:pt-5 max-lg:mt-10 lg:pt-15 2xl:w-[1200px]'>
          <Project1 />
          <Project2/>
        </div>
      </div>
    </>
  )
}

export default Works