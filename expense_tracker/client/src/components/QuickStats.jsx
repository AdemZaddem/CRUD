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
import { useIncome } from '@/context/IncomeContext'

function QuickStats() {
    const {expenses} = useExpenses()
    const {incomes} = useIncome()

    const totalExpenses = expenses.reduce((total,curr)=>total + curr.amount,0)
    const totalIncomes = incomes.reduce((total,curr)=>total + curr.amount,0)

    const monthTransactions = expenses.filter(expense => new Date(expense.date).getMonth() === new Date().getMonth())
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent className={'space-y-4'}>

        <div className='bg-gray-100 p-2 flex justify-between rounded py-3'>
            <p className='text-gray-500'>Total Transactions</p>
            <p className='font-semibold'>{expenses.length}</p>
        </div>

        <div className='bg-gray-100 p-2 flex justify-between rounded py-3'>
            <p className='text-gray-500'>Average per Transaction</p>
            <p className='font-semibold'>${(totalExpenses / expenses.length).toFixed(2)}</p>
        </div>

        <div className='bg-gray-100 p-2 flex justify-between rounded py-3'>
            <p className='text-gray-500'>This Month Transactions</p>
            <p className='font-semibold'>{monthTransactions.length}</p>
        </div>

        <div className='bg-gray-100 p-2 flex justify-between rounded py-3'>
            <p className='text-gray-500'>Savings Rate</p>
            <p className='font-semibold'>{(((totalIncomes - totalExpenses) / totalIncomes) * 100).toFixed(1)}%</p>
        </div>

      </CardContent>
    </Card>
  )
}

export default QuickStats
