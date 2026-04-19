import React, { useState } from "react";
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
import { deleteNote, updateNote } from "@/services/api";
import { useNotes } from "@/context/NotesContext";
import { toast } from "sonner";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";



function NoteItem({ id, title, content, createdAt }) {
  const date = formatDate(createdAt);
  const [newTitle,setNewTitle] = useState(title)
  const [newContent,setNewContent] = useState(content)
  const [open,setOpen] = useState(false)
  const { setNotes, notes } = useNotes();

  async function handleDelete(id) {
    await deleteNote(id);
    setNotes(notes.filter((note) => note.id !== id));
    toast.success("Note deleted");
  }


  async function handleEdit(id,newValue){
    if(!newTitle || !newContent) return toast.error('Fields cannot be empty')
    const res = await updateNote(id,newValue)
    setNotes(prev => prev.map(note => note.id === id ? {...note,...newValue}:note))
    toast.success('Note Updated')
    
    setOpen(false)
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className={`text-start`}>{title}</CardTitle>
        <CardAction className={`flex gap-2 items-center`}>
          <Dialog open = {open} onOpenChange = {setOpen}>
            <form>
              <DialogTrigger asChild>
                <div className="hover:bg-gray-100 p-2 rounded duration-200 transition">
                  <Pencil size={16} />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                  <DialogTitle>Edit Note</DialogTitle>
                  <DialogDescription>
                    Make changes to your note below
                  </DialogDescription>
                </DialogHeader>
                <FieldGroup>
                  <Field>
                    <Label htmlFor="name-1">Title</Label>
                    <Input
                      id="name-1"
                      name="name"
                      value = {newTitle}
                      onChange = {(e)=>setNewTitle(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="username-1">Content</Label>
                    <Textarea
                      id="username-1"
                      name="username"
                      onChange = {(e)=>setNewContent(e.target.value)}
                      value = {newContent}
                    />
                  </Field>
                </FieldGroup>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" onClick = {()=>handleEdit(id,{title:newTitle,content:newContent})} >Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
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
                  This action cannot be undone. This will permanently delete
                  your note.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className={`bg-red-500`}
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </AlertDialogAction>
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
