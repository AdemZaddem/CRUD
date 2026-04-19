import React from "react";
import { Plus,Search } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { useNotes } from "@/context/NotesContext";

function NotesHeader() {
  const navigate = useNavigate();
  const {notes} = useNotes()
  return (
    <div className="w-full border-b border-gray-200">
      <div className="mt-20 max-w-[1200px] mx-auto p-4">
        <div className="flex justify-between p-4 items-center">
          <div>
            <h1 className="text-2xl font-bold">All Notes</h1>
            <p className="text-gray-400 text-sm">{`${notes.length} notes in your collection`}</p>
          </div>
          <div>
            <Button
              onClick={() => navigate("/notes/add")}
              className={`p-4 cursor-pointer hover:bg-black/80`}
            >
              <Plus size={16} />
              <p>New Note</p>
            </Button>
          </div>
        </div>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <Input placeholder="Search notes..." className="pl-9 py-5" />
        </div>
      </div>
    </div>
  );
}

export default NotesHeader;
