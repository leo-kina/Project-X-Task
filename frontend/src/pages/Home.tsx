import { Button } from '@/components/ui/button'
import React from 'react'

interface SobreProps{
    tasksBtn: () => void
}
export const Home = ({tasksBtn}:SobreProps) => {
  return (
    <div>
        <h2>Bem vindo</h2>
         <Button onClick={tasksBtn}>clique</Button>
    </div>
   
  )
}
