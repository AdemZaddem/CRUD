import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Circle } from "lucide-react";
import { useExpenses } from "@/context/ExpensesContext";

function CategoryInsights() {
  const { expenses } = useExpenses();
  
  const categoryStats = Object.entries(
    expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = { transactions: 0, amount: 0 };
      }
      acc[expense.category].transactions += 1;
      acc[expense.category].amount += expense.amount;
      return acc;
    }, {}),
  ).map(([category, stats]) => ({
    category,
    transactions: stats.transactions,
    amount: stats.amount,
  }));

  const categoryColors = {
    "Food & Dining": "bg-green-500",
    "Transportation": "bg-blue-500",
    "Shopping": "bg-yellow-500",
    "Entertainment": "bg-red-500",
    "Healthcare": "bg-purple-500",
    "Bills & Utilities": "bg-indigo-500",
    "Other": "bg-gray-500",
}

  return (
    <Card>
      <CardHeader>
        <CardTitle>Category Insights</CardTitle>
        <CardDescription>Detailed breakdown by category</CardDescription>
      </CardHeader>
      <CardContent>
        {categoryStats.map((stat) => (
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${categoryColors[stat.category]}`} />
                <span>{stat.category}</span>
              </div>
              <div className="flex gap-4">
                <p className="text-gray-400">{stat.transactions} transactions</p>
                <p className="font-semibold">${stat.amount}</p>
              </div>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-4xl">
              <div className={`w-[50%] ${categoryColors[stat.category] || 'bg-gray-500'} h-2 rounded-4xl`}></div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default CategoryInsights;
