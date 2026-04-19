import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/alert-dialog";
import { Pencil, Trash2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { deleteNote,updateNote } from "@/services/api";
import { useNotes } from "@/context/NotesContext";
import { toast } from "sonner";

function NoteItem({id, title, content, createdAt }) {
  const date = formatDate(createdAt);
    const {setNotes,notes} = useNotes()

  async function handleDelete(id){
    await deleteNote(id)
    setNotes(notes.filter(note=> note.id !== id))
    toast.success('Note deleted')
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className={`text-start`}>{title}</CardTitle>
        <CardAction className={`flex gap-2 items-center`}>
          <div className="hover:bg-gray-100 p-2 rounded duration-200 transition">
            <Pencil size={16} />
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="hover:bg-gray-100 p-2 rounded duration-200 transition">
                <Trash2 size={16} color="#ff0000" />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your note.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className={`bg-red-500`} onClick ={()=>handleDelete(id)}>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardDescription>{content}</CardDescription>
      </CardContent>
      <CardFooter>
        <p>{date}</p>
      </CardFooter>
    </Card>
  );
}

export default NoteItem;
