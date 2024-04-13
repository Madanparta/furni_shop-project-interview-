import React from 'react'
import Logo from './shared/Logo';
import CustomizeNavText from './shared/CustomizeNavText';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='transition-transform h-[70px] md:h-[100px] w-full flex justify-between items-center px-6 md:px-10 py-1 bg-white shadow-lg shadow-[#1717170a] sticky top-0 left-0 z-50'>
        <Logo/>
        <nav className=' hidden lg:flex gap-4 justify-center items-center'>
            <Link to="/">
                <CustomizeNavText navText={"Home"} style={"font-[400] mx-4 text-medium hover:text-[#9BCF53] border-b-[1px] border-white hover:border-b-[1px] hover:border-[#9BCF53] cursor-pointer tracking-wider"} />
            </Link>
            <CustomizeNavText navText={"catalogue"} style={"font-[400] mx-4 text-medium hover:text-[#9BCF53] border-b-[1px] border-white hover:border-b-[1px] hover:border-[#9BCF53] cursor-pointer tracking-wider"} />
            <CustomizeNavText navText={"about"} style={"font-[400] mx-4 text-medium hover:text-[#9BCF53] border-b-[1px] border-white hover:border-b-[1px] hover:border-[#9BCF53] cursor-pointer tracking-wider"} />
            <CustomizeNavText navText={"more"} style={"font-[400] mx-4 text-medium hover:text-[#9BCF53] border-b-[1px] border-white hover:border-b-[1px] hover:border-[#9BCF53] cursor-pointer tracking-wider"} />
        </nav>
        <div className='w-fit h-fit flex justify-center items-center'>
            <input type="text" placeholder='Search...' className='border border-gray-100 outline-none px-5 py-2 rounded-l-full w-fit lg:w-[500px] border-r-0'/>
            <CiSearch size={42} className='border-gray-100 border border-l-0 rounded-r-full pr-4'/>
        </div>
        <div className='hidden md:block overflow-hidden p-2'>
            <div className='relative w-fit h-fit text-center'>
                <CiShoppingCart size={33} color='#171717'/>
                {/* prices */}
                <p className='text-sm w-10 font-thin tracking-wide'>$150</p>
                {/* count span */}
                <p className=' rounded-full bg-[#9BCF53] text-white font-bold absolute top-0 right-0 w-4 h-4 flex justify-center items-center p-1 text-[10px]'>1</p>
            </div>
        </div>
    </div>
  )
}

export default Header
