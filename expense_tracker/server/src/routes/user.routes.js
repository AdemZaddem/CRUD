import { uploads } from "../middleware/upload.js";
import express from "express";
import { updateAvatarController,updatePasswordController,updateProfileController } from "../controllers/user.controller.js";

const userRouter = express.Router()

userRouter.patch('/user/:id/avatar',uploads.single('avatar'),updateAvatarController)
userRouter.patch('/user/:id/profile',updateProfileController)
userRouter.patch('/user/:id/password',updatePasswordController)

export default userRouter