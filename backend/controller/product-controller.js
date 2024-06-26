import { errorHandler } from "../config/errorHandler.js";
import {HeroScreen,HeroScreenOffer,HeroScreenPrem, Proudct} from "../model/product-modal.js"
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
        // const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        // if (!user)
        //     return next(
        //         errorHandler(402, "User not registered OR Token malfunctioned")
        // );

        // if (user._id.toString() !== res.locals.jwtData.payload.id) {
        //     return next(errorHandler(403, "Incorrect Password"));
        // }
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
        // const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        // if (!user)
        //     return next(
        //         errorHandler(402, "User not registered OR Token malfunctioned")
        // );

        // if (user._id.toString() !== res.locals.jwtData.payload.id) {
        //     return next(errorHandler(403, "Incorrect Password"));
        // }
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
        // const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        // if (!user)
        //     return next(
        //         errorHandler(402, "User not registered OR Token malfunctioned")
        // );

        // if (user._id.toString() !== res.locals.jwtData.payload.id) {
        //     return next(errorHandler(403, "Incorrect Password"));
        // }
        
        const heroOffer = await HeroScreenOffer.find()
        res.status(200).json({ message: 'ok',heroOffer });
    } catch (error) {
        next(error);
    }
};



// products..
export const uploadProduct = async(req,res,next)=>{
    try {
        const {product_code,product_name,product_rating,product_price,product_description} = req.body;
        const product_images = req.files;
        const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        if (!user)
            return next(
                errorHandler(402, "User not registered OR Token malfunctioned")
        );

        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "Incorrect Password"));
        }
        const newProduct = new Proudct({
            product_code,
            product_name,
            product_rating,
            product_price,
            product_description,
            product_images
        });

        await newProduct.save();
        res.status(200).json({ message: 'successfully uploaded' });
    } catch (error) {
        next(error);
    }
}
export const getAllProduct = async(req,res,next)=>{
    try {
        // const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        // if (!user)
        //     return next(
        //         errorHandler(402, "User not registered OR Token malfunctioned")
        // );

        // if (user._id.toString() !== res.locals.jwtData.payload.id) {
        //     return next(errorHandler(403, "Incorrect Password"));
        // }
        const products = await Proudct.find();
        res.status(200).json({ message: 'ok',products });
    } catch (error) {
        next(error);
    }
}

export const getProduct = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        if (!user)
            return next(
                errorHandler(402, "User not registered OR Token malfunctioned")
        );

        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "Incorrect Password"));
        };
        
        const product = await Proudct.find({_id:id});
        res.status(200).json({ message: 'ok',product });
    } catch (error) {
        next(error);
    }
}

export const searchProducts = async(req,res,next)=>{
    try {
        const query = req.body.query.toLowerCase()
        const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        if (!user)
            return next(
                errorHandler(402, "User not registered OR Token malfunctioned")
        );

        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "Incorrect Password"));
        };
        
        const product = await Proudct.find({product_name:{ $regex: query,$options: 'i'}});
        res.status(200).json({ message: 'ok',product });
    } catch (error) {
        next(error);
    }
}
export const deleteProduct = async(req,res,next)=>{
    try {
        // console.log(req.params.id)
        const user = await User.findById({ _id: res.locals.jwtData.payload.id });
        if (!user)
            return next(
                errorHandler(402, "User not registered OR Token malfunctioned")
        );

        if (user._id.toString() !== res.locals.jwtData.payload.id) {
            return next(errorHandler(403, "Incorrect Password"));
        };

        await Proudct.findByIdAndDelete({_id:req.params.id});

        res.status(200).json({ message: 'product delted' });
    } catch (error) {
        next(error);
    }
}