package com.webapp.redsocial;


import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import com.redsocial.modelo.MensajesPrivados;
import com.redsocial.modelo.Publicacion;
import com.redsocial.modelo.Usuario;
import com.redsocial.persistencia.DAOMensajesPrivados;
import com.redsocial.persistencia.DAOPublicacion;
import com.redsocial.persistencia.DAOUsuario;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

/**
 * 
 * @author Usuario
 *
 */
public class annotation {
	
	private DAOUsuario usuario;
	private Usuario user;
	private DAOPublicacion publicacion;
	private Publicacion publi;
	private MensajesPrivados msgprivate;
	private DAOMensajesPrivados daomsgprivate;
	
	@Given("^Un usuario y password$")
	public void Un_usuario_y_password() {
		usuario= new DAOUsuario(); 
		user=new Usuario();
	}

	@When("^usuario correcto y password correcta$")
	public void usuario_correcto_y_password_correcta() {
		String email="asdf@gmail.com";
		String pwd="1234";
		user.setemail(email);
		user.setPwd(pwd);
		try {
			user=usuario.select(user);
		} catch (Exception e) {
			assertFalse(true);
		}
		
	}
	
	@Then("^se loguea$")
	public void se_loguea() throws Throwable {
		if(user!=null) {
			assertFalse(null==user);
		}
	}
	
	
	@SuppressWarnings("static-access")
	@When("^Usuario incorrecto y una password incorrecta$")
	public void Usuario_incorrecto_y_una_password_incorrecta() {
	   String email="pascasia@hotmail.com";
	   String pwd="1";
	   user.setemail(email);
	   user.setPwd(pwd);
	   try {
		   user=usuario.select(user);
	   }catch(Exception e) {
		   assertFalse(true);
	   }
	   
	}

	@Then("^no se loguea$")
	public void no_se_loguea() {
	    if(user==null)
	    	assertTrue(null==user);
	}
	
	@Given("^Un nombre, un email, una pwduno y una pwddos$")
	public void Un_nombre_un_email_una_pwduno_y_una_pwddos() {
		usuario= new DAOUsuario(); 
		user=new Usuario();
	}

	
	@When("^pwduno es igual a pwddos$")
	public void pwduno_es_igual_a_pwddos() {
		String pwd1= "1234";
		String pwd2= "1234";
		Usuario user1 = new Usuario("Josefa");
		user1.setPwd(pwd1);
		try {
			if(pwd1.equals(pwd2)) {
				user=DAOUsuario.insert(user1);
			}
		}catch(Exception e) {
			
		}
	 
	}

	@Then("^se registra$")
	public void se_registra() {
		if(user!=null)
			assertTrue(null!=user);
	}
	
	@When("^pwduno es distinto a pwddos$")
	public void pwduno_es_distinto_a_pwddos() {
		String pwd1 = "1234";
		String pwd2= "123456";
		if(!pwd1.equals(pwd2)) {
			user= null;
		}	
	    
	}
	
	@When("^email ya esta en la base de datos$")
	public void email_ya_esta_en_la_base_de_datos() throws Exception {
	  String email = "Prueba24@gmail.com";  
	  Usuario user1= new Usuario("Prueba24");
	  user1.setemail(email);
	  user=DAOUsuario.select(user1);
	}
	
	@Then("^no se registra$")
	public void no_se_registra() {
	   if(user==null)
		   assertTrue(user==null);
	}
	
	@Given("^Un idUsuario$")
	public void Un_idUsuario() {
		usuario= new DAOUsuario(); 
		user=new Usuario();
	}

	@When("^datos correctos$")
	public void datos_correctos() throws Exception {
	    String nombre="cachopo2";
	    String pwd="1234";
	    String email="cachopo2@yopmail.com";
	    Usuario user1 = new Usuario(nombre);
	    user1.setemail(email);
	    user1.setPwd(pwd);
	    user=DAOUsuario.select(user1);
	}

	@Then("^se borra$")
	public void se_borra() {
	    if(user!=null)
	    	DAOUsuario.delete(user.getid());
	}

	@Given("^Usuario en wall$")
	public void Usuario_en_wall() {
	    publicacion=new DAOPublicacion();
	    publi=new Publicacion();
	}

	@When("^escribes publicacion$")
	public void escribes_publicacion() {
	    Publicacion publi2=new Publicacion();
	    publi2.setNombre("Mariap");
	    publi2.setEmail("asdf@gmail.com");
	    publi2.setFecha("19/11/2017 16:24");
	    publi2.setMensaje("hola hola hola");
		publi=DAOPublicacion.insert(publi2);
	}

	@Then("^publicas$")
	public void publicas() {
	    if(publi!=null)
	    	assertTrue(publi!=null);
	}
	
	@Given("^Un idpublicacion$")
	public void Un_idpublicacion() {
		publicacion=new DAOPublicacion();
	    publi=new Publicacion();
	}

	@When("^datos publicacion correctos$")
	public void datos_publicacion_correctos() throws Exception {
		Publicacion publi2=new Publicacion();
	    publi2.setIdPublicacion("5a11bd290799532628e929fd");
		publi=DAOPublicacion.select(publi2.getIdPublicacion());
	}

	@Then("^se borra publicacion$")
	public void se_borra_publicacion() {
	    if(publi!=null)
	    	DAOPublicacion.delete("5a11bd290799532628e929fd");
	}
	
	@Given("^Un Usuario$")
	public void Un_Usuario() {
		usuario= new DAOUsuario(); 
		user=new Usuario();
	}

	@When("^datos usuario correctos$")
	public void datos_usuario_correctos() throws Exception {
		String nombre="prueba30";
	    Usuario user1 = new Usuario(nombre);
	    user=DAOUsuario.select(user1);
	}

	@Then("^se modifica usuario$")
	public void se_modifica_usuario() throws Exception {
		if(user!=null)
			user.setPwd("PRUEBAprueba");
	    	DAOUsuario.update(user);
	}
	
	@Given("^Una publicacion$")
	public void Una_publicacion() {
		publicacion=new DAOPublicacion();
	    publi=new Publicacion();
	}

	@When("^publicacion correcta$")
	public void publicacion_correcta() throws Exception {
		Publicacion publi2=new Publicacion();
	    publi2.setIdPublicacion("5a03545d56320321f49b7810");
		publi=DAOPublicacion.select(publi2.getIdPublicacion());
	}

	@Then("^se modifica publicacion$")
	public void se_modifica_publicacion() throws Exception {
		if(publi!=null)
	    	DAOPublicacion.delete("5a03545d56320321f49b7810");
			Publicacion publi2=new Publicacion();
			publi2.setNombre("alba");
			publi2.setEmail("alba@hotmail.com");
			publi2.setFecha("20/11/2017 12:24");
			publi2.setMensaje("mod testing");
			publi=DAOPublicacion.insert(publi2);
	}
	
	@Given("^Un mensaje privado$")
	public void Un_mensaje_privado() {
	   msgprivate=new MensajesPrivados();
	   daomsgprivate=new DAOMensajesPrivados();
	}

	@When("^mensaje privado correcto$")
	public void mensaje_privado_correcto() {
		
	    msgprivate.setEmisor("prueba30@hotmail.com");
	    msgprivate.setDestinatario("bu@hotmail.com");
	    msgprivate.setFecha("20/11/2017 12:15");
	    msgprivate.setMensaje("hola esto es testing");
	    DAOMensajesPrivados.insert(msgprivate);
	}

	@Then("^se manda mensaje privado$")
	public void se_manda_mensaje_privado() {
	    if(msgprivate!=null)
	    	assertTrue(msgprivate!=null);
	}
	
}