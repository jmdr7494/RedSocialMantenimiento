package com.redsocial.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.redsocial.auxiliares.Utilidades;
import com.redsocial.modelo.Like;
import com.redsocial.modelo.Publicacion;
import com.redsocial.modelo.Respuesta;
import com.redsocial.modelo.Usuario;
import com.redsocial.persistencia.DAOLike;
import com.redsocial.persistencia.DAOPublicacion;
import com.redsocial.persistencia.DAORespuesta;
import com.redsocial.persistencia.DAOUsuario;

@Controller
public class UsuarioController {
	
	@RequestMapping(value = "editarusuario", method = RequestMethod.POST)
	public String editarusuario(HttpServletRequest request,Model model) throws Exception {
		
		if (request.getSession().getAttribute("user")!=null) {
			String nombre = request.getParameter("edit-nombre");
			String email = request.getParameter("edit-email");
			String newpwd = request.getParameter("edit-new-pwd");
			
			Usuario usuario = new Usuario(((Usuario)request.getSession().getAttribute("user")).getid(),nombre, email, Utilidades.Encriptar(newpwd));
			
			DAOUsuario.update(usuario);
		}
		return "redirect:wall";
	}
	
	@RequestMapping(value = "borrarusuario", method = RequestMethod.POST)
	public void borrarusuario(HttpServletRequest request,Model model) throws Exception {
		
		if (request.getSession().getAttribute("user")!=null) {
			
			Usuario usuario = (Usuario) request.getSession().getAttribute("user");
			//Borrar todas las publicaciones del usuario con los respectivos likes y .
			ArrayList<Publicacion> publicaciones = DAOPublicacion.selectAll();
			for(int i=0;i<publicaciones.size();i++) {
				if (publicaciones.get(i).getEmail()==usuario.getemail()) {
					Like like = DAOLike.checkLike(publicaciones.get(i).getIdPublicacion(), usuario.getemail());
					if (like!=null) {
						DAOLike.delete(like);
					}
					ArrayList<Respuesta> respuestas = DAORespuesta.select(publicaciones.get(i).getIdPublicacion());
					for (int j=0; j<respuestas.size();i++) {
						if (respuestas.get(i).getEmail()==usuario.getemail()) {
							DAORespuesta.delete(publicaciones.get(i).getIdPublicacion());
						}
					}
					DAOPublicacion.delete(publicaciones.get(i).getIdPublicacion());
				}else {
					Like like = DAOLike.checkLike(publicaciones.get(i).getIdPublicacion(), usuario.getemail());
					if (like!=null) {
						DAOLike.delete(like);
					}
					ArrayList<Respuesta> respuestas = DAORespuesta.select(publicaciones.get(i).getIdPublicacion());
					for (int j=0; j<respuestas.size();i++) {
						if (respuestas.get(i).getEmail()==usuario.getemail()) {
							DAORespuesta.delete(publicaciones.get(i).getIdPublicacion());
						}
					}
				}
			}
			DAOUsuario.delete(usuario.getid());
		}
	}
}
