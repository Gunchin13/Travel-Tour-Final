import React from 'react'
import TitleBanner from '../../../companents/TitleBanner'
import winterman from "../../../assets/images/winterman.jpg"
import DestinationsCard from '../../../companents/DestinationsCard'

const Destinations = () => {
  return (
    <>
      <TitleBanner title="Destinations"/>
      <section className='lg:w-[70%] w-[95%] m-auto   grid lg:grid-cols-3 grid-cols-1  gap-6 '> 
        <DestinationsCard/>
        <DestinationsCard/>
        <DestinationsCard/>
        <DestinationsCard/>
        <DestinationsCard/>
        <DestinationsCard/>



      </section>
      
      

    </>
  )
}

export default Destinations
