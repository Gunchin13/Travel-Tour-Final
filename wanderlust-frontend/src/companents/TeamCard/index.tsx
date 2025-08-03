import React from 'react'
import teamcard from "../../assets/images/TeamCard.jpg"
import { GrFacebookOption } from 'react-icons/gr'
import { FaPinterestP, FaTwitter } from 'react-icons/fa'

const TeamCard = () => {
  return (
    <>
    <div>
        <div className='flex flex-col gap-5'>
            <img src={teamcard} alt="" />
            <div className=''>
                <h1 className='font-semibold text-lg  uppercase tracking-widest '>Jeanette Kingston</h1>
                <span className='text-[#727272 ] text-sm'>Chief Executive Officer </span>
                <hr className='bg-[#cecece] text-[#cecece] w-10 h-0.5' />
                <p className='text-[#727272] py-4 flex flex-col gap-15'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.</p>
            </div>
            <div className='flex gap-3 text-[#234076]'>
            <GrFacebookOption />
            <FaPinterestP />
            <FaTwitter />
            </div>
        </div>
    </div>

    </>
   
  )
}

export default TeamCard
