package com.leokina.ProjectXTask.Projetos;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projetos")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjetosController {
    private ProjetoService projetoService;

    public ProjetosController(ProjetoService projetoService) {
        this.projetoService = projetoService;
    }

   @GetMapping("/listar")
    public List<ProjetosDTO> listarProjetos(){
        return projetoService.listarProjetos();
    }
    @PostMapping("/criar")
    public ProjetosDTO criarProjetos(@RequestBody ProjetosDTO projetosDTO){
        return projetoService.criarProjeto(projetosDTO);
    }
    @DeleteMapping("/deletar/{id}")
    public void deletarUser(@PathVariable Long id){
        projetoService.deletarProjeto(id);

    }
}
