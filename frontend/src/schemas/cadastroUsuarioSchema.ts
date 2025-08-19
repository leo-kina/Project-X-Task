
import { z } from "zod"

export const projetoFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "O nome precisa ter pelo menos 3 caracteres")
    .max(80, "O nome pode ter no máximo 80 caracteres"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("E-mail inválido"),
})


