import React from 'react';
import { BiSolidShoppingBags } from "react-icons/bi";
import { Link } from 'react-router-dom';
// import { GiShoppingBag } from "react-icons/gi";

const Logo = () => {
  return (
    <Link to="/">
      <div className='w-fit h-fit flex justify-center items-center gap-1 cursor-pointer'>
        <div className='w-fit h-fit border rounded-full p-1 bg-green-50 border-white'>
          <BiSolidShoppingBags size={30} color='#9BCF53'/>
        </div>
        <div style={{fontFamily:"Noto Sans"}} className='font-sans text-lg lg:text-2xl font-medium'>
          <h1 className='tracking-tight'><span className='font-semibold'>Furni</span> <span className='text-[#9BCF53]'>Shop</span></h1>
        </div>
      </div>
    </Link>
  )
}

export default Logo
