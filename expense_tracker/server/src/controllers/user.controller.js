import { updateAvatar,updateProfile,updatePassword } from "../services/user.service.js";
import bcrypt from "bcrypt"
import { getUser } from "../services/auth.service.js";

export async function updateAvatarController(req,res){
    try {
        const file = req.file.path
        const {id} = req.params
        const update = await updateAvatar(parseInt(id),file)
        return res.status(200).json({message:"Avatar uploaded",avatar:update.avatar })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}


export async function updateProfileController(req,res){
    try {
        const {id} = req.params
        const {username,email} = req.body
        const user = await updateProfile(parseInt(id),username,email)
        return res.status(201).json({message:"username & email updated"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function updatePasswordController(req,res){
    try {
        const {id} = req.params
        const {currPassword,newPassword,email} = req.body
        const user = await getUser(email)
        const isMatch = await bcrypt.compare(currPassword,user.password)
        if(!isMatch) return res.status(400).json({ message: 'Password is incorrect' })
        const update = await updatePassword(parseInt(id),newPassword)
        return res.status(201).json({message:"Password updated"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

