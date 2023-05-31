package com.octavio.laboratoriotp5.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "instrumento")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Instrumento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String instrumento;
    private String marca;
    private String modelo;
    private String imagen;
    private String precio;
    private String costoEnvio;
    private String cantidadVendida;

    @Column(length = 1000)
    private String descripcion;

}
