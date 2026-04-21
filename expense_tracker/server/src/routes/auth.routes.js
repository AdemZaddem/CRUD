import { createUserController,getUserController } from "../controllers/auth.controller.js";
import express from 'express'

const authRouter = express.Router()

authRouter.post('/register',createUserController)
authRouter.post('/login',getUserController)


export default authRouter