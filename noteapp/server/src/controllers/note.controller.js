import { getAllNotes,createNote,deleteNote,updateNote } from "../services/note.service.js";

export async function getAllNotesController(req,res){
    try {
        const {userId} = req.params 
        const note = await getAllNotes(parseInt(userId))
        res.status(201).json(note)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export async function createNoteController(req,res){
    try {
        const {userId} = req.params
        const {title,content} = req.body
        const note = await createNote(title,content,parseInt(userId))
        res.status(201).json({ message: "Note created" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateNoteController(req,res){
    try {
        const {id} = req.params
        const {title,content} = req.body
        const note = await updateNote(parseInt(id),{title,content})
        res.status(201).json({ message: "Note updated" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export async function deleteNoteController(req,res){
    try {
        const {id} = req.params
        const note = await deleteNote(parseInt(id))
        res.status(201).json({ message: "Note deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}