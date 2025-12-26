import React from 'react'
import Card1 from './Card1'
import task from '../../assets/taskManger.png'
function Project1() {
    return (
        <>
            <div className='max-sm:h-auto h-80 w-[100%] flex justify-center  '>
                <Card1 heading="TASK MANAGER" desc="I built a Task Manager using HTML, CSS, and JavaScript to better understand how real-world web applications work at a basic level. The project allows users to add tasks, organize them into different stages like To Do, In Progress, and Completed, and manage them through simple interactions such as moving and updating tasks. While building this project, I handling all the logic using vanilla JavaScript without relying on any frameworks and make clean UI. This project wasn’t just about making something that looks good. It helped me learn how to break a problem into smaller parts, handle user input safely, and debug issues related to DOM manipulation and state management" img={task} />
            </div>
        </>
    )
}

export default Project1