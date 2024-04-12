import express from "express";
const app = express();
import dotenv from "dotenv";
import { DataBaseConnection, DataBaseDisConnection } from "./config/databaseConnection.js";
import morgan from "morgan";
import cors from "cors";
import cookieParser  from "cookie-parser";
import userRouter from "./router/user-router.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

// databaseConnection..
DataBaseDisConnection();
DataBaseConnection();

// middlewares..
// app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser(process.env.COOKIE_SECRET));

// routes..
app.use('/api/v1/user',userRouter);

app.listen(PORT,()=>console.log(`Backend Server Run With Port : ${PORT}`));

// error middleware..
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
});