<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<c:forEach items="${publicaciones}" var="publicacion">
<div class="col-md-12">
	<div class="col-xs-12 col-sm-offset-3 col-sm-5">
            <div class="panel panel-default panel-google-plus">
                <div class="dropdown">
                    <span class="dropdown-toggle" type="button" data-toggle="dropdown">
                        <span class="glyphicon glyphicon-chevron-down"></span>
                    </span>
                    <ul class="dropdown-menu" role="menu">
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                    </ul>
                </div>
                <div class="panel-heading">
                    <h3>${publicacion.nombre}</h3>
                    <h5><span>Publicado el </span> - <span>${publicacion.fecha}</span> </h5>
                </div>
                <div class="panel-body">
                    <p>${publicacion.mensaje}</p>
                </div>
                <div class="panel-footer">
                    <button type="button" class="btn btn-default"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> ${like[publicacion.id]}</button>
                    <div class="input-placeholder">Add a comment...</div>
                </div>
                <div class="panel-google-plus-comment">
                    <div class="panel-google-plus-textarea">
                        <textarea rows="4"></textarea>
                        <button type="submit" class="btn btn-success disabled">Post comment</button>
                        <button type="reset" class="btn btn-default">Cancel</button>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
       
</div>
</c:forEach>