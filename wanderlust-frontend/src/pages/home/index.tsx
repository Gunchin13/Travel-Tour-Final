
import textImageOne from "../../assets/images/Alps jpeg.jpeg";
import textImageTwo from "../../assets/images/hiking.jpeg";
import { AnimatePresence, motion, useInView } from "framer-motion";
import * as React from "react";
import { FaArrowRightLong, FaRegStarHalfStroke } from "react-icons/fa6";
import mountain from "../../assets/images/mountain.jpg"
import icons from "../../assets/icons/icons.png"
import clibing from "../../assets/icons/clibing.png"
import knife from "../../assets/icons/knife.png"
import map from "../../assets/icons/map.png"
import backpack from "../../assets/icons/backpack.png"
import mountian from "../../assets/images/mountian-2.jpg"
import flag from "../../assets/icons/flag.png"
import cardimage from "../../assets/images/cardimage.jpg"
import coffee from "../../assets/images/coffee.jpg"
import banner3 from "../../assets/icons/banner-3.png"
import banner4 from "../../assets/icons//banner-4.png"
import banner5 from "../../assets/icons//banner-5.png"
import banner2 from "../../assets/icons//banner-2.png"
import banner1 from "../../assets/icons//banner-1.png"
import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"
import image4 from "../../assets/images/image4.jpg"
import image6 from "../../assets/images/image6.jpg"
import credicard from "../../assets/images/creditcard-logo.png"
import CountUp from "react-countup";




