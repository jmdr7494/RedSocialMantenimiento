<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>


	<div class="row">
   <div class="col-md-5 col-md-offset-1">
    <div class="panel panel-default">
      <div class="panel-body">
      
         <form action="buscarAmigos" method="post" id="formlogin">
          <div class="row">
         <div class="col-md-12">
          <label for="usr" style="color:black; font-size:15px;">Buscar amigos:</label>
         <input name="txtUsuarioNombre" autofocus type="text" class="form-control" id="usr" placeholder="usuario" onFocus="if(this.value!='')this.value=''">
        </div>  
       </div>
       
       <div class="row">
        <div class="col-md-2 col-md-offset-10">
         <br/>
         <button class="btn btn-primary btn-block" type="submit">
          <strong><span class="glyphicon glyphicon-search"></span>&nbsp;Buscar</strong>
         </button>
         <br/>
        </div>   
       </div>
      </form> 
      
      <br>
     
     
      <div class="row">
       <div class="col-md-12">
        <c:forEach items="${amigos}" var="amigo">
        ghmjhfhgfdhgfdghfdg
       		<p>${amigo.email}</p>
       		<c:if test="${sonAmigos[amigo.email]==0}">
		        <form action="enviarSolicitud" method="post">
		        	<button class="btn btn-primary btn-block login" type="submit">
		         		<strong><span class="glyphicon glyphicon-bell"></span>&nbsp;Agregar</strong>
		        	</button>
		       </form>      			
       		</c:if>
       		<c:if test="${sonAmigos[amigo.email]==1}">
		        <form action="eliminarAmigo" method="post">
		        	<button class="btn btn-primary btn-block login" type="submit">
		         		<strong><span class="glyphicon glyphicon-bell"></span>&nbsp;Borrar</strong>
		        	</button>
		       </form>      			
       		</c:if>
        </c:forEach>
       </div>
      </div>
      
      <div class="row">
       <div class="col-md-12">
        <span><em>${alerta}</em></span>
       </div>
      </div>
      
     </div>
    </div>
   </div>
  
    
   <div class="col-md-5">
    <div class="panel panel-default">
      <div class="panel-body">
      <div class="col-md-12">
       <form action="mostrarNotificaciones" method="get">
        <label for="usr" style="color:black; font-size:15px;">Peticiones de amistad:</label>
        <button class="btn btn-primary btn-block login" type="submit">
         <strong><span class="glyphicon glyphicon-bell"></span>&nbsp;Peticiones Pendientes</strong>
        </button>
       </form>
      </div>
     
      <div class="col-md-12">
       <span><em>${notificaciones}</em></span>
      </div>
     </div>
    </div>
   </div>
  </div>

 
 <div class="col-md-12" style="position: fixed; bottom: 0;">
  <div class="panel-footer">
   © Copyright 2017 IntraVita. Todos los derechos reservados.
  </div>
 </div>
 
