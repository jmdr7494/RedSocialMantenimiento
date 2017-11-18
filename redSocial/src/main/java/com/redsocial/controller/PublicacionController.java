package com.redsocial.controller;

import java.util.Calendar;
import java.util.GregorianCalendar;

import javax.servlet.http.HttpServletRequest;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.redsocial.modelo.Publicacion;
import com.redsocial.modelo.Respuesta;
import com.redsocial.modelo.Usuario;
import com.redsocial.persistencia.DAOPublicacion;
import com.redsocial.persistencia.DAORespuesta;

@Controller
public class PublicacionController {

	@RequestMapping(value = "publicar", method = RequestMethod.POST)
	public String home(HttpServletRequest request,Model model) {
		
		String mensaje = request.getParameter("mensaje");
		Usuario user = (Usuario) request.getSession().getAttribute("user");
		
		 // Montamos la fecha actual para saber cuando se hizo la publicacion.
		 Calendar fecha = new GregorianCalendar();
		 String fechaPublicacion = "";
	     int year = fecha.get(Calendar.YEAR);
	     // Se le suma uno, porque calendar.month devuelve de 0-11
	     int month = fecha.get(Calendar.MONTH)+1;
	     int day = fecha.get(Calendar.DAY_OF_MONTH);
	     int hour = fecha.get(Calendar.HOUR_OF_DAY);
	     int minute = fecha.get(Calendar.MINUTE);
	     String monthS = (month<10)?"0"+month:""+month;
	     String dayS = (day<10)?"0"+day:""+day;
	     fechaPublicacion = dayS+"/"+monthS+"/"+year+" "+hour+":"+minute;
		
		
		Publicacion publicacion = new Publicacion();
		publicacion.setEmail(user.getemail());
		publicacion.setNombre(user.getNombre());
		publicacion.setMensaje(mensaje);
		publicacion.setFecha(fechaPublicacion);
		
		Publicacion newPublicacion = DAOPublicacion.insert(publicacion);
		
		return "redirect:wall";
	}
	
	@RequestMapping(value = "comentar", method = RequestMethod.POST)
	public String comentar(HttpServletRequest request,Model model) {
		String mensaje = request.getParameter("respuesta");
		String idPublicacion = request.getParameter("respuesta-publicacion");
		Usuario user = (Usuario) request.getSession().getAttribute("user");
		
		 // Montamos la fecha actual para saber cuando se hizo la publicacion.
		 Calendar fecha = new GregorianCalendar();
		 String fechaPublicacion = "";
	     int year = fecha.get(Calendar.YEAR);
	     // Se le suma uno, porque calendar.month devuelve de 0-11
	     int month = fecha.get(Calendar.MONTH)+1;
	     int day = fecha.get(Calendar.DAY_OF_MONTH);
	     int hour = fecha.get(Calendar.HOUR_OF_DAY);
	     int minute = fecha.get(Calendar.MINUTE);
	     String monthS = (month<10)?"0"+month:""+month;
	     String dayS = (day<10)?"0"+day:""+day;
	     fechaPublicacion = dayS+"/"+monthS+"/"+year+" "+hour+":"+minute;
	     
	     Respuesta respuesta = new Respuesta(user.getemail(), fechaPublicacion, idPublicacion, mensaje, user.getNombre());
	     
	     ObjectId resultado = DAORespuesta.insert(respuesta);
		
		
		return "redirect:wall";
	}
}
