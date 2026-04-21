import { createExpense,getExpense,updateExpense,deleteExpense } from "../services/expense.service.js";

export async function getExpenseController(req,res){
    try {
        const {userId} = req.params
        const { category } = req.query
        const expense = await getExpense(parseInt(userId),category)
        return res.status(201).json(expense)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export async function createExpenseController(req,res){
    try {
        const {userId} = req.params
        const {title,amount,category} = req.body
        const date = new Date(req.body.date)
        const expense = await createExpense(title,amount,category,date,parseInt(userId))
        res.status(201).json(expense)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export async function updateExpenseController(req,res){
    try {
        const {id} = req.params
        const {title,amount,category} = req.body
        const expense = await updateExpense(parseInt(id),{title,amount,category})
        res.status(201).json({ message: "Expense updated" })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export async function deleteExpenseController(req,res){
    try {
        const {id} = req.params
        const expense = await deleteExpense(parseInt(id))
        res.status(201).json({ message: "Expense deleted" })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}