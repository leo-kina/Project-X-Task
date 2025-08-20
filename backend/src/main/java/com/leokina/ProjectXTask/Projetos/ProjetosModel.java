package com.leokina.ProjectXTask.Projetos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.leokina.ProjectXTask.Usuarios.UsuariosModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_projetos")
public class ProjetosModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "projetos")
    @JsonIgnore
    private List<UsuariosModel> ninjas;
}
