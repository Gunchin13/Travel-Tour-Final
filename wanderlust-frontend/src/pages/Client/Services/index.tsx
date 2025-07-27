import React from 'react'
import pages1 from "../../../assets/images/pages1.jpg"
import TitleBanner from '../../../companents/TitleBanner'
import pages2 from "../../../assets/images/pages2.jpg"
import pages3 from "../../../assets/images/pages3.jpg"
import hikingman from "../../../assets/images/hiking-man.jpg"
import { FaRegLightbulb } from 'react-icons/fa'






const Services = () => {
    return (
     <>
     <TitleBanner title="Services We Provide"/>
     <section className="flex items-center flex-col">
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <div className="lg:flex w-1/2 hidden">
            <img
              src={pages2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex lg:w-1/2 w-2/2  items-start justify-center gap-5 flex-col lg:px-32 px-10 lg:py-0 py-10">
            <span className="text-gray-600 text-lg font-semibold">
              Our Story
            </span>
            <h3 className="text-black capitalize lg:text-4xl text-3xl lg:tracking-widest tracking-normal font-extrabold">
              A Little About Us
            </h3>
            <p className="text-gray-600 text-lg font-semibold">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents.
            </p>
          </div>
        </div>
          <div className="flex lg:flex-row-reverse flex-col  items-center justify-between">
          <div className="lg:flex w-1/2 hidden">
            <img
              src={pages3}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex lg:w-1/2 w-2/2  items-start justify-center gap-5 flex-col lg:px-32 px-10 lg:py-0 py-10">
            <span className="text-gray-600 text-lg font-semibold">
              Our Story
            </span>
            <h3 className="text-black capitalize lg:text-4xl text-3xl lg:tracking-widest tracking-normal font-extrabold">
              A Little About Us
            </h3>
            <p className="text-gray-600 text-lg font-semibold">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents.
            </p>
          </div>
        </div>
      </section>
    
     
     </>
    )
  }
  
  export default Services