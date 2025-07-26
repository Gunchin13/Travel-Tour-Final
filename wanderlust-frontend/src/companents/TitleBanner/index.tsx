import React from 'react'
import bgimage from "../../assets/images/bgimage .png"
import titlebannerimage from "../../assets/images/titlebannerimage.jpg"


 export interface TitleBannerProps {
    title:  string;
}

const TitleBanner = (props:TitleBannerProps) => {
  return  (
    <>
  <div className='relative title-banner w-full h-[50vh]'>
      <img src={bgimage} alt=""  className='  opacity-10 w-full h-full object-cover'/>
      <h1 className='top-2/5 absolute   left-1/2 z-10 text-6xl items-center transform -translate-x-1/2 -translete-y-1/2 text-center font-bold  py-10 border-b'>{props.title}</h1>

  </div>

  {/* <div className='relative title-banner2 w-full h-[50vh]'>
      <img src={titlebannerimage} alt=""  className='  opacity-10 w-full h-full object-cover'/>
      <h1 className='top-2/5 absolute   left-1/2 z-10 text-6xl items-center transform -translate-x-1/2 -translete-y-1/2 text-center font-bold  py-10 border-b'>{props.title}</h1>

  </div> */}
  </>
  )
  
   
    
}

export default TitleBanner
