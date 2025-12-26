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
    <div className='flex justify-center items-center px-10'>
      <div className=' secondFadeDrop max-sm:w-[500px] max-sm:h-170 max-sm:pt-23 max-sm:flex max-sm:justify-center pt-12 flex justify-center items-center w-350 h-150 mb-10'>
        <div className='max-sm:h-140 h-150 w-[100%] bg-[#191919] rounded-4xl flex justify-evenly items-center '>
          <div className='h-115 w-115 overflow-hidden rounded-4xl max-sm:hidden max-lg:hidden'>
            <img className='h-115 w-120' src={img12} alt="" />
          </div>
          <div className='flex flex-col gap-2 h-100'>
            <h1 className='text-[50px]'>CONTACT US</h1>
            <form ref={formsubmission} onSubmit={sendEmail} className='flex flex-col gap-3'>
              <label>Full Name : </label>
              <input className='border-b-2' type="text" name="name" required />
              <label>E-mail : </label>
              <input className='border-b-2' type="email" name="email" required />
              <input type="hidden" name="title" value="Portfolio Contact Message" />
              <label>Message : </label>
              <textarea className='border-b-2' name="message"
                required></textarea> <br />
              <div className='flex gap-10 justify-center items-center'>
                <button type='submit' className='h-10 w-50 bg-white rounded-3xl text-[black]'>Contact Us</button>
                <a className='text-[30px]' href="https://www.instagram.com/__rana__kunal__?igsh=MWVxamluOGhxcGN5Nw==" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </form>
          </div>
        </div >
      </div >
    </div>
  )
}

export default Contact