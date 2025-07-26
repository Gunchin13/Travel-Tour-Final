import React from 'react'
import { FaFacebookF, FaLocationArrow, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import TitleBanner from '../../../companents/TitleBanner'
import { GoMail } from 'react-icons/go'
import { TbBrandTwitter, TbCookieManFilled, TbMailFilled } from 'react-icons/tb'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { BsSkype } from 'react-icons/bs'

const Contact = () => {
  return ( 
    <div>
        <TitleBanner title='Contact Us'/>
        <section className=' lg:grid-cols-3 grid-cols-1 grid  gap-32   w-[85%] m-auto py-24'>
            <div className='flex flex-col  items-center justify-start gap-10'>
            <FaPhoneAlt className='text-4xl font-bold' />

                <span className='text-xl font-semibold tracking-widest uppercase '>Phone</span>
                <p className='text-center text-[#727272]  leading-7 text-lg'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                <a className='text-[#234076]' href="#">+1-2345-2345</a>
            </div>
            <div className='flex flex-col items-center justify-start gap-10'>
            <GoMail className='text-4xl font-bold' />
            <span className='text-xl font-semibold tracking-widest uppercase '>Email</span>
                <p className='text-center text-[#727272]  leading-7 text-lg'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                <a className='text-[#234076]'  href="#">Contact@goodlayers.com</a>
            </div> 
            <div className='flex flex-col items-center justify-start gap-10'>
            <FaLocationArrow  className='text-4xl font-bold' />
                <span className= 'tracking-widest uppercase text-xl font-semibold'>Location</span>
                <p className='text-center text-[#727272]  leading-7 text-lg'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                <a className='text-[#234076]' href="#">View On Google Map</a>
            </div>
            


        </section>
        <section className="bg-[#f3f3f3] m-auto py-20 ">
           <form action="#" method="POST" className="lg:w-[60%] w-[95%] m-auto my-12">
          <div className="flex flex-col items-center gap-5 mb-10">
            <h1 className="font-extrabold text-[#3a3a3a] lg:text-4xl text-3xl uppercase tracking-widest text-center">
              Leave us your info
            </h1>
            <p className="text-[#727272]  lg:text-2xl text-xl  text-center">
              and we will get back to you.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <input type="text" placeholder="full name*" className="bg-white capitalize text-lg text-black border-0 outline-0 py-3.5 px-2" />
            <input type="emal" placeholder="email*" className="bg-white capitalize text-lg text-black border-0 outline-0 py-3.5 px-2" />
          </div>
          <input type="text" placeholder="subject*" className="bg-white capitalize text-lg text-black border-0 outline-0 py-3.5 px-2 w-full mt-5" />
          <textarea name="" id="" placeholder="message*" className="bg-white capitalize text-lg text-black w-full mt-5 py-3 px-3 h-[10rem]"></textarea>
             <button
              className="  cursor-pointer bg-[#133a67] w-full text-white  font-semibold py-5 mt-5"
              type="submit"
            >
              SUBMIT NOW
            </button>
          </form>
      </section>
      <section className="w-full h-[60vh] ">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.52375329728!2d49.69015417571401!3d40.394475516487674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1753535225338!5m2!1sen!2saz"
      className="border-0 w-full h-full " 
      loading="lazy" >
    </iframe>
      </section>
      <div className='text-white text-2xl flex items-center justify-center gap-8 bg-[#2d2d2d] py-20'>
      <TbMailFilled />
      <FaFacebookF  />
      <BsSkype />
      <TbBrandTwitter />
      </div>

        

     

       

     
    </div> 
   
  )
}

export default Contact
