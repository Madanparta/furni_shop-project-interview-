import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { getAllProductApi, getHeroOfferApi, getHeroPremiApi, getHeroScrollApi, loginApi, logoutApi, productSearchApi, signupApi, veryUserApi } from '../helper/api-manager';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [heroScroll,setHeroScoll]=useState(null);
    const [heroPremi,setHeroPremi]=useState(null);
    const [heroOffer,setHeroOffer]=useState(null);

    const [products,setProducts]=useState(null);
    const [searchQuery,setSearchQuery]=useState('');
    const [queryLength,setQueryLength]=useState(0);

    const signupUser =async(email)=>{
        try {
            const data = await signupApi(email)
            if(data){
                setUser({email:data.email});
                toast.success("succesfully signed",{id:"signup"});
            }
        } catch (error) {
            toast.error("Signup error",{id:"signup"})
            console.log('Signup Error ', error);
        }
    }
    const loginUser =async(email,password)=>{
        try {
            const data = await loginApi(email,password);
            if(data){
                setUser({email:data.email});
                toast.success("succesfully login",{id:"login"})
            }
        } catch (error) {
            toast.error("login Error",{id:"login"})
            console.log('Login Error ', error);
        }
    }
    const logoutUser =async(email,password)=>{
        try {
            const data = await logoutApi(email,password);
            if(data){
                toast.success("succesfully logout",{id:"logout"})
                window.location.assign('/shop/my-account');
            }
        } catch (error) {
            toast.error("logout Error",{id:"logout"})
            console.log('logout Error ', error);
        }
    }
    const searchQueries =async(query)=>{
        try {
            const data = await productSearchApi(query);
            if(data){
                setSearchQuery(data?.product);
                toast.success("get result",{id:"query"})
            }
        } catch (error) {
            toast.error("query Error",{id:"query"})
            console.log('query Error ', error);
        }
    }

    // get paroducts
    useEffect(()=>{
        const getHeroScroll =async()=>{
            try {
                const data = await getHeroScrollApi();
                if(data){
                    setHeroScoll(data?.heroScreen);
                }
            } catch (error) {
                toast.error("getHeroScroll Error",{id:"getHeroScroll"})
                console.log('getHeroScroll Error ', error);
            }
        }
        getHeroScroll();
    },[]);
    useEffect(()=>{
        const getHeroPremi =async()=>{
            try {
                const data = await getHeroPremiApi();
                if(data){
                    setHeroPremi(data?.homePremi[0]);
                }
            } catch (error) {
                toast.error("getHeroPremi Error",{id:"getHeroPremi"})
                console.log('getHeroPremi Error ', error);
            }
        }
        getHeroPremi();
    },[]);
    useEffect(()=>{
        const getHeroOffer =async()=>{
            try {
                const data = await getHeroOfferApi();
                if(data){
                    setHeroOffer(data?.heroOffer[0]);
                }
            } catch (error) {
                toast.error("getHeroOffer Error",{id:"getHeroOffer"})
                console.log('getHeroOffer Error ', error);
            }
        }
        getHeroOffer();
    },[]);

    // get all products
    useEffect(()=>{
        const getAllProducts =async()=>{
            try {
                const data = await getAllProductApi();
                if(data){
                    setProducts(data?.products);
                }
            } catch (error) {
                toast.error("getHeroOffer Error",{id:"getHeroOffer"})
                console.log('getHeroOffer Error ', error);
            }
        }
        getAllProducts();
    },[]);

    useEffect(()=>{
        async function verfyUser(){
            try {
                const data = await veryUserApi();
                if(data){
                    setUser({email:data.email});
                }
            } catch (error) {
                console.log('user Auth Error ', error);
            }
        };
        verfyUser();
    },[]);

    const value ={
        user,
        signupUser,
        loginUser,
        logoutUser,
        heroScroll,
        heroPremi,
        heroOffer,
        products,
        searchQueries,
        searchQuery,
        queryLength,setQueryLength,
    }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
