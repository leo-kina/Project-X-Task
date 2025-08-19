import { z } from 'zod'

export const projetoFormSchema = z.object({
    name:z.string()
})