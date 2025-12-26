import React from 'react'
import img from '../../assets/mainimg.jpeg'
function About() {
  return (
    <div className=' flex justify-center items-center px-10'>
      <div className='secondFadeDrop max-sm:px-20 max-sm:h-400 max-sm:w-[530px] max-xl:w-[1280px] max-lg:w-[1020px] h-150 w-350 flex justify-center items-center mb-10 '>
        <div className='max-sm:h-380 max-sm:w-[500px] max-sm:flex max-sm:flex-col max-sm:justify-around h-140 w-[100%] bg-[#191919] mt-15 rounded-4xl flex justify-around items-center hover:scale-90 transition-transform duration-200 origin-center'>
          <div className='h-130 w-140 flex flex-col justify-around max-sm:hidden'>
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
          <div className='h-105 w-85 overflow-hidden rounded-4xl '>
            <img className='h-110 w-85' src={img} alt="" />
          </div>
          <div className='sm:hidden max-sm:w-[460px] max-sm:h-220 max-sm:flex max-sm:px-2 h-130 w-140 flex flex-col justify-around'>
            <div>
              <h1 className='text-[39px] font-bold'>Who I Am</h1>
              <p className='text-[22px] text-[#424040]'><i>I’m a full-stack developer focused on building clean, functional, and user-friendly web applications.</i></p>
            </div>
            <div>
              <h1 className='text-[39px] font-bold'>What I Do</h1>
              <p className='text-[22px] text-[#424040]'><i>I work with Frontend: HTML, CSS, Tailwind CSS, JavaScript, React and also worked with Backend:Core Java and Advances Java and i`ve worked with MYSQL and MongoDB . Core Skills: API development, responsive UI, component-based architecture, problem-solving</i></p>
            </div>
            <div>
              <h1 className='text-[39px] font-bold'>How I Work</h1>
              <p className='text-[22px] text-[#424040]'><i>I focus on writing maintainable code, clean logic, and building projects that solve real problems. I enjoy turning ideas into working products with smooth user experiences.</i></p>
            </div>
            <div>
              <h1 className='text-[39px] font-bold'>Current Focus</h1>
              <p className='text-[22px] text-[#424040]'><i>Backend development Advanced Java and JavaScript , Data Structures & Algorithms using C++</i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About