import prisma from "../lib/prisma.js";

export async function getExpense(userId){
    return prisma.expense.findMany({
        where:{userId}
    })
}

export async function createExpense(title,amount,category,date,userId){
    return prisma.expense.create({
        data:{title,amount,category,date,userId}
    })
}

export async function updateExpense(id,update){
    return prisma.expense.update({
        where:{id},
        data:update
    })
}

export async function deleteExpense(id){
    return prisma.expense.delete({
        where:{id}
    })
}