import { getIncomes } from "@/services/api";
import { createContext, useContext, useEffect, useState } from "react";

const IncomeContext = createContext()

export function IncomeContextProvider({children}){
    const [incomes,setIncomes] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))


    useEffect(()=>{
        async function fetchIncomes(){
            try {
                const data = await getIncomes(user.id)
                
                setIncomes(data)
                setError('')
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchIncomes()
    },[])


    return (
        <IncomeContext.Provider value={{incomes,setIncomes,error,setError,isLoading,setIsLoading}}>
            {children}
        </IncomeContext.Provider>
    )
}

export function useIncome(){
    return useContext(IncomeContext)
}