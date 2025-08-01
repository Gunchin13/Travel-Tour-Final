import React from 'react'
import portfolio from "../../assets/images/Portfolio.jpg"
import { IoSearchSharp } from 'react-icons/io5'

const PortfolioCard = () => {
  return (
    <div>
      <div className="flex items-center justify-start flex-col gap-7 overflow-hidden w-full max-w-sm">
        <div className="portfolio-card_bg group w-full overflow-hidden relative">
          <img
            src={portfolio}
            alt=""
            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.3]"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-center bg-black/60">
          <IoSearchSharp className='text-white text-3xl'/>
          </div>
        </div>
        <span className="text-center font-bold text-black text-lg">
          Inceptos Bibm Sem
        </span>
      </div>
      
    </div>
  )
}

export default PortfolioCard
