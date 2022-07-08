import {IoIosArrowDown} from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'


function Navbar() {
  return ( 
    <div className="max-w-[1240px] flex justify-between items-center mx-auto px-4 py-4">
      <div>
        <h1 className="font-bold md:text-3xl text-2xl">Hydra Lub</h1>
      </div>
      <div className="hidden md:flex items-center ">
        <ul className="flex">
          <li className='flex items-center'>Services <IoIosArrowDown className='ml-2 mt-1'/></li>
          <li className='flex items-center'>Company <IoIosArrowDown className='ml-2 mt-1'/></li>
          <li>Portfolio</li>
          <li>Case Study</li>
          <li>Blog</li>
        </ul>
        <button className='font-bold ml-4'>Contact Us</button>
      </div>
      <div className='block md:hidden'>
        <GiHamburgerMenu size={25}/>
      </div>
    </div>
   );
}

export default Navbar;