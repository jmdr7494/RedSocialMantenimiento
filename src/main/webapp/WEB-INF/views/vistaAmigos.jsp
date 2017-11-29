<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="resources/css/style.css"/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.min.js"></script>
	<script src="resources/js/index.js"></script>
	<script type="text/javascript" src="resources/js/password.js"></script>

	<title>Actualizar Contrase&ntilde;a - IntraVita</title>
</head>>

<body>

 <div class="row bg-primary">
  <div class="col-md-5 col-md-offset-1">
   <img src="http://i65.tinypic.com/2dvizyh.png" style="width:30%;">
  </div>
  
  <div class="col-md-1 col-md-offset-3">
    <button type="button" class="btn btn-primary btn-md" data-toggle="modal" data-target="#miModal" style="border-width: 10px;"><strong>?</strong></button>
  </div>
  
  <div class="col-md-1 fixed-top" style="position: relative; top: 8px">
   <form action="logout" method="GET"> 
    <button class="btn btn-danger" type="submit">
     <center>
      <strong>
       <span class="glyphicon glyphicon-log-out"></span>Salir
      </strong>
     </center>
    </button>
   </form>
  </div>
 </div>
 
 <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
       <div class="modal-dialog" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
             <h4 class="modal-title" id="myModalLabel">Ayuda</h4>
           </div>
           <div class="modal-body">
             En la columna de la izquierda debe introducir el nombre del amigo que quiera buscar y 
             a continuación haga click en buscar. Si existe algún usuario con ese nombre, le 
             aparecerá en la lista, de forma que tendrá que agregarlo como amigo en caso de que no 
             lo tengas ya.
             <br><br>
             En la columna de la derecha, nos aparecerán las peticiones de amistad (en caso de que 
             tengamos alguna), la cual la podremos aceptar o rechazar. Si no nos deja mandar la 
             petición es porque ya sois amigos o porque alguno de los dos ya ha mandado la petición
             al otro. 
           </div>
         </div>
       </div>
   </div>



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
        <span><em>${amigos}</em></span>
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
 
</body>
</html>