import { createContext, useContext, useEffect, useState } from "react"
import { fetchNotes } from "@/services/api"

const NotesContext = createContext()

export function NotesContextProvider({ children }) {
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        async function getNotes() {
            try {
                setIsLoading(true)
                const data = await fetchNotes(user.id)
                setNotes(data)
                setError('')
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        getNotes()
    }, [])

    return (
        <NotesContext.Provider value={{ notes, setNotes, isLoading, error }}>
            {children}
        </NotesContext.Provider>
    )
}

export function useNotes() {
    return useContext(NotesContext)
}