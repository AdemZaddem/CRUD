import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useExpenses } from '@/context/ExpensesContext'
import {formatDateV2 } from '@/lib/utils'

function RecentExpenses() {
    const {expenses} = useExpenses()
    
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent className={'flex flex-col gap-4'}>
        {expenses.slice(0,5).map(expense=>(
            <Card className={'flex justify-between p-4 flex-row'}>
                <div>
                    <CardTitle>{expense.title}</CardTitle>
                    <CardDescription>{expense.category}</CardDescription>
                </div>
                <div>
                    <CardTitle>${expense.amount}</CardTitle>
                    <CardDescription>{formatDateV2(expense.date)}</CardDescription>
                </div>
            </Card>
        ))}
      </CardContent>
    </Card>
  )
}

export default RecentExpenses
