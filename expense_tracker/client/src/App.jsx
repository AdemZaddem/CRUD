import Login from "./pages/Login";
import React from "react";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={
          <AppLayout>
            <Dashboard />
          </AppLayout>
        } />
        <Route path="/expenses" element={
          <AppLayout>
            <Expenses />
          </AppLayout>
        } />
        <Route path="/income" element={
          <AppLayout>
            <Income />
          </AppLayout>
        } />
        <Route path="/analytics" element={
          <AppLayout>
            <Analytics />
          </AppLayout>
        } />
        <Route path="/profile" element={
          <AppLayout>
            <Profile />
          </AppLayout>
        } />
      </Routes>
    </>
  );
}

export default App;
