import React from 'react'
import { BsCardImage } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
import { PiClockCountdownLight } from 'react-icons/pi'
import { SwiperSlide } from 'swiper/react'
import cardimage from "../../assets/images/cardimage.jpg"

const ToursCard = (props) => {
  return (
    <>
    <div className="flex flex-col  ">
            <img src={props.turimage} alt="" />
            <div className="p-4 flex flex-col items-start gap-3  bg-white ">
              <span className="text-xl font-semibold text-start">{props.title}</span>
            
              <div className="flex items-end justify-between w-full    ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center justify-start text-[#727272]">
                  <PiClockCountdownLight  className="text-2xl"/>
                  <span className="text-base">{props.date} </span>
                  </div>
                  <div>
                  <div className="flex items-center gap-2  text-[#ffa11b]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                  <span className="text-[#727272]  ">{props.comment}</span>
                  </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="line-through text-[#aaaaaa]">${props.saleprice}</span>
                  <span className="text-[#234076] text-xl font-extrabold">${props.costprice}</span>
                </div>
              </div>
            </div>
          </div>
   
    </>
    
    
  )
}

export default ToursCard