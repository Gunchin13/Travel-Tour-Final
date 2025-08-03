import React from 'react'
import TitleBanner from '../../../companents/TitleBanner'
import TeamCard from '../../../companents/TeamCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




const Team = () => {
  return (
    <>
    <TitleBanner title="Team / Plain Style"/>
    <section className='m-auto w-[80%] py-6'>
        <h1 className='text-4xl font-bold my-10 '>Personnel 3 Columns<br  className='bg-[#cecece] text-[#cecece] w-10 h-0.5'/>
        </h1>
        <div className='grid lg:grid-cols-3  grid-cols-1  gap-25'>
           <TeamCard/>
           <TeamCard/>
           <TeamCard/>
           <TeamCard/>
           <TeamCard/>
           <TeamCard/>
        </div>
   
   


    </section>
    <section className='team-slider py-10 w-full '>
        <div className='lg:w-[75%] w-[95%] m-auto py-10 flex flex-col gap-4 '>
            <div className='flex flex-col items-start gap-3'>
            <span className='text-[#dbdbdb]'>Divider, Excerpt, Social icon can be disabled</span>
            <h1 className='text-white text-3xl font-bold'>Personnel With Carousel</h1>
            </div>
            <div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
       
        className="mySwiper"
      >
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>

       
      </Swiper>
        </div>
        </div>
       
    </section>
   
    </>
   
  )
}

export default Team
