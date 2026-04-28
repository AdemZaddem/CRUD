import Login from "./pages/Login";
import React from "react";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import AppLayout from "./components/AppLayout";
import ProtectedRout from "./components/ProtectedRout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <ProtectedRout>
                <Dashboard />
              </ProtectedRout>
            </AppLayout>
          }
        />
        <Route
          path="/expenses"
          element={
            <AppLayout>
              <ProtectedRout>
                <Expenses />
              </ProtectedRout>
            </AppLayout>
          }
        />
        <Route
          path="/income"
          element={
            <AppLayout>
              <ProtectedRout>
                <Income />
              </ProtectedRout>
            </AppLayout>
          }
        />
        <Route
          path="/analytics"
          element={
            <AppLayout>
              <ProtectedRout>
                <Analytics />
              </ProtectedRout>
            </AppLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <AppLayout>
              <ProtectedRout>
                <Profile />
              </ProtectedRout>
            </AppLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
