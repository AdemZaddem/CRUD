import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/login-form";
import { SignupForm } from "./components/signup-form";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Routes>
        <Route path="/register" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
