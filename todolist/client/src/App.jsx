import React from 'react'
import NavBar from './components/NavBar'
import ListTasks from './pages/ListTasks'
import AddTask from './pages/AddTask'

import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ListTasks/>}/>
        <Route path='/add' element = {<AddTask/>}/>
      </Routes>
    </div>
  )
}

export default App
