import { useExpenses } from "@/context/ExpensesContext";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

function CategoryBreakDown() {
  const { expenses } = useExpenses();

  const categoryData = Object.entries(
    expenses.reduce((acc, expense) => {
        console.log(acc);
        
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {}),
  ).map(([category, amount]) => ({
    category: category.split(" ")[0], // shortens "Food & Dining" to "Food"
    amount,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Category Breakdown</CardTitle>
        <CardDescription>Compare spending across categories</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />
            <XAxis dataKey="category" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                    
                    
                  return (
                    <div className="bg-white border rounded-lg p-3 shadow-md">
                      <p className="font-semibold text-black">
                        {payload[0].payload.category}
                      </p>
                      <p className="text-blue-500">
                        amount : {payload[0].value}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="amount" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default CategoryBreakDown;
