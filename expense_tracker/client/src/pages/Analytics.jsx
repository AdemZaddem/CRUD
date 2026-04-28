import React from 'react'
import Spending from '@/components/charts/Spending'
import CategoryBreakDown from '@/components/charts/CategoryBreakDown'
import SpendingOver from '@/components/charts/SpendingOver'
import CategoryInsights from '@/components/charts/CategoryInsights'

function Analytics() {
  return (
    <div className='flex flex-col gap-4'>
      <header>
        <h1 className='text-3xl font-semibold'>Analytics</h1>
        <p className='text-gray-400'>Visualize your spending patterns</p>
      </header>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <Spending/>
        <CategoryBreakDown/>
      </div>
      <SpendingOver/>
      <CategoryInsights/>
    </div>
  )
}

export default Analytics
