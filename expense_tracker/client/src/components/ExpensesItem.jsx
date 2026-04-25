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
import { Trash2 } from 'lucide-react'
import { formatDate } from '@/lib/utils'

function ExpensesItem({id,title,amount,category,date}) {
  return (
    <Card className="p-4">
    <div className="flex items-center justify-between gap-4">
        
        {/* Left - title, category, amount & date on mobile */}
        <div className="flex flex-col">
            <span className="font-semibold">{title}</span>
            <span className="text-sm text-gray-400 mb-5 lg:mb-0 md:mb-0">{category}</span>
            {/* Mobile only */}
            <div className="flex flex-col mt-1 md:hidden">
                <span className="font-semibold">${amount}</span>
                <span className="text-sm text-gray-400">{formatDate(date)}</span>
            </div>
        </div>

        {/* Amount - md+ only */}
        <div className="hidden md:flex flex-col">
            <span className="text-sm text-gray-400">Amount</span>
            <span className="font-semibold">${amount}</span>
        </div>

        {/* Date - lg+ only */}
        <div className="hidden lg:flex flex-col">
            <span className="text-sm text-gray-400">Date</span>
            <span className="font-semibold">{formatDate(date)}</span>
        </div>

        {/* Delete */}
        <CardAction><Trash2 color="#ff0000" size={20} className="cursor-pointer flex-shrink-0"/></CardAction>
        
    </div>
</Card>
  )
}

export default ExpensesItem
