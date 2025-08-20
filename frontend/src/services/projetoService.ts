import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});


export const listarProjetos = async () => {
  const res = await api.get("/projetos/listar");
  return res.data; 
};

export const criarProjeto = async (data: { name: string; usuario?: string[] }) => {
  const res = await api.post("/projetos/criar", data);
  return res.data;
};

export const deletarProjeto = async (id: number) => {
  await api.delete(`/projetos/deletar/${id}`);
};
