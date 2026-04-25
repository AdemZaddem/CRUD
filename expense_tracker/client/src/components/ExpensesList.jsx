import { useExpenses } from "@/context/ExpensesContext";
import React from "react";
import ExpensesItem from "./ExpensesItem";
import { Receipt } from "lucide-react";

function ExpensesList({ expenses = [] }) {
  return (
    <div className="border rounded p-4">
      <h1 className="text-2xl mb-5">All Expenses ({expenses.length})</h1>
      {expenses.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Receipt size={48} className="text-gray-300 mb-4" />
          <h2 className="text-lg font-semibold text-gray-500">
            No expenses found
          </h2>
          <p className="text-sm text-gray-400">
            Add your first expense to get started
          </p>
        </div>
      )}
      <div className="flex flex-col gap-4">
        {expenses.map((expense) => (
          <ExpensesItem key={expense.id} {...expense} />
        ))}
      </div>
    </div>
  );
}

export default ExpensesList;
