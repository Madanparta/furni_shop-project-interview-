import React from 'react'
import Main_Hero_section from '../components/Main_Hero_section'
import HeroFooter_cutomz from '../components/shared/HeroFooter_cutomz';
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { PiHeadphonesLight } from "react-icons/pi";
import { FaTruckMoving } from "react-icons/fa6";
import NewSection_home from '../components/NewSection_home';

const Home = () => {
  return (
    <div className='w-full h-full'>
      <Main_Hero_section/>
      <div className='w-full h-[110px] py-6 border-b-[1px] border-[#a8a8a8d7]'>
        <div className='h-full w-full lg:w-[1600px] m-auto px-10 lg:px-2 flex flex-row items-center justify-between gap-2'>
          <HeroFooter_cutomz icon={<RiSecurePaymentFill size={33} color='#ccc'/>} text={"Secure payments"}/>
          <HeroFooter_cutomz icon={<GiReturnArrow size={33} color='#ccc'/>} text={"30 days return period"}/>
          <HeroFooter_cutomz icon={<PiHeadphonesLight size={33} color='#ccc'/>} text={"24/7 customer support"}/>
          <HeroFooter_cutomz icon={<FaTruckMoving size={33} color='#ccc'/>} text={"Flexible shipping"}/>
        </div>
      </div>
      <div className=' w-full h-full md:w-[1200px] xl:w-[1700px] m-auto'>
        
        {/* new section */}
        <div className='w-full h-full flex justify-center items-center flex-col px-6 py-16 border-b-[1px]'>
          <h3 style={{fontFamily:"Noto Sans"}} className='text-2xl md:text-3xl font-bold tracking-wide my-14'>What’s new</h3>
          <NewSection_home/>
        </div>

        
        {/* <div className='w-full h-full flex justify-center items-center flex-col px-6 mx-14'>
         
        </div> */}
      </div>
    </div>
  )
}

export default Home
