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
	<script src="resources/js/index.js"></script>

	<title>redSocial</title>
</head>
<body>
<div class="container">
    	<div class="row">
    		<div class="col-md-6 col-md-offset-3">
    			<c:if test="${!empty message}">
        			<div class="alert alert-danger">
					  <strong>${message}</strong>
					</div>
   				 </c:if>
    		</div>
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a href="#" class="active" id="login-form-link">Iniciar sesion</a>
							</div>
							<div class="col-xs-6">
								<a href="#" id="register-form-link">Registro</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
								<form action="login" method="post" role="form" style="display: block;">
									<div class="form-group">
										<input type="text" name="username" tabindex="1" class="form-control" placeholder="Correo Electronico" value="">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Contrasena">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<button type="submit" tabindex="4" class="form-control btn btn-primary">Entra</button>
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-lg-12">
												<div class="text-center">
													<a href="forgot-password.html" tabindex="5" class="forgot-password">Recordar Contrasena</a>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="col-lg-12 register-form">
								<form action="registrar" method="post" class="validate" role="register" style="display: none;">
									<div class="form-group">
										<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Nombre" value="" required>
									</div>
									<div class="form-group">
										<input type="email" name="email" id="email-register" tabindex="1" class="form-control" placeholder="Correo Electronico" value="" required>
										<div id="error-email">
									
										</div>
									</div>
									<div class="form-group">
										<input type="password" name="password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" title="UpperCase, LowerCase, Number/SpecialChar and min 8 Chars." tabindex="2" class="form-control" placeholder="Contrasena" required>
										<div class="pwstrength_viewport_progress"></div>
									</div>
									<div class="form-group">
										<input type="password" name="confirm-password" tabindex="2" class="form-control" placeholder="Confirmar contrasena" required>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<button type="submit" tabindex="4" class="form-control btn btn-register">Registrar</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>

