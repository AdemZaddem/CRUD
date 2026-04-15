import { getAllTodosController,deleteTodoController,updateTodoController,createTodoController } from "../controllers/todo.controller.js";
import express from 'express'

const router = express.Router()


router.get('/',getAllTodosController)
router.post('/',createTodoController)
router.patch('/:id',updateTodoController)
router.delete('/:id',deleteTodoController)


export default router