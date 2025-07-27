import { IoIosArrowForward } from "react-icons/io"
import logoMobile  from "../../../assets/images/logo 2.png"
import logo  from "../../../assets/images/logo-hiking-1.png"
import { SlBasket } from "react-icons/sl"
import { RxHamburgerMenu } from "react-icons/rx"
import { useEffect, useState } from "react"
import AOS from "aos"
import { Link } from "react-router"
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
   useEffect(() => {
      AOS.init({
        duration: 1000, 
      });
    }, []);
  return (
    
    <div  className={`overflow:hidden lg:mt-10 mt-3 p-4 flex sticky top-0 right-0 w-full items-end lg:justify-center justify-between z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <ul  className="hidden items-end gap-10 lg:flex">
        <li>
          <Link
            to="/"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="tourlist"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
          tour list
          </Link>
        </li>
        <li>
          <Link
            to="toursearch"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
          tour search
          </Link>
        </li>
        <li>
          <img src={logo} alt="Logo" className="mx-5 mb-2 w-45" />
        </li>
        <li>
          <Link
            to="destinations"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest">
            destinations
          </Link>
        </li>
        <li className="relative group leading-8 :">
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest">Pages</a>
            <ul  className="absolute w-[11rem] group-hover:block hidden  bg-black py-3 px-5 ">
              <li className= "text-gray-400 block hover:text-white cursor-pointer"><Link to="contact">About</Link></li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" ><Link to="services">Our Services</Link></li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" ><Link to="contact">Contact</Link></li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" ><Link to="portfolio">Portfolio</Link></li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" ><Link to="gallery">Gallery</Link></li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" >Team </li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" >Price Table</li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" >Maintenance</li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" >Coming Soon</li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" >404 Page</li>


            </ul>
        </li>
        <li className="relative group leading-8 :">
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest">Blog</a>
            <ul  className="absolute w-[11rem] group-hover:block hidden  bg-black py-3 px-5 ">
              <li className= "text-gray-400 block hover:text-white cursor-pointer"><Link to="contact">About</Link></li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" >Blog Full</li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" >Blog Grid</li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" >Blog Columns </li>
              <li className="text-gray-400 block  hover:text-white cursor-pointer" >Single Posts</li>
             


            </ul>
        </li>
        
      </ul>
      <div data-aos="fade-down"  className="lg:hidden">
        <img src={logoMobile} alt="" className="w-45" />
      </div>
      <div data-aos="fade-down"  className="flex items-end gap-5">
        <SlBasket className="text-2xl text-amber-400 font-black text-center lg:hidden"/>
        <RxHamburgerMenu className="text-2xl text-amber-400 flex font-black lg:hidden" />
      </div>
    </div>
 

    
   
  )
}

export default Header




