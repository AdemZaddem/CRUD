import React from "react";
import NavBar from "./NavBar";
import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";


function LandingPage() {
  return (
    <div>
      <NavBar />
      <NotesHeader />
      <NotesList/>
    </div>
  );
}

export default LandingPage;
