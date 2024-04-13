import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { DataBaseConnection } from "./config/databaseConnection.js";
import userRouter from "./router/user-router.js";
import cookieParser from "cookie-parser";
dotenv.config()
import cors from 'cors';
import productRoute from "./router/product-router.js";
const app = express();
const PORT = process.env.PORT || 8080;

// databaseConnection..
DataBaseConnection();

// middlewares..
app.use(cors({origin:['http://localhost:5173','http://localhost:5174'],credentials:true}));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static('uploads'));

// routes..
app.use('/api/v1/user',userRouter);

// adimin
app.use('/api/v1/product',productRoute);

app.listen(PORT,()=>console.log(`Backend Server Run With Port : ${PORT}`));

// error middleware..
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error..!"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})