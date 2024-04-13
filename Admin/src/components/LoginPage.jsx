import React from 'react';
import { CiUser } from "react-icons/ci";
import { TfiKey } from "react-icons/tfi";
import { useAuth } from '../context/ContextApi';
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const auth = useAuth();
    const navigation = useNavigate();
    const handleSubmition=async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        
        toast.loading("loading",{id:"login"});
        await auth?.adminLogin(email,password);
        navigation('/')

    }
  return (
    <div style={{fontFamily:'Noto Sans'}} className='w-screen h-screen bg-gradient-to-br from-gray-800 to-gray-500 flex justify-center items-center flex-col gap-4'>
      <form onSubmit={handleSubmition} className=' flex flex-col w-fit h-fit gap-5 p-14 bg-[#51535f5e] border-t-4 border-[#00d6b7] shadow-2xl'>
        <div className="w-full md:w-[300px] h-full flex justify-center items-center">
            <label className="bg-[#f5f6f8] w-11 h-11 flex justify-center items-center" htmlFor="email">
                <CiUser size={23} color='#8f8f8f'/>
            </label>
            <input name="email" id="email" className='text-[#8f8f8f] text-lg px-2 py-2 w-full h-fit outline-none' placeholder='email' type='text' />
        </div>
        <div className="w-full md:w-[300px] h-full flex">
            <label className="bg-[#f5f6f8] w-11 h-11 flex justify-center items-center" htmlFor="password">
                <TfiKey size={23} color='#8f8f8f'/>
            </label>
            <input name='password' id="password" className='text-[#8f8f8f] text-lg px-2 py-2 w-full h-fit outline-none' placeholder='Password' type='password' />
        </div>
        <input  className=' px-4 py-2 text-lg tracking-wide text-white bg-gradient-to-r from-teal-400 to-cyan-500 cursor-default' type='submit' value='LOGIN' />
        </form>
        <p className='bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text cursor-pointer'>Forgot password?</p>
    </div>
  )
}

export default LoginPage
