package com.leokina.ProjectXTask.Usuarios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuariosService {

    @Autowired
    private UsuariosMapper usuariosMapper;

    @Autowired
    private UsuariosRepository usuariosRepository;


    public List<UsuariosDTO> listarUsuarios(){
        List<UsuariosModel> usuarios = usuariosRepository.findAll();
        return usuarios.stream().map(usuariosMapper::map).collect(Collectors.toList());
    }
    public UsuariosDTO adicionarUsuario(@RequestBody UsuariosDTO usuariosDTO){
    UsuariosModel usuario = usuariosMapper.map(usuariosDTO);
    usuario = usuariosRepository.save(usuario);
    return usuariosMapper.map(usuario);



    }
}
