package com.leokina.ProjectXTask.Projetos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.leokina.ProjectXTask.Usuarios.UsuariosDTO;
import com.leokina.ProjectXTask.Usuarios.UsuariosModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor


public class ProjetosDTO {
    private Long id;


    private String name;


    private List<UsuariosDTO> usuario;
}
