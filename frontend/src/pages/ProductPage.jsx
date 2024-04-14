import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductApi } from '../helper/api-manager'
import toast from 'react-hot-toast';
import { FaStar } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const ProductPage = () => {
  const {id} = useParams();
  const [product,setProduct]=useState("");
  const [currentImage,setCurrentImage]=useState('products-1713070820874.webp');
  const [count, setCount] = useState(1);

  const auth = useAuth()

  useEffect(()=>{
    async function getProduct(id){
      try {
        const data = await getProductApi(id)
        if(data){
          setProduct(data?.product[0]);
        }
      } catch (error) {
        toast.error("Get Error",{id:"getproduct"})
      }
    };
    getProduct(id)
  },[]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    auth?.addToCart({product,count})
  };
  // console.log(auth?.cart)
  return (
    <div style={{fontFamily:"Noto Sans"}} className='w-full h-full'>
        <div className='w-full lg:w-[1600px] m-auto py-5 px-2'>
            <div className='flex gap-2 text-sm text-gray-500 mb-10'>
                <Link to="/"><p className='cursor-pointer hover:text-[#91c24c] pb-1 border-b-[1px] border-white hover:border-[#91c24c]'>Home</p></Link> /
                <Link to="/"><p className='cursor-pointer hover:text-[#91c24c] pb-1 border-b-[1px] border-white hover:border-[#91c24c]'>product</p></Link> /
                <p className='text-gray-300'>{product?.product_code}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center h-full md:h-[60vh] w-full gap-10">
              <div className=' w-1/2 h-full flex p-4 gap-3'>

                <div className='w-1/3 h-full overflow-hidden'>
                  {product?.product_images && product?.product_images.map((img,index)=>{
                          return <div onClick={()=>setCurrentImage(img?.filename)} key={index} className='w-full h-1/3 flex flex-col gap-4'>
                              <img className='w-full h-full bg-cover bg-center p-1 cursor-pointer transition duration-300 ease-in-out transform hover:shadow-inner hover:bg-gray-200' src={"http://localhost:8080/"+img?.filename}/>
                          </div>
                    })}
                </div>

                <div className='w-2/3 h-full p-10'> 
                    <img className='w-full h-full shadow-xl  bg-center' src={"http://localhost:8080/"+currentImage} />
                </div>

              </div>

              <div style={{fontFamily:"Noto Sans"}} className=' w-1/2 h-full px-3 flex flex-col gap-4'>
                <div className='w-full h-fit my-3'>
                  <p className='text-sm text-[#bebcbc] font-medium'><span>Product Code : </span><span>{product?.product_code}</span></p>
                </div>
                <div className='w-full h-fit my-4'>
                  <h3 className='text-3xl tracking-wide font-semibold text-gray-800'>{product?.product_name}</h3>
                </div>
                <div className='w-full h-fit my-2'>
                  <h2 className='text-xl tracking-wide '><span>$</span><span>{product?.product_price}</span></h2>
                </div>
                <div className='w-2/3 h-fit my-3'>
                  <h3 className='text-lg font-light text-gray-400 tracking-wide '>{product?.product_description}</h3>
                </div>
                <div className='w-2/3 h-fit'>
                  <h3 className='text-lg font-light text-gray-400 tracking-wide w-full h-fit '>
                    {Math.abs(parseInt(product?.product_rating)) === 1 ? <FaStar size={20} color='#D4AF37'/> :
                     Math.abs(parseInt(product?.product_rating)) === 2 ? <div className='flex gap-1'><FaStar size={20} color='#D4AF37'/><FaStar size={20} color='#D4AF37'/></div> : 
                     Math.abs(parseInt(product?.product_rating)) === 3 ? <div className='flex gap-1'><FaStar size={20} color='#D4AF37'/><FaStar size={20} color='#D4AF37'/><FaStar size={20} color='#D4AF37'/></div> :
                     Math.abs(parseInt(product?.product_rating)) === 4 ? <div className='flex gap-1'><FaStar size={20} color='#D4AF37'/><FaStar size={20} color='#D4AF37'/><FaStar size={20} color='#D4AF37'/><FaStar size={20} color='#D4AF37'/></div> :
                     Math.abs(parseInt(product?.product_rating)) === 4 ? <div className='flex gap-1'><FaStar size={20} color='#D4AF37'/><FaStar size={20} color='#D4AF37'/><FaStar size={20} color='#D4AF37'/><FaStar size={20} color='#D4AF37'/> <FaStar size={20} color='#D4AF37'/></div> :
                     ""
                  }</h3>
                </div>
                <div className="flex items-center mb-4">
                  <button className="bg-white border hover:bg-gray-300 text-black font-bold py-1 px-4 rounded-l"onClick={decrement}> - </button>
                  <span className="py-1 px-4 border bg-white">{count}</span>
                  <button className="bg-white border text-black hover:bg-gray-300  font-bold py-1 px-4 rounded-r" onClick={increment} > + </button>
                </div>

                <div className=" w-full h-fit">
                  <button onClick={addToCart} className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-10 rounded-l"> Add to Cart</button>
                  
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPage
