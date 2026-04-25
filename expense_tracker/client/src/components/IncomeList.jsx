import React from 'react'
import IncomeItem from './IncomeItem'
import { DollarSign } from 'lucide-react';


function IncomeList({incomes = []}) {
  return (
    <div className="border rounded p-4">
      <h1 className="text-2xl mb-5">All Incomes ({incomes.length})</h1>
      {incomes.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <DollarSign size={48} className="text-gray-300 mb-4" />
          <h2 className="text-lg font-semibold text-gray-500">
            No incomes found
          </h2>
          <p className="text-sm text-gray-400">
            Add your first income to get started
          </p>
        </div>
      )}
      <div className="flex flex-col gap-4">
        {incomes.map((income) => (
          <IncomeItem key={income.id} {...income} />
        ))}
      </div>
    </div>
  )
}

export default IncomeList
