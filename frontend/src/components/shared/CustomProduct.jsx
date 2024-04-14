import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

function CustomProduct({image,name,price}) {
  return (
    <div style={{fontFamily:"Noto Sans"}} className='w-fit h-fit overflow-hidden flex flex-col gap-2 cursor-pointer'>
        <div className=' relative w-[230px] h-[320px] flex justify-center items-center bg-gray-100 overflow-hidden'>
            <img className='object-cover w-full h-full trasitionStyle_newCategary' src={image} alt="" />
            <p className='absolute bottom-4 right-5 rounded-full  p-2 bg-white cursor-pointer'><FiShoppingCart size={22}/></p>
        </div>
      <h3 className='text-lg font-bold'>{name}</h3>
      <p className='tracking-wide font-light'><span>$</span><span>{price}</span></p>
    </div>
  )
}

export default CustomProduct
