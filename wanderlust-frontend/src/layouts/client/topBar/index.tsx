import { FaFacebook, FaInstagram, FaPhoneAlt, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GoMail } from 'react-icons/go'
import { PiLockKeyLight } from 'react-icons/pi'

const TopBar = () => {
  return (
    <div className=" flex justify-between items-center md:px-10 px-5 py-6 cursor-pointer text-gray-500 text-sm bg-gray-100 md:bg-white">
        <div className="hidden items-center gap-5 space-x-6 md:flex">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm font-semibold" />
            <span className="text-base font-semibold">+41 21 634 05 05</span>
          </div>
          <div className="flex items-center gap-2">
            <GoMail className="text-xl font-semibold" />
            <span className="text-base font-semibold">
              Booking@alpsshiking.co
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-end gap-9 w-full md:w-auto">
          <div className="flex items-center gap-3">
            <FaFacebook className="text-sm md:text-lg" />
            <FaInstagram className="text-sm md:text-lg" />
            <FaXTwitter className="text-sm md:text-lg" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center cursor-pointer gap-2">
              <PiLockKeyLight className="text-sm md:text-lg" />
              <span className="text-base font-semibold">Login</span>
            </div>
            <div className="flex items-center cursor-pointer gap-2">
              <FaUser className="text-sm md:text-lg" />
              <span className="text-sm md:text-lg font-semibold">Sign Up</span>
            </div>
          </div>
        </div>
      </div>
  )
}
export default TopBar






