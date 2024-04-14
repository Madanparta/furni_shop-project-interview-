import React from 'react'
import CustomProduct from './shared/CustomProduct';
// import { home_newCategory } from '../data'; 
import Slider from "react-slick";
import { useAuth } from '../context/AuthContext';
import {Link} from "react-router-dom"


const NewSection_home = () => {
  const auth = useAuth()
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
        <Slider {...settings} >
            {
                auth?.products && auth?.products.map((newPro)=>{
                    return <Link to={`/product/${newPro?._id}`} key={newPro._id} onClick={()=>auth?.setImage(newPro?.product_images[0]?.filename)} className='w-full h-full'><CustomProduct image={'http://localhost:8080/'+newPro?.product_images[0]?.filename} name={newPro?.product_name} price={newPro?.product_price}/></Link>
                })
            }
        </Slider>
    </div>
  )
}

export default NewSection_home
