import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    address:{
        type:String,
    },
    pincode:{
        type:String,
    },
    district:{
        type:String,
    },
    state:{
        type:String,
    },
    number:{
        type:String,
    },
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;