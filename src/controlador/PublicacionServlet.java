package controlador;


import java.io.IOException;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.GregorianCalendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.Gson;

import modelo.Publicacion;
import persistencia.DAOPublicaciones;

@Controller
public class PublicacionServlet {

 @Autowired
 private DAOPublicaciones servicioDAOPublicacion;

 @RequestMapping("publicar.do")

 public void publicar(HttpServletRequest request,HttpServletResponse response) throws IOException {
	 
	 String nombre = request.getParameter("nombre");
	 String email = request.getParameter("email");
	 String mensaje = request.getParameter("mensaje");
 
	 // Montamos la fecha actual para saber cuando se hizo la publicación.
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
	 
	 Publicacion publicacion = new Publicacion("", email, nombre, fechaPublicacion, "", mensaje);
	 ObjectId id = DAOPublicaciones.insert(publicacion);
	 
	 if (id!=null) {
		 response.getWriter().println("<script type=\"text/javascript\">");
		 response.getWriter().println("location='wall.jsp';");
		 response.getWriter().println("</script>");
	 }else {
		 response.getWriter().println("<script type=\"text/javascript\">");
		 response.getWriter().println("location='wall.jsp';");
		 response.getWriter().println("</script>"); 
	 } 
 }

 
 @RequestMapping("publicaciones.do")
 public void publicaciones(HttpServletRequest request,HttpServletResponse response) throws IOException {
	
	 ArrayList<Publicacion> result = DAOPublicaciones.selectAll();
	 String json = new Gson().toJson(result);
	 response.getWriter().print(json);
 }
 
 @RequestMapping("deletepubli.do")
 public void deletepubli(HttpServletRequest request,HttpServletResponse response) throws IOException {
	
	 String id_publicacion = request.getParameter("id");
	 DAOPublicaciones.delete(id_publicacion);

 }
 
 @RequestMapping("editarpubli.do")
 public void editarpubli(HttpServletRequest request,HttpServletResponse response) throws Exception {
	 
	 String nombre = request.getParameter("edit-nombre");
	 String email = request.getParameter("edit-email");
	 String idPublicacion = request.getParameter("edit-id");
	 String mensaje = request.getParameter("mensaje");
	 
	// Montamos la fecha actual para saber cuando se hizo la publicación.
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
	
     Publicacion publicacion = new Publicacion(idPublicacion, email, nombre, fechaPublicacion, "", mensaje);
     
     DAOPublicaciones.update(publicacion);
     
	 response.getWriter().println("<script type=\"text/javascript\">");
	 response.getWriter().println("location='wall.jsp';");
	 response.getWriter().println("</script>");
     
 }
}
