$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com\webapp\redsocial\Cucumber.feature');
formatter.feature({
  "line": 2,
  "name": "Uso de cucumber en el que se va a probar el funcionamiento",
  "description": "de una red social.",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@featureTest"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Login correcto de un usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;login-correcto-de-un-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Un usuario y password",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "usuario correcto y password correcta",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "se loguea",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_usuario_y_password()"
});
formatter.result({
  "duration": 195978527,
  "status": "passed"
});
formatter.match({
  "location": "annotation.usuario_correcto_y_password_correcta()"
});
formatter.result({
  "duration": 3419316904,
  "status": "passed"
});
formatter.match({
  "location": "annotation.se_loguea()"
});
formatter.result({
  "duration": 5256195,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login incorrecto de usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;login-incorrecto-de-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Un usuario y una password",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Usuario incorrecto y una password incorrecta",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "no se loguea",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "annotation.Usuario_incorrecto_y_una_password_incorrecta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "annotation.no_se_loguea()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Registro correcto de un usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;registro-correcto-de-un-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Un nombre, un email, una pwduno y una pwddos",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "pwduno es igual a pwddos",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "se registra",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_nombre_un_email_una_pwduno_y_una_pwddos()"
});
formatter.result({
  "duration": 43423,
  "status": "passed"
});
formatter.match({
  "location": "annotation.pwduno_es_igual_a_pwddos()"
});
formatter.result({
  "duration": 205083608,
  "error_message": "java.lang.AssertionError: \r\n\tat org.junit.Assert.fail(Assert.java:91)\r\n\tat org.junit.Assert.assertTrue(Assert.java:43)\r\n\tat org.junit.Assert.assertFalse(Assert.java:68)\r\n\tat org.junit.Assert.assertFalse(Assert.java:79)\r\n\tat com.webapp.redsocial.annotation.pwduno_es_igual_a_pwddos(annotation.java:89)\r\n\tat ✽.When pwduno es igual a pwddos(com\\webapp\\redsocial\\Cucumber.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "annotation.se_registra()"
});
formatter.result({
  "status": "skipped"
});
});