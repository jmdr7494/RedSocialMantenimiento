package com.redsocial.controller;

import java.util.ArrayList;
import java.util.Hashtable;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.redsocial.modelo.Like;
import com.redsocial.modelo.Publicacion;
import com.redsocial.persistencia.DAOLike;
import com.redsocial.persistencia.DAOPublicacion;

@Controller
public class WallController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	/**
	 * Simply selects the home view to render by returning its name.
	 * @throws Exception 
	 */
	@RequestMapping(value="wall", method = RequestMethod.GET)
	public ModelAndView wall(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		ModelAndView modelAndView = new ModelAndView("wall");
		
		ArrayList<Publicacion> publicaciones = DAOPublicacion.selectAll();
		int [] likes = new int[publicaciones.size()];
		for (int i=0;i<publicaciones.size();i++) {
			ArrayList<Like> totalPublicaciones = new ArrayList<Like>();
			totalPublicaciones = DAOLike.select(publicaciones.get(i).getIdPublicacion());
			likes[i] = totalPublicaciones.size();
		}
		modelAndView.addObject("publicaciones",publicaciones);
		modelAndView.addObject("like",likes);
		modelAndView.addObject("body","publicaciones");
		
		return modelAndView;

	}
	
}
