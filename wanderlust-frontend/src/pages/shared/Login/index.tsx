import { div } from 'framer-motion/client'
import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import TitleBanner from '../../../companents/TitleBanner'

const Login = () => {
  return (
    <div className=' '>
       <TitleBanner title='Login'/>
        <div className='text-center lg:flex flex-col w-[86%] m-auto'>
        <form action="#" method='POST'></form>
          <div className='flex flex-col lg:flex-row justify-center w-full  gap-8'>
          <div className='md-4 flex flex-col  w-full'>
            <label className=' text-start  py-3 text-[#5c5c5c]' htmlFor="Username">Username or E-Mail</label>
            <input className='w-full px-3 py-2 border border-[#e6e6e6]' type="text" id='username' placeholder='username' name='username' />
          </div>
          <div className='md-4 flex flex-col w-full'>
            <label className=' text-start  py-3 text-[#5c5c5c]' htmlFor="password">Password</label>
            <input  className='w-full px-3 py-2 border border-[#e6e6e6]' type="password" id='password' placeholder='password' name='password' />
          </div>
          </div>


          <div className='py-10 w-full] mb-6'>
            <button className='  cursor-pointer bg-[#243076] w-full text-white  font-semibold py-5' type='submit'>SIGN IN!</button>
          </div>
          <div className='md-4 text-[#2e497d] font-semibold'>
            <a href="#">Forget Password?</a>
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
              Do not have an account? <a href="register" className=' text-[#234076] text-lg  py-3'>Create an Account</a></p>
          </div>
        </div>
    </div>
    
  )
}

export default Login
