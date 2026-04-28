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
import { Wallet, ArrowUpRight, ArrowDownRight,TrendingDown,TrendingUp } from "lucide-react";
import { useExpenses } from "@/context/ExpensesContext";
import { useIncome } from "@/context/IncomeContext";

function StatsCard() {
  const { expenses } = useExpenses();
  const { incomes } = useIncome();

  const totalExpenses = expenses.reduce(
    (total, curr) => total + curr.amount,
    0,
  );
  const totalIncome = incomes.reduce((total, curr) => total + curr.amount, 0);

  const monthIncomes = incomes
    .filter((e) => new Date(e.date).getMonth() === new Date().getMonth())
    .reduce((total, cur) => total + cur.amount, 0);
  const monthExpense = expenses
    .filter((e) => new Date(e.date).getMonth() === new Date().getMonth())
    .reduce((total, cur) => total + cur.amount, 0);

  const lastMonthExpenses = expenses
    .filter((e) => new Date(e.date).getMonth() === new Date().getMonth() - 1)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const lastMonthIncomes = incomes
    .filter((e) => new Date(e.date).getMonth() === new Date().getMonth() - 1)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const percentageChangeExpenses =
    lastMonthExpenses === 0
      ? 100
      : (
          ((monthExpense - lastMonthExpenses) / lastMonthExpenses) *
          100
        ).toFixed(1);

  const percentageChangeIncomes =
    lastMonthIncomes === 0
      ? 100
      : (((monthIncomes - lastMonthIncomes) / lastMonthIncomes) * 100).toFixed(
          1,
        );

  const balance = totalIncome - totalExpenses;
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Card className={'flex-1'}>
        <CardHeader>
          <CardTitle className={'text-xl'}>Total Balance</CardTitle>
          <CardAction>
            <Wallet size={20} color="gray" />
          </CardAction>
        </CardHeader>
        <CardContent>
          <CardTitle className={'text-2xl'}>${balance}</CardTitle>
          <CardDescription>Available funds</CardDescription>
        </CardContent>
      </Card>

      <Card className={'flex-1'}>
        <CardHeader>
          <CardTitle className={'text-xl'}>Income</CardTitle>
          <CardAction>
            <ArrowUpRight color="green" size={20} />
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <CardTitle className={'text-2xl'}>${monthIncomes}</CardTitle>
            <div className="flex items-center gap-1">
                {percentageChangeIncomes > 0 ? <TrendingUp size={15} color="green"/>: <TrendingDown size={15} color="red"/>}
                <p className={`${percentageChangeIncomes > 0 ? 'text-green-800':'text-red-500'} text-sm`}>{percentageChangeIncomes}%</p>
            </div>
          </div>

          <CardDescription>This month</CardDescription>
        </CardContent>
      </Card>

      <Card className={'flex-1'}>
        <CardHeader>
          <CardTitle className={'text-xl'}>Expenses</CardTitle>
          <CardAction>
            <ArrowDownRight color="red" size={20} />
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <CardTitle className={'text-2xl'}>${monthExpense}</CardTitle>
            <div className="flex items-center gap-1">
                {percentageChangeExpenses > 0 ? <TrendingUp size={15} color="green"/>: <TrendingDown size={15} color="red"/>}
                <p className={`${percentageChangeExpenses > 0 ? 'text-green-800':'text-red-500'} text-sm`}>{percentageChangeExpenses}%</p>
            </div>
          </div>
          <CardDescription>This month</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

export default StatsCard;
