<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<div class="col-md-12">
	<div class="col-xs-12 col-sm-offset-3 col-sm-5" style="margin-bottom:10px;">
	<form action="publicar" method="post">
		<label>¿Qué estás pensando?</label>
		<div class="form-group">
			<textarea rows="8" cols="60" name="mensaje"></textarea>
		</div>
		<button type="submit" class="btn btn-primary btn-outline">Publicar</button>	
	</form>
    </div>
</div>

<c:forEach items="${publicaciones}" var="publicacion">
<div class="col-md-12">
	<div class="col-xs-12 col-sm-offset-3 col-sm-5">
            <div class="panel panel-default panel-google-plus">
                <c:if test="${publicacion.email==user.email}">
					 <div class="dropdown">
                    <a href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                   	<a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                </div>
	   			</c:if>
               
                <div class="panel-heading">
                    <h3>${publicacion.nombre}</h3>
                    <h5><span>Publicado el </span> - <span>${publicacion.fecha}</span> </h5>
                </div>
                <div class="panel-body">
                    <p>${publicacion.mensaje}</p>
                    <div class="row">
                    	<div class="col-md-12">
                    	<c:forEach items="${respuestas[publicacion.idPublicacion]}" var="respuesta">
							<div class="row">
								<div class=" col-xs-12 col-sm-12 ">
								<div class="panel panel-default panel-google-plus">
									<div class="panel-heading">
										<h3 style="display:inline;">${respuesta.nombre} - </h3><span>${respuesta.fecha}</span>
									</div>
									<div class="panel-body">
										<p>${respuesta.mensaje}</p>
									</div>
								</div>
							</div>
							</div>
						</c:forEach>
                    </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <form action="darlike" method="post">
                    <button type="submit" ${checklikes[publicacion.idPublicacion]==1?"style='border-color:blue;border-width:2px;'":""} class="btn btn-default "><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> (${likes[publicacion.idPublicacion]})</button>
                    <input type="hidden" name="like-publicacion" value="${publicacion.idPublicacion}">
                    </form>
                    <div class="input-placeholder">Comentar...</div>
                </div>
                <div class="panel-google-plus-comment">
                	<form action="comentar" method="post">
	                    <div class="panel-google-plus-textarea">
	                       <div class="row">
	                       		<div class="col-md-12">
	                       	 		<textarea name="respuesta" rows="4" cols="50"></textarea>
	                       		</div>
	                       		<div class="col-md-12">
		                       		<input type="hidden" name="respuesta-publicacion" value="${publicacion.idPublicacion}">
		                       		<button type="submit" class="btn btn-success">Comentar</button>
		                        	<button type="reset" class="btn btn-default">Cancelar</button>
	                       		</div>
	                       </div>

	                    </div>
	                 </form>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
       
</div>
</c:forEach>