import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BarChart2, MoonIcon, SunIcon, X } from 'lucide-react'
import { toast } from "sonner"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { projetoFormSchema } from '@/schemas/projetoSchema'
import { z } from 'zod'
import { dateFormatter } from '@/utils/formatter'
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
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

type ProjetoFormData = z.infer<typeof projetoFormSchema>

interface HomeProps {
  homeBtn: () => void
}


const membersList = ["Carlos", "Lucas", "Manuela"]

export const Task = ({ homeBtn }: HomeProps) => {

  const [projects, setProjects] = useState<{ name: string; createdAt: Date; members: string[] }[]>([])

  const { register, handleSubmit, reset } = useForm<ProjetoFormData>({
    resolver: zodResolver(projetoFormSchema)
  })

  const onSubmit = (data: ProjetoFormData) => {
    const newProject = { name: data.name, createdAt: new Date(), members: [] }
    setProjects((prev) => [...prev, newProject])
    reset() 

    toast("Projeto Criado", {
      description: dateFormatter.format(newProject.createdAt),
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }

  const removeProject = (index: number) => {
    setProjects((prev) => prev.filter((_, i) => i !== index))
  }

  const toggleMember = (projectIdx: number, member: string) => {
    setProjects((prev) =>
      prev.map((p, i) => {
        if (i === projectIdx) {
          const isSelected = p.members.includes(member)
          const updatedMembers = isSelected
            ? p.members.filter((m) => m !== member)
            : [...p.members, member]
          return { ...p, members: updatedMembers }
        }
        return p
      })
    )
  }

  return (
    <div className="p-6">
     <div className='flex justify-between mb-5'>
        <div className='flex items-center gap-3'>
          <BarChart2 color='blue' />
          <h2 className='font-bold text-accent-foreground text-2xl'>
            Project <span className='text-blue-700'>X</span> Tasks
          </h2>
        </div>
        <div className='flex gap-2'>
          <MoonIcon />
          <SunIcon />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex p-4 items-center gap-2 justify-center'
      >
        <Input
          className='w-full max-w-xl'
          placeholder='Digite seu Projeto'
          {...register('name')}
        />
        <Button type='submit' variant="outline">Criar</Button>
      </form>

  
      <ul className='flex flex-col gap-2 px-10 mt-4'>
        {projects.map((project, idx) => (
          <li
            key={idx}
            className='flex items-center justify-between p-2 border rounded-xl'
          >
            <div className='flex flex-col'>
              <span className='font-semibold'>{project.name}</span>
              <span className='text-sm text-gray-500'>
                {dateFormatter.format(project.createdAt)}
              </span>
              {project.members.length > 0 && (
                <span className='text-sm text-blue-500'>
                  Responsáveis: {project.members.join(", ")}
                </span>
              )}
            </div>

            <div className='flex items-center gap-2'>
      
              <X 
                color='red'
                className='cursor-pointer hover:opacity-50'
                onClick={() => removeProject(idx)}
              />

          
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">Editar</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Editar Projeto</DialogTitle>
                    <DialogDescription>
                      Altere o nome do projeto e selecione os responsáveis.
                    </DialogDescription>
                  </DialogHeader>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      const form = e.target as typeof e.target & { name: { value: string } }
                      const updatedName = form.name.value

                      setProjects((prev) =>
                        prev.map((p, i) => i === idx ? { ...p, name: updatedName } : p)
                      )
                    }}
                    className="grid gap-4"
                  >
                    <div className="grid gap-3">
                      <Label htmlFor={`name-${idx}`}>Nome</Label>
                      <Input
                        id={`name-${idx}`}
                        name="name"
                        defaultValue={project.name}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label>Responsáveis</Label>
                      {membersList.map((member) => (
                        <div key={member} className="flex items-center gap-2">
                          <Checkbox
                            checked={project.members.includes(member)}
                            onCheckedChange={() => toggleMember(idx, member)}
                          />
                          <Label>{member}</Label>
                        </div>
                      ))}
                    </div>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                      </DialogClose>
                      <Button type="submit">Salvar Nome</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </li>
        ))}
      </ul>

      <Button onClick={homeBtn} className="mt-6">Ir para Home</Button>
    </div>
  )
}
