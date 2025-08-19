import { Button } from '@/components/ui/button'
import React from 'react'
interface HomeProps{
    homeBtn: () => void
}
export const Error = ({homeBtn}:HomeProps) => {
  return (
    <div>
        <h2>Error 404</h2>
        <p>Pagina nao encontrada</p>
        <Button onClick={homeBtn}>Voltar para home</Button>
    </div>
  )
}
