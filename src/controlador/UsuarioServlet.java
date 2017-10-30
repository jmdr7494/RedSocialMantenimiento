package controlador;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.bson.types.ObjectId;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.Gson;

import auxiliares.SendMail;
import auxiliares.Utilidades;
import modelo.Publicacion;
import modelo.Usuario;
import persistencia.DAOPublicaciones;
import persistencia.DAOUsuario;

@Controller
public class UsuarioServlet {//eo

 @Autowired
 private DAOUsuario servicioDAOUsuario;
 
 @RequestMapping("deleteuser.do")
 public void deleteuser(HttpServletRequest request,HttpServletResponse response) throws IOException {
	
	 String id_usuario = request.getParameter("id");
	 DAOUsuario.delete(id_usuario);

 }
 @RequestMapping("usuarios.do")
 public void usuarios(HttpServletRequest request,HttpServletResponse response) throws IOException {
	
	 ArrayList<Usuario> result = DAOUsuario.selectAll();
	 String json = new Gson().toJson(result);
	 response.getWriter().print(json);
 }
 @RequestMapping("registro.do")
 public void registro(HttpServletRequest request,HttpServletResponse response) throws IOException {
	
	 String name = request.getParameter("nombre");
	 String email = request.getParameter("email");
	 String password = request.getParameter("pwd");
	 System.out.println("nombre:"+name+"email:"+email+"pass:"+password);
	 Usuario user = new Usuario(name, email, password);
	 Usuario usuario = DAOUsuario.insertUserConPWD(user, password);
	 //ObjectId id = DAOUsuario.insert(usuario);
	/* if (id!=null) {
		 response.getWriter().println("<script type=\"text/javascript\">");
		 response.getWriter().println("location='walladmin.jsp';");
		 response.getWriter().println("</script>");
	 }else {
		 response.getWriter().println("<script type=\"text/javascript\">");
		 response.getWriter().println("location='walladmin.jsp';");
		 response.getWriter().println("</script>"); 
	 } */
	 JSONObject json = new JSONObject();
	 if (usuario!=null) {
		 json.put("status", "ok");
		 json.put("name", usuario.getNombre());
		 json.put("email", usuario.getemail());
	 }else {
		 json.put("status", "ko");
		 json.put("message", "No se ha podido loguear");
	 }
	 response.getWriter().println("<script type=\"text/javascript\">");
	 response.getWriter().println("location='walladmin.jsp';");
	 response.getWriter().println("</script>");
	//lo quito para admin
	 //response.getWriter().print(json);
	 
 }
 
 @RequestMapping("consultar.do")
 public void consultar(HttpServletRequest request,HttpServletResponse response) throws IOException {
	
	 String email = request.getParameter("email");
	 String result ="";
	 result=DAOUsuario.selectEmail(email);
	 response.getWriter().write(result); 

 }
 
 @RequestMapping("login.do")
 public void login(HttpServletRequest request,HttpServletResponse response) throws Exception {
	
	 String email = request.getParameter("email");
	 String pwd = request.getParameter("password");
	 Usuario result=DAOUsuario.select(email,pwd); 
	 
	 
	JSONObject json = new JSONObject();
	 if (result!=null) {
		 json.put("status", "ok");
		 json.put("name", result.getNombre());
		 json.put("email", result.getemail());
	 }else {
		 json.put("status", "ko");
		 json.put("message", "No se ha podido loguear");
	 }
	
	response.getWriter().print(json);
 }
 
 @RequestMapping("forgotpassword.do")
 public void forgotpassword(HttpServletRequest request,HttpServletResponse response) throws JSONException, Exception {
	
	 String email = request.getParameter("email");
	 String result ="";
	 result=DAOUsuario.selectEmail(email);
	 
	 if (result=="ko") {
		
			Usuario user = DAOUsuario.selectSinPWD(email);
			SendMail send = new SendMail();
			send.sendMail(user.getemail(), Utilidades.Desencriptar(user.getPwd()));
			response.sendRedirect("index.html");
	 }

 }
}
