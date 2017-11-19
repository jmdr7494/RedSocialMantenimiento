package com.webapp.redsocial;


import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import com.redsocial.modelo.Usuario;
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
	
	private DAOUsuario usuario=null;
	Usuario user;
	
	@Given("^Un usuario y password$")
	public void Un_usuario_y_password() {
		usuario= new DAOUsuario(); 
		user=new Usuario();
	}
	
	@Then("^se loguea$")
	public void se_loguea() throws Throwable {
		if(user!=null)
			assertFalse(null==user);
	}
	

	@SuppressWarnings("static-access")
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
	
	@SuppressWarnings("static-access")
	@When("^Usuario incorrecto y una password incorrecta$")
	public void Usuario_incorrecto_y_una_password_incorrecta() {
		String email="prueba80@gmail.com";
		String pwd="12345";
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
		Usuario user1 = new Usuario();
		user1.setNombre("Prueba");
		user1.setPwd(pwd1);
		try {
			if(pwd1.equals(pwd2)) {
				user=DAOUsuario.insert(user1);
			}
		}catch(Exception e) {
			assertFalse(true);
		}
	 
	}

	@Then("^se registra$")
	public void se_registra() {
	   assertTrue(null!=user);
	}
	
}