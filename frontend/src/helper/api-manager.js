import axios from "axios"

export const signupApi = async(email)=>{
    const res = await axios.post('/user/reg',{email});
    if(res.status !== 200){
        throw new Error('Unable to Signed')
    };
    const data = res?.data;
    return data;
}

export const loginApi = async(email,password)=>{
    const res = await axios.post('/user/log',{email,password});
    if(res.status !== 200){
        throw new Error('Unable to Log')
    };
    const data = res?.data;
    return data;
}
export const logoutApi = async()=>{
    const res = await axios.get('/user/logout');
    if(res.status !== 200){
        throw new Error('Unable to Log')
    };
    const data = res?.data;
    return data;
}

export const veryUserApi = async()=>{
    const res = await axios.get('/user/very-user');
    if(res.status !== 200 ){
        throw new Error('Unable to Log')
    };
    const data = res?.data;
    return data;
};

// products..
export const getHeroScrollApi = async()=>{
    const res = await axios.get('/product/hero-scroll');
    if(res.status !== 200 ){
        throw new Error('Unable to getHeroScroll')
    };
    const data = res?.data;
    return data;
};
export const getHeroPremiApi = async()=>{
    const res = await axios.get('/product/hero-prem');
    if(res.status !== 200 ){
        throw new Error('Unable to getHeroScroll')
    };
    const data = res?.data;
    return data;
};
export const getHeroOfferApi = async()=>{
    const res = await axios.get('/product/hero-offer');
    if(res.status !== 200 ){
        throw new Error('Unable to getHeroScroll')
    };
    const data = res?.data;
    return data;
};

// get products.
export const getAllProductApi = async()=>{
    const res = await axios.get('/product/getAll');
    if(res.status !== 200 ){
        throw new Error('Unable to getProducts')
    };
    const data = res?.data;
    return data;
};
export const getProductApi = async(id)=>{
    const res = await axios.get(`/product/${id}`);
    if(res.status !== 200 ){
        throw new Error('Unable to getProducts')
    };
    const data = res?.data;
    return data;
};
export const productSearchApi = async(query)=>{
    const res = await axios.post('/product/search',{query});
    if(res.status !== 200 ){
        throw new Error('Unable to searching')
    };
    const data = res?.data;
    return data;
};