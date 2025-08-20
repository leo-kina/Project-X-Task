package com.leokina.ProjectXTask.Projetos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjetoService {
    @Autowired
    private ProjetosRepository projetosRepository;

    @Autowired
    private ProjetosMapper projetosMapper;
    public void deletarProjeto(Long id){
        projetosRepository.deleteById(id);
    }

    public List<ProjetosDTO> listarProjetos() {
        List<ProjetosModel> projetos = projetosRepository.findAll();
        return projetos.stream().map(projetosMapper::map).collect(Collectors.toList());
    }

    public ProjetosDTO criarProjeto (@RequestBody ProjetosDTO projetosDTO){
        ProjetosModel projetos = projetosMapper.map(projetosDTO);
        projetos = projetosRepository.save(projetos);
        return projetosMapper.map(projetos);
    }
}
