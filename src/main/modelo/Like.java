package main.modelo;

import main.persistencia.DAOLike;

public class Like {
	private String emailUsuario;
	private int idPublicacion;
	
	public Like(String email, int id) {
		super();
		this.emailUsuario = email;
		this.idPublicacion = id;
	}

	public String getEmailUsuario() {
		return emailUsuario;
	}

	public void setEmailUsuario(String emailUsuario) {
		this.emailUsuario = emailUsuario;
	}

	public int getIdPublicacion() {
		return idPublicacion;
	}

	public void setIdPublicacion(int idPublicacion) {
		this.idPublicacion = idPublicacion;
	}

	public int getId() {
		return idPublicacion;
	}

	public void setId(int id) {
		this.idPublicacion = id;
	}

	@Override
	public String toString() {
		return "Like [emailUsuario=" + emailUsuario + ", idPublicacion=" + idPublicacion + "]";
	}
}
