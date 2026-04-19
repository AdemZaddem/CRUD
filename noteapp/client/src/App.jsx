import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/login-form";
import { SignupForm } from "./components/signup-form";
import LandingPage from "./components/LandingPage";
import AddNote from "./components/AddNote";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/notes" element={<LandingPage />} />
        <Route path="/notes/add" element = {<AddNote/>}/>
      </Routes>
    </div>
  );
}

export default App;
