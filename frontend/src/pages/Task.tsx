import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BarChart2, MoonIcon, SunIcon, X } from 'lucide-react'

import { toast } from "sonner"

import React from 'react'

interface HomeProps{
    homeBtn: () => void
}

export const Task = ({homeBtn}:HomeProps) => {
  return (
    <div>
        <div className='flex justify-between mb-5'>
        <div className='flex items-center gap-3'>
                <BarChart2 color='blue' />
        <h2 className='font-bold text-accent-foreground text-2xl'>Project <span className='text-blue-700'>X</span> Tasks</h2>
    
        </div>
        <div className='flex gap-'>
        <MoonIcon/>
        <SunIcon/>
        </div>
        </div>
        <div className='flex p-10 items-center gap-2 justify-center'>
        <Input className='w-full max-w-xl' placeholder='Digite seu Projeto'/>
           <Button
      variant="outline"
      onClick={() =>
        toast("Projeto Criado", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
        </div>
        <div>
            <ul>
                <li>Projeto 2 <X color='red'/></li>
             
            </ul>
        </div>
        <Button onClick={homeBtn}>Ir para Home</Button>

        
    </div>
  )
}
