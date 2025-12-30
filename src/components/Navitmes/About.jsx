import React from 'react'
import img from '../../assets/mainimg.jpeg'
function About() {
  return (
    <div className='max-sm:px-3 sm:flex sm:justify-center sm:items-center sm:px-10'>
      <div className='secondFadeDrop max-sm:max-h-400 sm:max-h-200 sm:w-350 sm:flex sm:justify-center items-center'>
        <div className='max-sm:max-h-400 max-sm:max-w-[640px] max-sm:flex max-sm:flex-col max-sm:justify-around sm:max-h-220 max-w-[100%] bg-[#191919] sm:mt-10 sm:py-10 sm:px-10 sm:gap-2 rounded-4xl sm:flex sm:justify-around sm:items-center hover:scale-90 transition-transform duration-200 origin-center'>
          <div className=' max-sm:hidden flex justify-around items-center max-h-250 sm:gap-5  '>
            <div className='sm:flex sm:flex-col w-[50%] gap-6'>
              <div>
                <h1 className='text-[28px] font-bold'>Who I Am</h1>
                <p className='text-[15px] text-[#424040]'>I’m a full-stack developer focused on building clean, functional, and user-friendly web applications.</p>
              </div>
              <div>
                <h1 className='text-[28px] font-bold'>What I Do</h1>
                <p className='text-[15px] text-[#424040]'>I work with Frontend: HTML, CSS, Tailwind CSS, JavaScript, React and also worked with Backend:Core Java and Advances Java and i`ve worked with MYSQL and MongoDB . Core Skills: API development, responsive UI, component-based architecture, problem-solving</p>
              </div>
              <div>
                <h1 className='text-[28px] font-bold'>How I Work</h1>
                <p className='text-[15px] text-[#424040]'>I focus on writing maintainable code, clean logic, and building projects that solve real problems. I enjoy turning ideas into working products with smooth user experiences.</p>
              </div>
              <div>
                <h1 className='text-[28px] font-bold'>Current Focus</h1>
                <p className='text-[17px] text-[#424040]'>Backend development Advanced Java and JavaScript , Data Structures & Algorithms using C++</p>
              </div>
            </div>
            <div>
              <div className='sm:max-h-96 sm:max-w-82 overflow-hidden rounded-2xl'>
              <img className=' sm:max-h-100 sm:max-w-85' src={img} alt="" />
            </div>
            </div>
          </div>
          <div className='sm:hidden max-h-[900px] max-sm:max-w-full flex flex-col items-center justify-center gap-5 px-5 py-8 '>
            <div className=' max-h-68 max-w-62  overflow-hidden rounded-4xl '>
              <img className='max-h-70 max-w-65' src={img} alt="" />
            </div>
            <div className='sm:hidden h-150 max-w-full flex flex-col items-center gap-4'>
              <div>
                <h1 className='text-balance font-extrabold'>Who I Am</h1>
                <p className='text-base text-[#424040]'><i>I’m a full-stack developer focused on building clean, functional, and user-friendly web applications.</i></p>
              </div>
              <div>
                <h1 className='text-balance font-extrabold'>What I Do</h1>
                <p className='text-base text-[#424040]'><i>I work with Frontend: HTML, CSS, Tailwind CSS, JavaScript, React and also worked with Backend:Core Java and Advances Java and i`ve worked with MYSQL and MongoDB . Core Skills: API development, responsive UI, component-based architecture, problem-solving</i></p>
              </div>
              <div>
                <h1 className='text-balance font-extrabold'>How I Work</h1>
                <p className='text-base text-[#424040]'><i>I focus on writing maintainable code, clean logic, and building projects that solve real problems. I enjoy turning ideas into working products with smooth user experiences.</i></p>
              </div>
              <div>
                <h1 className='text-balance font-extrabold'>Current Focus</h1>
                <p className='text-base text-[#424040]'><i>Backend development Advanced Java and JavaScript , Data Structures & Algorithms using C++</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About