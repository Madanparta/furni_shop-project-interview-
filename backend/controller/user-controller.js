import User from "../model/user-model.js";
import {COOKIE_NAME} from "../config/constant.js"
import {createToken} from "../config/token-manager.js";
import { errorHandler } from "../config/errorHandler.js";
import bcrypt from "bcryptjs";

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function isValidPass(pass) {
  return pass.length >= 6 && pass.length <= 20;
};

export const getAllUsers = async(req,res,next)=>{
    try {
        const user = await User.findById({_id:res.locals.jwtData.payload.id});
        if(!user) return next(errorHandler(402,"User not registered OR Token malfunctioned"));
 
        if (user._id.toString() !== res.locals.jwtData.payload.id) {
           return next(errorHandler(403, "Incorrect Password"));
        }
        const users = await User.find();
        return res.status(200).json({message:"ok",users})
    } catch (error) {
        next(error);
    }
};

export const userRegister = async(req,res,next)=>{
    try {
        const {email}=req.body;
        if(!email || email === ""){
            return next(errorHandler(404,"please enter valide email"));
        }
        if(!isValidEmail(email)){
            return next(errorHandler(404,"please enter valid email ID"));
        }
        const findUser = await User.findOne({email});
        if(findUser) return next(errorHandler(402,"user already existed"));
        
        const user = new User({email:email,isAdmin:false});
        await user.save();

        res.clearCookie(COOKIE_NAME,{
            httpOnly:true,
            domain: "localhost",
            signed:true,
            path:"/"
        });

        const token = createToken(user._id,user.email,"1d");
        const expires = new Date();
        expires.setDate(expires.getDate()+1);
        res.cookie(COOKIE_NAME,token,{
            path:"/",
            domain: "localhost",
            expires,
            httpOnly:true,
            signed: true,
        });
        return res.status(200).json({message:"ok",email:user.email});
    } catch (error) {
        next(error);
    }
}

export const userLogin = async(req,res,next)=>{
    try {
        const { email, password } = req.body;
        if (email === "" || password === "" || !email || !password) {
          return next(errorHandler(404, "user data required."));
        }
        if (!isValidEmail(email)) {
          return next(errorHandler(404, "please enter valid email ID"));
        }
        if (!isValidPass(password)) {
          return next(errorHandler( 404, "Please enter password length greater then 6 then less then 20." ) );
        };
        const user = await User.findOne({email});
        if(!user) return next(errorHandler(402,"user not register please register"));

        if(user.password === undefined){
            let cryptPassword = bcrypt.hashSync(password,10);
            await User.updateOne({password:cryptPassword});
        }else{
            let vcryptPassword = bcrypt.compareSync(password,user?.password);
            if(!vcryptPassword){
                return next(errorHandler(404, "please enter valide user Id and password.."))
            };
        }

        res.clearCookie(COOKIE_NAME,{
            httpOnly:true,
            domain: "localhost",
            signed:true,
            path:"/"
        });
        const token = createToken(user._id,user.email,"1d");
        const expires = new Date();
        expires.setDate(expires.getDate()+1);
        res.cookie(COOKIE_NAME,token,{
            path:"/",
            domain: "localhost",
            expires,
            httpOnly:true,
            signed: true,
        });
        res.status(200).json({message:"Ok",email:user.email,isAdmin:user.isAdmin});
    } catch (error) {
        next(error);
    }
};

export const verfyUser = async(req,res,next)=>{
    try {
        const user = await User.findById({_id:res.locals.jwtData.payload.id});
        if(!user) return next(errorHandler(402,"User not registered OR Token malfunctioned"));
        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "please login"));
        }
        return res.status(200).json({message:"ok",id:res.locals.jwtData.payload.id,email:user.email});
    } catch (error) {
        next(error);
    }
};

export const userLogout = async(req,res,next)=>{
    try {
         const user = await User.findById({_id:res.locals.jwtData.payload.id});
         if(!user) return next(errorHandler(402,"User not registered OR Token malfunctioned"));
 
         if (user._id.toString() !== res.locals.jwtData.payload.id) {
           return next(errorHandler(403, "Incorrect Password"));
         }

        res.clearCookie(COOKIE_NAME,{
            httpOnly:true,
            domain: "localhost",
            signed:true,
            path:"/"
        });
 
        return res.status(200).json({message:"ok"});
    } catch (error) {
        next(error);
    }
};