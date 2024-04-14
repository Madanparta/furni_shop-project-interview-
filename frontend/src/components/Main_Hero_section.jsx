import React, { useState } from 'react';
import Slider from "react-slick";
import { useAuth } from "../context/AuthContext.jsx";

function Main_Hero_section() {
  const auth = useAuth()

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const shadowStyle = {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    };

    // console.log(auth?.heroScroll)
  return (
    <div className='w-full h-full lg:h-[70vh] flex flex-col lg:flex-row'>
        {/* hero sliding */}
      <div className="w-full lg:w-9/12 bg-[#171717] h-full flex justify-center items-center border-t-2 border-white">
        <Slider {...settings} className='w-[100%] h-full overflow-hidden'>
            {
                auth?.heroScroll && auth?.heroScroll.map((hero)=>{
                    return <div key={hero._id} className='w-full h-full relative'>
                        <img className='w-full h-full bg-cover ' src={'http://localhost:8080/'+hero?.image} alt=''/>
                        <div style={{fontFamily:"Noto Sans"}} className='absolute top-1/2 left-10 lg:top-1/3 lg:left-20 max-w-4xl h-fit'>
                            <h2 style={shadowStyle} className=' text-2xl md:text-3xl lg:text-5xl tracking-wide mb-3 font-extrabold text-white'>{hero?.title}</h2>
                            <p className='text-lg text-white tracking-wide mb-10'>{hero?.description}</p>
                            <button className='py-2 px-4 text-lg font-normal tracking-wide text-white bg-[#91c24c] rounded-md'>Shop new collection</button>
                        </div>
                    </div>
                })
            }
        </Slider>
      </div>
      <div className='w-full lg:w-3/12 h-full bg-[#171717]'>
        {/* premimum */}
        <div className='h-1/2 border-t-2 border-l-2 border-white overflow-hidden relative'>
            <img style={{transition:'0.3'}} className='trasitionStyle w-full h-full bg-cover bg-no-repeat bg-fixed bg-center' src={'http://localhost:8080/'+auth?.heroPremi?.image} alt="" />
            <div style={{fontFamily:"Noto Sans"}} className='absolute top-1/2 left-6'>
                <h3 style={shadowStyle} className='text-xl font-bold tracking-wide text-white mb-3'>{auth?.heroPremi?.title}</h3>
                <p className='text-sm text-white'>{auth?.heroPremi?.description}</p>
            </div>
        </div>
        {/* offers */}
        <div className='h-1/2 border-t-2 border-l-2 border-white overflow-hidden relative'>
            <img className='trasitionStyle w-full h-full bg-cover bg-no-repeat bg-fixed bg-center' src={'http://localhost:8080/'+auth?.heroOffer?.image} alt="" />
            <div style={{fontFamily:"Noto Sans"}} className='absolute top-1/2 left-6'>
                <h3 style={shadowStyle} className='text-xl font-bold tracking-wide text-white mb-3'>{auth?.heroOffer?.title}</h3>
                <p className='text-sm text-white'>{auth?.heroOffer?.description}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main_Hero_section
