import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { projetoFormSchema } from "@/schemas/cadastroUsuarioSchema.ts"
import { criarUsuario } from "@/services/usuarioService"
import { toast } from "sonner"

interface FuncionariosProps {
  homeBtn: () => void
}

type ProjetoFormData = z.infer<typeof projetoFormSchema>

export const CadastroFuncionarios = ({ homeBtn }: FuncionariosProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProjetoFormData>({
    resolver: zodResolver(projetoFormSchema),
  })

  const onSubmit = async (data: ProjetoFormData) => {
    try {
      const usuarioCriado = await criarUsuario(data) 
      toast.success(`Usuário ${usuarioCriado.name} cadastrado!`)
      reset() 
    } catch (error) {
      console.error(error)
      toast.error("Erro ao cadastrar usuário")
    }
  }

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Cadastre Usuários</CardTitle>
          <CardDescription>
            Coloque seu email e nome
          </CardDescription>
          <CardAction>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="name">Nome</Label>
                </div>
                <Input id="name" type="text" {...register("name")} />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
            </div>
            <CardFooter className="flex-col gap-2 mt-4">
              <Button type="submit" className="w-full">
                Cadastrar
              </Button>
              <Button variant="outline" className="w-full" onClick={homeBtn}>
                Home
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
