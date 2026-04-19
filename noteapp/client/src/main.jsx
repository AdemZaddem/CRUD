import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { AuthContextProvider } from "./context/AuthContext";
import { NotesContextProvider } from "./context/NotesContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <NotesContextProvider>
          <App />
          <Toaster />
        </NotesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
