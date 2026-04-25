import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { TooltipProvider } from "./components/ui/tooltip";
import { ExpensesContextProvider } from "./context/ExpensesContext";
import { IncomeContextProvider } from "./context/IncomeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <IncomeContextProvider>
        <ExpensesContextProvider>
          <TooltipProvider>
            <AuthContextProvider>
              <App />
              <Toaster />
            </AuthContextProvider>
          </TooltipProvider>
        </ExpensesContextProvider>
      </IncomeContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
