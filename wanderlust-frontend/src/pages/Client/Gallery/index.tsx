import React from 'react'
import TitleBanner from '../../../companents/TitleBanner'
import gallery1 from "../../../assets/images/Gallery1.jpg"
import { IoSearch } from 'react-icons/io5'
import Portfolio from '../Portfolio'
import PortfolioCard from '../../../companents/PortfolioCard'
import TourSlider from '../../../companents/TurSlider'

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import carousel1 from "../../../assets/images/carousel1.jpg"
import { GrSearch } from 'react-icons/gr'







const Gallery = () => {
  return (
    <>
    <TitleBanner title='Gallery'/>
    <section>
    <div >
        <div className='text-center  py-10 leading-15 '>
            <h1 className=' text-4xl  font-extrabold  uppercase '>Grid Style</h1>
            <span className='text-xl'>With Space</span>
        </div>
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-2 relative py-10  m-auto px-6'>
            <div  className='relative group  overflow-hidden'>
            <img src={gallery1} className='transition-transform duration-500 object-cover group-hover:object-center group-hover:scale-110' alt="" />
            <div className='absolute top-30 cursor pointer left-48 group-hover:bg-opacity-60 '>
               <IoSearch className=' opacity-0 group-hover:opacity-100  transition-opacity duration-300 text-white text-3xl' />
            </div>
            </div>
            <div  className='relative group  overflow-hidden'>
            <img src={gallery1} className='transition-transform duration-500 object-cover group-hover:object-center group-hover:scale-110' alt="" />
            <div className='absolute top-30 cursor pointer left-48 group-hover:bg-opacity-60 '>
               <IoSearch className=' opacity-0 group-hover:opacity-100  transition-opacity duration-300 text-white text-3xl' />
            </div>
            </div>
            <div  className='relative group  overflow-hidden'>
            <img src={gallery1} className='transition-transform duration-500 object-cover group-hover:object-center group-hover:scale-110' alt="" />
            <div className='absolute top-30 cursor pointer left-48 group-hover:bg-opacity-60 '>
               <IoSearch className=' opacity-0 group-hover:opacity-100  transition-opacity duration-300 text-white text-3xl' />
            </div>
            </div>
            <div  className='relative group  overflow-hidden'>
            <img src={gallery1} className='transition-transform duration-500 object-cover group-hover:object-center group-hover:scale-110' alt="" />
            <div className='absolute top-30 cursor pointer left-48 group-hover:bg-opacity-60 '>
               <IoSearch className=' opacity-0 group-hover:opacity-100  transition-opacity duration-300 text-white text-3xl' />
            </div>
            </div>
        </div>

    </div>
    </section>
    <section>
    <div className='grid lg:grid-cols-4 grid-cols-1 '>
    <PortfolioCard/>
    <PortfolioCard/>
    <PortfolioCard/>
    <PortfolioCard/>
    </div>
    </section>
    <section className="lg:w-[85%] w-[95%] mx-auto my-16">
        <div className="title flex items-center flex-col justify-center gap-3 mb-8">
          <h1 className="text-black font-bold text-3xl text-center">
            Moments Through the Lens
          </h1>
          <span className="text-gray-500 text-center">
            Hover With Center Caption
          </span>
        </div>

        <Swiper
          modules={[Scrollbar]}
          scrollbar={{ hide: false }}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
        </Swiper>
     </section>
     <section className='plain-carousel w-full  py-25'>
      <div className=' flex flex-col gap-3 text-center text-white '>
        <h1 className='text-4xl  font-bold'>Gallery Plain Carousel</h1>
        <span className='text-lg font-bold'>Hover With Left Title & Caption</span>
      </div>
     <div className='w-[70%] m-auto py-15 cursor-pointer hover:opacity-80'>
     <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        
      </Swiper>
     </div>
     </section>
     <section>
      <div className='title flex items-center flex-col justify-center '>
        <h1 className='text-black font-bold text-4xl py-8 text-center'>Gallery With Thumbnail</h1>
        <span className='text-gray-500 text-center'>Hover With Title & Caption</span>
      </div>
     <div className='w-[70%] m-auto py-15 cursor-pointer hover:opacity-80'>
     <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        
      </Swiper>
     </div>
     </section>
     <section>
     <div className='w-[70%] m-auto py-15 cursor-pointer hover:opacity-80'>
     <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        
      </Swiper>
     </div>
     </section>
     <section>
     <div className='w-[70%] m-auto py-15 cursor-pointer hover:opacity-80'>
     <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
      </Swiper>
     </div>
     </section>
     
     
   
    
    
 
    </>
  

  )
}

export default Gallery
