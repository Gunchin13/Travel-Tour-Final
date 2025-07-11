import { IoIosArrowForward } from "react-icons/io"
import logoMobile  from "../../../assets/images/logo 2.png"
import logo  from "../../../assets/images/logo-hiking-1.png"
import { SlBasket } from "react-icons/sl"
import { RxHamburgerMenu } from "react-icons/rx"
const Header = () => {
  return (
    <div className="lg:mt-19 mt-3 p-4 flex sticky top-0 right-0 w-full items-end lg:justify-center justify-between">
      <ul className="hidden items-end gap-10 lg:flex">
        <li>
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            tour list
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            tour search
          </a>
        </li>
        <li>
          <img src={logo} alt="Logo" className="mx-5 w-43" />
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            destinations
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            pages
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            blog
          </a>
        </li>
      </ul>
      <div className="lg:hidden">
        <img src={logoMobile} alt="" className="w-45" />
      </div>
      <div className="flex items-end gap-5">
        <SlBasket className="text-2xl text-amber-400 font-black text-center lg:hidden"/>
        <RxHamburgerMenu className="text-2xl text-amber-400 flex font-black lg:hidden" />
      </div>
    </div>
 

    
   
  )
}

export default Header




