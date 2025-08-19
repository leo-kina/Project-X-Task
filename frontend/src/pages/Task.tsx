import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BarChart2, MoonIcon, SunIcon } from 'lucide-react'
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
          <Button type="submit" variant="outline">Enviar</Button>
        </div>
        <div>
            
        </div>
        <Button onClick={homeBtn}>Ir para Home</Button>

        
    </div>
  )
}
