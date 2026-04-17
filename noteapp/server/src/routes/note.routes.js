import { getAllNotesController,createNoteController,updateNoteController,deleteNoteController } from "../controllers/note.controller.js";
import express from 'express'

const noteRouter = express.Router()

noteRouter.get('/users/:userId/notes',getAllNotesController)
noteRouter.post('/users/:userId/notes',createNoteController)
noteRouter.patch('/notes/:id',updateNoteController)
noteRouter.delete('/notes/:id',deleteNoteController)


export default noteRouter