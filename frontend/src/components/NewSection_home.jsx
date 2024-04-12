import React from 'react'
import CustomProduct from './shared/CustomProduct';
import { home_newCategory } from '../data'; 
import Slider from "react-slick";


const NewSection_home = () => {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    };
  return (
    <div className='w-full h-full px-10 overflow-hidden'>
        <Slider {...settings} className='flex gap-6'>
            {
                home_newCategory.map((newPro)=>{
                    return <CustomProduct image={newPro.image} name={newPro.product_name} price={newPro.price}/>
                })
            }
        </Slider>
        {/* </Slider> */}
    </div>
  )
}

export default NewSection_home
