package com.redsocial.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.redsocial.auxiliares.Utilidades;
import com.redsocial.modelo.Like;
import com.redsocial.modelo.MensajesPrivados;
import com.redsocial.modelo.Publicacion;
import com.redsocial.modelo.Respuesta;
import com.redsocial.modelo.Usuario;
import com.redsocial.persistencia.DAOLike;
import com.redsocial.persistencia.DAOMensajesPrivados;
import com.redsocial.persistencia.DAOPublicacion;
import com.redsocial.persistencia.DAORespuesta;
import com.redsocial.persistencia.DAOUsuario;

@Controller
public class UsuarioController {
	
	private static final Logger logger = LoggerFactory.getLogger(UsuarioController.class);
	
	@RequestMapping(value = "editarusuario", method = RequestMethod.POST)
	public String editarusuario(HttpServletRequest request,Model model) throws Exception {
		
		if (request.getSession().getAttribute("user")!=null) {
			String nombre = request.getParameter("edit-nombre");
			String email = request.getParameter("edit-email");
			String newpwd = request.getParameter("edit-new-pwd");
			
			Usuario usuario = new Usuario(((Usuario)request.getSession().getAttribute("user")).getid(),nombre, email, Utilidades.Encriptar(newpwd));
			
			DAOUsuario.update(usuario);
			return "redirect:wall";
		}else {
			return "home";
		}
		
	}
	
	@RequestMapping(value = "borrarusuario", method = RequestMethod.POST)
	public void borrarusuario(HttpServletRequest request,Model model) throws Exception {
		
		if (request.getSession().getAttribute("user")!=null) {
			
			Usuario usuario = (Usuario) request.getSession().getAttribute("user");
			//Borrar todas las publicaciones del usuario con los respectivos likes y .
			ArrayList<Publicacion> publicaciones = DAOPublicacion.selectAll();
			for(int i=0;i<publicaciones.size();i++) {
				if (publicaciones.get(i).getEmail().equals(usuario.getemail())) {
					Like like = DAOLike.checkLike(publicaciones.get(i).getIdPublicacion(), usuario.getemail());
					if (like!=null) {
						DAOLike.delete(like);
					}
					ArrayList<Respuesta> respuestas = DAORespuesta.select(publicaciones.get(i).getIdPublicacion());
					for (int j=0; j<respuestas.size();j++) {
						if (respuestas.get(j).getEmail()==usuario.getemail()) {
							DAORespuesta.delete(respuestas.get(j).getId());
						}
					}
					DAOPublicacion.delete(publicaciones.get(i).getIdPublicacion());
				}else {
					Like like = DAOLike.checkLike(publicaciones.get(i).getIdPublicacion(), usuario.getemail());
					if (like!=null) {
						DAOLike.delete(like);
					}
					ArrayList<Respuesta> respuestas = DAORespuesta.select(publicaciones.get(i).getIdPublicacion());
					for (int j=0; j<respuestas.size();j++) {
						if (respuestas.get(j).getEmail().equals(usuario.getemail())) {
							DAORespuesta.delete(respuestas.get(j).getId());
						}
					}
				}
			}
			DAOUsuario.delete(usuario.getid());
		}
	}
	
	@RequestMapping(value = "listadousuarios", method = RequestMethod.GET)
	public String listadousuarios(HttpServletRequest request,Model model) {
		
		if (request.getSession().getAttribute("user")!=null) {
			ArrayList<Usuario> users = new ArrayList<Usuario>();
			ArrayList<MensajesPrivados> mensajes = DAOMensajesPrivados.selectMsgUser(((Usuario) request.getSession().getAttribute("user")).getemail());
			users = DAOUsuario.selectAll();
			
			model.addAttribute("users",users);
			model.addAttribute("totalMensajes", mensajes.size());
			model.addAttribute("body","listadousuarios");
			
			return "wall";
		}else {
			return "home";
		}

		
		
	}
	
	@RequestMapping(value = "admineditaruser", method = RequestMethod.GET)
	public String admineditaruser(@RequestParam String id,HttpServletRequest request,Model model) throws Exception {
		
		if (request.getSession().getAttribute("user")!=null) {
			Usuario user = DAOUsuario.selectWithID(id);
			ArrayList<MensajesPrivados> mensajes = DAOMensajesPrivados.selectMsgUser(((Usuario) request.getSession().getAttribute("user")).getemail());
			
			model.addAttribute("usuario",user);
			model.addAttribute("totalMensajes", mensajes.size());
			model.addAttribute("body","editarUsuario");
			
			return "wall";
		}else {
			return "home";
		}
	}
	
