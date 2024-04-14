import React from 'react';
import { useState } from 'react';
import { createContext,useContext } from 'react';
const AuthContext = createContext();
import toast from "react-hot-toast";
import { adminLoginApi, adminLogoutApi, heroSectionApi, heroSectionOfferApi, heroSectionPremApi, uploadsProductApi } from '../helper/Api-manger';

export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const adminLogin = async(email,password)=>{
        try {
            const data = await adminLoginApi(email,password);
            if(data){
                setUser({isAdmin:data.isAdmin,email:data.email});
                toast.success("Login Success",{id:"login"});
            }
        } catch (error) {
            toast.error("Login error",{id:"login"});
            console.log("login error ",error)
        }
    }

    const forgotPassword = async(email)=>{
        try {
            const data = await adminLoginApi(email);
            if(data){
                // setUser({isAdmin:data.isAdmin,email:data.email});
                console.log(data)
            }
        } catch (error) {
            toast.error("forgotPassword error",{id:"forgotPassword"});
            console.log("forgotPassword error ",error)
        }
    }
    
    const userLogout = async()=>{
        try {
            const data = await adminLogoutApi()
            if(data){
                toast.success("logout success",{id:"logout"});
            }
        } catch (error) {
            toast.error("userLogout error",{id:"logout"});
            console.log("userLogout error ",error)
        }
    }

    // product
    const heroSectionScrollApi = async(formData)=>{
        try {
            const data = await heroSectionApi(formData)
            if(data){
                console.log(data);
                toast.success("upload success",{id:"heroScroll"});
            }
        } catch (error) {
            toast.error("heroScroll error",{id:"heroScroll"});
            console.log("heroScroll error ",error)
        }
    }

    const heroSectionPrem = async(formData)=>{
        try {
            const data = await heroSectionPremApi(formData)
            if(data){
                console.log(data);
                toast.success("upload success",{id:"heroPrem"});
            }
        } catch (error) {
            toast.error("heroPrem error",{id:"heroPrem"});
            console.log("heroPrem error ",error)
        }
    }
    const heroSectionOffer = async(formData)=>{
        try {
            const data = await heroSectionOfferApi(formData)
            if(data){
                console.log(data);
                toast.success("upload success",{id:"heroOffer"});
            }
        } catch (error) {
            toast.error("heroOffer error",{id:"heroOffer"});
            console.log("heroOffer error ",error)
        }
    }

    // products//
    const uploadProduct = async(formData)=>{
        try {
            const data = await uploadsProductApi(formData)
            if(data){
                console.log(data);
                toast.success("upload success",{id:"ProductUpload"});
            }
        } catch (error) {
            toast.error("ProductUpload error",{id:"ProductUpload"});
            console.log("ProductUpload error ",error)
        }
    }

    const value ={
        user,
        adminLogin,
        userLogout,

        // product.
        heroSectionScrollApi,
        heroSectionPrem,
        heroSectionOffer,
        uploadProduct,
    }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
