import Login from './pages/Login'
import React from 'react'
import SignUp from './pages/SignUp'
import {Routes,Route} from "react-router-dom"
import { useAuth } from './context/AuthContext'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
