import { Button } from '@/components/ui/button'
import React from 'react'

interface HomeProps{
    homeBtn: () => void
}

export const Task = ({homeBtn}:HomeProps) => {
  return (
    <div>
        <h2>Tasks</h2>
        <Button onClick={homeBtn}>Clique aki</Button>
    </div>
  )
}
