import { Button } from '@/components/ui/button'
import React from 'react'

interface SobreProps{
    tasksBtn: () => void
    funcionariosBtn: () => void
}
export const Home = ({tasksBtn, funcionariosBtn}:SobreProps) => {
  return (
    <div>
        <h2>Bem vindo</h2>
         <Button onClick={tasksBtn}>tasks</Button>
         <Button onClick={funcionariosBtn}>funcionarios</Button>
    </div>
   
  )
}
