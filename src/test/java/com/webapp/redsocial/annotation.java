package com.webapp.redsocial;


import static org.junit.Assert.assertFalse;


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
			user=usuario.select(user.getemail(), user.getPwd());
		} catch (Exception e) {
			assertFalse(true);
		}
		
	}
	
}