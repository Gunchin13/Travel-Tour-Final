import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import TitleBanner from '../../../companents/TitleBanner'

const Register = () => {
  return (
    <div className=''>
      <TitleBanner title='Register'/>
      <div className='w-[86%] m-auto'>
      <div className='flex flex-col lg:flex-row w-full gap-4 '>
      <div className='flex flex-col gap-3 w-full lg:flex-col'>
       <label className=' text-[#5c5c5c]' htmlFor="username">First-Name*</label>
       <input className=' w-full px-3 py-2 border-2 border-[#e6e6e6] ' type="text" id='username' placeholder='First-Name' />
      </div>
      <div className='flex flex-col gap-3 w-full lg:flex-col '>
       <label className='text-[#5c5c5c]' htmlFor="password">Last-Name*</label>
       <input className=' w-full px-3 py-2 border-2 border-[#e6e6e6] ' type="password" id='password' placeholder='Last-Name' />
      </div> 
     </div>
     <div className='flex flex-col lg:flex-row w-full gap-4 '>
      <div className=' flex flex-col gap-3 w-full lg:flex-col'>
       <label className=' text-start  py-3 text-[#5c5c5c]' htmlFor="username">Password*</label>
       <input className=' w-full px-3 py-2 border-2 border-[#e6e6e6] ' type="text" id='username' placeholder='Password' />
      </div>
      <div className='flex flex-col gap-3 w-full lg:flex-col '>
       <label className=' text-start  py-3 text-[#5c5c5c]' htmlFor="password">Confirm-password*</label>
       <input className=' w-full px-3 py-2 border-2 border-[#e6e6e6] ' type="password" id='password' placeholder='Confirm-password' />
      </div> 
     </div>
     <div className='flex flex-col lg:flex-row w-full gap-4 '>
     <div className="form-group flex flex-col  gap-3 w-full lg:flex-col">
      <label htmlFor="birth-date" className="text-start  py-3 text-[#5c5c5c]">Birth Date*</label>
    <div className="flex space-x-6 ">
     <select id="birth-day" name="birth-day" className="w-full px-3 py-2 border-2 border-[#e6e6e6] ">
      <option value="" disabled selected>Day</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
     </select>
     <select id="birth-month" name="birth-month" className="w-full px-3 py-2 border-2 border-[#e6e6e6]  ">
      <option value="" disabled selected>Month</option>
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
     </select>
     <select id="birth-year" name="birth-year" className="w-full px-3 py-2 border-2 border-[#e6e6e6] ">
      <option value="" disabled selected>Year</option>
      <option value="1990">1990</option>
      <option value="1991">1991</option>
      <option value="1992">1992</option>
     </select>
    </div>
     </div>      
      <div className='flex flex-col gap-3 w-full lg:flex-col '>
       <label className='text-start  py-3 text-[#5c5c5c]' htmlFor="password">Email*</label>
       <input className='  w-full px-3 py-2 border-2 border-[#e6e6e6]' type="password" id='password' placeholder='Email' />
      </div> 
     </div>
     <div className='flex flex-col lg:flex-row w-full gap-4 '>
      <div className=' flex flex-col gap-3 w-full lg:flex-col'>
       <label className=' text-start  py-3 text-[#5c5c5c]' htmlFor="username">Phone*</label>
       <input className=' w-full px-3 py-2 border-2 border-[#e6e6e6] ' type="phone" id='phone' placeholder='Phone' />
      </div>
     <div className='form-group flex flex-col  gap-3 w-full lg:flex-col'>
     <label htmlFor="Country" className="text-start  py-3 text-[#5c5c5c]">Country*</label>
     <div className='flex space-x-6'> 
      <select id="country" name="country" className="w-full px-3 py-2 border-2 border-[#e6e6e6] ">
      <option value="" disabled selected>Country</option>
      <option value="1990">1990</option>
      <option value="1991">1991</option>
      <option value="1992">1992</option>
     </select>
      </div>
     </div> 
     </div>
     <div className='py-10 w-full] mb-6'>
      <button className='  cursor-pointer bg-[#243076] w-full text-white  font-semibold py-5' type='submit'>SIGN IN!</button>
      </div>
      <div className=' gap-4 flex flex-col lg:flex-row justify-center  items-center mt-6  '>
                  <button className='w-full lg:w-auto cursor-pointer flex items-center gap-3 bg-[#1a77f2] rounded-sm font-semibold text-white px-3 py-4'>
                    <i className='fab fa-facebook-f mr-2'></i> <FaFacebook />
                    Continue with Facebook
                  </button>
                  <button className='w-full lg:w-auto  cursor-pointer flex items-center gap-3 bg-[#dc4e41]  rounded-sm text-white font-semibold  px-3 py-4'>
                    <i className='fab fa-facebook-f mr-2'></i><FaGoogle />
                    Continue with Google
                  </button>
                  <button className='w-full lg:w-auto  cursor-pointer flex items-center gap-3 bg-[#000000] rounded-sm text-white font-semibold  px-3 py-4'>
                    <i className='fab fa-facebook-f mr-2'></i><FaXTwitter />
                    Continue with Twitter
                  </button>
     </div>
     <div>
      <p className=' flex flex-col mt-4 text-center text-xl  font-bold text-black'>
      Already a member?<a href="login" className=' text-[#234076] text-lg  py-3'>Login</a></p>
      </div>
      </div>
    
    </div>
  )
}

export default Register
