import { IoIosArrowDown } from 'react-icons/io'

function Footer() {
  return ( 
    <div className='max-w-[1240px] flex flex-col justify-center items-center px-4 py-12 mx-auto'>
        <div className='flex'>
          <ul className="flex-wrap flex justify-center">
            <li className='flex items-center'>Services <IoIosArrowDown className='ml-2 mt-1'/></li>
            <li className='flex items-center'>Company <IoIosArrowDown className='ml-2 mt-1'/></li>
            <li>Portfolio</li>
            <li>Case Study</li>
            <li>Blog</li>
            <button className='ml-4'>Contact Us</button>
          </ul>
        </div>
        <div className='my-4'>
          <h2 className='font-bold text-2xl'>in</h2>
        </div>
        <div>
          <p className='text-gray-400'>CopyRight 2022-Hydrolub</p>
        </div>
    </div>
   );
}

export default Footer;