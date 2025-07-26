import React from 'react'
import { FaLocationArrow, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import TitleBanner from '../../../companents/TitleBanner'
import { GoMail } from 'react-icons/go'

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

       

     
    </div> 
   
  )
}

export default Contact
