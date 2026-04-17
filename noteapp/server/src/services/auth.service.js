import prisma from '../lib/prisma.js'
import bcrypt from 'bcrypt'

export async function getUser(email){
    return prisma.user.findUnique({
        where:{email}
    })
}

export async function createUser(username,email,password){
    const hashPassword = await bcrypt.hash(password,10)
    return prisma.user.create({
        data:{username,email,password:hashPassword}
    })
}