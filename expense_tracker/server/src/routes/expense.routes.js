import { createExpenseController,getExpenseController,updateExpenseController,deleteExpenseController } from "../controllers/expense.controller.js";
import express from "express";

const expenseRouter = express.Router()

expenseRouter.get('/user/:userId/expense',getExpenseController)
expenseRouter.post('/user/:userId/expense',createExpenseController)
expenseRouter.patch('/expense/:id',updateExpenseController)
expenseRouter.delete('/expense/:id',deleteExpenseController)


export default expenseRouter