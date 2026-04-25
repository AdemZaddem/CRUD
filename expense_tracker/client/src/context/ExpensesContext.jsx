import { getExpenses } from "@/services/api";
import { createContext, useContext, useEffect, useState } from "react";

const ExpensesContext = createContext()

export function ExpensesContextProvider({children}){
    const [expenses,setExpenses] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
        async function fetchExpenses(){
            try {
                const data = await getExpenses(user.id)
                setExpenses(data)
                setError('')
            } catch (error) {
                setError(error.message)
            } finally{
                setIsLoading(false)
            }
        }
        fetchExpenses()
    },[])


    return (
        <ExpensesContext.Provider value={{expenses,setExpenses,isLoading,setIsLoading,error,setError}}>
            {children}
        </ExpensesContext.Provider>
    )
}


export function useExpenses(){
    return useContext(ExpensesContext)
}