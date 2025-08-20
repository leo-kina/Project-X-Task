package com.leokina.ProjectXTask.Usuarios;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuariosController {
    private UsuariosService usuariosService;

    public UsuariosController(UsuariosService usuariosService) {
        this.usuariosService = usuariosService;
    }

    @GetMapping("/listar")
    public List<UsuariosDTO> listarUsuario(){
        return usuariosService.listarUsuarios();
    }

    @PostMapping("/criar")
    public UsuariosDTO criarUsuario(@RequestBody UsuariosDTO usuariosDTO){
        return usuariosService.adicionarUsuario(usuariosDTO);
    }
}
