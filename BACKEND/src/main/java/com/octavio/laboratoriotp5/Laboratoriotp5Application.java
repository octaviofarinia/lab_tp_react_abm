package com.octavio.laboratoriotp5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class Laboratoriotp5Application {

	public static void main(String[] args) {
		SpringApplication.run(Laboratoriotp5Application.class, args);
	}

}
