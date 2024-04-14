import mongoose from "mongoose";

const heroScreenSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
},{timestamps:true});

const HeroScreen = mongoose.model("HeroScreen",heroScreenSchema);

const heroScreenPremSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
},{timestamps:true});

const HeroScreenPrem = mongoose.model("HeroScreenPrem",heroScreenPremSchema);

const heroScreenOfferSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
},{timestamps:true});

const HeroScreenOffer = mongoose.model("HeroScreenOffer",heroScreenOfferSchema);

// products schema;
const productSchema = new mongoose.Schema({
    product_code : String,
    product_name : String,
    product_rating : String,
    product_price : String,
    product_description:String,
    product_images : {type:Array},
},{timestamps:true});

const Proudct = mongoose.model("Proudct",productSchema)

export { HeroScreen, HeroScreenPrem,HeroScreenOffer,Proudct }