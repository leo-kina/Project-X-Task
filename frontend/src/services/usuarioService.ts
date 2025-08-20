import axios from 'axios';

export interface Usuario {
  id?: number;
  name: string;
  email: string;
}

const api = axios.create({
  baseURL: 'http://localhost:8080', 
});


export const listarUsuarios = async (): Promise<Usuario[]> => {
  const response = await api.get('/usuarios/listar');
  return response.data; 
};


export const criarUsuario = async (usuario: { name: string; email: string }): Promise<Usuario> => {
  const response = await api.post('/usuarios/criar', usuario); 
  return response.data;
};
