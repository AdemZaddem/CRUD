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

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useExpenses } from "@/context/ExpensesContext";
import { PieChart, Pie } from "recharts";

const chartConfig = {
  "Food & Dining": {
    label: "Food & Dining",
    color: "#10b981",
  },
  Transportation: {
    label: "Transportation",
    color: "#3b82f6",
  },
  Shopping: {
    label: "Shopping",
    color: "#f59e0b",
  },
  Entertainment: {
    label: "Entertainment",
    color: "#ef4444",
  },
  Healthcare: {
    label: "Healthcare",
    color: "#8b5cf6",
  },
  "Bills & Utilities": {
    label: "Bills & Utilities",
    color: "#6366f1",
  },
  Other: {
    label: "Other",
    color: "#6b7280",
  },
};

function Spending() {
  const { expenses } = useExpenses();

  const categoryData = Object.entries(
    expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {}),
  ).map(([category, amount]) => ({
    category,
    amount,
    fill: chartConfig[category]?.color || "#6b7280",
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending by Category</CardTitle>
        <CardDescription>Distribution of your expenses</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] px-0 w-[100%]"
        >
          <PieChart>
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white border rounded p-2 shadow text-sm">
                      <p
                        style={{ color: payload[0].payload.fill }}
                        className="font-medium"
                      >
                        {payload[0].payload.category}: ${payload[0].value}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Pie
              data={categoryData}
              dataKey="amount"
              nameKey="category"
              labelLine={false}
              label={({ payload, ...props }) => {
            

                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill={payload.fill}
                    fontSize={12}
                    fontWeight={500}
                  >
                    {payload.category}: ${payload.amount}
                  </text>
                );
              }}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default Spending;
