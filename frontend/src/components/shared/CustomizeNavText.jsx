import React from 'react'

const CustomizeNavText = ({navText,style}) => {
  return (
    <div className={`w-fit h-fit capitalize py-[1px] ${style} text-[#171717] transition-all ease-in-out duration-150`}>
      {navText}
    </div>
  )
}

export default CustomizeNavText
