import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { useExpenses } from "@/context/ExpensesContext"
import { useIncome } from "@/context/IncomeContext"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

function SpendingOver() {
    const { expenses } = useExpenses()
    const { incomes } = useIncome()

    
    const expenseByDate = expenses.reduce((acc, expense) => {
        const date = expense.date.split('T')[0]
        
        
        acc[date] = (acc[date] || 0) + expense.amount
        return acc
    }, {})
console.log(expenseByDate);

    
    const incomeByDate = incomes.reduce((acc, income) => {
        const date = income.date.split('T')[0]
        acc[date] = (acc[date] || 0) + income.amount
        return acc
    }, {})

    
    const allDates = [...new Set([...Object.keys(expenseByDate), ...Object.keys(incomeByDate)])].sort()
    console.log(allDates);
    

    const chartData = allDates.map(date => ({
        date,
        expenses: expenseByDate[date] || 0,
        income: incomeByDate[date] || 0
    }))

    return (
        <Card>
            <CardHeader>
                <CardTitle>Spending Over Time</CardTitle>
                <CardDescription>Daily expense trends</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb"/>
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12 }}/>
                        <YAxis axisLine={false} tickLine={false}/>
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="bg-white border rounded-lg p-3 shadow-md">
                                            <p className="font-semibold">{payload[0].payload.date}</p>
                                            {payload.map(p => (
                                                <p key={p.name} style={{ color: p.color }}>
                                                    {p.name} : {p.value}
                                                </p>
                                            ))}
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                        <Legend/>
                        <Line type="monotone" dataKey="expenses" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }}/>
                        <Line type="monotone" dataKey="income" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }}/>
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default SpendingOver