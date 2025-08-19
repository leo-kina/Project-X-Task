
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { Toaster } from "@/components/ui/sonner"
function App() {


  return (

  <BrowserRouter>
  <AppRoutes/>
   <Toaster />
  </BrowserRouter>

  )
}

export default App
