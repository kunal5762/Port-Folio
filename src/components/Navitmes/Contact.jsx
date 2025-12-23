import React from 'react'
import img12 from '../../../src/assets/ContactUs.png'
import { FaInstagram } from "react-icons/fa";
function Contact() {
  return (
    <div className='flex justify-center items-center max-sm:pr-10'>
      <div className=' secondFadeDrop max-sm:pl-15 max-sm:w-[500px] max-sm:h-170 max-sm:pt-23 max-sm:flex max-sm:justify-center pt-12 flex justify-center items-center w-350 h-150 mb-10'>
        <div className='max-sm:h-140 h-150 w-[100%] bg-[#191919] rounded-4xl flex justify-evenly items-center '>
          <div className='h-115 w-115 overflow-hidden rounded-4xl max-sm:hidden '>
            <img className='h-115 w-120' src={img12} alt="" />
          </div>
          <div className='flex flex-col gap-2 h-100'>
            <h1 className='text-[50px]'>CONTACT US</h1>
            <form className='flex flex-col gap-3'>
              <label>Full Name : </label>
              <input className='border-b-2' type="text" />

              <label>E-mail : </label>
              <input className='border-b-2' type="email" />

              <label>Message : </label>
              <textarea className='border-b-2'></textarea> <br />
            </form>
            <div className='flex gap-10 justify-center items-center'>
              <button className='h-10 w-50 bg-white rounded-3xl text-[black]'>Contact Us</button>
              <div className='flex gap-8 '>
                <a className='text-[30px]' href="https://www.instagram.com/__rana__kunal__?igsh=MWVxamluOGhxcGN5Nw==" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div>
  )
}

export default Contact