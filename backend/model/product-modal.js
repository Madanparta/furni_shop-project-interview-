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

export { HeroScreen, HeroScreenPrem,HeroScreenOffer }