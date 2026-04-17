import prisma from "../lib/prisma.js";

export async function getAllNotes(userId){
    return prisma.note.findMany({
        where:{userId}
    })
}

export async function createNote(title,content,userId) {
    return prisma.note.create({
        data:{title,content,userId}
    })
}

export async function updateNote(id,update){
    return prisma.note.update({
        where:{id},
        data:update
    })
}

export async function deleteNote(id){
    return prisma.note.delete({
        where:{id}
    })
}