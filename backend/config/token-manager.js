import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constant.js";
import { errorHandler } from "./errorHandler.js";


export const createToken = (id,email,expires)=>{
    const payload = {id,email};
    return jwt.sign({payload},process.env.JWT_SECRET,{expiresIn:expires});
};

export const verfyToken = (req,res,next)=>{
    const token = req.signedCookies[COOKIE_NAME];
    if(token === "" || !token){
        return next(errorHandler(401,"Token not Provided"));
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,success)=>{
        if(err){
            return next(errorHandler(401, "Token Expired"));
        }
        if(success){
            res.locals.jwtData = success;
            return next();
        }
    })
}