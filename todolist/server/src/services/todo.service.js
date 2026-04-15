import prisma from "../lib/prisma.js";

export const getAllTodos = async function (){
    return prisma.todo.findMany()
}

export const createTodo = async function(title,description,category){
    return prisma.todo.create({
        data:{title,description,category}
    })
}

export const updateTodo = async function (id,update){
    return prisma.todo.update({
        where:{id},
        data:update
    })
}

export const deleteTodo = async function (id){
    return prisma.todo.delete({
        where :{id}
    })
}