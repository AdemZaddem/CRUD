import React, { useState } from "react";
import {
  NotebookPen,
  TableOfContents,
  Plus,
  SquareArrowRightExit,
} from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

function NavBar() {
  const location = useLocation();
  const isNotesPage = location.pathname === "/notes";
  const {setLogedInUser} = useAuth()
  const user = JSON.parse(localStorage.getItem('user'))

  function handleLogOut() {
    localStorage.removeItem("user");
    setLogedInUser(null);
  }

  return (
    <div className="w-full border-b border-gray-300 p-4 fixed top-0 left-0 right-0 shadow bg-white z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <NotebookPen size={30} />
          <h1 className="text-xl font-bold">My Notes</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className={`${isNotesPage ? "" : "bg-transparent text-black hover:bg-gray-100"}`}
          >
            <Link to={"/notes"} className="flex items-center gap-2">
              <TableOfContents />
              <p className="">All Notes</p>
            </Link>
          </Button>
          <Button
            className={`${isNotesPage ? "bg-transparent text-black hover:bg-gray-100k" : ""}`}
          >
            <Link to={"/notes/add"} className="flex items-center gap-2">
              <Plus />
              <p>New Note</p>
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Link to={"/login"} className="flex items-center gap-2">
            <p className="text-gray-400">{user.username}</p>
            <Button
                onClick = {()=>handleLogOut()}
              className={`bg-transparent text-black border border-gray-200 hover:bg-gray-100`}
            >
              <SquareArrowRightExit />
              <p>Logout</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
