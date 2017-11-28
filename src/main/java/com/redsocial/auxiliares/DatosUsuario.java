package com.redsocial.auxiliares;

/*
 * Clase para tener el usuario y las pwd de la cuenta de correo de la red social para mandar
 * a los usuarios las pwd cuando las olviden
 */
public class DatosUsuario {

	private String userName;
	private String password;
	
	
	public DatosUsuario() {
	
		this.userName = "atencion.cliente.dissw@gmail.com";
		this.password = "atencioncliente1234";
		
	}
	
	//Get atributos
	public String getUserName() {
		return this.userName;
	}
	
	public String getPassword() {
		return this.password;
	}
	//Set atributos
	public void setUserName(String userName) {
		this.userName=userName;
	}

	public void setPassword(String password) {
		this.password=password;
	}
	
}