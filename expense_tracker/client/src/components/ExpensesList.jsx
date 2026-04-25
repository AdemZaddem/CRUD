import { useExpenses } from '@/context/ExpensesContext'
import React from 'react'
import ExpensesItem from './ExpensesItem'

function ExpensesList() {
    const {expenses} = useExpenses()
  return (
    <div className='border rounded p-4'>
      <h1 className='text-2xl mb-5'>All Expenses ({expenses.length})</h1>
      <div className='flex flex-col gap-4'>
        {expenses.map(expense =>(
        <ExpensesItem key={expense.id} {...expense}/>
      ))}
      </div>
    </div>
  )
}

export default ExpensesList
