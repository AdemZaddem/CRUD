import { fetchNotes } from "@/services/api";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import NoteItem from "./NoteItem";
import { useNotes } from "@/context/NotesContext";


function NotesList() {
  const {notes,isLoading,error} = useNotes()
  if(isLoading) return (
    <div className="max-w-[1200px] mx-auto p-4 min-h-screen flex justify-center">
        <Button size="sm" className={`bg-transparent text-black text-2xl`}>
        <Spinner className={`size-6`} data-icon="inline-start" />
        Loading...
      </Button>
    </div>
     
  )
  return (
    <div className="max-w-[1200px] gap-2 mx-auto p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    {notes.map(note=>(
        <NoteItem key = {note.id} {...note}/>
    ))}
    </div>
  );
}

export default NotesList;
