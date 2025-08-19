
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Task } from './pages/Task'
import { Home } from './pages/Home'
import { Error } from './pages/Error'

export const AppRoutes = () => {
    const navigate = useNavigate()

    const irParaLista = () =>{
        navigate('/task')
    }
    const irParaHome = () =>{
        navigate('/')
    }
  return (
    <Routes>
        <Route path='/' element={<Home tasksBtn ={irParaLista}/>}/>
        <Route path='/task' element={<Task homeBtn = {irParaHome}/>}/>
        <Route path='*' element={<Error homeBtn = {irParaHome}/>}/>
    </Routes>
  )
}
