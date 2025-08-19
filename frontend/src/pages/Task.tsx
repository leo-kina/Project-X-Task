import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BarChart2, MoonIcon, SunIcon, X } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Checkbox } from "@/components/ui/checkbox"

import React from 'react'
import { Label } from '@/components/ui/label'

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
            <ul className='flex items-center border-1 rounded-xl p-2 '>
                <li className='flex items-center justify-between w-full font-semibold text-accent-foreground'>Projetinho super bacana com  minha equipe<div className='flex items-center'><X color='red'/>     <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Editar</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
             Altere seus projetos.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Projetinho super bacana com  minha equipe" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              
            <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <div className='flex flex-col gap-3'>
  <div className="flex items-center gap-3">
        <Checkbox/>
        <Label className='text-blue-500'>Carlos</Label>
      </div>
        <div className="flex items-center gap-3">
        <Checkbox/>
        <Label className='text-blue-500'>Lucas</Label>
      </div>
        <div className="flex items-center gap-3">
        <Checkbox/>
        <Label className='text-blue-500'>Manuela</Label>
      </div>
</div>
  </SelectContent>
</Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog> </div></li>
    

            </ul>
            
        </div>
        <Button onClick={homeBtn}>Ir para Home</Button>

        
    </div>
  )
}
