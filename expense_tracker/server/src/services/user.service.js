import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt"

export async function updateAvatar(id,file){
    return await prisma.user.update({
        where:{id},
        data:{avatar:file}
    })
}

export async function updateProfile(id,username,email){
    return prisma.user.update({
        where:{id},
        data:{username,email}
    })
}

export async function updatePassword(id,newPassword){
   const hashPassword = await bcrypt.hash(newPassword,10)
   return prisma.user.update({
    where:{id},
    data:{password:hashPassword}
   })
}