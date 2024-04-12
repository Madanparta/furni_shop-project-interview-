import React from 'react'

const HeroFooter_cutomz = ({icon,text}) => {
  return (
    <div className='flex justify-center items-center w-fit h-fit gap-2'>
      <span>{icon}</span> <span className='text-xl font-semibold tracking-wide text-gray-500'>{text}</span>
    </div>
  )
}

export default HeroFooter_cutomz
