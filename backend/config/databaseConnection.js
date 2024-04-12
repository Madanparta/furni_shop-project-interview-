import mongoose, { disconnect } from "mongoose";

export const DataBaseConnection = async() => {
    try {
        const res = await mongoose.connect(process.env.MONGOOSE_URL);
        console.log(`DataBase Connected with : ${res.connection.host}`);
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export const DataBaseDisConnection = async() => {
    try {
        await disconnect();
    } catch (error) {
        console.log(error.message)
    }
}