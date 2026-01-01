import React from 'react'
import Card2 from '../LiveProjects/Card2'
import img from '../../assets/image.png'
function Project2() {
    return (
        <>
            <a href="https://randomgenerato.netlify.app/" target='_blank' rel="noopener noreferrer">
                <div className='max-sm:h-auto h-80 w-[100%] flex justify-center  '>
                    <Card2 img={img} heading="Password Generate" desc="This project is a simple web-based random password generator built using HTML, CSS, and JavaScript. It allows users to generate strong passwords instantly with a single click. The generator uses JavaScript logic to combine uppercase letters, lowercase letters, numbers, and special characters to create secure passwords that reduce the risk of brute-force and guessing attacks. The interface is clean and responsive, designed with CSS for a user experience. Users can quickly copy the generated password and use it for accounts, forms, or testing purposes."/>
                </div>
            </a>

        </>
    )
}

export default Project2