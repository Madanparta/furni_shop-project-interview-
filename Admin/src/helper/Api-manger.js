import axios from "axios";

export const adminLoginApi = async(email,password)=>{
    const res = await axios.post('/user/log',{email,password});
    if(res.status !== 200){
        throw new Error("Unble to Login.");
    };
    const data = res.data;
    return data;
};

export const adminLogoutApi = async()=>{
    const res = await axios.get('/user/logout');
    if(res.status !== 200){
        throw new Error("Unble to Login.");
    };
    const data = res.data;
    return data;
}

// uploads
export const heroSectionApi = async(formData)=>{
    const res = await axios.post('/product/hero-scroll',formData);
    if(res.status !== 200){
        throw new Error("Unble to upload.");
    };
    const data = res.data;
    return data;
}
export const heroSectionPremApi = async(formData)=>{
    const res = await axios.post('/product/hero-prem',formData);
    if(res.status !== 200){
        throw new Error("Unble to upload.");
    };
    const data = res.data;
    return data;
}
export const heroSectionOfferApi = async(formData)=>{
    const res = await axios.post('/product/hero-offer',formData);
    if(res.status !== 200){
        throw new Error("Unble to upload.");
    };
    const data = res.data;
    return data;
}

// products
export const uploadsProductApi = async(formData)=>{
    const res = await axios.post('/product/upload',formData);
    if(res.status !== 200){
        throw new Error("Unble to upload product.");
    };
    const data = res.data;
    return data;
}
export const getAllProductApi = async()=>{
    const res = await axios.get('/product/getAll');
    if(res.status !== 200){
        throw new Error("Unble to get product.");
    };
    const data = res.data;
    return data;
}
export const deleteProductApi = async(id)=>{
    const res = await axios.post(`/product/delte/${id}`);
    if(res.status !== 200){
        throw new Error("Unble to get product.");
    };
    const data = res.data;
    return data;
}