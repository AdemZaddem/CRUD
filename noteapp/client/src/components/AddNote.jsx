import React, { useState } from "react";
import NavBar from "./NavBar";
import { Card } from "./ui/card";
import { CardHeader, CardTitle, CardDescription } from "./ui/card";
import { CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { createNote } from "@/services/api";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Save } from "lucide-react";
import { Link } from "react-router-dom";
import { useNotes } from "@/context/NotesContext";

function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const {setNotes} = useNotes()
  const navigator = useNavigate()

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await createNote(user.id, { title, content });
      toast.success('Note Created');
      setTitle("");
      setContent("");
      navigator('/notes')
      setNotes(prev=> [...prev,res])
    } catch (error) {
        toast.error(error.message)
    }
  }
  return (
    <div>
      <NavBar />
      <div className="mt-30 max-w-[1200px] mx-auto flex justify-center">
        <Card className={`w-[800px]`}>
          <CardHeader className={`text-start flex flex-col justify-start`}>
            <CardTitle>Create New Note</CardTitle>
            <CardDescription>Add a new note to your collection</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter note title..."
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Enter note content..."
                    className="min-h-[150px]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="flex justify-end gap-2 items-center">
                    <Button type = 'button' onClick = {()=> navigator('/notes')} className={`bg-transparent text-black border border-gray-200 hover:bg-gray-100`}>Cancel</Button>
                    <Button onClick = {()=>navigator('/notes')} disabled = {title === '' || content === ''} className={`hover:bg-black/80`}>
                        <Save />
                        <p>Save Note</p>
                    </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AddNote;
