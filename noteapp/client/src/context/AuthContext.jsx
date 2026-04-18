import { createContext, useEffect, useState } from "react";

const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [logedInUser,setLogedInUser] = useState(null)
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
    },[])

    return (
        <AuthContext.Provider value={{logedInUser,setLogedInUser}}>
            {children}
        </AuthContext.Provider>
    )
}