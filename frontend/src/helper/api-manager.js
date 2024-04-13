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

export const veryUserApi = async()=>{
    const res = await axios.get('/user/very-user');
    console.log(res.status)
    if(res.status !== 200 ){
        throw new Error('Unable to Log')
    };
    const data = res?.data;
    return data;
};

// products..
export const getHeroScrollApi = async()=>{
    const res = await axios.get('/product/hero-scroll');
    console.log(res.status)
    if(res.status !== 200 ){
        throw new Error('Unable to getHeroScroll')
    };
    const data = res?.data;
    return data;
};
export const getHeroPremiApi = async()=>{
    const res = await axios.get('/product/hero-prem');
    console.log(res.status)
    if(res.status !== 200 ){
        throw new Error('Unable to getHeroScroll')
    };
    const data = res?.data;
    return data;
};
export const getHeroOfferApi = async()=>{
    const res = await axios.get('/product/hero-offer');
    console.log(res.status)
    if(res.status !== 200 ){
        throw new Error('Unable to getHeroScroll')
    };
    const data = res?.data;
    return data;
};