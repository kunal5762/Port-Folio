import React from 'react'
import img12 from '../../../src/assets/ContactUs.png'
import { FaInstagram } from "react-icons/fa";
import emailjs, { send } from '@emailjs/browser';
import { useRef } from 'react';
function Contact() {
  const formsubmission = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ws2ibug", "template_2l7d3z8", formsubmission.current, "h5CDv0hZ7v8hI8piL")
      .then(() => {
        alert('Message sent successfully');
        formsubmission.current.reset();
      })
      .catch((error) => {
        console.log(error);
      });

  };
  return (
    <div className='max-sm:px-3 sm:flex sm:justify-center sm:items-center sm:px-10'>
      <div className='secondFadeDrop max-sm:flex max-sm:justify-center max-sm:items-center max-sm:max-h-120 max-sm:max-w-full sm:pt-12 sm:flex sm:justify-center sm:items-center w-350 h-150 sm:mb-10'>
        <div className='max-sm:h-100 max-sm:max-w-full max-sm:flex max-sm:justify-center max-sm:items-center h-150 w-[100%] bg-[#191919] rounded-4xl sm:flex sm:justify-evenly sm:items-center '>
          <div className='sm:h-115 sm:w-115 overflow-hidden rounded-4xl max-sm:hidden max-lg:hidden'>
            <img className='h-115 w-120' src={img12} alt="" />
          </div>
          <div className='max-sm:flex max-sm:flex-col max-sm:px-2 max-sm:max-w-full max-sm:gap-4 max-sm:items-center max-sm:max-full sm:flex sm:flex-col sm:gap-2 sm:h-100'>
            <h1 className='sm:text-[50px] max-sm:text-base'>CONTACT US</h1>
            <form ref={formsubmission} onSubmit={sendEmail} className='max-sm:flex max-sm:flex-col max-sm:max-w-full sm:flex sm:flex-col sm:gap-3'>
              <label>Full Name : </label>
              <input className='border-b-2 max-sm:text-balance' type="text" name="name" required />
              <label>E-mail : </label>
              <input className='border-b-2 max-sm:text-balance' type="email" name="email" required />
              <input type="hidden" name="title" value="Portfolio Contact Message" />
              <label>Message : </label>
              <textarea className='border-b-2 max-sm:text-balance' name="message"
                required></textarea> <br />
              <div className=' max-sm:flex max-sm:max-w-full max-sm:justify-between sm:flex sm:gap-10 sm:justify-center sm:items-center'>
                <button type='submit' className='max-sm:max-w-30 h-10 w-50 bg-white rounded-3xl text-[black] max-sm:text-base'>Contact Us</button>
                <a className='text-[30px] max-sm:text-balance' href="https://www.instagram.com/__rana__kunal__?igsh=MWVxamluOGhxcGN5Nw==" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </form>
          </div>
        </div >
      </div >
     </div>
  )
}

export default Contact