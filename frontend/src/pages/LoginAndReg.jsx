import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginAndReg() {
    const auth = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigate()

  
    const handleRegister = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");

        toast.loading("loading",{id:"signup"})
        await auth?.signupUser(email);
    };
    const handleLogin = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        toast.loading("loading",{id:"login"})
        await auth?.loginUser(email,password);
        navigation('/');
    };
  
    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <div style={{fontFamily:"Noto Sans"}} className='w-full h-full'>
        <div className='w-full lg:w-[1600px] m-auto py-5 px-2'>
            <div className='flex gap-2 text-sm text-gray-500'>
                <Link to="/"><p className='cursor-pointer hover:text-[#91c24c] pb-1 border-b-[1px] border-white hover:border-[#91c24c]'>Home</p></Link> /
                <Link to="/"><p className='cursor-pointer hover:text-[#91c24c] pb-1 border-b-[1px] border-white hover:border-[#91c24c]'>Shop</p></Link> /
                <p className='text-gray-300'>My account</p>
            </div>
            <div className='w-fit h-fit py-7'>
                <h2 className='text-3xl tracking-wide'>My account</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center h-full md:h-[50vh] w-full gap-10">
            {/* Login Form */}
            <form onSubmit={handleLogin} className="w-full md:w-1/2 p-8 flex flex-col gap-2 bg-gray-50">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>

                <label htmlFor="email">
                    Email address *<input name='email' id='email' type="email" placeholder="Email" className="w-full outline-none border border-gray-300 rounded py-2 px-3 mb-3"  />
                </label>

                <div className="relative">
                    <label htmlFor="password">
                        Password *<input type={showPassword ? 'text' : 'password'} name='password'  placeholder="Password" className="w-full outline-none border border-gray-300 rounded py-2 px-3 mb-3 pr-10" />
                    </label>
                <button type="button" className="absolute top-1/2 right-3 transform -translate-y-1/2" onClick={handleTogglePasswordVisibility} >
                    {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"  stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.7l-.6.6-.6-.6M12 12v-1.2" />
                    </svg>
                    )}
                </button>
                </div>
                <button className="bg-[#91c24c] hover:bg-[#7ea842] text-white font-semibold py-2 px-6 rounded w-fit h-fit" type='submit'> Login </button>
                <p className="text-sm mt-2">
                    <Link>Forgot password?</Link>
                </p>
            </form>

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="w-full md:w-1/2 p-8 mt-4 md:mt-0 gap-2 bg-gray-50">
                <h2 className="text-2xl font-semibold mb-4">Registration</h2>
                <label htmlFor="email">
                    Email address * <input id='email' name='email'  type="email" placeholder="Email" className="w-full border border-gray-300 rounded py-2 px-3 mb-3 outline-none"/>
                </label>
                <button className="bg-[#91c24c] hover:bg-[#7ea842] text-white font-semibold py-2 px-6 rounded w-fit h-fit" type='submit'> Submit </button>
                <br /><br /><br /><br /><br /><br />
            </form>
            </div>
        </div>
    </div>
  )
}

export default LoginAndReg
