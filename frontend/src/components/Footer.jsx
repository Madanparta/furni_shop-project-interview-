import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    // text-[#91c24c]
  return (
    <footer style={{fontFamily:"Noto Sans"}} className="bg-gray-50 text-black py-12 w-full h-full mt-5">
      <div className="w-full lg:w-[1600px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 md:gap-0">
        <div className="flex gap-6">
            <FaWhatsapp className="cursor-pointer" color="#91c24c"/>
            <FaFacebook className="cursor-pointer" color="#91c24c"/>
            <FaInstagram className="cursor-pointer" color="#91c24c"/>
        </div>
        <div className="w-fit h-fit">
            <h1 style={{fontWeight:500}} className="text-lg text-[#91c24c] tracking-wide mb-4">About</h1>
            <ul className="text-sm flex justify-center flex-col items-center gap-2">
                <li className="hover:text-[#91c24c] cursor-pointer">About shop</li>
                <li className="hover:text-[#91c24c] cursor-pointer">News</li>
                <li className="hover:text-[#91c24c] cursor-pointer">Contact</li>
            </ul>
        </div>
        <div className="w-fit h-fit">
            <h1 style={{fontWeight:500}} className="text-lg text-[#91c24c] tracking-wide mb-4">Customer info</h1>
            <ul className="text-sm flex justify-center flex-col items-center gap-2">
                <li className="hover:text-[#91c24c] cursor-pointer">Payment</li>
                <li className="hover:text-[#91c24c] cursor-pointer">Delevery</li>
                <li className="hover:text-[#91c24c] cursor-pointer">Order tracking</li>
            </ul>
        </div>
        <div className="w-fit h-fit">
            <h1 style={{fontWeight:500}} className="text-lg text-[#91c24c] tracking-wide mb-4">Catalogue</h1>
            <ul className="text-sm flex justify-center flex-col items-center gap-2">
                <li className="hover:text-[#91c24c] cursor-pointer">New products</li>
                <li className="hover:text-[#91c24c] cursor-pointer">Best Seller</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4 w-fit h-fit">
            <h1 className="text-xl flex justify-center items-center gap-1 text-[#91c24c]"><MdOutlineMarkEmailRead size={34} color="#91c24c"/> Newsletter signup</h1>
            <p className="text-black text-sm">Be the first to know about our new <br /> arrivals and exclusive offers!</p>
            <Link to="/shop/my-account"><button className="px-3 py-1 rounded-sm bg-[#91c24c] text-lg text-white tracking-wide">Sign up me!</button></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
