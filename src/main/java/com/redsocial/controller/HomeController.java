package com.redsocial.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.redsocial.auxiliares.Utilidades;
import com.redsocial.modelo.Usuario;
import com.redsocial.persistencia.DAOUsuario;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	@SuppressWarnings("unused")
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		
		return "home";
	}
	
	@RequestMapping(value="login", method = RequestMethod.POST)
	public ModelAndView login(HttpServletRequest request, HttpServletResponse response)throws Exception{
		String email = request.getParameter("username");
		String password = request.getParameter("password");
		ModelAndView modelAndView;
		Usuario user = DAOUsuario.select(email, password);
		if (user!=null) {
			modelAndView = new ModelAndView("redirect:wall");
			modelAndView.addObject("user", user);
		}else {
			modelAndView = new ModelAndView("home");
			modelAndView.addObject("message", "No se puede loguear");
		}
		
		return modelAndView;
	}
	
	@RequestMapping(value="registrar", method = RequestMethod.POST)
	public ModelAndView registrar(HttpServletRequest request, HttpServletResponse response)throws Exception{
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String username = request.getParameter("username");
		
		Usuario usuario = new Usuario(username, email, Utilidades.Encriptar(password));
		ModelAndView modelAndView = null;
		Usuario usuarioInsertado = DAOUsuario.insert(usuario);
		
		if (usuarioInsertado!=null) {
			modelAndView = new ModelAndView("wall");
			modelAndView.addObject("user", usuarioInsertado);
		}else {
			modelAndView = new ModelAndView("home");
			modelAndView.addObject("message", "No se ha podido registrar");
		}
		
		return modelAndView;
	}
	
	
}
