import multer from "multer"
import path from 'path'


const storage = multer.diskStorage({
    destination : (req,res,cb) => {
        cb(null,'uploads/')
    },
    filename: (req,file,cb) => {
        cb(null, `avatar-${Date.now()}${path.extname(file.originalname)}`)
    }
})

export const uploads = multer({storage})