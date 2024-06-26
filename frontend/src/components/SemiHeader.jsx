import React, { useEffect, useState } from 'react';
import { PiHeadphonesLight } from "react-icons/pi";
import CustomizeNavText from './shared/CustomizeNavText';
import { PiUserCircleLight } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiMapPinTimeLine } from "react-icons/ri";
import {Link} from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const SemiHeader = () => {
  const [isScroll,setIsScroll]=useState(false);
  const auth = useAuth()

  useEffect(()=>{
    const handleScroll = () => {
      const scroll = window.scrollY > 40;
      setIsScroll(scroll);
    };
    window.addEventListener("scroll",handleScroll);

    return ()=> {
      window.removeEventListener("scroll",handleScroll);
    }
  },[]);

  const logOutHandler = async() => {
    toast.loading("loading",{id:"logout"});
    await auth?.logoutUser()
  }
  return (
    <div className={`transition-transform h-[30px] w-full py-5 flex justify-between items-center px-6 md:px-10 text-sm bg-[#f6f5f23b] z-10 sticky top-0 left-0 ${isScroll ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className='flex justify-center items-center w-fit h-fit gap-1'>
        <PiHeadphonesLight size={20} color='#9BCF53'/>
        <h4><span style={{fontWeight:500}} className='text-[#171717]'>Hotline: </span><span className='font-semibold tracking-wide text-[#9BCF53] animate-pulse'><a href="tel:+023 345 679">+91 023 345 679</a></span></h4>
      </div>
      <nav className='w-fit h-fit flex flex-row gap-8'>
        <Link to="/shop/my-account">
          <div className='flex justify-center items-center w-fit h-fit gap-1'>
              <PiUserCircleLight size={20} color='#9BCF53'/>
              {auth?.user ? <CustomizeNavText onClick={logOutHandler} navText={"Logout"} style={"font-[400] text-medium hover:text-[#9BCF53]  border-white cursor-pointer tracking-wider"}/> :
              <CustomizeNavText navText={"Login / Register"} style={"font-[400] text-medium hover:text-[#9BCF53]  border-white cursor-pointer tracking-wider"}/>}
          </div>
        </Link>
        <div className='justify-center items-center w-fit h-fit gap-1 hidden md:flex'>
            <IoIosHelpCircleOutline size={20} color='#9BCF53'/>
            <CustomizeNavText navText={"FAQ"} style={"font-[400] text-medium hover:text-[#9BCF53]  border-white cursor-pointer tracking-wider"}/>
        </div>
        <div className='justify-center items-center w-fit h-fit gap-1 hidden md:flex'>
            <RiMapPinTimeLine size={20} color='#9BCF53'/>
            <CustomizeNavText navText={"Order tracking"} style={"font-[400] text-medium hover:text-[#9BCF53] border-white hover:border-[#9BCF53] cursor-pointer tracking-wider"}/>
        </div>
      </nav>
    </div>
  )
}

export default SemiHeader
