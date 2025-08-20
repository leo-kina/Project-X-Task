package com.leokina.ProjectXTask.Usuarios;

import org.springframework.stereotype.Component;

@Component
public class UsuariosMapper {
    public UsuariosModel map(UsuariosDTO usuariosDTO){
        UsuariosModel usuariosModel = new UsuariosModel();
        usuariosModel.setId(usuariosDTO.getId());
        usuariosModel.setName(usuariosDTO.getName());
        usuariosModel.setEmail(usuariosDTO.getEmail());
        usuariosModel.setProjetos(usuariosDTO.getProjetos());
        return usuariosModel;
    }
    public UsuariosDTO map(UsuariosModel usuariosModel){
        UsuariosDTO usuariosDTO = new UsuariosDTO();
        usuariosDTO.setId(usuariosModel.getId());
        usuariosDTO.setName(usuariosModel.getName());
        usuariosDTO.setEmail(usuariosModel.getEmail());
        usuariosDTO.setProjetos(usuariosModel.getProjetos());
        return usuariosDTO;
    }
}