import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PiClockCountdownLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
const Home = ({ text = "" }: { text: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  

  return (
    <>
      <section className="hiking-slider w-full lg:h-screen h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center flex-col mt-15">
          <div className="flex items-start justify-center gap-10 mb-2 lg:mb-10">
            <img src={textImageOne} alt="Text Image 1" className="w-35 lg:w-64" />
            <img src={textImageTwo} alt="Text Image 2" className="w-40 lg:w-72" />
          </div>
          <div className="flex flex-wrap justify-center" ref={ref}>
            <AnimatePresence>
              {text.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] text-white"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
          <div className="mt-10">
            <a
              href="#"
              className="uppercase hover:bg-[#193556] hover:text-white bg-white text-[#193556] transition duration-500 px-6 py-5 rounded-4xl font-bold"
            >
              view all tours
            </a>
          </div>
        </div>
      </section>
      <section className="tour-search-container mt-16 lg:mt-28 lg:w-[86%] w-[90%] m-auto">
        <h3 className="title text-center text-3xl uppercase font-semibold tracking-[1px] text-[#193555]">
          search for tour
        </h3>
        <div className="flex items-center flex-col md:flex-row md:items-end justify-between gap-6 w-full py-6 my-5">
          {/* Activity */}
          <div className="flex flex-col md:w-1/5 w-5/5">
            <select className="bg-transparent capitalize text-gray-600 border-b-2 border-[#234076] focus:outline-none py-5">
              <option selected>activity</option>
              <option>hiking</option>
              <option>camping</option>
              <option>skiing</option>
            </select>
          </div>

          {/* Destination */}
          <div className="flex flex-col md:w-1/5 w-5/5">
            <select className="bg-transparent capitalize text-gray-600 border-b-2 border-[#234076] focus:outline-none py-5">
              <option selected>Destination</option>
              <option>Italy</option>
              <option>Switzerland</option>
              <option>Norway</option>
            </select>
          </div>

          {/* Duration */}
          <div className="flex flex-col md:w-1/5 w-5/5">
            <select className="bg-transparent capitalize text-gray-600 border-b-2 border-[#234076] focus:outline-none py-5">
              <option selected>Duration</option>
              <option>1 Week</option>
              <option>2 Weeks</option>
              <option>1 Month</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex flex-col md:w-1/5 w-5/5">
            <input
              type="date"
              className="bg-transparent capitalize text-gray-600 border-b-2 border-[#234076] focus:outline-none py-5"
            />
          </div>

          {/* Search Button */}
          <button className="bg-[#234076] text-white font-bold px-6 py-4 uppercase text-sm md:w-1/5 w-5/5 cursor-pointer">
            Search
          </button>
        </div>
      </section>
      <section className="w-full grid lg:grid-cols-2 grid-row-2 gap-4 lg:mt-20 mt:16">
        <div className="left-about-content flex flex-col items-start justify-start gap-2 lg:px-24 px-6 py-6">
          <img src={icons} alt="" />
          <h3 className="text-4xl uppercase mt-3 text-[#193555] font-bold relative py-6"> Why choose us?</h3>
          <span className="text-[#687D8E] text-lg mt-4">
            It’s our passion and our expertise, and has been for over two
            decades. We know the trails and the towns inside and out. We know
            the hoteliers and their rooms, and restauranteurs and their menus.
            We don’t guide on any route we haven’t done many times before. Our
            expertise gives you a richer, more enjoyable experience, and we will
            makes better use of your time.
          </span>
          <span className="text-[#687D8E] text-lg mt-4">
            We provide a thorough and complete orientation, so you are fully
            prepared to make the most of your Swiss vacation or Alps hiking
            adventure. Your expert trip leader is with you for the entire trip.
          </span>
          <button className="flex items-center justify-center gap-3 mt-4">
            <span className="capitalize text-xl font-semibold">learn more</span>
            <FaArrowRightLong className="mt-1"/>
          </button>
        </div>
        <div className=" border-amber-500 ">
          <img src={mountain} alt="" className=" object-cover lg:object-contain" />
        </div>
      </section>
      <section className="features-section py-12 my-6 w-full">
        <div className="lg:w-[86%] w-[90%] m-auto flex items-center flex-col md:flex-row md:items-end justify-between lg:gap-6 gap-14">
          <div className="flex flex-col items-center gap-4 md:w-1/5 w-5/5">
            <img src={clibing} alt="Experience Icon" className="h-15 w-15" />
            <h3 className="text-lg font-bold tracking-widest text-gray-900">
              20 YEARS EXPERIENCES
            </h3>
            <p className="text-gray-500 text-center">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:w-1/5 w-5/5">
            <img src={knife} alt="Gears Icon" className="h-15 w-15" />
            <h3 className="text-lg font-bold tracking-widest text-gray-900">
              LOTS OF GEARS
            </h3>
            <p className="text-gray-500 text-center">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:w-1/5 w-5/5">
            <img src={map} alt="Map Icon" className="h-15 w-15" />
            <h3 className="text-lg font-bold tracking-widest text-gray-900">
              MOST COMPLETED MAP
            </h3>
            <p className="text-gray-500 text-center">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:w-1/5 w-5/5">
            <img src={backpack} alt="Packing Icon" className="h-15 w-15" />
            <h3 className="text-lg font-bold tracking-widest text-gray-900">
              PACKING ADVISE
            </h3>
            <p className="text-gray-500 text-center">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated.
            </p>
          </div>
        </div>
      </section>  
      <section className="w-full grid lg:grid-cols-2 grid-row-2 gap-4 lg:mt-20 mt:16">
        <div className=" border-amber-500  hidden lg:flex">
         <img src={mountian} alt="" className="object-cover lg:object-contain" />
        </div>
        <div className="left-about-content  flex flex-col items-start justify-start gap-2 lg:px-24 px-6 py-6">
          <img src={flag} alt="" />
          <div className="leading-12">
          <h3 className="text-4xl uppercase mt-3 text-[#193555] font-bold relative py-6"> ABout Alps</h3>
          <span className="text-[#687D8E] text-xl mt-4">
          The Alps are the highest and most extensive mountain range system that lies entirely in Europe, separating Southern from Central and Western Europe and stretching approximately 1,200 kilometres across eight Alpine countries: France, Switzerland, Italy, Monaco, Liechtenstein, Austria, Germany, and Slovenia.
          </span>
          <span className="text-[#687D8E] text-lg mt-4">
          To make the most of your vacation experience, you’ll want to plan your itinerary and activities to take advantage of the best weather and optimal conditions. Remember, the Alps is located at a latitude between 46° and 47° north.
          </span>
          </div>
        </div>
      </section>
      <section className="carusel-tour py-32 lg:">
        <div className="lg:w-[86%] m-auto">
          {/* <div>
            <h3 className="text-3xl font-bold text-start  text-[#343434]">Find our popular tours</h3>
          </div> */}
          <Swiper
        slidesPerView={1}
        spaceBetween={40}
        className="mySwiper mt-16 lg:mt-20"
        breakpoints={{
          690: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        }}
       >
        <SwiperSlide  className="shadow-lg rounded-xl overflow-hidden">
          <div className="flex flex-col  ">
            <img src={cardimage} alt="" />
            <div className="p-4 flex flex-col items-start gap-3  bg-white ">
              <span className="text-xl font-semibold text-start"> St. Moritz Ski Packages</span>
              <div className="flex items-end justify-between w-full    ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center justify-start text-[#727272]">
                  <PiClockCountdownLight  className="text-2xl"/>
                  <span className="text-base">1 Day / About 8 hours </span>
                  </div>
                  <div>
                  <div className="flex items-center gap-2  text-[#ffa11b]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                  <span className="text-[#727272]  ">(1 Review)</span>
                  </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="line-through text-[#aaaaaa]">$600</span>
                  <span className="text-[#234076] text-xl font-extrabold">$400</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="shadow-lg rounded-xl overflow-hidden">
          <div className="flex flex-col  ">
            <img src={cardimage} alt="" />
            <div className="p-4 flex flex-col items-start gap-3  bg-white ">
              <span className="text-xl font-semibold text-start"> St. Moritz Ski Packages</span>
              <div className="flex items-end justify-between w-full    ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center justify-start text-[#727272]">
                  <PiClockCountdownLight  className="text-2xl"/>
                  <span className="text-base">1 Day / About 8 hours </span>
                  </div>
                  <div>
                  <div className="flex items-center gap-2  text-[#ffa11b]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                  <span className="text-[#727272]  ">(1 Review)</span>
                  </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="line-through text-[#aaaaaa]">$600</span>
                  <span className="text-[#234076] text-xl font-extrabold">$400</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="shadow-lg rounded-xl overflow-hidden">
          <div className="flex flex-col  ">
            <img src={cardimage} alt="" />
            <div className="p-4 flex flex-col items-start gap-3  bg-white ">
              <span className="text-xl font-semibold text-start"> St. Moritz Ski Packages</span>
              <div className="flex items-end justify-between w-full    ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center justify-start text-[#727272]">
                  <PiClockCountdownLight  className="text-2xl"/>
                  <span className="text-base">1 Day / About 8 hours </span>
                  </div>
                  <div>
                  <div className="flex items-center gap-2  text-[#ffa11b]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                  <span className="text-[#727272]  ">(1 Review)</span>
                  </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="line-through text-[#aaaaaa]">$600</span>
                  <span className="text-[#234076] text-xl font-extrabold">$400</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="shadow-lg rounded-xl overflow-hidden">
          <div className="flex flex-col  ">
            <img src={cardimage} alt="" />
            <div className="p-4 flex flex-col items-start gap-3  bg-white ">
              <span className="text-xl font-semibold text-start"> St. Moritz Ski Packages</span>
              <div className="flex items-end justify-between w-full    ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center justify-start text-[#727272]">
                  <PiClockCountdownLight  className="text-2xl"/>
                  <span className="text-base">1 Day / About 8 hours </span>
                  </div>
                  <div>
                  <div className="flex items-center gap-2  text-[#ffa11b]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                  <span className="text-[#727272]  ">(1 Review)</span>
                  </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="line-through text-[#aaaaaa]">$600</span>
                  <span className="text-[#234076] text-xl font-extrabold">$400</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="shadow-lg rounded-xl overflow-hidden">
          <div className="flex flex-col  ">
            <img src={cardimage} alt="" />
            <div className="p-4 flex flex-col items-start gap-3  bg-white ">
              <span className="text-xl font-semibold text-start"> St. Moritz Ski Packages</span>
              <div className="flex items-end justify-between w-full    ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center justify-start text-[#727272]">
                  <PiClockCountdownLight  className="text-2xl"/>
                  <span className="text-base">1 Day / About 8 hours </span>
                  </div>
                  <div>
                  <div className="flex items-center gap-2  text-[#ffa11b]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                  <span className="text-[#727272]  ">(1 Review)</span>
                  </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="line-through text-[#aaaaaa]">$600</span>
                  <span className="text-[#234076] text-xl font-extrabold">$400</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
       
          </Swiper>
          </div>
          <div className="flex items-center justify-center">
            <a className="flex items-center justify-center bg-[#193556] px-8 rounded-full mt-15 py-4" href=""><span className=" text-xl font-bold text-white">View All Tours</span></a>
          </div>
        

      </section>
      <section className="">
        <div className="pt-20 lg:w-[86%] w-[90%] m-auto flex flex-col items-center">
         <h3 className=" leading-20 text-3xl text-[#193556] font-semibold text-center">WE ARE FUTURED IN </h3>
         <div className="flex lg:flex-row gap-3 flex-col mt-5 ">
        <div><img src={banner3} alt="" /></div>
        <div><img src={banner4} alt="" /></div>
        <div><img src={banner5} alt="" /></div>
        <div><img src={banner2} alt="" /></div>
        <div><img src={banner1} alt="" /></div>
        </div>
        </div>
      </section>
      <section>
        <div className="flex  lg:flex-row flex-col pt-30">
        <div><img src={image1} alt="" /></div>
        <div><img src={image2} alt="" /></div>
        <div><img src={image3} alt="" /> </div>
        <div><img src={image4} alt="" /></div>
        <div><img src={image6} alt="" /> </div>
        </div>
      </section>
      {/* <section>
      <div className="px-40 text-4xl font-bold text-[#193556]">
      <CountUp start={1} end={2000}>
        {({ countUpRef, start }) => (
       <div>
       <span ref={countUpRef} />
       <button onClick={start}>Awesome Hikers</button>
       </div>
       )}
      </CountUp>
      </div>
      </section> */}
      {/* <section className="pt-20">
        <div className="grid  grid-cols-2 ">
        <div>
          <img src={coffee} className="w-full" alt="" />
        </div>
        <div className=" pt-40 pl-25 bg-[#ffa11b] ">
          <h3 className="text-3xl  font-semibold text-white">SUBSCRIBE</h3>
          <span className="text-white leading-10  ">To receive promotions and newsletter</span>
          <div className=" pt-5 flex   gap-4">
          <input className=" border-b-2  px-20 border-gray-900 pb-3  "type="email"   placeholder= "Your Email Address"  />
          <button className="  px-10  py-3 cursor-pointer font-semibold bg-[#193556] text-white ">SUBSCRIBE</button>
          </div>

          
         
          
        </div>
        </div>

      </section> */}
      {/*
    
      <section>
     

        

//  </section>   */}
    </>
  );
};

export default Home;