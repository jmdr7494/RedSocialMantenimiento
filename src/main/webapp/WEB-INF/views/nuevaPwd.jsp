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
	<%-- By JA captcha registro--%>
	<script src='https://www.google.com/recaptcha/api.js'></script>
	<title>redSocial</title>
</head>
<body>
	<div class="row">
		<div class="col-md-1 col-md-offset-10">
			<br>
			<form action="renovarPwd" method="POST">
				<label for="pwd" style="color: white; font-size: 15px">Contrase&ntilde;a:</label>
				<input type="password" class="form-control" id="pwd" name="txtUsuarioClave" placeholder="password"> 
				
				<label for="pwd2" style="color: white; font-size: 15px">Confirmar contrase&ntilde;a:</label>
				<input type="password" class="form-control" id="pwd2" name="txtUsuarioClave1" placeholder="confirmacion">
				
				<button class="btn btn-danger btn-block btn-md login" type="submit">
					<strong><span class="glyphicon glyphicon-menu-left"></span>&nbsp;Aceptar</strong>
				</button>
			</form>

			<br/>
		</div>
	</div>
</body>
</html>