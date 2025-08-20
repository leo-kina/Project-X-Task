import { Button } from '@/components/ui/button'
import React from 'react'

interface SobreProps{
    tasksBtn: () => void
    funcionariosBtn: () => void
}
export const Home = ({tasksBtn, funcionariosBtn}:SobreProps) => {
  return (
    <div className='flex items-center justify-center h-screen flex-col'>
        <h2 className='font-medium'>Bem vindo</h2>
        <div className='flex gap-10'>
         <Button onClick={tasksBtn}>tasks</Button>
         <Button onClick={funcionariosBtn}>funcionarios</Button>
         </div>
    </div>
   
  )
}
