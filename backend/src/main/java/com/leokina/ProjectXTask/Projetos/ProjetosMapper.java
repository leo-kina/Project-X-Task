package com.leokina.ProjectXTask.Projetos;

import org.springframework.stereotype.Component;

@Component
public class ProjetosMapper {
    public ProjetosModel map(ProjetosDTO projetosDTO){
        ProjetosModel projetosModel = new ProjetosModel();
        projetosModel.setName(projetosDTO.getName());
        projetosModel.setId(projetosDTO.getId());
        projetosModel.setUsuario(projetosDTO.getUsuario());

        return projetosModel;
    }
    public ProjetosDTO map(ProjetosModel projetosModel){
        ProjetosDTO projetosDTO = new ProjetosDTO();
        projetosDTO.setId(projetosModel.getId());
        projetosDTO.setName(projetosModel.getName());
        projetosDTO.setUsuario(projetosModel.getUsuario());
        return projetosDTO;
    }
}
