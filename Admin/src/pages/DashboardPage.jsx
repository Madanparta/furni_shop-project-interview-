import axios from 'axios';
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useAuth } from '../context/ContextApi';
import toast from 'react-hot-toast';

const DashboardPage = () => {
    const auth = useAuth()
    const [heroSection,setHeroSection]=useState(false);
    const [productSection,setProductSection]=useState(false);

    // main hero section scroll
    const [heroImage,setHeroImage]=useState("");
    const [heroTitle,setHeroTitle]=useState('')
    const [heroDiscription,setHeroDescription]=useState("");

    // main hero section scroll
    const [premImage,setPremImage]=useState("");
    const [premTitle,setPremTitle]=useState('')
    const [premDiscription,setPremDescription]=useState("");

    // main hero section offer
    const [offerImage,setOfferImage]=useState("");
    const [offerTitle,setOfferTitle]=useState('')
    const [offerDiscription,setOfferDescription]=useState("");

    // product..
    const [product_code,setProduct_code]=useState('')
    const [product_name,setProduct_name]=useState('')
    const [product_rating,setProduct_rating]=useState('')
    const [product_price,setProduct_price]=useState('')
    const [product_description,setProduct_description]=useState('')
    const [images,setImages]=useState([]);


    // const GetUrl = async(heroImage)=>{
    //     const data = new FormData();
    //     data.append('fiel',heroImage);
    //     data.append('upload_preset','image_preset');
    //     try {
    //         let cloudName = 'dqwq8ngak';
    //         let resourceType = 'image';
    //         let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`

    //         const res = await axios.post(api, data)
    //         const {secure_url} = res.data;
    //         console.log(secure_url);
    //         return secure_url;
    //     } catch (error) {
    //         console.log("cloudenry Error ",error);
    //     }
    // };

    const handleScroll01 =async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title",heroTitle)
        formData.append("description",heroDiscription)
        formData.append("image",heroImage)

        toast.loading("loading",{id:"heroScroll"});
        await auth?.heroSectionScrollApi(formData);
    }

    const handlePremium = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title",premTitle)
        formData.append("description",premDiscription)
        formData.append("image",premImage)

        toast.loading("loading",{id:"heroPrem"});
        await auth?.heroSectionPrem(formData);
    }

    const handleOffer = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title",offerTitle)
        formData.append("description",offerDiscription)
        formData.append("image",offerImage)

        toast.loading("loading",{id:"heroOffer"});
        await auth?.heroSectionOffer(formData);
    };

    // product uploads.
    const handleProductUpload = async(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('product_code',product_code)
        formData.append('product_name',product_name)
        formData.append('product_rating',product_rating)
        formData.append('product_price',product_price)
        formData.append('product_description',product_description);
        Array.from(images).forEach(item=>{
            formData.append('products',item);
        });

        toast.loading("uploading",{id:"ProductUpload"});
        await auth?.uploadProduct(formData);

        setProduct_code('')
        setProduct_name('')
        setProduct_rating('')
        setProduct_price('')
        setProduct_description('')
    }

  return (
    <div style={{fontFamily:"Noto Sans"}} className='w-full h-full'>
      <div className='w-full h-full p-10'>
        <h2 className='text-3xl tracking-wide font-semibold mb-10'>Wecome to Dashboard</h2>

        {/* hero section uploads */}
        <div className='w-full h-full text-gray-500 py-2 px-2 flex flex-col gap-4'>
            <h4 className='text-lg tracking-wide font-bold'>Hero section uploads</h4>
            
            <ul className="space-y-2 font-medium flex flex-col gap-5">
                <li className='w-full h-full'>
                    <h3 onClick={()=>setHeroSection(!heroSection)} className='flex gap-2 justify-start items-center w-fit h-fit px-2 py-2 cursor-pointer'>Hero section scroll uploads {!heroSection? <IoIosArrowDown size={22}/> : <IoIosArrowUp size={22}/>} </h3>
                    
                    <div className='w-full h-full flex flex-col lg:flex-row gap-10'>
                        {heroSection && <div className='w-full md:w-[600px] h-fit px-2 py-2 bg-gray-50 shadow'>
                            <div className='w-full h-full'>
                                <div className='text-base flex flex-col gap-3'>
                                    <p className='text-sm text-gray-300'>scroll images 3* with disc..</p>

                                    <form onSubmit={handleScroll01} className='text-sm text-[#171717]'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="scroll-one">Main Scroll imge 01</label>
                                        <input onChange={(e)=>setHeroImage(e.target.files[0])} accept="image/*" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="scroll-one" type="file" />

                                        {/* title and disc */}
                                        <div className=' px-4 pl-5 py-2 capitalize flex flex-col gap-3 w-full h-full'>
                                            <label htmlFor="img-01-title">
                                                image 01 title : <input name='heroTitle' value={heroTitle} onChange={(e)=>setHeroTitle(e.target.value)} id='img-01-title' type='text' className='w-full h-8 px-2 py-2 outline-none' />
                                            </label>
                                            <label htmlFor="img-01-desc">
                                                image 01 discription : <input name='heroDiscription' value={heroDiscription} onChange={(e)=>setHeroDescription(e.target.value)} id='img-01-desc' type='text' className='w-full h-fit' />
                                            </label>
                                        </div>
                                        <button className='w-fit h-fit px-2 py-1 rounded bg-green-300 text-sm text-[#171717]' type='submit'>Upload</button>
                                    </form>


                                    {/* <form className='text-sm text-[#171717]'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="scroll-two">Main Scroll imge 02</label>
                                        <input onChange={(e)=>setImage02(e.target.files[0])} accept="image/*" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="scroll-two" type="file" />


                                        <div className=' px-4 pl-5 py-2 capitalize flex flex-col gap-3 w-full h-full'>
                                            <label htmlFor="img-02-title">
                                                image 02 title : <input name='title02' value={title02} onChange={(e)=>setTitle02(e.target.value)} id='img-02-title' type='text' className='w-full h-8 px-2 py-2 outline-none' />
                                            </label>
                                            <label htmlFor="img-02-desc">
                                                image 02 discription : <input name='discription02' value={discription02} onChange={(e)=>setDescription02(e.target.value)} id='img-02-desc' type='text' className='w-full h-fit' />
                                            </label>
                                        </div>
                                        <button className='w-fit h-fit px-2 py-1 rounded bg-green-300 text-sm text-[#171717]' type='submit'>Upload</button>
                                    </form> */}


                                    {/* <form className='text-sm text-[#171717]'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="scroll-three">Main Scroll imge 03</label>
                                        <input onChange={(e)=>setImage03(e.target.files[0])} accept="image/*" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="scroll-three" type="file" />


                                        <div className=' px-4 pl-5 py-2 capitalize flex flex-col gap-3 w-full h-full'>
                                            <label htmlFor="img-03-title">
                                                image 03 title : <input name='title03' value={title03} onChange={(e)=>setTitle03(e.target.value)} id='img-03-title' type='text' className='w-full h-8 px-2 py-2 outline-none' />
                                            </label>
                                            <label htmlFor="img-03-desc">
                                                image 03 discription : <input name='discription03' value={discription03} onChange={(e)=>setDescription03(e.target.value)} id='img-03-desc' type='text' className='w-full h-fit' />
                                            </label>
                                        </div>
                                        <button className='w-fit h-fit px-2 py-1 rounded bg-green-300 text-sm text-[#171717]' type='submit'>Upload</button>
                                    </form> */}

                                </div>
                            </div>
                        </div>}

                        {/* slecting premimum product */}
                        {heroSection && <div className='w-full h-full flex flex-col gap-8'>
                            <form onSubmit={handlePremium} className='w-full md:w-[550px] h-fit px-2 py-2 bg-gray-50 shadow'>
                            <p className='text-sm text-gray-300'>Hero section premium section 1* with title with disc..</p>

                            <div className='text-sm text-[#171717] mt-3'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="premimum">Hero section premimum</label>
                                <input onChange={(e)=>setPremImage(e.target.files[0])} accept="image/*" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="premimum" type="file" />


                                {/* title and disc */}
                                <div className=' px-4 pl-5 py-2 capitalize flex flex-col gap-3 w-full h-full'>
                                    <label htmlFor="img-premimum-title">
                                        Premimum imgetitle : <input name='premTitle' value={premTitle} onChange={(e)=>setPremTitle(e.target.value)}  id='img-premimum-title' type='text' className='w-full h-8 px-2 py-2 outline-none' />
                                    </label>
                                    <label htmlFor="img-premimum-desc">
                                        Premimum imge discription : <input name='premDiscription' value={premDiscription} onChange={(e)=>setPremDescription(e.target.value)} id='img-premimum-desc' type='text' className='w-full h-fit' />
                                    </label>
                                </div>

                            </div>
                            <button className='w-fit h-fit px-2 py-1 rounded bg-green-300 text-sm text-[#171717]' type='submit'>Upload</button>
                        </form>

                        {/* hero section offerces photos */}
                        <form onSubmit={handleOffer} className='w-full md:w-[550px] h-fit px-2 py-2 bg-gray-50 shadow'>
                            <p className='text-sm text-gray-300'>Hero section Offers section 1* with title with disc..</p>

                            <div className='text-sm text-[#171717] mt-3'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="offers">Hero section offers</label>
                                <input onChange={(e)=>setOfferImage(e.target.files[0])} accept="image/*" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="offers" type="file" />


                                {/* title and disc */}
                                <div className=' px-4 pl-5 py-2 capitalize flex flex-col gap-3 w-full h-full'>
                                    <label htmlFor="img-offers-title">
                                        offers imge title : <input name='offerTitle' value={offerTitle} onChange={(e)=>setOfferTitle(e.target.value)} id='img-offers-title' type='text' className='w-full h-8 px-2 py-2 outline-none' />
                                    </label>
                                    <label htmlFor="img-offers-desc">
                                        offers imge discription : <input name='offerDiscription' value={offerDiscription} onChange={(e)=>setOfferDescription(e.target.value)} id='img-offers-desc' type='text' className='w-full h-fit' />
                                    </label>
                                </div>

                            </div>
                            <button className='w-fit h-fit px-2 py-1 rounded bg-green-300 text-sm text-[#171717]' type='submit'>Upload</button>
                        </form>
                        </div>}
                    </div>
                </li>
                <li className='w-full h-full'>
                    <h3 onClick={()=>setProductSection(!productSection)} className='flex gap-2 justify-start items-center w-fit h-fit px-2 py-2 cursor-pointer'>Upload Product & Details {!productSection? <IoIosArrowDown size={22}/> : <IoIosArrowUp size={22}/>} </h3>

                    <div className='w-full h-full flex flex-col lg:flex-row gap-10'>
                        {productSection && <div className='w-full md:w-[600px] h-fit px-2 py-2 bg-gray-50 shadow'>
                            <div className='w-full h-full'>
                                <div className='text-base flex flex-col gap-3'>
                                    <p className='text-sm text-gray-300'>Upload Product details..</p>

                                    <form onSubmit={handleProductUpload} className='text-sm text-[#171717]'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="product_images">Select images upto MAX 04</label>
                                        <input multiple onChange={(e)=>setImages(e.target.files)} accept="image/*" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="product_images" type="file" />

                                        <div className=' px-4 pl-5 py-2 capitalize flex flex-col gap-3 w-full h-full'>
                                            <label htmlFor="product_code">
                                                Product code : <input name='product_code' value={product_code} onChange={(e)=>setProduct_code(e.target.value)} id='product_code' type='text' className='w-full h-8 px-2 py-2 outline-none' />
                                            </label>

                                            <label htmlFor="product_name">
                                                Product Name : <input name='product_name' value={product_name} onChange={(e)=>setProduct_name(e.target.value)} id='product_name' type='text' className='w-full h-8 px-2 py-2 outline-none' />
                                            </label>

                                            <label htmlFor="prdouct_rating">
                                                Product Rating : <input name='product_rating' value={product_rating} onChange={(e)=>setProduct_rating(e.target.value)} id='prdouct_rating' type='number' className='w-full h-8 px-2 py-2 outline-none' />
                                            </label>

                                            <label htmlFor="product_prices">
                                                Product Price : <input name='product_price' value={product_price} onChange={(e)=>setProduct_price(e.target.value)} id='product_prices' type='number' className='w-full h-8 px-2 py-2 outline-none' />
                                            </label>

                                            <label htmlFor="product_desc">
                                                Product Discription : <input name='product_description' value={product_description} onChange={(e)=>setProduct_description(e.target.value)} id='product_desc' type='type' className='w-full h-8 px-2 py-2 outline-none' />
                                            </label>
                                        </div>
                                        <button className='w-fit h-fit px-2 py-1 rounded bg-green-300 text-sm text-[#171717]' type='submit'>Upload</button>
                                    </form>

                                </div>
                            </div>
                        </div>}
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
