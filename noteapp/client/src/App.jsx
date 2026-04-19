import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import { LoginForm } from "./components/login-form";
import { SignupForm } from "./components/signup-form";
import LandingPage from "./components/LandingPage";
import AddNote from "./components/AddNote";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<SignupForm />} />
            <Route path="/notes" element={
                <ProtectedRoute>
                    <LandingPage />
                </ProtectedRoute>
            } />
            <Route path="/notes/add" element={
                <ProtectedRoute>
                    <AddNote />
                </ProtectedRoute>
            } />
        </Routes>
    )
}

export default App;
