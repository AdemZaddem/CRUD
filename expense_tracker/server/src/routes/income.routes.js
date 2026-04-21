import { getIncomeController,createIncomeController,updateIncomeController,deleteIncomeController } from "../controllers/income.controller.js";
import express from "express";

const incomeRouter = express.Router()

incomeRouter.get('/user/:userId/income',getIncomeController)
incomeRouter.post('/user/:userId/income',createIncomeController)
incomeRouter.patch('/income/:id',updateIncomeController)
incomeRouter.delete('/income/:id',deleteIncomeController)


export default incomeRouter