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
  "duration": 150418663,
  "status": "passed"
});
formatter.match({
  "location": "annotation.usuario_correcto_y_password_correcta()"
});
formatter.result({
  "duration": 4181029346,
  "status": "passed"
});
formatter.match({
  "location": "annotation.se_loguea()"
});
formatter.result({
  "duration": 26573571,
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
  "name": "Un usuario y password",
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
formatter.match({
  "location": "annotation.Un_usuario_y_password()"
});
formatter.result({
  "duration": 37730,
  "status": "passed"
});
formatter.match({
  "location": "annotation.Usuario_incorrecto_y_una_password_incorrecta()"
});
formatter.result({
  "duration": 147772977,
  "status": "passed"
});
formatter.match({
  "location": "annotation.no_se_loguea()"
});
formatter.result({
  "duration": 55361,
  "status": "passed"
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
  "duration": 46545,
  "status": "passed"
});
formatter.match({
  "location": "annotation.pwduno_es_igual_a_pwddos()"
});
formatter.result({
  "duration": 235788300,
  "status": "passed"
});
formatter.match({
  "location": "annotation.se_registra()"
});
formatter.result({
  "duration": 57124,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Registro incorrecto de un usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;registro-incorrecto-de-un-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Un nombre, un email, una pwduno y una pwddos",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "pwduno es distinto a pwddos",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "no se registra",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_nombre_un_email_una_pwduno_y_una_pwddos()"
});
formatter.result({
  "duration": 35262,
  "status": "passed"
});
formatter.match({
  "location": "annotation.pwduno_es_distinto_a_pwddos()"
});
formatter.result({
  "duration": 43725,
  "status": "passed"
});
formatter.match({
  "location": "annotation.no_se_registra()"
});
formatter.result({
  "duration": 43724,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Registro incorrecto de un usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;registro-incorrecto-de-un-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Scenario5"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Un nombre, un email, una pwduno y una pwddos",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "email ya esta en la base de datos",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "no se registra",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_nombre_un_email_una_pwduno_y_una_pwddos()"
});
formatter.result({
  "duration": 31031,
  "status": "passed"
});
formatter.match({
  "location": "annotation.email_ya_esta_en_la_base_de_datos()"
});
formatter.result({
  "duration": 306634700,
  "status": "passed"
});
formatter.match({
  "location": "annotation.no_se_registra()"
});
formatter.result({
  "duration": 40198,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Borrado de cuenta de usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;borrado-de-cuenta-de-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Scenario6"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Un idUsuario",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "datos correctos",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "se borra",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_idUsuario()"
});
formatter.result({
  "duration": 48308,
  "status": "passed"
});
formatter.match({
  "location": "annotation.datos_correctos()"
});
formatter.result({
  "duration": 223785217,
  "status": "passed"
});
formatter.match({
  "location": "annotation.se_borra()"
});
formatter.result({
  "duration": 75108,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Modificacion de cuenta de usuario",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;modificacion-de-cuenta-de-usuario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Scenario7"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Un Usuario",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "datos usuario correctos",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "se modifica usuario",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_Usuario()"
});
formatter.result({
  "duration": 161498,
  "status": "passed"
});
formatter.match({
  "location": "annotation.datos_usuario_correctos()"
});
formatter.result({
  "duration": 184519901,
  "status": "passed"
});
formatter.match({
  "location": "annotation.se_modifica_usuario()"
});
formatter.result({
  "duration": 203499865,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Hacer una publicacion",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;hacer-una-publicacion",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Scenario8"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Usuario en wall",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "escribes publicacion",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "publicas",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Usuario_en_wall()"
});
formatter.result({
  "duration": 1548342,
  "status": "passed"
});
formatter.match({
  "location": "annotation.escribes_publicacion()"
});
formatter.result({
  "duration": 197895722,
  "status": "passed"
});
formatter.match({
  "location": "annotation.publicas()"
});
formatter.result({
  "duration": 32441,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Borrar una publicacion",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;borrar-una-publicacion",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@Scenario9"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "Un idpublicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "datos publicacion correctos",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "se borra publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_idpublicacion()"
});
formatter.result({
  "duration": 26799,
  "status": "passed"
});
formatter.match({
  "location": "annotation.datos_publicacion_correctos()"
});
formatter.result({
  "duration": 202694135,
  "status": "passed"
});
formatter.match({
  "location": "annotation.se_borra_publicacion()"
});
formatter.result({
  "duration": 98380,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Modificar una publicacion",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;modificar-una-publicacion",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@Scenario10"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "Una publicacion",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "publicacion correcta",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "se modifica publicacion",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Una_publicacion()"
});
formatter.result({
  "duration": 104374,
  "status": "passed"
});
formatter.match({
  "location": "annotation.publicacion_correcta()"
});
formatter.result({
  "duration": 190729487,
  "status": "passed"
});
formatter.match({
  "location": "annotation.se_modifica_publicacion()"
});
formatter.result({
  "duration": 201866896,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Hacer un mensaje privado",
  "description": "",
  "id": "uso-de-cucumber-en-el-que-se-va-a-probar-el-funcionamiento;hacer-un-mensaje-privado",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@Scenario11"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "Un mensaje privado",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "mensaje privado correcto",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "se manda mensaje privado",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.Un_mensaje_privado()"
});
formatter.result({
  "duration": 2919317,
  "status": "passed"
});
formatter.match({
  "location": "annotation.mensaje_privado_correcto()"
});
formatter.result({
  "duration": 197956725,
  "status": "passed"
});
formatter.match({
  "location": "annotation.se_manda_mensaje_privado()"
});
formatter.result({
  "duration": 35615,
  "status": "passed"
});
});