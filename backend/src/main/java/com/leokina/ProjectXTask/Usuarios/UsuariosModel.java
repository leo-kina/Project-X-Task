package com.leokina.ProjectXTask.Usuarios;

import jakarta.persistence.*;
@Entity
@Table(name = "tb_usuario")
public class UsuariosModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "name")
    private String name;
}
