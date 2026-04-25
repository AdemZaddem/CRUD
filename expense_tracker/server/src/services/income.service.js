import prisma from "../lib/prisma.js";

export async function getIncome(userId,filters= {}){
    return prisma.income.findMany({
        where:{
            userId,
            ...(filters.source && {source:filters.source})
        }
    })
}

export async function createIncome(title,amount,source,date,userId){
    return prisma.income.create({
        data:{title,amount,source,date,userId}
    })
}

export async function updateIncome(id,update){
    return prisma.income.update({
        where:{id},
        data:update
    })
}

export async function deleteIncome(id){
    return prisma.income.delete({
        where:{id}
    })
}