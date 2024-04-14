import React from 'react'
import { useAuth } from '../context/ContextApi';
import { FaTrashAlt } from "react-icons/fa";

const ProductPage = () => {
    const auth = useAuth();
    // console.log(auth?.products)

    const handleDelete=async(id)=>{
        // console.log(id)
        await auth?.deleteProduct(id);
        // window.location.reload();
    }
  return (
    <div style={{fontFamily:"Noto Sans"}} className='w-full h-full'>
      <div className='w-full h-full p-10'>
        <h2 className='text-3xl tracking-wide font-semibold mb-10'>Wecome to Product page</h2>

        <div className=' w-full h-full p-4'>
            <table className='w-full h-fit'>
                <thead className='w-full h-fit'>
                    <tr className='w-full h-fit flex justify-between items-center px-2 text-xl py-1'>
                        <th className='border py-1 px-2 bg-gray-500 w-full h-fit'>Product Code</th>
                        <th className='border py-1 px-2 bg-gray-500 w-full h-fit'>P Name</th>
                        <th className='border py-1 px-2 bg-gray-500 w-full h-fit'>P Price</th>
                        <th className='border py-1 px-2 bg-gray-500 w-full h-fit'>P Discription</th>
                        <th className='border py-1 px-2 bg-gray-500 w-full h-fit'>P Images</th>
                        <th className='border py-1 px-2 bg-gray-500 w-full h-fit'>Delete</th>
                    </tr>
                </thead>
                <tbody className='w-full h-fit'>
                    {auth?.products && auth?.products.map((data)=>{
                        return <tr key={data._id} className='w-full h-fit flex justify-between items-center px-2 py-1 text-sm text-gray-500'>
                        <th className='border py-1 px-2 bg-gray-50 w-full h-full'>{data?.product_code}</th>
                        <th className='border py-1 px-2 bg-gray-50 w-full h-full'>{data?.product_name}</th>
                        <th className='border py-1 px-2 bg-gray-50 w-full h-full'>{data?.product_price}</th>
                        <th className='border py-1 px-2 bg-gray-50 w-full h-full'>{data?.product_description}</th>
                        <th className='border py-1 px-2 bg-gray-50 w-full h-full flex gap-2 items-center '>{
                            data?.product_images.map((image)=>{
                                return <img className='w-12 h-12 rounded-full' src={"http://localhost:8080/"+image?.filename}/>
                            })
                        }</th>
                        <th className='flex justify-center items-center py-1 px-2 w-full h-fit'>
                            <FaTrashAlt onClick={()=>handleDelete(data?._id)} size={22} className='cursor-pointer' color='red'/>
                        </th>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
