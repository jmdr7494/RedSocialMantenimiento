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
		//logger.info("Welcome home! The client locale is {}.", locale);
		
		return "home";
	}
	@SuppressWarnings("unused")
	@RequestMapping(value="login", method = RequestMethod.POST)
	public ModelAndView login(HttpServletRequest request, HttpServletResponse response)throws Exception{
		String email = request.getParameter("username");
		String password = request.getParameter("password");
		
		Usuario user = DAOUsuario.select(email, password);
		ModelAndView modelAndView = new ModelAndView("wall");
		modelAndView.addObject("nombre", "prueba");
		
		return modelAndView;
	}
	
}
