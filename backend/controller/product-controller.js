import { errorHandler } from "../config/errorHandler.js";
import {HeroScreen,HeroScreenOffer,HeroScreenPrem} from "../model/product-modal.js"
import User from "../model/user-model.js";

export const heroSectionScroll = async(req,res,next)=>{
    try {
        const {title,description} = req.body;
        const image = req.files['image'][0].filename;

        const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        if (!user)
            return next(
                errorHandler(402, "User not registered OR Token malfunctioned")
        );

        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "Incorrect Password"));
        }
        const scrollScreen = new HeroScreen({
            title,
            description,
            image,
        });

        await scrollScreen.save();
        res.status(200).json({ message: 'successfully uploaded' });
    } catch (error) {
        next(error);
    }
};

export const getHeroSectionScroll = async(req,res,next)=>{
    try {
        const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        if (!user)
            return next(
                errorHandler(402, "User not registered OR Token malfunctioned")
        );

        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "Incorrect Password"));
        }
        const heroScreen = await HeroScreen.find({});
        res.status(200).json({ message: 'ok',heroScreen });
    } catch (error) {
        next(error);
    }
};

export const heroSectionScrollPremi = async(req,res,next)=>{
    try {
        const {title,description} = req.body;
        const image = req.files['image'][0].filename;

        const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        if (!user)
            return next(
                errorHandler(402, "User not registered OR Token malfunctioned")
        );

        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "Incorrect Password"));
        }
        const scrollPrem = new HeroScreenPrem({
            title,
            description,
            image,
        });

        await scrollPrem.save();
        res.status(200).json({ message: 'successfully uploaded' });
    } catch (error) {
        next(error);
    }
}
export const getheroSectionScrollPremi = async(req,res,next)=>{
    try {
        const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        if (!user)
            return next(
                errorHandler(402, "User not registered OR Token malfunctioned")
        );

        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "Incorrect Password"));
        }
        const homePremi = await HeroScreenPrem.find();
        
        res.status(200).json({ message: 'ok',homePremi });
    } catch (error) {
        next(error);
    }
}

export const heroSectionScrollOffer = async(req,res,next)=>{
    try {
        const {title,description} = req.body;
        const image = req.files['image'][0].filename;

        const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        if (!user)
            return next(
                errorHandler(402, "User not registered OR Token malfunctioned")
        );

        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "Incorrect Password"));
        }
        const scrollOffer = new HeroScreenOffer({
            title,
            description,
            image,
        });

        await scrollOffer.save();
        res.status(200).json({ message: 'successfully uploaded' });
    } catch (error) {
        next(error);
    }
}
export const getheroSectionScrollOffer = async(req,res,next)=>{
    try {
        const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        if (!user)
            return next(
                errorHandler(402, "User not registered OR Token malfunctioned")
        );

        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "Incorrect Password"));
        }
        
        const heroOffer = await HeroScreenOffer.find()
        res.status(200).json({ message: 'ok',heroOffer });
    } catch (error) {
        next(error);
    }
}