	@RequestMapping(value = "updateuser", method = RequestMethod.POST)
	public String updateuser(HttpServletRequest request,Model model) throws Exception {
		
		if (request.getSession().getAttribute("user")!=null) {
			String idUsuario = request.getParameter("idUsuario");
			String nombre = request.getParameter("update-name");
			String email = request.getParameter("update-email");
			String pwd = request.getParameter("update-pwd");
			
			Usuario user = new Usuario(idUsuario, nombre, email, Utilidades.Encriptar(pwd));
			ArrayList<MensajesPrivados> mensajes = DAOMensajesPrivados.selectMsgUser(((Usuario) request.getSession().getAttribute("user")).getemail());
			
			DAOUsuario.update(user);
			ArrayList<Usuario> users = new ArrayList<Usuario>();
			users = DAOUsuario.selectAll();
			
			model.addAttribute("users",users);
			model.addAttribute("totalMensajes", mensajes.size());
			model.addAttribute("body","listadousuarios");
			return "wall";
		}else {
			return "home";
		}

	}
	
	@RequestMapping(value = "admindeleteuser", method = RequestMethod.GET)
	public String admindeleteuser(@RequestParam String id,HttpServletRequest request,Model model) throws Exception {
		
		if (request.getSession().getAttribute("user")!=null) {
			Usuario usuario = DAOUsuario.selectWithID(id);
			
			ArrayList<Publicacion> publicaciones = DAOPublicacion.selectAll();
			for(int i=0;i<publicaciones.size();i++) {
				if (publicaciones.get(i).getEmail().equals(usuario.getemail())) {
					Like like = DAOLike.checkLike(publicaciones.get(i).getIdPublicacion(), usuario.getemail());
					if (like!=null) {
						DAOLike.delete(like);
					}
					ArrayList<Respuesta> respuestas = DAORespuesta.select(publicaciones.get(i).getIdPublicacion());
					for (int j=0; j<respuestas.size();j++) {
						if (respuestas.get(j).getEmail().equals(usuario.getemail())) {
							DAORespuesta.delete(respuestas.get(j).getId());
						}
					}
					DAOPublicacion.delete(publicaciones.get(i).getIdPublicacion());
				}else {
					Like like = DAOLike.checkLike(publicaciones.get(i).getIdPublicacion(), usuario.getemail());
					if (like!=null) {
						DAOLike.delete(like);
					}
					ArrayList<Respuesta> respuestas = DAORespuesta.select(publicaciones.get(i).getIdPublicacion());
					for (int j=0; j<respuestas.size();j++) {
						if (respuestas.get(j).getEmail().equals(usuario.getemail())) {
							DAORespuesta.delete(respuestas.get(j).getId());
						}
					}
				}
			}
			DAOUsuario.delete(usuario.getid());
			
			
			ArrayList<Usuario> users = new ArrayList<Usuario>();
			users = DAOUsuario.selectAll();
			
			model.addAttribute("users",users);
			model.addAttribute("body","listadousuarios");
			
			return "wall";
		}else {
			return "home";
		}
		
	}
	
	@RequestMapping(value = "adminadduser", method = RequestMethod.POST)
	public String adminadduser(HttpServletRequest request,Model model) throws Exception {
		
		if (request.getSession().getAttribute("user")!=null) {
			String nombre = request.getParameter("add-nombre");
			String email = request.getParameter("add-email");
			String pwd = request.getParameter("add-pwd");
			
			Usuario usuario = new Usuario(nombre, email, Utilidades.Encriptar(pwd));
			
			Usuario usuarioInsertado = DAOUsuario.select(usuario);
			
			if (usuarioInsertado==null) {
				usuario = DAOUsuario.insert(usuario);
				model.addAttribute("message","Usuario insertado correctamente");
				model.addAttribute("status",1);
			}else {
				model.addAttribute("message","Este usuario ya existe.");
				model.addAttribute("status",0);
			}
			ArrayList<Usuario> users = new ArrayList<Usuario>();
			users = DAOUsuario.selectAll();
			
			model.addAttribute("users",users);
			model.addAttribute("body","listadousuarios");
			
			return "wall";
		}else {
			return "home";
		}

	}
	
}
