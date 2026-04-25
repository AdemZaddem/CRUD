import { createIncome,getIncome,updateIncome,deleteIncome } from "../services/income.service.js";

export async function getIncomeController(req,res){
    try {
        const {userId} = req.params
        const {source} = req.query
        const income = await getIncome(parseInt(userId),{source})
        return res.status(201).json(income)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export async function createIncomeController(req,res){
    try {
        const {userId} = req.params
        const {title,amount,source} = req.body
        const date = new Date(req.body.date)
        const income = await createIncome(title,amount,source,date,parseInt(userId))
        res.status(201).json(income)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export async function updateIncomeController(req,res){
    try {
        const {id} = req.params
        const {amount,source} = req.body
        const income = await updateIncome(parseInt(id),{amount,source})
        res.status(201).json({ message: "Expense updated" })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export async function deleteIncomeController(req,res){
    try {
        const {id} = req.params
        const income = await deleteIncome(parseInt(id))
        res.status(201).json({ message: "Expense deleted" })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}