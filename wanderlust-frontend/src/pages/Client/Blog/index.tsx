import BlogCard from '../../../companents/BlogCard'
import TitleBanner from '../../../companents/TitleBanner'


const Blog = () => {
  return (
    <>
    <TitleBanner  title='Blog Grid 4 Columns ' />

     <div className=''>
      <div>
      <div className='flex  justify-center lg:flex-row gap-10 leading-10 pt-10 items-center space-x-4'>
        <div className='text-center'>
        <FaPhoneAlt/>
        <h3 className='font-bold text-2xl'>Phone</h3>
        <p className='text-[#727272]'> A wonderful serenity has taken possession <br /> of my entire soul, like these sweet mornings.</p>
        <a className='text-[#234076]' href="#">+1-2345-2345</a>
        </div>
        <div className='text-center'>
          <div className='flex items-center'>
          <MdMailOutline />
          </div>
        <h3 className='font-bold text-2xl'>Email</h3>
        <p className='text-[#727272'>A wonderful serenity has taken possession <br /> of my entire soul, like these sweet mornings.</p>
        <a className='text-[#234076]' href="#">Contact@goodlayers.com</a>
        </div>
        <div className='text-center '>
        <  FaLocationArrow /> 
        <h3 className='font-bold text-2xl'>Location</h3>
        <p>4 apt. Flawing Street. The Grand Avenue. <br /> Liverpool, UK 33342</p>
        <a className='text-[#234076]' href="#">View On Google Map</a>
        </div>
      </div>
      <div className='text-center lg:flex  pt-10 bg-[#f3f3f3]  flex-col gap-5 w-[50%] m-auto'>
              <form action="#" method='POST'></form>
              <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-[#3a3a3a] text-4xl'>Leave us your info </h1>
                <p className='text-[#727272]'>and we will get back to you.</p>
              </div>

                <div className='flex flex-col lg:flex-row justify-center w-full  gap-8'>
                <div className='md-4 flex flex-col  w-full'>
                  <label className=' text-start  py-3 text-[#5c5c5c]' htmlFor="Username"></label>
                  <input className='w-full px-3 py-2 border border-[#e6e6e6]' type="text" id='username' placeholder='Full Name*' name='username' />
                </div>
                <div className='md-4 flex flex-col w-full'>
                  <label className=' text-start  py-3 text-[#5c5c5c]' htmlFor="password"></label>
                  <input  className='w-full px-3 py-2 border border-[#e6e6e6]' type="password" id='password' placeholder='Email*' name='password' />
                </div>
                </div>
                <div className='md-4 flex flex-col w-full'>
                  <label className=' text-start  py-3 text-[#5c5c5c]' htmlFor="password"></label>
                  <input  className='w-full px-3 py-2 border border-[#e6e6e6]' type="password" id='password' placeholder='Subject*' name='password' />
                </div>
                <div className='md-4 flex flex-col w-full'>
                  <label className=' text-start  py-3 text-[#5c5c5c]' htmlFor="password"></label>
                  <input  className='w-full  py-25 border border-[#e6e6e6]' type="password" id='password' placeholder='Message*' name='password' />
                </div>
                <div className='py-10 w-full] mb-6'>
                  <button className='  cursor-pointer bg-[#133a67] w-full text-white  font-semibold py-5' type='submit'>SUBMIT NOW</button>
                </div>
              </div>
      </div>
    </div> 

    <div className='grid lg:grid-cols-4 grid-cols-1 gap-7 lg:w-[70%] w-[95%] m-auto my-16'>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>

      
      
      


    </div>
    
    </>
   
  )
}

export default Blog
