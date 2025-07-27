import React from 'react'
import TitleBanner from '../../../companents/TitleBanner'
import gallery1 from "../../../assets/images/Gallery1.jpg"
import { IoSearch } from 'react-icons/io5'
import Portfolio from '../Portfolio'
import PortfolioCard from '../../../companents/PortfolioCard'

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
 
    </>
  

  )
}

export default Gallery
