import express from "express";
import { getAllUsers, userLogin, userLogout, userRegister, verfyUser } from "../controller/user-controller.js";
import { verfyToken } from "../config/token-manager.js";
const userRouter = express.Router();

userRouter.post('/reg',userRegister);
userRouter.post('/log',userLogin);
userRouter.get('/very-user',verfyToken,verfyUser);
userRouter.get('/logout',verfyToken,userLogout);
userRouter.get('/users',verfyToken,getAllUsers);

export default userRouter;