package com.leokina.ProjectXTask.Usuarios;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuariosController {
    @GetMapping("/boasvindas")
    public String boasVindas(){
        return "boas vindas meu parceiro";
    }
}
