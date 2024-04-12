import React, { useState } from 'react';
import Slider from "react-slick";

function Main_Hero_section() {
    const [heroSection,setHeroSection] = useState([
        {
          "hero_section": {
            "hero_scroll": [
              {
                "image": "https://img.freepik.com/free-photo/white-pillow-bed_74190-3591.jpg?t=st=1712935005~exp=1712938605~hmac=18744fdc139bb48f95cdc797babfe1c7c586df3476c2fa3c336207b8cf2b179f&w=996",
                "main_tag": "Interior lighting",
                "sub_tag": "Discover our selection of modern lighting solutions",
                "btn":"Shop category"
              },
              {
                "image": "https://img.freepik.com/free-photo/white-pillow-bed_74190-3591.jpg?t=st=1712935005~exp=1712938605~hmac=18744fdc139bb48f95cdc797babfe1c7c586df3476c2fa3c336207b8cf2b179f&w=996",
                "main_tag": "Up to 75% for home decor, accessories & textile",
                "sub_tag": "Hurry up to grab your favourite items!",
                "btn":"Shop items on sale"
              },
              {
                "image": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "main_tag": "Meet our new minimalistic furniture collection",
                "sub_tag": "Top quality, premium materials, timeless silhouettes",
                "btn":"Shop new collection"
              }
            ],
            "hero_premium": {
              "image": "https://img.freepik.com/free-photo/white-pillow-bed_74190-3591.jpg?t=st=1712935005~exp=1712938605~hmac=18744fdc139bb48f95cdc797babfe1c7c586df3476c2fa3c336207b8cf2b179f&w=996",
              "main_tag": "Exclusive interior items",
              "sub_tag": "Innovative forms & premium materials"
            },
            "hero_offer": {
              "image": "https://img.freepik.com/free-photo/white-pillow-bed_74190-3591.jpg?t=st=1712935005~exp=1712938605~hmac=18744fdc139bb48f95cdc797babfe1c7c586df3476c2fa3c336207b8cf2b179f&w=996",
              "main_tag": "Up to 75% OFF",
              "sub_tag": "For home decor & accessories"
            }
          }
        }
      ]
      )
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
    // console.log(heroSection[0]?.hero_section?.hero_premium)
  return (
    <div className='w-full h-full lg:h-[70vh] flex flex-col lg:flex-row'>
        {/* hero sliding */}
      <div className="w-full lg:w-9/12 bg-[#171717] h-full flex justify-center items-center border-t-2 border-white">
        <Slider {...settings} className='w-[100%] h-full overflow-hidden'>
            {
                heroSection[0]?.hero_section?.hero_scroll.map((hero)=>{
                    return <div className='w-full h-full relative'>
                        <img className='w-full h-full bg-cover ' src={hero?.image} alt=''/>
                        <div style={{fontFamily:"Noto Sans"}} className='absolute top-1/2 left-10 lg:top-1/3 lg:left-20 max-w-4xl h-fit'>
                            <h2 style={shadowStyle} className=' text-2xl md:text-3xl lg:text-5xl tracking-wide mb-3 font-extrabold text-white'>{hero?.main_tag}</h2>
                            <p className='text-lg text-white tracking-wide mb-10'>{hero?.sub_tag}</p>
                            <button className='py-2 px-4 text-lg font-normal tracking-wide text-white bg-[#91c24c] rounded-md'>{hero.btn}</button>
                        </div>
                    </div>
                })
            }
        </Slider>
      </div>
      <div className='w-full lg:w-3/12 h-full bg-[#171717]'>
        {/* premimum */}
        <div className='h-1/2 border-t-2 border-l-2 border-white overflow-hidden relative'>
            <img style={{transition:'0.3'}} className='trasitionStyle w-full h-full bg-cover bg-no-repeat bg-fixed bg-center' src={heroSection[0]?.hero_section?.hero_premium?.image} alt="" />
            <div style={{fontFamily:"Noto Sans"}} className='absolute top-1/2 left-6'>
                <h3 style={shadowStyle} className='text-xl font-bold tracking-wide text-white mb-3'>{heroSection[0]?.hero_section?.hero_premium?.main_tag}</h3>
                <p className='text-sm text-white'>{heroSection[0]?.hero_section?.hero_premium?.sub_tag}</p>
            </div>
        </div>
        {/* offers */}
        <div className='h-1/2 border-t-2 border-l-2 border-white overflow-hidden relative'>
            <img className='trasitionStyle w-full h-full bg-cover bg-no-repeat bg-fixed bg-center' src={heroSection[0]?.hero_section?.hero_premium?.image} alt="" />
            <div style={{fontFamily:"Noto Sans"}} className='absolute top-1/2 left-6'>
                <h3 style={shadowStyle} className='text-xl font-bold tracking-wide text-white mb-3'>{heroSection[0]?.hero_section?.hero_premium?.main_tag}</h3>
                <p className='text-sm text-white'>{heroSection[0]?.hero_section?.hero_premium?.sub_tag}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main_Hero_section
